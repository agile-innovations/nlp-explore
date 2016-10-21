### Agile Innovations Repository for Exploring and Testing NLP Compromise

### See the NLP Compromise repository at:

https://github.com/nlp-compromise/nlp_compromise

### Our focus is on leveraging Version 7

https://github.com/nlp-compromise/nlp_compromise/tree/v7

#### Example 1: The anatomy of a "Document"

We extracted the following "Non-Technical Summary" from a USDA research project for analysis:
http://portal.nifa.usda.gov/web/crisprojectpages/1007019-surveying-and-servoing-as-canonical-tasks-to-enable-future-farms-with-commercial-off-the-shelf-robots.html


var projectSummary = "Specialty crop growers rely on manual labor for fruit-picking, inspection, data collection for precision agriculture and similar labor-intensive tasks. It has been difficult to automate these tasks because specialty farms are much less structured environments when compared to commodity farms. However, there is a great need for automating specialty crop tasks because seasonal workers are costly and in short supply and collecting data for precision agriculture methods is difficult. Robotic systems capable of performing specialty crop tasks are becoming commercially available, more robust and affordable. What is missing are planning algorithms required for these robots to autonomously operate in complex environments such as apple orchards. The ultimate goal of the proposed work is to develop algorithms so that Commercial Off-The-Shelf (COTS) robot systems can be used in automation tasks involving specialty crops.The project will focus on two sets of problems: (1) Surveying problems require planning the trajectory of a sensor to collect information about objects of interest. Such sensor planning problems in three-dimensional, complex environments are provably hard. The proposed work introduces new sensor planning problems in environments which are both general enough to capture the complexity of objects encountered on small farms (e.g., trees), and sufficiently constrained so that their visibility properties can be exploited to design efficient algorithms. (2) For end-effector placement, we introduce new visual serving path planning techniques utilizing multiple arms for operation in cluttered environments with obstacles, such as the branches of a fruit tree.These algorithms will be implemented and tested in the context of two field studies involving quality inspection with near infra-red (NIR) sensors mounted on a COTS robotic manipulator and surveying to collect harvest related data. These studies, combined with the surveying and serving algorithms, open possibilities for developing new metrics, tools and techniques for agricultural sciences by enabling data collection in scales not possible for humans."


``` javaScript

  var nlp = window.nlp_compromise; // initialize nlp
  var p = nlp(projectSummary); // prepare the text

```
<br/>

So, what does the "preparedText" object look like?
<br/>
![item 1](images/prepared-text-1.png?raw=true)<br/>

1. The top-level array contains sentences parsed from the raw document
2. Each sentence is parsed into terms.

You can see that for our sample project summary we have 10 sentences, and the first sentence has 19 terms.

##### What are the best practices for the following:

1. Extracting only the sentence text for each sentence?
2. Extracting "explicit" phrases in each sentence that are delimited by either:
  - <em>Comma
  - <em>Semicolon
  - <em>Colon

3. Extracting n-grams from each sentence?

4. Extracting "implicit" phrases (i.e.. not delimited by the author) phrase types

  - <em>Noun phrase</em>
  - <em>Verb phrasa</em>
  - <em>Adjective phrase</em>

5. Extracting "Topics" or "Concepts"
