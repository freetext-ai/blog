---
layout: post
title: Intercom Chat Analysis for Customer Insights
featured-img: intercom
mathjax: true
last_modified_at: 2018-08-13 00:00:00 +0530
---


# Analyze Intercom feedback to understand user needs and pain-points

<br/>

We live in the Intercom era.

Chat support has become indespensible
to online businesses. It says "we are here for you" - assuring the best of customer service.

Besides quality customer service, this also serves a secondary purpose - it is a user activity log. A record of the moments where the website or app by itself was not sufficient to fulfill the user journey, and the user had to fall back to a support system for help.
Analyzing the patterns in your Intercom chat transcripts is a useful tool to understand user
behavior. It can identify gaps in documentation, difficult to navigate sections of the website
and common feature requests. It can shape the next iteration of the product.

The process, if done right this will reduce questions (or atleast make them easier to answer), reduce complaints about issues, reduce reliance on customer support and ultimately increase user happiness.

To analyze chat conversation transcripts, the first step is to come up with a "coding" or "tagging" that accurately reports patterns in the chats. It is a process of categorizing qualitative data to help facilitate analysis. This is a subjective process, so there is no "correct" tagging for a given corpus. The key is to do so accurately and without loss of detail.

The broad types of coding can be classified as:
- Manual Tagging
- Natural Language Processing / Text Analysis

Let's take a look at each of these.

<br/>

## Manual Tagging

<br/>

This is a completely manual process of content analysis. As the name suggests, it involves humans manually setting up the tagging structure and going through each of the conversations to figure out the correct tags.

Although, this sounds straightforward, in practice it might not be the case. Figuring out the right set of tags for content can often be a chicken and egg problem. One does not know the right set of tags till one goes through a large enough sample, at the same time one cannot keep track of a large sample without tagging!

Also, however tempting it might be, it is important to keep the process of tag identification separate from other processes (like answering customers). This is because the purpose of the tags is to provide a high level view of the underlying conversations - and it can be very easy to fall into the trap of *incorrect tagging*.

It is important to not do the coding process along with the usual customer service requests - because it can be impossible to determine the actual category to classify the requests under. Sometimes, the categorization will only become clear when looking at all the data from an aggregate stand point.

The process looks like:
*   __Gather all chat conversations__

    In case of Intercom, this is not as straightforward as of this writing. Intercom recommends either using the REST API to fetch the chat transcripts or have intercom send emails at the end of each conversation. In both cases, there is some form of data translation to be able to get the conversations into your Spreadsheet of choice (Excel / Google Spreadsheet / Lotus ? :S)

*   __Randomly sample N chat conversations and arrive at a tag set__

    Next, the task is to go through N random conversations to identify a universe of tags that can be applied. N should be greater than 1000. Also, note that N conversations need to be as close to random as possible - else the tag set will end up having unexpected biases.

    Also, note that it is important to update the tag set with time, as in order to be able to catch new patterns in data.

*   __Use the tag set to assign tags to all the conversations__

    Tagging can be done on either all the chats, or on a randomly drawn sample from the data. In the case of a random sample, it is important to ensure the randomness and to draw a large enough sample (typically atleast 2000 conversations)

Manual tagging can be an effective tool to perform one-off analysis. However, it is important to avoid common pitfalls:
1.  __Selection bias__ is that humans tend to pay uneven attention to things. Typical examples of this can be things like over representing people who use foul languauge.

2.  __Confirmation Bias__ is a tendency that humans tend to accept things that match their existing thoughts. This can be dangerous, since this is exactly the kind of thing we try do avoid by doing this tagging exercise.

3.  __Recency Bias__ is to focus on things that have happened recently. This can be good thing or a bad thing, depending on the context. In either case, it is important to be aware of the fact that recency bias can distort any analysis.

4.  __Belief Bias__ is the tendency to draw conclusions based on what is believable or "explainable". An example can be high drop offs due to a bug in the checkout process, as opposed to say a missing crucial feature.

5.  __Clustering illusion__ is the belief that a pattern that is spotted in the data is a larger pattern than it actually is.

<br/>

## Tagging using Text Analysis

<br />

Meanwhile, the field of Natural Language Processing (text analysis) has progressed quite a bit in the past few years. We cannot yet have computers comprehend a piece of text or a book like a
human would. But, we sure can use it to detect recurring patterns in user feedback.

Typically, this is how this would work

*   System gathers data from the source. In case of Intercom, this is done by using __OAuth permissions__ granted by the user.

*   Patterns are pulled form the data using various Natural Languauge Processin and Machine Learning techniques. Ideally the patterns pulled should capture both global and local context. __Global context__ is common recurring patterns that occcur across all businesses. Examples of these are things like "Expensive Pricing" or "Checkout Failure". __Local context__ is the context that is particular to your business or app.

*   A human would look at these patterns and decide to combine these patterns into larger actionable buckets.

Once this is done, the benifits of using machines really starts to shine. You can start extracting periodic summary of your Intercom Chat transcripts. It can also be an effective impact measurement tool - Has my bug fix actually reduced complaints about the issues?  - Did the documentation update actually reduce user confusion on the topic?

Looking at feedback can be very effective in understanding user behavior and driving product development.

We built FreeText AI are already working with businesses to address some of these issues.

If you would like to know more, do [sign up for a trial](https://freetext.ai).

<br/><br/>
<br/><br/>
<br/><br/>


