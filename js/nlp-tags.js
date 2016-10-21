// Owen pulling from nlp_compromioe
var tags=['#Cardinal',
'#Time',
'#Duration',
'#Value',
'!#Ordinal',
'#Verb',
'#Preposition',
'#Adjective',
'#Person'
'#Noun',
'#Determiner',
'#Adverb',
'#Adjective',
'#Cardinal',
'#Month',
'#Date',
'#Time',
'#Determiner',
'#Conjunction',
'#NounPhrase',
'#VerbPhrase',
'#AdjectivePhrase'];


// From nlp_compromise
var conflicts = [
//top-level pos are all inconsistent
['Noun', 'Verb', 'Adjective', 'Adverb', 'Determiner', 'Conjunction', 'Preposition', 'QuestionWord', 'Expression'],
//nouns
['Person', 'Organization', 'Value', 'Place', 'Actor', 'Demonym', 'Pronoun'],
//things that can't be plural
['Plural', 'Singular'], ['Plural', 'Pronoun'], ['Plural', 'Person'], ['Plural', 'Organization'], ['Plural', 'Currency'], ['Plural', 'Ordinal'],
//people
['MalePerson', 'FemalePerson'],
//adjectives
['Comparative', 'Superlative'],
//values
['Ordinal', 'Cardinal'], ['TextValue', 'NumericValue'], ['Ordinal', 'Currency'], //$5.50th
//verbs
['Infinitive', 'Gerund', 'Pluperfect', 'FuturePerfect'],
//tenses
['PastTense', 'PresentTense', 'PerfectTense'],
//non-infinitive
['Infinitive', 'PastTense'], ['Infinitive', 'PresentTense'],
//non-gerund
['Gerund', 'PastTense'], ['Gerund', 'PresentTense'],
//more verbs
['Copula', 'Modal'],
//web text
['HashTag', 'Noun', 'Verb', 'Adjective', 'Adverb'], ['Email', 'Verb', 'Adjective', 'Adverb'], ['Url', 'Verb', 'Adjective', 'Adverb'], ['HashTag', 'Email', 'Url'],
//date
['Month', 'Day', 'Year', 'Duration'], ['Particle', 'Conjunction', 'Adverb', 'Preposition'], ['Date', 'Verb', 'Adjective'], ['Month', 'Verb'],
//phrases
// ['NounPhrase', 'VerbPhrase', 'AdjectivePhrase'],
//a/an -> 1
['Value', 'Determiner']];
