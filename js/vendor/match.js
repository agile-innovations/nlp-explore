var match = function match(Result) {

  var methods = {

    /** do a regex-like search through terms and return a subset */
    match: function match(reg, verbose) {
      var list = [];
      this.list.forEach(function (ts) {
        //an array of arrays
        var matches = ts.match(reg, verbose);
        matches.forEach(function (ms) {
          list.push(new Terms(ms));
        });
      });
      // this.list = list;
      return new Result(list);
    },

    /** return terms after this match */
    after: function after(reg) {
      var after = reg + ' *';
      return this.match(after).remove(reg);
    },

    /** return terms before this match */
    before: function before(reg) {
      var before = '* ' + reg;
      return this.match(before).remove(reg);
    },

    /** like .match(), but negative (filter-out the matches)*/
    remove: function remove(reg) {
      var _this = this;

      //if there's no reg, remove all selected terms
      if (!reg) {
        this.list.forEach(function (ts) {
          ts.terms = ts.terms.filter(function (t) {
            return !t.sel;
          });
        });
        return this;
      }
      //otherwise, remove just the matches
      var list = [];
      this.list.forEach(function (ts) {
        var matches = ts.remove(reg, _this.context);
        if (matches && matches.terms && matches.terms.length) {
          list.push(matches);
        }
      });
      this.list = list;
      return this;
    },

    /** tag a subset as selected/non-selected **/
    when: function when(str, debug) {
      this.list.forEach(function (ts) {
        ts.terms.forEach(function (t) {
          t.sel = false;
        });
        ts.when(str, debug);
      });
      return this;
    },
    /** opposite of .when **/
    not: function not(str, debug) {
      this.when(str, debug);
      //reverse it
      this.terms.forEach(function (t) {
        t.sel = !t.sel;
      });
      return this;
    },

    /** tag a subset as selected/non-selected **/
    or: function or(str, debug) {
      this.list.forEach(function (ts) {
        ts.when(str, debug);
      });
      return this;
    },

    /** re-select all terms **/
    parent: function parent() {
      this.list.forEach(function (ts) {
        ts.terms.forEach(function (t) {
          t.sel = true;
        });
      });
      return this;
    }

  };
  Object.keys(methods).forEach(function (k) {
    Result.prototype[k] = methods[k];
  });
  return Result;
};
module.exports = match;
