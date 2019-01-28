---
layout: post
title: Measuring the Impact of Topics on Product Rating
featured-img: scorecomputationback 
mathjax: true
---


# Measuring the Impact of Topics on the overall Star Rating of the Product

<br/>

According to research done by KPMG, __72 percent__ of all buyers (not just ecommerce) read online reviews prior to making a purchase decision. The same number for ecommerce buyers is __over 90 percent__. The average star rating of the product is one of the most intuitive indicators of the quality of the product and plays an important role in buying decisions.


Improving ratings, however, requires deep understanding of customer opinion. The learnings from reviews can be taken back to product development and can be used to iterate on the product and service. This enables companies to create products that customers love, resulting in better ratings and better sales.

Understanding customer opinion at scale can be challenging. Using cutting edge neural networks and NLP, it is possible to break down reviews into the topics mentioned and the sentiment associated with them.

At a high level, an impact metric or score can go a long way to communicate what are the largest (or smallest) rating drivers for a product.

Let us look at one such impact metric that is used in the FreeText AI dashboard - the Net Impact score.

<br/>
## What is the Net Impact score?
<br/>
Net Impact Score captures the impact of any given topic on the Average Star Rating of the product. The numeric value indicates the __negative or positive impact (in stars)__ that each topic has on the Average Star Rating of the product.

For instance, consider a product A, with one of the topics, __Battery__, having a Net Impact score of -0.2. This implies that __Battery__ as a topic has contributed negatively to the Average Star Rating of the prodcut and dragged it down by approximately 0.2 stars.

<br/>
## How is the Net Impact Score computed?
<br/>
The computation of the Net Impact Score largely takes into account the following factors -

1. __Importance of each topic__ i.e volume of reviews that mention that topic as a fraction of total reviews.
2. __Sentiment__ of each mention of the topic 
3. __Topical sentiment distribution__, esp when compared with the overall sentiment distribution of the product
4. __Movement in avg. star rating__, as explained by the above signals

Let’s get into some details.

The first step is to compute the range within which each topic can potentially impact the average star rating of the product, both on the positive or negative spectrum. We do this by simulating a completely perfect and completely imperfect world for each topic.

Consider a product with total reviews <code>r<sub>all</sub></code>. The topic __design__ mentioned in a subset of reviews <code>r<sub>subset</sub></code>. Let <code>R<sub>min</sub></code> be the Average Star Rating if all __design__ mentions were negative and similarly <code>R<sub>max</sub></code> if all mentions were positive.

To calculate <code>R<sub>max</sub></code> for the topic, we parse through every negative review mentioning the topic and replace the negative rating with a perfect rating. Then, we calculate the difference it causes in the overall rating of the product.

Let us illustrate this with the help of an example. Suppose in a set of 5 reviews, we want to compute the impact of all reviews mentioning __design__. Here, <code>r<sub>all</sub></code> is all the 5 reviews and <code>r<sub>subset</sub></code> is only the reviews mentioning __design__.

<br/>

<div align="center">
<img src="/blog/assets/img/posts/scorecomputation.svg">
</div>

<br/>
<br/>

Similarly, to calculate <code>R<sub>min</sub></code> for the topic, we parse and replace every positive mention with the worst rating, and determine the lower bound for the overall rating.

The above exercise gives us a range within which the topic __design__ can possibly impact the overall star rating, indicated by <code>R<sub>min</sub></code> and <code>R<sub>max</sub></code>.

Now that we understand the range of impact, the next step is to determine exactly how much has the topic, in isolation, impacted the Average Star Rating.

To do this, we look into the actual distribution of positive and negative mentions for each topic, and understand how it compares with the overall distribution of the product. Depending on the sentiment (positive or negative) of all mentions of the topic and the magnitude of variation from the overall sentiment distribution, the new effective Star Rating of the product is computed, which lies somewhere between <code>R<sub>min</sub></code> and <code>R<sub>max</sub></code>. (In case of 100% positive sentiment, the new Star Rating will be <code>R<sub>max</sub></code> and 100% negative sentiment, it will be <code>R<sub>min</sub></code>)

This new rating is then subtracted from the original rating of the product, to get the Net Impact score.


The Net Impact metric has the following desirable properties:
* since the unit of the metric is in  __stars__, it is easy to interpret as opposed to other confidence measures
* volume weighted ie. inherently takes the volume of the subset wrt superset into account
* takes the phrase based sentiment into account
* simple and easy to explain computation 
* the same method can be used in any scenario where we try to compute the rating impact of a subset of reviews (for eg. the impact of rating of individual products on a brand's overall rating)

<br/><br/>
<br/><br/>
<i>We've built FreeText AI using cutting edge Natural Language Processing to help businesses quantify the qualitative aspects of consumer feedback. </i>

If you would like to know more, do [sign up for a trial](https://freetext.ai).

<br/><br/>
<br/><br/>

