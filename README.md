### Agile Innovations Repository for Testing NLP Compromise

### See the NLP Compromise repository at:

https://github.com/nlp-compromise/nlp_compromise

### Our focus is on leveraging Version 7:

https://github.com/nlp-compromise/nlp_compromise/tree/v7

#### Example 1

We extracted the "Non-Technical Summary" from a USDA research project for analysis


``` javaScript
  var projectSummary = "Specialty crop growers rely on manual labor for fruit-picking, inspection, data collection for precision agriculture and similar labor-intensive tasks. It has been difficult to automate these tasks because specialty farms are much less structured environments when compared to commodity farms. However, there is a great need for automating specialty crop tasks because seasonal workers are costly and in short supply and collecting data for precision agriculture methods is difficult. Robotic systems capable of performing specialty crop tasks are becoming commercially available, more robust and affordable. What is missing are planning algorithms required for these robots to autonomously operate in complex environments such as apple orchards. The ultimate goal of the proposed work is to develop algorithms so that Commercial Off-The-Shelf (COTS) robot systems can be used in automation tasks involving specialty crops.The project will focus on two sets of problems: (1) Surveying problems require planning the trajectory of a sensor to collect information about objects of interest. Such sensor planning problems in three-dimensional, complex environments are provably hard. The proposed work introduces new sensor planning problems in environments which are both general enough to capture the complexity of objects encountered on small farms (e.g., trees), and sufficiently constrained so that their visibility properties can be exploited to design efficient algorithms. (2) For end-effector placement, we introduce new visual serving path planning techniques utilizing multiple arms for operation in cluttered environments with obstacles, such as the branches of a fruit tree.These algorithms will be implemented and tested in the context of two field studies involving quality inspection with near infra-red (NIR) sensors mounted on a COTS robotic manipulator and surveying to collect harvest related data. These studies, combined with the surveying and serving algorithms, open possibilities for developing new metrics, tools and techniques for agricultural sciences by enabling data collection in scales not possible for humans."

  var nlp = window.nlp_compromise; // initialize nlp
  var preparedText = nlp(projectSummary); // prepare the text

,,,

So, what does the "preparedText" object look like?
