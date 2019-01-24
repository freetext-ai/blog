---
layout: post
title: Measuring the Impact of Topics on Product Rating
featured-img: scorecomputationback 
mathjax: true
---


# Measuring the Impact of Topics on Product Rating

<br/>

According to research done by KPMG, __72 percent__ of all buyers (not just ecommerce) read online reviews prior to making a purchase decision. The same number for ecommerce buyers is __over 90 percent__.

Improving ratings, however, requires deep understanding of customer opinion. The learnings from this can be taken back to product development and can be used to iterate on the product. This enables companies to create better products that customers love, resulting in better ratings and better sales.

Understing customer opinion at scale can be challenging. Using cutting edge neural networks and NLP, it is possible to break down reviews into the topics mentioned and the sentiment associated with them.

However, at a high level, an impact metric or score can go a long way to communicate what are the largest (or smallest) rating drivers for a product.

Let us look at one such impact metric that is used in the FreeText AI dashboard for customer review understanding.

<br/>
## Impact Scoring function
<br/>
Let's say we want to compute the impact of a subset of reviews <code>r<sub>subset</sub></code>, given a set of reviews <code>r<sub>all</sub></code>. We can simply replace all the <code>r<sub>subset</sub></code> reviews with a perfect rating, and then calculate the difference it causes in the average rating of <code>r<sub>all</sub></code>.

Let us illustrate this with the help of an example. Suppose in a set of 5 reviews, we want to compute the impact of all reviews mentioning __design__. Here, <code>r<sub>all</sub></code> is all the 5 reviews and <code>r<sub>subset</sub></code> is only the reviews mentioning __design__.

<br/>

<div align="center">
<img src="/blog/assets/img/posts/scorecomputation.svg">
</div>

<br/>
<br/>

We replace the ratings of reviews that mention __design__ with a perfect score and measure the difference it causes to the average rating. One way to interpret this metric is that if __design__ was improved the potential overall rating impact that can be seen is __1.4 stars__ 

This metric has the following desirable properties:
* since the unit of the metric is in  __stars__, it is easy to interpret as opposed to other confidence measures.
* volume weighted ie. inherently takes the volume of the subset wrt superset into account
* simple and easy to explain computation 
* the same metric can be used in any scenario where we try to compute the rating impact of a subset of reviews (for eg. the impact of rating of individual products on a brand's overall rating)

<br/><br/>
<i>We've built FreeText AI using cutting edge Natural Language Processing to help businesses quantify the qualitative aspects of consumer feedback. </i>

If you would like to know more, do [sign up for a trial](https://freetext.ai).


