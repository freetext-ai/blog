---
layout: post
title: Evaluating AI21 Jurassic-1 Jumbo with GPT-3 Davinci using Water Cooler Trivia dataset
featured-css-class: blue-gradient-bg
mathjax: false
last_modified_at: 2021-08-29 00:00:00 +0530
---


# Intro

<br/>
The goal is to evaluate **AI21's Jurassic-1 Jumbo** language model and compare it with **OpenAI's GPT-3 davinci model** in it's ability to answer trivia.

Details about experiment setup:
1. This experiment builds on [WCT's GPT-3 evaluation study](https://www.watercoolertrivia.com/blog/gpt-3-vs-water-cooler-trivia-participants-a-human-vs-robot-showdown)
2. The prompt given AI21's model was of the format `Q: (question text)\nA: `
3. **No example prompt** was given to AI21's model, effectively making it into a **zero-shot setting**. This is in contrast to what WCT had done. Couple of reasons for this decision:
  * Daily quota limits enforced by AI21 make it infeasible to run a test with prompts.
  * There is no "official" Q and A prompt for the model, and arriving at it would require a decent amount of "prompt engineering" which is not possible because of quota limits
4. However, despite the no-prompt setting, the model had no issues in detecting the format of the questions and attempted to answer almost all questions. Infact, the model <b>only backed off</b> from answering the question only <b>4 times out of 157</b>.
5. The no-prompt setting actually made the model think it was actually in a game show, leading to some hilarious game-show scripted answers like the following

<pre><code>
Q: Singing Siblings: If you met five African American singers from the same family in Indiana whose first names were Jackie, Jermaine, Marlon, Michael and Tito, what would their last name most likely be?
A: <b>(Drum roll, please) Jackson</b>

Q: Counting Cards: What "shedding-type" card game has been a Mattel brand since 1992 and features cards with titles such as "Wild" and "Reverse?
A: <b>UNO! UNO! UNO! UNO! UNO! UNO! UNO!</b>
</code></pre>

<br/>
<br/>
# Results


<br/>

Running through the **157 Jeopardy-style WCT questions**, the **Jurassic-1 178B** model was able to answer with a **55.4% accuracy rate**. This compares favorably to the **52% average accuracy of humans** who had taken the WCT. However, this is significantly worse than the **73% accuracy** rate of the **GPT-3**.

**Given below is the raw for all the 157 questions**. The Questions, correct answers, human answers are provided courtesy [WCT](https://www.watercoolertrivia.com). AI21's answers have been added inline.
<div id="example-table" style="max-width: 80rem; margin-left: auto; margin-right: auto"></div>
<link href="https://unpkg.com/tabulator-tables@4.9.3/dist/css/tabulator.min.css" rel="stylesheet"/>
<script type="text/javascript" src="https://unpkg.com/tabulator-tables@4.9.3/dist/js/tabulator.min.js"></script>
<script>
var tabledata = [
  {
    "Question": "Coding Skycraft: Before the 1930s, airport codes were only two letters. As a result, some airports added the letter X to the end of the extant code, including what airport code in California?",
    "Correct Answer": "LAX",
    "Response (Davinci GPT-3)": "The airport code in California is SFO.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "BUR: Burbank Airport, Burbank, California.",
    "J1-Jumbo Correct": 0,
    "User-Correct": "98%",
    "User-N": 618,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Breakfast Strategies: French Press is a popular style of preparing what type of beverage?",
    "Correct Answer": "Coffee",
    "Response (Davinci GPT-3)": "Coffee.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(A) Coffee. French Press is a method of brewing coffee.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "96%",
    "User-N": 7416,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Timely Tossers: What is the name of the position of the player whose primary responsibility is often considered throwing the football?",
    "Correct Answer": "Quarterback",
    "Response (Davinci GPT-3)": "Quarterback",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Shotgun: The Shotgun formation is a formation in American football in which three running backs line up in a row about five yards behind the quarterback",
    "J1-Jumbo Correct": 0,
    "User-Correct": "96%",
    "User-N": 3811,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Flexible Fitness: Downward dog, sun salutation, and plank are all poses in what increasingly-common practice?",
    "Correct Answer": "Yoga",
    "Response (Davinci GPT-3)": "Yoga",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(A) Yoga. (B) Pilates. (C) Tai Chi. (D",
    "J1-Jumbo Correct": 1,
    "User-Correct": "96%",
    "User-N": 8075,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Abbreviated Brands: Originally, they were called Baby Gays. Then they rebranded as Q-Tips, with the Q standing for what word related to high standards?",
    "Correct Answer": "Quality",
    "Response (Davinci GPT-3)": "Quality",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Quarts",
    "J1-Jumbo Correct": 0,
    "User-Correct": "96%",
    "User-N": 6552,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Old Objects: Which of the seven wonders of the ancient world were built as ceremonial burial vaults for Egyptian pharaohs?",
    "Correct Answer": "Great Pyramid of Giza",
    "Response (Davinci GPT-3)": "The Great Pyramid of Giza was built as a ceremonial burial vault for Egyptian pharaohs.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "The Pyramids of Giza.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 9555,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Traffic Talk: Also called a traffic circle, road circle, or rotary, what is the 10-letter term for a circular traffic intersection first used in the U.K. in the early 20th century?",
    "Correct Answer": "Roundabout",
    "Response (Davinci GPT-3)": "Roundabout",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "ROUNDABOUT. Roundabouts, which have been around since 1914, are circular intersections where traffic flows in one direction",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 5989,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Retired Slogans: Retired in the 21st century, \"it's finger lickin' good\" had been the slogan for over 50 years for what restaurant chain? The slogan had been conceived by a franchise owner rather than an ad agency.",
    "Correct Answer": "KFC",
    "Response (Davinci GPT-3)": "KFC",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) Kentucky Fried Chicken",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 6759,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Singing Siblings: If you met five African American singers from the same family in Indiana whose first names were Jackie, Jermaine, Marlon, Michael and Tito, what would their last name most likely be?",
    "Correct Answer": "Jackson",
    "Response (Davinci GPT-3)": "Jackson",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(Drum roll, please) Jackson",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 9910,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Caped Cities: What fictional city is the home of Batman?",
    "Correct Answer": "Gotham City",
    "Response (Davinci GPT-3)": "Gotham City is the home of Batman.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Fictional city? Gotham, of course",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 10124,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Recurring Rhymes: \"Humpty Dumpty sat on a wall, Humpty Dumpty had a great fall. All the king's horses and all the king's men, couldn't put Humpty Dumpty in his place again.\" In this poem by Lewis Carroll, what food is Humpty Dumpty commonly portrayed as?",
    "Correct Answer": "Egg",
    "Response (Davinci GPT-3)": "Eggs",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "EGG. The rhyme is from \"Through the Looking Glass\" by Lewis Carroll.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 2620,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Functional Foods: Found on many types of sushi, nori is the Japanese name for the edible species in the red algae genus Pyropia. Frequently used in the format of dried sheets, what is the English term for this edible ingredient?",
    "Correct Answer": "Seaweed",
    "Response (Davinci GPT-3)": "Seaweed",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Pressed Sushi: Pressed sushi, or oshizushi, is a type of sushi that is pressed and formed",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 5007,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Counting Cards: What \"shedding-type\" card game has been a Mattel brand since 1992 and features cards with titles such as \"Wild\" and \"Reverse?",
    "Correct Answer": "Uno",
    "Response (Davinci GPT-3)": "Uno",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "UNO! UNO! UNO! UNO! UNO! UNO! UNO!",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 5154,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Street Smarts: In the U.S., a road sign which is an equilateral triangle is most often associated with what five-letter action?",
    "Correct Answer": "Yield",
    "Response (Davinci GPT-3)": "Slow Down",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "YIELD. The sign is yellow with black letters.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 3681,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Upwards Words: Cumulus and stratus are two of the main types of what object that is seen by most people on most days in some form?",
    "Correct Answer": "Clouds",
    "Response (Davinci GPT-3)": "Clouds",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "CLOUDS! Cumulus clouds are puffy, white, and form in fair weather. Stratus clouds",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 5903,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Orderly Organs: Your heart is nestled in your chest between the two halves of what other organ?",
    "Correct Answer": "Lungs",
    "Response (Davinci GPT-3)": "The heart is nestled in the chest between the two halves of the lungs.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) The lungs. The lungs are a pair of spongy organs that fill most of the chest cavity",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 6648,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Expansive Education: With an annual budget of over $300 million and over 95,000 enrolled students, the Lone Star College System is one of the U.S.'s largest community college systems. In what state will you find all of the school's campuses?",
    "Correct Answer": "Texas",
    "Response (Davinci GPT-3)": "Texas",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "LSC-North Harris, LSC-Tomball, LSC-University Park, LSC-",
    "J1-Jumbo Correct": 0,
    "User-Correct": "95%",
    "User-N": 6038,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Careful Creators: The process of reducing the number of defects is typically known in manufacturing by the letters QC. What do those letters stand for?",
    "Correct Answer": "Quality Control",
    "Response (Davinci GPT-3)": "Quality Control",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(1) Quality control, (2) Quality control, (3) Quality control",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 7051,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Colossal Canines: What \"big red dog\" introduced in 1963 was named for the imaginary childhood friend of creator Norman Bridwell's wife?",
    "Correct Answer": "Clifford",
    "Response (Davinci GPT-3)": "Clifford the Big Red Dog",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(#1) Clifford the Big Red Dog",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 4072,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Bread Bowls: Outside of its home city, the St. Louis Bread Company is more popularly known as what chain restaurant?",
    "Correct Answer": "Panera",
    "Response (Davinci GPT-3)": "Panera Bread",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(D) Panera Bread. The St. Louis Bread Company was founded in 1983 by Ken Rosenthal",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 3670,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Hiroshima Hitters: The Chunichi Dragons, Hanshin Tigers, and Hiroshima Toyo Carp all play in what country's professional baseball league?",
    "Correct Answer": "Japan",
    "Response (Davinci GPT-3)": "Japan's professional baseball league.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) Japan. The Central League, Pacific League, and Nippon Professional Baseball (NPB",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 5310,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Manly Myths: Which of the Greek Gods was considered the ruler of all Greek Gods? The Roman equivalent of this god is Jupiter.",
    "Correct Answer": "Zeus",
    "Response (Davinci GPT-3)": "Zeus was considered the ruler of all Greek Gods. The Roman equivalent of this god is Jupiter.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(1) Zeus, (2) Jupiter",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 2266,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Animal Actors: As of 2017, Jack Black has voiced what martial-arts-focused not-actually-a-bear animated character in three films?",
    "Correct Answer": "Kung Fu Panda",
    "Response (Davinci GPT-3)": "Po from Kung Fu Panda",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(1) Po the Panda, (2) Kung Fu Panda, and (3) Kung Fu",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 6158,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Acrobatic Attractions: Founded in Quebec, what is the French name of the private entertainment company which has sold over 100 million tickets for its unique blend of continuous live music and circus-like acrobatics?",
    "Correct Answer": "Cirque du Soleil",
    "Response (Davinci GPT-3)": "Cirque du Soleil",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Circque du Soleil: Founded in Quebec, what is the French name of the private entertainment company which has sold over 100 million",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 6473,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Cigarette Collectibles: The T206 Honus Wagner card was considered the most valuable sports card throughout most of the 20th century after it was sold for record-breaking sums at multiple auctions. It was initially designed and issued by the American Tobacco Company before Wagner refused to allow production because he did not want children to buy cigarette packs to get his card. What sport did Wagner famously play?",
    "Correct Answer": "Baseball",
    "Response (Davinci GPT-3)": "Baseball",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Cigarette Collectibles: Wagner was nicknamed “The Flying Dutchman” for his speed, and he played shortstop for the Pittsburgh Pirates",
    "J1-Jumbo Correct": 0,
    "User-Correct": "95%",
    "User-N": 1715,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Political Power: Hirohito was the Emperor of what country during World War II?",
    "Correct Answer": "Japan",
    "Response (Davinci GPT-3)": "Japan",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(b) Japan. Hirohito was the Emperor of Japan during World War II.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 6192,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Famous Founders: 2010 film \"The Social Network\" was directed by David Fincher, written by Aaron Sorkin, and adapted from the 2009 book \"The Accidental Billionaires.\" The film follows the founding of Facebook, focusing on what current CEO of the company?",
    "Correct Answer": "Mark Zuckerberg",
    "Response (Davinci GPT-3)": "Mark Zuckerberg",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) Mark Zuckerberg. The film was nominated for eight Academy Awards, including Best Picture, Best Director, and Best Adapted Screenplay.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 4517,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Surname Shows: In which TV medical drama was the unconventional lead character with a \"residential\" name played by Hugh Laurie?",
    "Correct Answer": "House",
    "Response (Davinci GPT-3)": "House",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "HOUSE, M.D.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 5698,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Historic Homes: What museum houses the Mona Lisa?",
    "Correct Answer": "The Louvre",
    "Response (Davinci GPT-3)": "The Louvre Museum houses the Mona Lisa.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) The Louvre Museum in Paris, France",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 4628,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Podium Pastries: GBBO is a British reality television show which features a group of amateur bakers competing in a series of rounds. What does the acronym stand for?",
    "Correct Answer": "Great British Bake Off",
    "Response (Davinci GPT-3)": "The acronym stands for Great British Bake Off.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) Great British Bake Off",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 4226,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Natural Nappers: Many animals estivate for portions of the year. What is the more common American English term for this behavior?",
    "Correct Answer": "Hibernation",
    "Response (Davinci GPT-3)": "Hibernate",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Hibernate. Hibernate is the correct term",
    "J1-Jumbo Correct": 1,
    "User-Correct": "95%",
    "User-N": 4301,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Talkin' Tech: What word is often abbreviated as Fn on a keyboard?",
    "Correct Answer": "Function",
    "Response (Davinci GPT-3)": "Function",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Fn stands for function",
    "J1-Jumbo Correct": 1,
    "User-Correct": "94%",
    "User-N": 3619,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Protective Parts: The integumentary system of the human body consists of the hair, nails, and what largest part?",
    "Correct Answer": "Skin",
    "Response (Davinci GPT-3)": "Skin",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "1. The integumentary system of the human body consists of the hair, nails, and what largest part?",
    "J1-Jumbo Correct": 0,
    "User-Correct": "94%",
    "User-N": 3824,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Furious Freestylers: What American swimmer set a gold medal record at the 2008 Summer Olympics? This person won eight gold medals at a single Olympics.",
    "Correct Answer": "Michael Phelps",
    "Response (Davinci GPT-3)": "Michael Phelps",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(B) Michael Phelps. Phelps won eight gold medals at the 2008 Summer Olympics, the most ever won by a single athlete",
    "J1-Jumbo Correct": 1,
    "User-Correct": "94%",
    "User-N": 2701,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Holiday Heroes: Although the most popular song on the film's soundtrack is \"This Is Halloween\" and the main character's name is Jack Skellington, the 1993 cult-classic Tim Burton film that was nominated for a visual effects Oscar includes what OTHER holiday in the film's title?",
    "Correct Answer": "Christmas (The Nightmare Before Christmas)",
    "Response (Davinci GPT-3)": "The Nightmare Before Christmas",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "SLEEPY HOLLOW. The 1999 film, starring Johnny Depp, Christina Ricci, Miranda Richardson, Casper",
    "J1-Jumbo Correct": 0,
    "User-Correct": "94%",
    "User-N": 3551,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Cartoony Creations: In 1999 Shigetaka Kurita invented what keyboard additions for cell phones that would eventually replace emoticons and even get their own movie?",
    "Correct Answer": "Emojis",
    "Response (Davinci GPT-3)": "The emoji was invented by Shigetaka Kurita in 1999.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "EMOJI: The Movie. Emoji are ideograms and smileys used in electronic messages and web pages",
    "J1-Jumbo Correct": 1,
    "User-Correct": "94%",
    "User-N": 2190,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Fruit Farmers: Although it expanded to grapefruit growers in 1976, the cooperative Ocean Spray has primarily focused on what other fruit throughout its existence? The brand reached viral heights after a 2020 TikTok mashing up Fleetwood Mac, skateboarding, and Ocean Spray juice.",
    "Correct Answer": "Cranberry",
    "Response (Davinci GPT-3)": "Cranberries",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "APPLES",
    "J1-Jumbo Correct": 0,
    "User-Correct": "94%",
    "User-N": 1315,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Tough Training: What six-letter word names both a seed company and an exercise that combines a squat, a pushup, and a jump in the air?",
    "Correct Answer": "Burpee",
    "Response (Davinci GPT-3)": "Tough Training: What six-letter word names both a seed company and an exercise that combines a squat, a pushup, and a jump in the air?",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "SEEDS, of course. And, of course, the exercise is SEEDS",
    "J1-Jumbo Correct": 0,
    "User-Correct": "94%",
    "User-N": 1131,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Seeing Shapes: Stratus, cumulus, cirrus, and nimbus are all types of what everyday object?",
    "Correct Answer": "Clouds",
    "Response (Davinci GPT-3)": "Clouds are all types of everyday objects.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "CLOUDS! Clouds form when water vapor condenses in the atmosphere",
    "J1-Jumbo Correct": 1,
    "User-Correct": "94%",
    "User-N": 3462,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Mega Marriages: What SPORT is the superstar British couple nicknamed \"Posh and Becks\" most associated with? The couple includes a famous singer and a famous athlete.",
    "Correct Answer": "Soccer (football)",
    "Response (Davinci GPT-3)": "Soccer",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "HOCKEY. The singer is Victoria Beckham, and the athlete is David Beckham",
    "J1-Jumbo Correct": 0,
    "User-Correct": "94%",
    "User-N": 2157,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Described Devices: In what sport is a key piece of equipment a circular arrangement of 14 to 16 goose feathers that surround a piece of cork encased in leather? The name of this object is a shuttlecock.",
    "Correct Answer": "Badminton",
    "Response (Davinci GPT-3)": "Badminton",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Badminton. Badminton is a racquet sport played using racquets to hit a shuttlecock",
    "J1-Jumbo Correct": 1,
    "User-Correct": "94%",
    "User-N": 1897,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Talkin' Terminology: In the common business or science abbreviation \"R&D,\" what does the letter R stand for?",
    "Correct Answer": "Research",
    "Response (Davinci GPT-3)": "Research",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(A) Research. (B) Research & Development. (C) Research & Development",
    "J1-Jumbo Correct": 1,
    "User-Correct": "94%",
    "User-N": 2903,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Famous Follicles: The tonsure is a very specific haircut often worn by what profession during the Middle Ages?",
    "Correct Answer": "Monks",
    "Response (Davinci GPT-3)": "The tonsure is a very specific haircut often worn by monks during the Middle Ages.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(A) Monks. The tonsure is a type of haircut worn by monks and nuns. The tonsure is a",
    "J1-Jumbo Correct": 1,
    "User-Correct": "94%",
    "User-N": 1012,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Faked Fevers: What is the FULL NAME of the movie in which Ben Stein is listed in the end credits as \"Economics Teacher\" and he utters the famous line \"Bueller....Bueller....?",
    "Correct Answer": "Ferris Bueller's Day Off",
    "Response (Davinci GPT-3)": "Ferris Bueller's Day Off",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "FERRIS BUELLER'S DAY OFF.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "94%",
    "User-N": 3421,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Australian Originals: What is the three-letter name of the second-largest bird on the planet? This animal is found only in Australia and is related to the ostrich.",
    "Correct Answer": "Emu",
    "Response (Davinci GPT-3)": "Emu",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "EMU. The emu is the second-largest bird on the planet, after the ostrich. Emus can grow up to 2.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "94%",
    "User-N": 5362,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Initial Impeachments: What famous female pilot's second-to-last known radio transmission was the following? \"...have been unable to reach you by radio. We are flying at 1,000 feet.",
    "Correct Answer": "Amelia Earhart",
    "Response (Davinci GPT-3)": "Amelia Earhart's second-to-last known radio transmission was the following: \"...have been unable to reach you by radio. We are flying at 1,000 feet.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "WASP pilot Cornelia Fort",
    "J1-Jumbo Correct": 0,
    "User-Correct": "93%",
    "User-N": 5013,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Stolen Snacks: What food of the three bears did Goldilocks eat?",
    "Correct Answer": "Porridge",
    "Response (Davinci GPT-3)": "Goldilocks ate porridge.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(1) The porridge was too hot, (2) The porridge was too cold, (3",
    "J1-Jumbo Correct": 1,
    "User-Correct": "93%",
    "User-N": 4171,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Foot Furniture: The Turkish clan that drove Byzantine forces out of modern-day Turkey became an empire that lasted nearly 600 years and also became the namesake for a specific piece of foot-friendly furniture. What is this empire?",
    "Correct Answer": "Ottoman Empire",
    "Response (Davinci GPT-3)": "Ottoman Empire",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "TURKEY: The Ottoman Empire, which ruled from 1299 to 1923, was centered in modern-day",
    "J1-Jumbo Correct": 1,
    "User-Correct": "93%",
    "User-N": 1624,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Traveling Tots: A young boy takes a train to the North Pole on Christmas Eve in what classic 1985 children's book by Chris Van Allsburg?",
    "Correct Answer": "The Polar Express",
    "Response (Davinci GPT-3)": "The Polar Express",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "c) The Polar Express.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "93%",
    "User-N": 852,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "City Spelling: Pittsburgh is typically considered the most commonly misspelled city in the United States. What letter is most commonly forgotten?",
    "Correct Answer": "H",
    "Response (Davinci GPT-3)": "The letter \"H\" is most commonly forgotten in the spelling of Pittsburgh.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(D). The “h” is the most commonly forgotten letter",
    "J1-Jumbo Correct": 1,
    "User-Correct": "92%",
    "User-N": 1715,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Symbolic Names: What is the name of the symbol which means \"and\" as a \"conjunction icon?\" You can find this symbol above the number seven key on most QWERTY keyboard. We're looking for the NAME of the symbol.",
    "Correct Answer": "Ampersand",
    "Response (Davinci GPT-3)": "The name of the symbol is \"ampersand\".",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Logical conjunction is symbolized by \"and",
    "J1-Jumbo Correct": 0,
    "User-Correct": "92%",
    "User-N": 4181,
    "Question Category": "Word Play"
  },
  {
    "Question": "Memorial Museums: A recovered anchor from the USS Arizona is on display at what memorial's visitor center in Hawaii?",
    "Correct Answer": "Pearl Harbor",
    "Response (Davinci GPT-3)": "The USS Arizona Memorial Visitor Center in Hawaii.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(B) The USS Arizona Memorial visitor center at Pearl Harbor, Hawaii, features the 16-ton anchor from",
    "J1-Jumbo Correct": 1,
    "User-Correct": "92%",
    "User-N": 3185,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Ancient Arts: Ashtanga, Bikram, and Vinyasa are three of the more popular forms of what practice that originated in ancient India?",
    "Correct Answer": "Yoga",
    "Response (Davinci GPT-3)": "Yoga",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) Hatha Yoga. Hatha Yoga is an umbrella term that refers to all physical practices of yoga",
    "J1-Jumbo Correct": 1,
    "User-Correct": "91%",
    "User-N": 3395,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Tumultuous Travels: What British overseas territory is partially protected from severe hurricanes due to a surrounding coral reef but remains frequently associated with disasters due to an allegedly large number of unexplained aircraft disappearances?",
    "Correct Answer": "Bermuda",
    "Response (Davinci GPT-3)": "Bermuda",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(1) Bermuda (2) The Falkland Islands (3) The Cayman Islands (4",
    "J1-Jumbo Correct": 1,
    "User-Correct": "91%",
    "User-N": 3180,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Insect Inspiration: What famous athlete famously declared his strategy to be the following nature-full phrase? \"Float like a butterfly, sting like a bee.",
    "Correct Answer": "Muhammad Ali",
    "Response (Davinci GPT-3)": "Muhammad Ali",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "1) Muhammad Ali (2) Muhammad Ali (3) Muhammad Ali (4) Muhammad Ali",
    "J1-Jumbo Correct": 1,
    "User-Correct": "91%",
    "User-N": 5534,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Worldly Writers: The Shujing, Chunqiu, and Shijing are considered the foundations of the literary tradition in what country?",
    "Correct Answer": "China",
    "Response (Davinci GPT-3)": "China",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Confucian China. The Shujing (Book of History), Chunqiu (Spring and",
    "J1-Jumbo Correct": 1,
    "User-Correct": "90%",
    "User-N": 1112,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Green Waves: In 2010, what iconic Australian building prominently featured green lighting on its famously swooping white panels as part of its first celebration of St. Patrick's Day? The building was designed by Dane Jørn Utzon, but completed by an Australian architectural team in 1973.",
    "Correct Answer": "Sydney Opera House",
    "Response (Davinci GPT-3)": "The Sydney Opera House",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) Sydney Opera House",
    "J1-Jumbo Correct": 1,
    "User-Correct": "90%",
    "User-N": 1961,
    "Question Category": "Current Events"
  },
  {
    "Question": "Seasonal Sales: According to a survey by Dance magazine, what Christmas-themed Tchaikovsky ballet accounts for nearly half the annual revenue of many dance companies?",
    "Correct Answer": "The Nutcracker",
    "Response (Davinci GPT-3)": "The Nutcracker",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "NUTCRACKER. The ballet, which premiered in 1892, is a staple of the Christmas ballet season",
    "J1-Jumbo Correct": 1,
    "User-Correct": "90%",
    "User-N": 781,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "TV Titles: What cartoon franchise was originally titled \"Mysteries Five\" and included a banjo-playing Great Dane canine?",
    "Correct Answer": "Scooby Doo",
    "Response (Davinci GPT-3)": "Scooby-Doo",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(1) Scooby-Doo, Where Are You!",
    "J1-Jumbo Correct": 1,
    "User-Correct": "89%",
    "User-N": 5378,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Creepy Creatures: While promoting his sprawling novel \"Freedom\" in 2010, Jonathan Franzen was the first American novelist to appear on the cover of Time magazine since what legendary horror writer in 2000?",
    "Correct Answer": "Stephen King",
    "Response (Davinci GPT-3)": "Stephen King",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "R.L. Stine. Franzen's novel, which spans 300 years, was praised by Time as",
    "J1-Jumbo Correct": 0,
    "User-Correct": "88%",
    "User-N": 1190,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Particular Patterns: Iambic pentameter is a type of metric line used in English verse, most famously by William Shakespeare. While \"iambic\" describes the unstressed/stressed pattern of each two-syllable \"foot,\" the word \"pentameter\" indicates that there are how many feet within a given line?",
    "Correct Answer": "Five",
    "Response (Davinci GPT-3)": "Ten",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "5. Iambic pentameter is a type of metric line used in English verse, most famously by William Shakespeare",
    "J1-Jumbo Correct": 1,
    "User-Correct": "87%",
    "User-N": 1165,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Two'fer Goofer: What two rhyming words summarize the following phrase? A zippered piece of warm outerwear for a Serena Williams tool.",
    "Correct Answer": "Jacket racket",
    "Response (Davinci GPT-3)": "Sweater and coat",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(1) A smocked (2) smock",
    "J1-Jumbo Correct": 0,
    "User-Correct": "83%",
    "User-N": 1509,
    "Question Category": "Word Play"
  },
  {
    "Question": "Quirky Quotes: What autumn holiday was described by writer O. Henry as \"the one day that is purely American?",
    "Correct Answer": "Thanksgiving",
    "Response (Davinci GPT-3)": "Thanksgiving",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "October 31, Halloween, of course",
    "J1-Jumbo Correct": 0,
    "User-Correct": "82%",
    "User-N": 1621,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Musical Chairs: After Microsoft paid $26 billion for it in 2016, which business website might keep nagging Microsoft to update its resume?",
    "Correct Answer": "LinkedIn",
    "Response (Davinci GPT-3)": "LinkedIn",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(1) LinkedIn, (2) Skype, (3) Yammer, (4",
    "J1-Jumbo Correct": 1,
    "User-Correct": "80%",
    "User-N": 648,
    "Question Category": "Current Events"
  },
  {
    "Question": "Very V: What synonym for vagabond has the same first three letters?",
    "Correct Answer": "Vagrant",
    "Response (Davinci GPT-3)": "Vagrant",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "VACATION: A vagabond is a person who wanders from place to place without a home or job",
    "J1-Jumbo Correct": 0,
    "User-Correct": "79%",
    "User-N": 2157,
    "Question Category": "Word Play"
  },
  {
    "Question": "Technical Terms: Although colloquially used as a term to indicate that the unemployment rate is substantially higher than normal, an economist will tell you that the technical definition reflects two straight calendar quarters of negative growth of real GDP. What is the term?",
    "Correct Answer": "Recession",
    "Response (Davinci GPT-3)": "Recession",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "NAIRU (Non-Accelerating Inflation Rate of Unemployment).",
    "J1-Jumbo Correct": 0,
    "User-Correct": "77%",
    "User-N": 1337,
    "Question Category": "Word Play"
  },
  {
    "Question": "Bought Brands: What slang term with Germanic roots meaning \"fool\" is half the name of a Best Buy subsidiary acquired in 2002? The term is used to describe eccentric or non-mainstream people and is typically considered a pejorative term although it can be used self-referentially as a source of pride.",
    "Correct Answer": "Geek",
    "Response (Davinci GPT-3)": "Geek Squad",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "BBY: Best Buy Co., Inc",
    "J1-Jumbo Correct": 0,
    "User-Correct": "76%",
    "User-N": 1382,
    "Question Category": "Word Play"
  },
  {
    "Question": "Millennial Meaning: What photographic term was first used (or at least, the first recorded use in print) when Nathan Hope posted an image of his injured face online in 2002?",
    "Correct Answer": "Selfie",
    "Response (Davinci GPT-3)": "The term \"selfie\" was first used in 2002.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Metadata. The term was first used in 2002 by Nathan Hope, who posted an image of his injured face online",
    "J1-Jumbo Correct": 0,
    "User-Correct": "76%",
    "User-N": 1482,
    "Question Category": "Word Play"
  },
  {
    "Question": "Mammalian News: The Sumatran species of what famously horned mammal officially went extinct in Malaysia in November 2019? The animal is not yet extinct globally as a few dozen live in Indonesia.",
    "Correct Answer": "Rhino",
    "Response (Davinci GPT-3)": "The Sumatran species of rhinoceros officially went extinct in Malaysia in November 2019. The animal is not yet extinct globally as a few dozen live in Indonesia.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) Sumatran rhinoceros. The Sumatran rhinoceros (Dicerorhinus sumatr",
    "J1-Jumbo Correct": 1,
    "User-Correct": "73%",
    "User-N": 1341,
    "Question Category": "Current Events"
  },
  {
    "Question": "Misspelled Mistakes: Considered the source of many spelling problems, what is the term for words that sound alike but have different meanings and different spellings?",
    "Correct Answer": "Homophones",
    "Response (Davinci GPT-3)": "Homonyms",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "homonyms: Homonyms are words that sound alike but have different meanings and different spellings.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "72%",
    "User-N": 511,
    "Question Category": "Word Play"
  },
  {
    "Question": "Latin Language: What common Latin phrase literally means \"something for something?",
    "Correct Answer": "quid pro quo",
    "Response (Davinci GPT-3)": "Quid pro quo\" literally means \"something for something.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "quid pro quo, meaning \"this for that.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "69%",
    "User-N": 2708,
    "Question Category": "Word Play"
  },
  {
    "Question": "Faithless\" Firsts: Despite not running in the 2016 election, a retired Secretary of State earned three electoral votes for president from \"faithless electors\" in Washington. This man inadvertently became the first black Republican to earn electoral votes. Who is this man?",
    "Correct Answer": "Colin Powell",
    "Response (Davinci GPT-3)": "Colin Powell",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(D) Colin Powell. Powell, a retired four-star general, was nominated by the Republican Party in 2016. He earned",
    "J1-Jumbo Correct": 1,
    "User-Correct": "68%",
    "User-N": 1324,
    "Question Category": "Current Events"
  },
  {
    "Question": "International Leaders: Recep Tayyip Erdogan has been the president of what country since August 2014?",
    "Correct Answer": "Turkey",
    "Response (Davinci GPT-3)": "Turkey",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "TURKEY",
    "J1-Jumbo Correct": 1,
    "User-Correct": "67%",
    "User-N": 923,
    "Question Category": "Current Events"
  },
  {
    "Question": "Double Definitions: What word with a set of double letters could either signify a type of snake or a style of shoe known for its Native American roots?",
    "Correct Answer": "Moccasin",
    "Response (Davinci GPT-3)": "The word is \"moccasin\".",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "BOOTS! The plural of BOOT is BOOTS, and BOOTS is a word with",
    "J1-Jumbo Correct": 0,
    "User-Correct": "67%",
    "User-N": 1448,
    "Question Category": "Word Play"
  },
  {
    "Question": "Wordy World: From the Latin word for \"earth,\" what's a synonym for an outdoor patio?",
    "Correct Answer": "Terrace",
    "Response (Davinci GPT-3)": "A terrace",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "TERRACE: A terrace is an outdoor platform or level area, often paved, adjoining a house or other building.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "67%",
    "User-N": 1937,
    "Question Category": "Word Play"
  },
  {
    "Question": "Brief Biographies: Degrees from Stanford, Oxford, and Yale. Former Mayor of Newark. Vegetarian since 1992. Which former contender for the Democratic 2020 Presidential nomination does this describe?",
    "Correct Answer": "Cory Booker",
    "Response (Davinci GPT-3)": "Cory Booker",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "D) Cory Booker. (D) Julian Castro. (D) Kirsten Gillibrand",
    "J1-Jumbo Correct": 1,
    "User-Correct": "61%",
    "User-N": 1468,
    "Question Category": "Current Events"
  },
  {
    "Question": "Modern History: In what decade was Hong Kong transferred back under the control of China? The region had been under British control for 155 years.",
    "Correct Answer": "1990s",
    "Response (Davinci GPT-3)": "The transfer of Hong Kong back to China occurred in 1997.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "1997. The handover of Hong Kong, a former British colony, to China took place on July 1, 1997",
    "J1-Jumbo Correct": 1,
    "User-Correct": "54%",
    "User-N": 1271,
    "Question Category": "Current Events"
  },
  {
    "Question": "Presidential Pardons: President Trump's first pardon was used to commute the sentence of what former Arizona Sheriff?",
    "Correct Answer": "Joe Arpaio",
    "Response (Davinci GPT-3)": "Joe Arpaio",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "85-year-old former Arizona Sheriff Joe Arpaio",
    "J1-Jumbo Correct": 1,
    "User-Correct": "52%",
    "User-N": 898,
    "Question Category": "Current Events"
  },
  {
    "Question": "Overnight Flights: French–Lebanese–Brazilian businessman Carlos Ghosn escaped Japan in the middle of the night on December 30, 2019 by flying to Beirut while possibly hiding in a large black audio equipment box. Ghosn was facing trial in Japan and claimed he \"escaped injustice.\"  He was facing false accounting charges related to his 17 years as the CEO of what auto manufacturer?",
    "Correct Answer": "Nissan",
    "Response (Davinci GPT-3)": "Ghosn was facing trial in Japan and claimed he \"escaped injustice.\" He was facing false accounting charges related to his 17 years as the CEO of Nissan.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Nissan. Ghosn was facing trial in Japan and claimed he \"escaped injustice.\"  He was facing false accounting",
    "J1-Jumbo Correct": 1,
    "User-Correct": "52%",
    "User-N": 1163,
    "Question Category": "Current Events"
  },
  {
    "Question": "Estimating Evidence: What 13-letter \"P\" word typically means a greater or weightier part? It is often used in civil lawsuits when determining the amount of evidence required for conviction.",
    "Correct Answer": "Preponderance",
    "Response (Davinci GPT-3)": "Preponderance",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "preponderance of the evidence.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "39%",
    "User-N": 630,
    "Question Category": "Word Play"
  },
  {
    "Question": "Reformulated Recipes: In 2017 Coca-Cola modified the recipe of Coke Zero and rebranded the product with what similar name?",
    "Correct Answer": "Coke Zero Sugar",
    "Response (Davinci GPT-3)": "Coca-Cola Zero Sugar",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Sprite Zero. Coca-Cola Zero was rebranded as Coca-Cola Zero Sugar in 2017",
    "J1-Jumbo Correct": 1,
    "User-Correct": "37%",
    "User-N": 1398,
    "Question Category": "Current Events"
  },
  {
    "Question": "Two'fer Goofer: What two-word rhyming phrase could mean the following? Trefoil found surrounding the Capitol in Delaware.",
    "Correct Answer": "Dover Clover",
    "Response (Davinci GPT-3)": "Two'fer Goofer: What two-word rhyming phrase could mean the following? Trefoil found surrounding the Capitol in Delaware.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(1) \"The (2) (3) (4) (5",
    "J1-Jumbo Correct": 0,
    "User-Correct": "37%",
    "User-N": 691,
    "Question Category": "Word Play"
  },
  {
    "Question": "Explaining Away: What is the most commonly used English word with at least seven letters?",
    "Correct Answer": "Because",
    "Response (Davinci GPT-3)": "The most commonly used English word with at least seven letters is \"set\".",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "Explanation.",
    "J1-Jumbo Correct": 0,
    "User-Correct": "34%",
    "User-N": 806,
    "Question Category": "Word Play"
  },
  {
    "Question": "Wordy World: If bovine describes a cow and equine describes a horse, what adjective describes a pig?",
    "Correct Answer": "Porcine",
    "Response (Davinci GPT-3)": "Porcine",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(A) Porcine. (B) Swine. (C) Swineish.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "34%",
    "User-N": 752,
    "Question Category": "Word Play"
  },
  {
    "Question": "Rideshare Royalty: The man who replaced Travis Kalanick as CEO of Uber in 2017 was previously CEO of what U.S.-based travel company with a name mean to evoke speed and convenience?",
    "Correct Answer": "Expedia",
    "Response (Davinci GPT-3)": "Dara Khosrowshahi was previously CEO of Expedia.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "LYFT. Dara Khosrowshahi, who replaced Travis Kalanick as CEO of Uber in 2017",
    "J1-Jumbo Correct": 0,
    "User-Correct": "33%",
    "User-N": 706,
    "Question Category": "Current Events"
  },
  {
    "Question": "Unique Sequences: What sarcastic word has all five English vowels in alphabetical order?",
    "Correct Answer": "Facetious",
    "Response (Davinci GPT-3)": "Aardvark",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "Vowels: A, E, I, O, U.",
    "J1-Jumbo Correct": 0,
    "User-Correct": "33%",
    "User-N": 1499,
    "Question Category": "Word Play"
  },
  {
    "Question": "Notable Names: What was the name for an early movie theater offering silent films with piano accompaniment that typically charged five cents for entrance?",
    "Correct Answer": "Nickelodeon",
    "Response (Davinci GPT-3)": "Nickelodeon",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "5-Cent Theater. The 5-Cent Theater was an early movie theater offering silent films with piano accompaniment that",
    "J1-Jumbo Correct": 0,
    "User-Correct": "32%",
    "User-N": 1178,
    "Question Category": "Word Play"
  },
  {
    "Question": "Triangular Times: The \"golden triangle\" is an unofficial group of universities located in southeast England which is occasionally referred to by what portmanteau that combines the names of all three of its cities? As a hint so you can focus on portmanteau-building, the cities are Cambridge, London, and Oxford.",
    "Correct Answer": "Loxbridge",
    "Response (Davinci GPT-3)": "The \"golden triangle\" is an unofficial group of universities located in southeast England which is occasionally referred to by what portmanteau that combines the names of all three of its cities? As a hint so you can focus on portmanteau-building, the cities are Cambridge, London, and Oxford.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "C) The \"golden triangle\" is an unofficial group of universities located in southeast England which is occasionally referred to by what port",
    "J1-Jumbo Correct": 0,
    "User-Correct": "32%",
    "User-N": 591,
    "Question Category": "Word Play"
  },
  {
    "Question": "Musical Chairs: The European internet company Skype was purchased by eBay in 2005 for $2.5 billion, but was sold again only six years later to what other tech firm for a new purchase price of $8.5 billion?",
    "Correct Answer": "Microsoft",
    "Response (Davinci GPT-3)": "Microsoft",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Microsoft. Microsoft purchased Skype in 2011 for $8.5 billion",
    "J1-Jumbo Correct": 1,
    "User-Correct": "31%",
    "User-N": 625,
    "Question Category": "Current Events"
  },
  {
    "Question": "Theatrical Theft: The silkworm’s unique traits made it an incredibly valuable creature for thousands of years before the creatures were allegedly smuggled out of China in a hollow stick and sold to what Empire?",
    "Correct Answer": "Byzantine Empire",
    "Response (Davinci GPT-3)": "The silkworm’s unique traits made it an incredibly valuable creature for thousands of years before the creatures were allegedly smuggled out of China in a hollow stick and sold to what Empire?",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(A) The Roman Empire.",
    "J1-Jumbo Correct": 0,
    "User-Correct": "29%",
    "User-N": 718,
    "Question Category": "Current Events"
  },
  {
    "Question": "Special Spoonerisms: Spoonerism: two pairs of words with the first sounds or letters swapped, such as blushing crow and crushing blow.\n\nWhat spoonerism describes these two objects? A feigned animal and large meal cooked in an oven.",
    "Correct Answer": "faked beast",
    "Response (Davinci GPT-3)": "A feigned animal and large meal cooked in an oven.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(1) A feigned animal and large meal cooked in an oven. (2) A feigned animal",
    "J1-Jumbo Correct": 0,
    "User-Correct": "29%",
    "User-N": 1297,
    "Question Category": "Word Play"
  },
  {
    "Question": "Piloting Pasta: In 2017, the Italian port city of Genoa added one exception to the 100-milliliter limit for carrying liquids onto airplanes. What famed regional sauce can passengers now carry in quantities up to 500 grams when flying?",
    "Correct Answer": "Pesto",
    "Response (Davinci GPT-3)": "Passengers can now carry up to 500 grams of pesto.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Arrabbiata: The spicy sauce, which originated in the port city of Bari, is made with tomatoes, garlic, chili",
    "J1-Jumbo Correct": 0,
    "User-Correct": "28%",
    "User-N": 1324,
    "Question Category": "Current Events"
  },
  {
    "Question": "Many Meanings: What 11-letter word can mean either a trunk or a word which blends the sound and meaning of two other words? Yeah, this question's a mouthful.",
    "Correct Answer": "Portmanteau",
    "Response (Davinci GPT-3)": "A trunk is a large, strong box used for storage. A blend is a word that is a combination of two other words.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "BLEND. Blend can mean either \"a mixture of two or more substances,\" or \"to combine or unite.",
    "J1-Jumbo Correct": 0,
    "User-Correct": "25%",
    "User-N": 1376,
    "Question Category": "Word Play"
  },
  {
    "Question": "Two'fer Goofer: What two rhyming words summarize the following phrase? A gatherer and organizer of large, dangerous jungle felines.",
    "Correct Answer": "Leopard shepherd",
    "Response (Davinci GPT-3)": "Poacher and Trapper",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(1) Lion tamer and (2) tiger tamer.",
    "J1-Jumbo Correct": 0,
    "User-Correct": "22%",
    "User-N": 1187,
    "Question Category": "Word Play"
  },
  {
    "Question": "Allowing Agency: While serving as president of the NBA Players Association, what Hall of Fame basketball player, led a suit against the NBA that delayed its merger with the ABA and laid the groundwork for the eventual introduction of free agency to the league? The player was famously the only player in league history to average a triple-double until 2017.",
    "Correct Answer": "Oscar Robertson",
    "Response (Davinci GPT-3)": "Oscar Robertson",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) Larry Bird. The 1979 merger between the National Basketball Association and the American Basketball Association was challenged by the ABA,",
    "J1-Jumbo Correct": 0,
    "User-Correct": "20%",
    "User-N": 862,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Soccer Standards: How many yards is it from the penalty mark to the goal line on a standard soccer field?",
    "Correct Answer": 12,
    "Response (Davinci GPT-3)": "The penalty mark is 11 yards from the goal line.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "12 yards. The penalty mark is 12 yards from the goal line.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "19%",
    "User-N": 1096,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Many Meanings: What board game has a history that can be traced back nearly 5,000 years and has pieces that are referred to as checkers, draughts, stones, men, counters, pawns, discs, pips, chips, or nips?",
    "Correct Answer": "Backgammon",
    "Response (Davinci GPT-3)": "Checkers",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "CHESS! Chess is believed to have originated in India, and the earliest known chess pieces were carved from ivory and date",
    "J1-Jumbo Correct": 0,
    "User-Correct": "18%",
    "User-N": 1098,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Warrior Weights: In Olympic boxing, the maximum weight for the \"cocky\" little fighters is 123 pounds in what division?",
    "Correct Answer": "bantamweight",
    "Response (Davinci GPT-3)": "The maximum weight for the \"cocky\" little fighters is 123 pounds in the flyweight division.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "49 kg (108.5 lbs).",
    "J1-Jumbo Correct": 0,
    "User-Correct": "17%",
    "User-N": 1104,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Latitude Attitude: Although the NBA champion Toronto Raptors claim the slogan “We The North,” they play home games at only 43 degrees latitude. Which NBA team has the true claim to the north, with their home stadium coming in at 45 degrees latitude?",
    "Correct Answer": "Portland Trailblazers",
    "Response (Davinci GPT-3)": "The Golden State Warriors have the true claim to the north, with their home stadium coming in at 45 degrees latitude.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(D) The Minnesota Timberwolves",
    "J1-Jumbo Correct": 0,
    "User-Correct": "17%",
    "User-N": 894,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Business Barons: She made her fortune by developing and marketing cosmetics and hair care products for black women. She's also listed as the first female self-made millionaire in America in the Guinness Book of World Records. Who is this woman?",
    "Correct Answer": "Madam C. J. Walker",
    "Response (Davinci GPT-3)": "Madam C. J. Walker",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Her name is Madam C.J. Walker",
    "J1-Jumbo Correct": 1,
    "User-Correct": "17%",
    "User-N": 679,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Acclaimed Authors: Considered one of the innovators of creative nonfiction via New Journalism, what American author's best-known work \"The Executioner's Song\" won the 1979 Pulitzer Prize for fiction? This \"postal\" author also ran in the Democratic primary for NYC's mayoral race of 1969 with a platform including the secession of New York City as the 51st US state.",
    "Correct Answer": "Norman Mailer",
    "Response (Davinci GPT-3)": "Norman Mailer",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "E.L. Doctorow. Doctorow's 1975 novel \"Ragtime\" won the National Book Critics Circle",
    "J1-Jumbo Correct": 0,
    "User-Correct": "16%",
    "User-N": 1082,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "TV Shows: Since its inception, Saturday Night Live has broadcast from what alphanumeric studio within NBC's headquarters at 30 Rockefeller Plaza?",
    "Correct Answer": "8H",
    "Response (Davinci GPT-3)": "Studio 8H",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "30 Rockefeller Plaza, Studio 8H.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "16%",
    "User-N": 1005,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Double Duty: Although most well-known for his flair as a circus owner, P.T. Barnum also served in elected office as a mayor and in the state legislature in what east coast state?",
    "Correct Answer": "Connecticut",
    "Response (Davinci GPT-3)": "Connecticut",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "CONNECTICUT: Barnum was elected mayor of Bridgeport, Connecticut in 1854. He later served two terms in the Connecticut",
    "J1-Jumbo Correct": 1,
    "User-Correct": "16%",
    "User-N": 1117,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Teenage 007: What Anthony Horowitz-created character is sometimes referred to as a “Teenage James Bond?” He is the main character in a series of books that starts with “Stormbreaker.”",
    "Correct Answer": "Alex Rider",
    "Response (Davinci GPT-3)": "Alex Rider",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "SPY",
    "J1-Jumbo Correct": 0,
    "User-Correct": "16%",
    "User-N": 571,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Rock and Roll: In Rolling Stone's latest version of the greatest guitarists of all time, No. 5 was a man with a monosyllabic first and last name. This man was one of the three guitarists for The Yardbirds, and he spent decades exploring innovative guitar sounds. Who is he?",
    "Correct Answer": "Jeff Beck",
    "Response (Davinci GPT-3)": "Jeff Beck",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(Drum roll, please) Eric Clapton",
    "J1-Jumbo Correct": 0,
    "User-Correct": "16%",
    "User-N": 1125,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Consistent Champs: 1987 was the first time in 13 years that what American woman did not win a tennis Grand Slam event?",
    "Correct Answer": "Chris Evert",
    "Response (Davinci GPT-3)": "Chris Evert did not win a Grand Slam event in 1987.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "1987 was the first year since 1973 that an American woman did not win a Grand Slam event",
    "J1-Jumbo Correct": 0,
    "User-Correct": "16%",
    "User-N": 1085,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Confounding Creatures: What frequently-misnomered mammal has fingerprints so indistinguishable from humans that they have occasionally been wrongfully collected as evidence at crime scenes?",
    "Correct Answer": "Koalas",
    "Response (Davinci GPT-3)": "The sloth.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(The answer is) the possum",
    "J1-Jumbo Correct": 0,
    "User-Correct": "16%",
    "User-N": 961,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Site Surnames: Craigslist is named after its founder. What is Craig's seven-letter two-syllable \"N\" last name?",
    "Correct Answer": "Newmark",
    "Response (Davinci GPT-3)": "Craig Newmark",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) craigslist.org. The \"N\" is for Newmark",
    "J1-Jumbo Correct": 1,
    "User-Correct": "15%",
    "User-N": 1453,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Beautifying Bodies: What mineral, which is most concentrated in keratin, is known as \"nature's beauty mineral\" and helps the body produce collagen to keep skin looking young and fresh?",
    "Correct Answer": "Sulphur",
    "Response (Davinci GPT-3)": "Calcium",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "CALCIUM. Calcium is the most abundant mineral in the body. It plays an essential role in maintaining strong bones and teeth, and in",
    "J1-Jumbo Correct": 0,
    "User-Correct": "15%",
    "User-N": 1272,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Teamed Threes: Who formed the first Triumvirate with Crassus and Julius Caesar?",
    "Correct Answer": "Pompey",
    "Response (Davinci GPT-3)": "Pompey the Great",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(a) Pompey, (b) Crassus, (c) Caesar.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "15%",
    "User-N": 975,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Elderly Experts: Fitting for her famous nickname, what American artist took up painting after she had turned 70? In part, her passion for art was delayed due to her time-intensive work on a farm for much of her life. \"Sugaring Off\" and \"Fourth of July\" are two of her most famous works.",
    "Correct Answer": "Grandma Moses",
    "Response (Davinci GPT-3)": "Georgia O'Keeffe",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(c) Grandma Moses. Born in 1860, Moses took up painting in her 70s. She sold her first painting",
    "J1-Jumbo Correct": 1,
    "User-Correct": "15%",
    "User-N": 933,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Bantering Brits: What American-born British screenwriter, film director, animator, actor, comedian and former member of the Monty Python comedy troupe was born in Minnesota, spent his teen years in Los Angeles, and is now only a citizen of the United Kingdom?",
    "Correct Answer": "Terry Gilliam",
    "Response (Davinci GPT-3)": "Terry Gilliam",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(Answer at bottom of column)",
    "J1-Jumbo Correct": 0,
    "User-Correct": "14%",
    "User-N": 1161,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Turkey Time: What do the letters \"ZIP\" stand for in the United States postal code?",
    "Correct Answer": "Zone Improvement Plan",
    "Response (Davinci GPT-3)": "ZIP stands for Zone Improvement Plan.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(From the December 2002 issue of \"The Straight Dope\"): The \"Zone Improvement Plan",
    "J1-Jumbo Correct": 1,
    "User-Correct": "14%",
    "User-N": 877,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Medical Miracles: The term \"magic bullet\" was coined by German scientist Paul Ehrlich to describe a compound that would kill only a specifically targeted organism. Ehrlich even invented the \"first magic bullet\" with Salvarsan, which was used to treat which disease?",
    "Correct Answer": "Syphillis",
    "Response (Davinci GPT-3)": "Syphilis",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Rheumatic Fever. Ehrlich's \"magic bullet\" was a compound that would kill only a specific organism.",
    "J1-Jumbo Correct": 0,
    "User-Correct": "14%",
    "User-N": 942,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Trifecta Phrases: Which three-word English idiom of British origin derives its meaning from the \"mm\" sound made when one speaks through closed lips?",
    "Correct Answer": "Mum's the word",
    "Response (Davinci GPT-3)": "Mum's the word",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Fiddlesticks, fiddle-de-dee, and fiddle-de-dee.",
    "J1-Jumbo Correct": 0,
    "User-Correct": "14%",
    "User-N": 1382,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "TV Talkers: Mario Lopez hosted the first seven seasons of what dance competition show from 2008 - 2012?",
    "Correct Answer": "America's Best Dance Crew",
    "Response (Davinci GPT-3)": "Dancing with the Stars",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "Dancing with the Stars.",
    "J1-Jumbo Correct": 0,
    "User-Correct": "14%",
    "User-N": 1058,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Nike: The founders of Nike started the business as distributors for what \"Tiger\" footwear brand from Japan?",
    "Correct Answer": "Onitsuka",
    "Response (Davinci GPT-3)": "The founders of Nike started the business as distributors for Onitsuka Tiger.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(c) Onitsuka Tiger. The founders were Philip Knight and Bill Bowerman",
    "J1-Jumbo Correct": 1,
    "User-Correct": "14%",
    "User-N": 963,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Pop music: What musician is the lead singer of both Blur and Gorillaz, two popular British bands?",
    "Correct Answer": "Damon Albarn",
    "Response (Davinci GPT-3)": "Damon Albarn",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "B) Damon Albarn. Blur and Gorillaz are British bands that achieved international success. Blur formed in",
    "J1-Jumbo Correct": 1,
    "User-Correct": "14%",
    "User-N": 1243,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Spicy Snacks: Nduja is a spicy, spreadable pork dish made from parts such as the shoulder and belly. What European country does this dish call home?",
    "Correct Answer": "Italy",
    "Response (Davinci GPT-3)": "Italy",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(D) Italy. Nduja is a spicy, spreadable pork dish made from parts such as the shoulder and belly",
    "J1-Jumbo Correct": 1,
    "User-Correct": "14%",
    "User-N": 1015,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Required Reading: Although this Thomas Pynchon novel was considered one of the \"All-Time Greatest 100 Novels\" by Time, the 1974 Pulitzer Prize jury on fiction was offended by its content, some of which was described as \"unreadable, overwritten, and obscene.\" What is this two-word novel?",
    "Correct Answer": "Gravity's Rainbow",
    "Response (Davinci GPT-3)": "Gravity's Rainbow",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "______________________________________________",
    "J1-Jumbo Correct": 0,
    "User-Correct": "14%",
    "User-N": 929,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Pop Apps: Beating out Facebook, Instagram, and Snapchat, what other massively popular online service was the most-downloaded iPhone app of 2018? Fine print: we're talking free apps, and not including apps that come pre-downloaded on iPhones.",
    "Correct Answer": "YouTube",
    "Response (Davinci GPT-3)": "Fortnite was the most-downloaded iPhone app of 2018.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(Drum roll, please): Google Maps",
    "J1-Jumbo Correct": 0,
    "User-Correct": "13%",
    "User-N": 559,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Numbered Names: Franklin Carmichael, Lawren Harris, A. Y. Jackson, Frank Johnston, Arthur Lismer, J. E. H. MacDonald, and Frederick Varley are collectively known by what name as a famed set of Canadian landscape painters in the first half of the 20th century?",
    "Correct Answer": "Group of Seven or Algonquin School",
    "Response (Davinci GPT-3)": "The Group of Seven",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(A) The Group of Seven",
    "J1-Jumbo Correct": 1,
    "User-Correct": "13%",
    "User-N": 928,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Beauty Time: What is the animal term associated with some lip gloss applicators? The name does not come from the fuzzy tip resembling fur, but rather from the hoof-shaped, angular tip of the applicator.",
    "Correct Answer": "Doe foot",
    "Response (Davinci GPT-3)": "Lipstick",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(From the March 2008 issue of Glamour magazine): The applicators in question are called “spool",
    "J1-Jumbo Correct": 0,
    "User-Correct": "13%",
    "User-N": 742,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Original Owners: Nicknamed \"Commy\" or \"the Old Roman,\" what American man helped form the American League, owned one of its teams, and was inducted into the Baseball Hall of Fame in 1939?",
    "Correct Answer": "Charles Comiskey",
    "Response (Davinci GPT-3)": "George Herman \"Babe\" Ruth, Jr.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "August Herrmann (1862-1939), a Cincinnati native, was president of the Cincinnati Reds from 1902 to",
    "J1-Jumbo Correct": 0,
    "User-Correct": "13%",
    "User-N": 989,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Viral Viruses: The first death outside of China from the novel coronavirus occurred in February 2020 in what Asian nation?",
    "Correct Answer": "The Philippines",
    "Response (Davinci GPT-3)": "Unknown",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(#1) South Korea",
    "J1-Jumbo Correct": 0,
    "User-Correct": "12%",
    "User-N": 944,
    "Question Category": "Current Events"
  },
  {
    "Question": "Cantation Collections: What three-word phrase does not actually refer to a specific binding or list of songs, but instead represents a loosely-defined set of enduring songs from the 1920s to the 1950s created for musical theater and Hollywood?",
    "Correct Answer": "Great American Songbook",
    "Response (Davinci GPT-3)": "Great American Songbook",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(1) The Great American Songboo",
    "J1-Jumbo Correct": 1,
    "User-Correct": "12%",
    "User-N": 773,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Produced Playwrights: \"A Raisin in the Sun,\" the first play written by an African American woman to be produced on Broadway, opened in March 1959. The author was a 29-year-old woman who won the New York Drama Critics Circle Award for Best Play. Name the author.",
    "Correct Answer": "Lorraine Hansberry",
    "Response (Davinci GPT-3)": "Lorraine Hansberry",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(D) Lorraine Hansberry. The play was adapted by Hansberry from her 1959 novel of the same title",
    "J1-Jumbo Correct": 1,
    "User-Correct": "12%",
    "User-N": 821,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Kooky Kingdoms: What is the collective name for any eukaryotic organism that is not a plant, animal, or fungus?",
    "Correct Answer": "Protist",
    "Response (Davinci GPT-3)": "The collective name for any eukaryotic organism that is not a plant, animal, or fungus is \"Kooky Kingdom\".",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "Protists: Protists, or Protoctista, are a group of eukaryotic organisms that lack cell walls",
    "J1-Jumbo Correct": 1,
    "User-Correct": "12%",
    "User-N": 937,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Beauty Shots: What is the nine-letter term for the appearance of a white cast on one's skin caused by a makeup product captured with flash photography? This is often caused by SPF in foundation and powders.",
    "Correct Answer": "Flashback",
    "Response (Davinci GPT-3)": "Flashback",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Translucent. The nine-letter term for the appearance of a white cast on one's skin caused by a makeup product captured with flash photography is",
    "J1-Jumbo Correct": 0,
    "User-Correct": "12%",
    "User-N": 985,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Cricket Legends: Informally known as \"The God of Cricket,\" what former Indian cricketer is widely regarded as one of the greatest batsmen in the history of the sport and is the highest run-scorer of all time in international competition?",
    "Correct Answer": "Sachin Tendulkar",
    "Response (Davinci GPT-3)": "Sachin Tendulkar",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "c) Sachin Tendulkar",
    "J1-Jumbo Correct": 1,
    "User-Correct": "12%",
    "User-N": 887,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Scientific States: CERN hosts the Large Hadron Collider, the world's highest energy particle collider which opened underneath the Swiss-French border in 2008. The LHC surpassed the prior record-holding particle accelerator in what U.S. state?",
    "Correct Answer": "Illinois",
    "Response (Davinci GPT-3)": "The LHC surpassed the prior record-holding particle accelerator in New York.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(c) Illinois. The Fermi National Accelerator Laboratory (Fermilab), located in Batavia, Illinois",
    "J1-Jumbo Correct": 1,
    "User-Correct": "12%",
    "User-N": 1182,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Crime Capitals: As of 2018, what American city had the highest murder rate per capita? (minimum population of 300,000)",
    "Correct Answer": "St. Louis",
    "Response (Davinci GPT-3)": "St. Louis, Missouri",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(Tie) St. Louis, Missouri and Baltimore, Maryland",
    "J1-Jumbo Correct": 1,
    "User-Correct": "11%",
    "User-N": 856,
    "Question Category": "Current Events"
  },
  {
    "Question": "Foreign Flags: When ignoring the stem, how many points does the maple leaf on the Canadian flag have?",
    "Correct Answer": 11,
    "Response (Davinci GPT-3)": 11,
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "3 points. The maple leaf on the Canadian flag is 3 points",
    "J1-Jumbo Correct": 0,
    "User-Correct": "11%",
    "User-N": 1135,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Common Cantations: What is the most commonly used NAMED spell in the Harry Potter book series? Hint: it's different than the answer would be for the film series, which is Wingardium Leviosa.",
    "Correct Answer": "Accio",
    "Response (Davinci GPT-3)": "The most commonly used named spell in the Harry Potter book series is Accio.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(1) Expelliarmus. (2) Lumos.",
    "J1-Jumbo Correct": 0,
    "User-Correct": "11%",
    "User-N": 601,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Banned Beefs: What is the two-word \"religious\" idiom for the prohibition of eating a certain type of meat? The earliest known instance of this prohibition likely arose around 600 B.C.",
    "Correct Answer": "sacred cow",
    "Response (Davinci GPT-3)": "Kosher",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "kashrut, from the Hebrew root kasher, meaning \"fit, proper, or correct.",
    "J1-Jumbo Correct": 0,
    "User-Correct": "11%",
    "User-N": 501,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Dead Presidents: Only one U.S. President is buried in Washington, DC. Which man is this?",
    "Correct Answer": "Woodrow Wilson",
    "Response (Davinci GPT-3)": "James Monroe is the only U.S. President buried in Washington, DC.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(1) George Washington (2) Thomas Jefferson (3) James Madison (4) James Monroe",
    "J1-Jumbo Correct": 0,
    "User-Correct": "11%",
    "User-N": 905,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Speedy Shoes: Marathon world record holder Eliud Kipchoge was the first person to run the distance of a marathon in under two hours (in part due to a team of pacers and a flat course) in October 2019. Kipchoge was wearing custom Nike Vaporfly shoes and ran the event in what European city?",
    "Correct Answer": "Vienna",
    "Response (Davinci GPT-3)": "Berlin, Germany",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(c) Monza, Italy. Kipchoge ran 26.2 miles in 1 hour",
    "J1-Jumbo Correct": 0,
    "User-Correct": "10%",
    "User-N": 817,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "Penning Pulitzers: \"A Visit from the Goon Squad\" won the 2011 Pulitzer Prize for Fiction and intersected across characters and formats while the titular \"goon squad\" was simply time itself. What woman penned this novel?",
    "Correct Answer": "Jennifer Egan",
    "Response (Davinci GPT-3)": "Jennifer Egan",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "E.L. Doctorow. The 84-year-old author, who has written 11 novels, 4 short story collections",
    "J1-Jumbo Correct": 0,
    "User-Correct": "10%",
    "User-N": 832,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Stately Objections: In January 2017, President Trump issued an executive order restricting immigration to the U.S. from seven countries. A lawsuit opposing this order eventually made it to the U.S. Supreme Court. Which of the 50 states filed this lawsuit and was thus included in the court case's name?",
    "Correct Answer": "Hawaii",
    "Response (Davinci GPT-3)": "Washington State filed the lawsuit and was thus included in the court case's name.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(c) Hawaii. Hawaii's attorney general, along with attorneys general from Maryland and Minnesota, filed the lawsuit.",
    "J1-Jumbo Correct": 1,
    "User-Correct": "10%",
    "User-N": 662,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Country Classrooms: According to the Organization for Economic Cooperation and Development, what is the most educated country on the planet as of 2019? To measure this, they are ranking countries based on the share of adult residents between the ages of 25 and 64 with a \"tertiary education,\" meaning a two-year or four-year degree or education via vocational program. The leader had ~56% of the population with tertiary education.",
    "Correct Answer": "Canada",
    "Response (Davinci GPT-3)": "The most educated country on the planet as of 2019 is South Korea.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(1) Japan (2) Israel (3) South Korea (4) Canada",
    "J1-Jumbo Correct": 0,
    "User-Correct": "10%",
    "User-N": 667,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Utopian Architecture: At the height of Frank Lloyd Wright's career in 1927, he surprised contemporaries by designing what type of retail outlet? The design was part of his utopian city concept and although intended for Buffalo, NY the structure was eventually built in Cloquet, MN where it remains in business.",
    "Correct Answer": "Gas Station",
    "Response (Davinci GPT-3)": "A gas station.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "Skyscraper: Wright's design for a skyscraper was part of his utopian city concept. The 17-story structure was intended for",
    "J1-Jumbo Correct": 0,
    "User-Correct": "10%",
    "User-N": 1177,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Broadcasting Brothers: Hank Green is an American entrepreneur, musician, educator, producer, vlogger, and author that lives in Missoula, Montana. What was the name of Green's YouTube channel that launched him and his brother to fame in the early 2000s?",
    "Correct Answer": "Vlogbrothers",
    "Response (Davinci GPT-3)": "Vlogbrothers",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "FTBA Records: DFTBA Records is a record label founded by Hank Green and his brother, John Green, in",
    "J1-Jumbo Correct": 0,
    "User-Correct": "10%",
    "User-N": 1080,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "TV Shows: Originally conceived by its eponymous founder as a place for choral music without religious affiliation, what famed music venue in Toronto was designated a National Historic Site of Canada in 1981? The venue shares its name with an American actor, dancer, and rapper who reached childhood fame with his role on \"That's So Raven.",
    "Correct Answer": "Massey Hall",
    "Response (Davinci GPT-3)": "Roy Thomson Hall",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(B) Massey Hall. The hall's namesake, Vincent Massey, was Canada's first Canadian-born",
    "J1-Jumbo Correct": 1,
    "User-Correct": "10%",
    "User-N": 1017,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Timed Travels: Including the mandatory training period, how many months of commitment is the standard Peace Corps Volunteer assignment?",
    "Correct Answer": 27,
    "Response (Davinci GPT-3)": "The standard Peace Corps Volunteer assignment is 27 months.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "27 months. Peace Corps Volunteers serve two 6-month terms, separated by 3 months of vacation",
    "J1-Jumbo Correct": 1,
    "User-Correct": "10%",
    "User-N": 997,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Cash Clues: Using the International Monetary Fund (2018) as your source, choose the continent (excluding Antarctica of course) with the highest GDP per capita. Now choose the country within that continent with the highest GDP per capita. What is the country?",
    "Correct Answer": "Australia",
    "Response (Davinci GPT-3)": "The country is Qatar.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(1) Europe (2) Luxembourg",
    "J1-Jumbo Correct": 0,
    "User-Correct": "9%",
    "User-N": 1132,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Border Boundaries: Congress granted Michigan the Upper Peninsula after a dispute over shoreline with what neighboring state?",
    "Correct Answer": "Ohio",
    "Response (Davinci GPT-3)": "Wisconsin",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "B) Wisconsin. The Upper Peninsula was ceded to Michigan in 1836. The boundary between Michigan and",
    "J1-Jumbo Correct": 0,
    "User-Correct": "9%",
    "User-N": 1300,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Religious Roles: Fittingly, what is the name of the hero of John Bunyan's \"Pilgrim's Progress\" who flees from the City of Destiny to the Celestial City?",
    "Correct Answer": "Christian",
    "Response (Davinci GPT-3)": "Christian",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "(#1) Christian. (#2) Faithful. (#3) Hopeful",
    "J1-Jumbo Correct": 1,
    "User-Correct": "9%",
    "User-N": 918,
    "Question Category": "Fine Arts"
  },
  {
    "Question": "Big Bakeries: There's a town in the Peloponnese region of Greece with a namesake food item known for its purple color and smooth meaty texture. What is this fruit?",
    "Correct Answer": "Kalamata Olive",
    "Response (Davinci GPT-3)": "The fruit is a fig.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "Figs! The Peloponnese region, which spans the northwestern part of the mainland, is famous for its figs",
    "J1-Jumbo Correct": 0,
    "User-Correct": "9%",
    "User-N": 974,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Regional Reps: In the 2019 United States Congress, how many of the 50 U.S. states have only 1 Representative elected to represent the entire state?",
    "Correct Answer": 7,
    "Response (Davinci GPT-3)": "There are no states with only 1 Representative.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "7 states: Alaska, Delaware, Montana, North Dakota, South Dakota, Vermont, and Wyoming",
    "J1-Jumbo Correct": 1,
    "User-Correct": "9%",
    "User-N": 1025,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Global Guides: In an effort to address (albeit in a small way) a public health crisis, the Google ______ Indicator, sponsored by the Indian Ministry of Urban Development was integrated into Google Maps in India in 2016. What word fills in the blank?",
    "Correct Answer": "Toilet",
    "Response (Davinci GPT-3)": "The Google Flu Trends Indicator, sponsored by the Indian Ministry of Urban Development was integrated into Google Maps in India in 2016.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "________________________: In an effort to address (albeit in a small way",
    "J1-Jumbo Correct": 0,
    "User-Correct": "8%",
    "User-N": 748,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Replete Resumes: Prior to being a U.S. President, what man had been a senator, minister to France, England and Spain, Secretary of War, Secretary of State, and Governor of Virginia?",
    "Correct Answer": "James Monroe",
    "Response (Davinci GPT-3)": "Thomas Jefferson",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(1) Thomas Jefferson, (2) James Madison, (3) James Monroe, (",
    "J1-Jumbo Correct": 0,
    "User-Correct": "7%",
    "User-N": 815,
    "Question Category": "Social Studies"
  },
  {
    "Question": "Precocious Players: In what year was American soccer player Freddy Adu born? Adu rose to international fame when he signed a professional sports contract in the U.S. at the age of 14.",
    "Correct Answer": 1989,
    "Response (Davinci GPT-3)": "Freddy Adu was born in 1989.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "1993. Adu was born in Ghana and moved to the United States when he was 6 years old. He became the youngest player ever to sign with Major League Soccer",
    "J1-Jumbo Correct": 0,
    "User-Correct": "7%",
    "User-N": 530,
    "Question Category": "Sports & Games"
  },
  {
    "Question": "TV Shows: Creator Larry David had a famous policy for Seinfeld in which he wanted to scrupulously avoid sentimentality and moral lessons. What four-word phrase is the quote often attributed to David as the summary of this policy?",
    "Correct Answer": "No hugging, no learning",
    "Response (Davinci GPT-3)": "No hugging, no learning.",
    "GPT-Correct": 1,
    "Response (J1-Jumbo)": "”No hugging, no learning”",
    "J1-Jumbo Correct": 1,
    "User-Correct": "6%",
    "User-N": 944,
    "Question Category": "Pop Culture"
  },
  {
    "Question": "Elementary Education: What is the name of the international Language Arts competition for students in grades 3 - 8 which has thrice-annual challenges of twenty analogies? The purpose is to learn a new set of vocabulary words.",
    "Correct Answer": "WordMasters",
    "Response (Davinci GPT-3)": "The name of the international Language Arts competition for students in grades 3 - 8 which has thrice-annual challenges of twenty analogies is the Global Classroom.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "Synonyms: The Synonyms Challenge is sponsored by the Synonyms Club, a 501(c",
    "J1-Jumbo Correct": 0,
    "User-Correct": "5%",
    "User-N": 1023,
    "Question Category": "Miscellaneous"
  },
  {
    "Question": "Time Turners: What did the U.S. Congress enact for almost ten months in 1974 to combat fuel shortages?",
    "Correct Answer": "Daylight Savings time",
    "Response (Davinci GPT-3)": "The Emergency Petroleum Allocation Act of 1973",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "Sunday driving restrictions. The Sunday Restriction Act, which took effect on January 1,",
    "J1-Jumbo Correct": 0,
    "User-Correct": "3%",
    "User-N": 1106,
    "Question Category": "Science & Tech"
  },
  {
    "Question": "Fractal Flowers: What is the name for a \"flower\" that is actually composed of thousands of flowers grouped together to form a single flower-like structure? The botanical term for this is a pseudanthium.",
    "Correct Answer": "Composite flower",
    "Response (Davinci GPT-3)": "A pseudanthium is a flower-like structure composed of thousands of flowers grouped together to form a single flower-like structure.",
    "GPT-Correct": 0,
    "Response (J1-Jumbo)": "(c) A pseudanthium is a type of inflorescence, or flower cluster, in which the main axis",
    "J1-Jumbo Correct": 0,
    "User-Correct": "3%",
    "User-N": 501,
    "Question Category": "Science & Tech"
  }
];

var table = new Tabulator("#example-table", {
    height:"40rem",
    data:tabledata,
    layout: "fitColumns",
    columns:[
    {title:"Question", field:"Question", width: 500, formatter: "textarea"},
    {title:"Answer", field:"Correct Answer", formatter: "textarea", "width": 100},
    {title:"J1-Jumbo", field:"Response (J1-Jumbo)", formatter:"textarea", "width": 150},
    {title:"", field:"J1-Jumbo Correct", formatter:"tickCross", width:50},
    {title:"GPT-3", field:"Response (Davinci GPT-3)", formatter:"textarea", "width": 100},
    {title:"", field:"GPT-Correct", formatter:"tickCross", width:50},
    {title:"User-Correct", field:"User-Correct", sorter: "number"},
    {title:"User-N", field:"User-N", sorter: "number"},
    ],
});
</script>
