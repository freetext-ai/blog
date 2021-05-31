---
layout: post
title: Review Analysis for Amazon Review Analytics
featured-css-class: blue-gradient-bg
mathjax: false
---


# Intro

<br/>
Brands that care about Customer Experience know that support is only a part of the picture. Listening to the customer is super important. How else is a brand supposed to understand what their customers actually want?

Reviews are an important part of the process - they are unprompted (hence not suffering from survey biases), honest and abundantly available. Any brand looking to understand customers from any category need to take a close look at reviews. Major brands selling on marketplaces will likely have Amazon reviews or any of their marketplaces.

In this article, we will outline the current state of the art methods to analyze reviews and also look at AI text mining solutions for customer feedback analytics.

<div style="background: radial-gradient(circle at center, #fff, #fff, #466997);">
<img src="/blog/assets/img/posts/sources.png" style="max-height: 30rem; max-width: 100%; margin-left:auto; margin-right: auto; display: block; background: white;"/>
</div>
<br/>
# Marketplace Overview
<br/>

Customers speak freely about their product experiences in the places that they buy the product from. Undoubtedly, the biggest online retailer today is Amazon hence Amazon Reviews play a crucial role in customer sentiment. Amazon Reviews are also a goldmine of information for someone trying to understand the nuances of a category. Sentiment analysis on review text along with topic detection can give a broad view of customer sentiment and preferences.

In addition to Amazon reviews, other marketplaces like BestBuy, Target, HomeDepot, Bed Bath & Beyond, etc. may also contain large volumes of reviews depending on the category.

For Apps, the Apple App Store reviews and Google Play Store reviews are the major sources with close to 100% of all app reviews flowing into one of these platforms.

<div class="cta">
<b>Start analyzing feedback now!&nbsp;&nbsp;</b><a href="https://freetext.ai/signup" class="btn">Get Started</a>
</div>
<br/>

# Review Analysis
In order to analyze reviews, broadly there are three steps: Data Gathering, Analysis and Visualization.

## Data Gathering / Scraping
In this step, we understand the process of gathering the data from the various marketplace sources.
Following are the tools commonly used for scraping from the web:
- [Selenium](https://www.selenium.dev/) - Browser automation based scraping
- Python
	- [Scrapy](https://scrapy.org/)
	- [LXML](https://lxml.de/) - Library for HTML and XML parsing
	- [Beautiful Soup](https://pypi.org/project/beautifulsoup4/) - More modern XML/HTML library
	- [Selenium Python library](https://pypi.org/project/selenium/) - Works in conjunction with the Selenium standalone tool
- Javascript
	- [Jsdom](https://github.com/jsdom/jsdom) - HTML extraction library for JS
	- [Cheerio](https://www.npmjs.com/package/cheerio) - Lighter weight library compared to Jsdom
	- [Puppeteer](https://developers.google.com/web/tools/puppeteer) - Headless browser tool much like Selenium
- Ruby
	-	[Nokogiri](https://nokogiri.org/) - HTML/DOM parsing

The right tool set required to scrape from a website could be different based on the tech used on the website.

## Analysis
In context of review analysis, the biggest problems to solve are Aspect Classification (identifying the topic being spoken about) and Sentiment Classification (inferring whether the user is complaining or praising).

In order to understand the text, Natural Language Processing (NLP) is used. NLP is a field that deals with gathering information from unstructured text. As a field has experienced a renaissance in the past few years with the application of Neural Networks and Transfer Learning.

Neural Networks is a field of Machine Learning that gathers inspiration from the inner working of the brain to solve problems. Transfer Learning is a sub-field that specializes in leveraging learning from one domain to solve problems in another.

In Neural Networks, Convolutional Neural Networks, LSTMs and more recently Transformers are some of the techniques that are state of the art and can be used to solve many problems like sentiment analysis and topic detection.
Most neural networks these days either use <b>PyTorch</b> or <b>Tensorflow</b>.

The most popular modern <b>open source</b> libraries used are:
- [HuggingFace Transformers](https://huggingface.co/transformers/)
- [Spacy](https://spacy.io/)
- [Gensim](https://radimrehurek.com/gensim/)
- [PyTorch NLP](https://pytorchnlp.readthedocs.io/en/latest/)

The machine learning process usually looks like the following:
<div style="background: radial-gradient(circle at center, #fff, #466997);">
<img src="/blog/assets/img/posts/blog_post_nn_block_diagram.png" style="margin-left: auto; margin-right: auto; display: block; max-height: 100%;"/>
</div>
#### Typical Machine Learning process

Using an off the shelf SaaS solution for these usually offloads these steps and saves huge development costs.

## Report Generation
First step here is to figure out the right view and visualizations required to get the most out of the data. This is often the most challenging part, and is often overlooked.

The data is then transferred to a visualization platform like Tableau, Qlik, ChartIO or Google Data Studio.

# Specialized SaaS Tools
Instead of building a platform like this in-house with data scientists, engineers and data analysts, a solution like FreeText AI might be the right solution for brands.

FreeText AI is a turnkey solution for brands to gather all their feedback in one central location and make sense of it. Years have been invested in creating the right toolset, so that you don’t have to.

With FreeText AI, brands do not have to worry about data gathering, analysis and report generation. Instead, all the data is exposed through an easy to use dead-simple dashboard.

<div class="cta">
<b>Start analyzing feedback now!&nbsp;&nbsp;</b><a href="https://freetext.ai/signup" class="btn">Get Started</a>
</div>


In order to add a source in FreeText AI dashboard, you just have to provide the URLs of the products.

<img src="/blog/assets/img/posts/add_products.png" style="margin-left: auto; margin-right: auto; display: block; max-height: 100%;"/>
#### Add products by URL

Alternatively, the entire category can be automatically added instead of adding individual product SKUs.

FreeText AI is designed with scale in mind, so entire categories of products with hundreds of thousands of reviews can be analyzed.

Analysis comprises of review sentiment analysis and topic detection using automated machine learning models.

Once, the products are added and processed (takes a few minutes depending on the number of products) the data is ready to be explored!

Let’s take a look at the overview dashboard for an individual product

<div style="background: radial-gradient(circle at center, #fff, #fff, #466997);">
<img src="/blog/assets/img/posts/product_report.png" style="margin-left: auto; margin-right: auto; display: block; max-height: 100%;"/>
</div>
#### Product view in FreeText AI Dashboard

Goal of the product overview dashboard is to make all the high-level and root-cause analysis available in one go. A quick glance at the dashboard and the following questions can be answered:
- <b>How many reviews came in for the given time period?</b>
- <b>What was the rating breakdown (both star rating and review rating)?</b><br/> Note that in many cases there can be a difference between the star rating and the review rating. Review ratings tend to be more detailed and thought through, and hence in many cases they would be a lower score.
- <b>What is the overall sentiment trend?</b>
- <b>What are the topics that people are talking about</b>
- <b>What is the breakdown of the top positive and top negative topics that have been spoken about</b>

We can also realign our focus and create this report for only negative reviews, or positive reviews or focus on a particular time period.



<img src="/blog/assets/img/posts/screenshot-filters.png" style="margin-left: auto; margin-right: auto; display: block; max-height: 100%;"/>
#### Filter Records

Zooming out, there could be trends on a product group - say a brand or a sub-category level - that could reveal interesting consumer patterns as well. Trends that might not be obvious on a product level could reveal themselves while looking at the category as a whole.


<div style="background: radial-gradient(circle at center, #fff, #466997);">
<img src="/blog/assets/img/posts/category-screenshot.png" style="margin-left: auto; margin-right: auto; display: block; max-height: 100%;"/>
</div>
#### Product Group Report

Another way to look at this is to zoom in and understand what exactly users are saying. This is where the Explore view comes in - this view focuses on exploring just what the users are saying in the text.

<div style="background: radial-gradient(circle at center, #fff, #466997);">
<img src="/blog/assets/img/posts/screenshot-topics_table.png" style="margin-left: auto; margin-right: auto; display: block; max-height: 100%;"/>
</div>
#### Topics Explore Table


As you can see, all the topics and sub-topics mentioned are categorized. The sentiment and volume bars at a glance tell what the trend has been and what the positive/negative split of the mentions have been.

Clicking on a topic opens inline all the mentions, with highlights indicated why the AI thought a particular text was classified into the topic. This also allows us to read verbatim of the text and actually read the contents as the user has exactly stated.


<img src="/blog/assets/img/posts/demogif.gif" style="margin-left: auto; margin-right: auto; display: block; max-height: 100%;"/>
#### Explore Mentions and Highlights

In addition to this, searching for specific keywords or terms is also enabled and so is comparison between product groups, with the same goodness of exploration of volume trends and sentiment split reports.

# Challenges
Let's now take a look at some of the challenges of doing review analysis.

## Data gathering challenges
The first step to do review analysis is to gather the requried data. Now, the requried data may be split in multiple places. For eg. a brand could have some Amazon reviews, and reviews in their listings on BestBuy, Target and their own D2C website. Typical challenges involve gathering reviews at scale, dealing with technical blockades etc. Another major challenge is to keep up with the changes made to the marketplace website, which can be very frequent at times. Another challenge is to ensure that the data is complete and converted to a standardized format - which is trickier than it sounds.

## Text Analytics challenges
The next challenge is around text analytics. Sentiment analysis might seem straight forward, except when you consider the edge cases. For example, is being "light" is a good thing or a bad thing? For eg. "The product was too light" - could be a good thing if it is say a laptop, and a bad thing if it is a paper-weight. Likewise, the same word "light" has many connotations - "light" as a noun as in "LED light" or say "light a fire". These kind of ambiguous nuances are filled in natural languages and not handling them right can lead to disastrous outcomes.

## Reporting challenges
Even after gathering the data, and analyzing the text the problem is not fully solved. Then comes the next step - reporting. Most people understand that reporting involves creating visualizations that make sense. But it doesn't end there - perhaps the most important aspect of reporting that is often overlooked is Aggregation. Aggregation involve combining entities and units into groups that makes sense for reporting. This can be tricky, especially if you consider that the data we are dealing with can be Big Data - with hundreds of thousands of pieces of feedback. Another tricky part of reporting is [understanding the impact](https://freetext.ai/blog/reivew-topic-impact-score/) of each insight from the feedback.

A tool like FreeText AI was explicitly built with these considerations in mind, can has use the core engineering expertise of their team to get around some of these challenges.

<br/>
<br/>
# Takeaway
<br/>
Understanding reviews is key to unlocking customer value. Modern review analysis tools leverage technologies like Neural Networks to enable mining insights from marketplace reviews.

<div class="cta">
<b>Start analyzing feedback now!&nbsp;&nbsp;</b><a href="https://freetext.ai/signup" class="btn">Get Started</a>
</div>
<br/>

