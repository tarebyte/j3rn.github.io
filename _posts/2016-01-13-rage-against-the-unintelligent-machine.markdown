---
layout: post
title:  "Rage Against the Unintelligent Machine"
date:   2016-01-13 10:08:00 -0500
categories: ai machine-learning
---

Today marked the first time I was ever so uncomfortable in a class that I nearly got up and walked out. Such a level of discomfort is not new to me in general, however. It was, in fact, common during my review of candidates' projects during my involvement one of my former employer's hiring process. Someone might ask the candidate something like "How does user authorization work?" They'd drone on about encryption, throwing out buzzwords and waiting to see a spark in someone's eye, letting them know they weren't a complete failure. It would never come. I would start getting jittery. I would feel an irrepressible urge to jump up and yell profanity, to tear out my hair and flip things.

It was like that, but in a university course. The professor started at the natural beginning, "What is A.I.?" A natural question that you would rather hope students would know the answer to as a prerequisite for taking the course. "What," you might ask, "*is* A.I., by his definition?" A machine behaving intelligent; having at least a facade of understanding.

> Having at least a fascade of understanding

At this point, I shuffled uncomfortably in my chair. While this concept dates back to Dr. Alan Turing, a man widely considered the father of modern computing, this idea of a facade of intelligence with no real intelligent underpinning disturbs me. Dr. Turing is widely known for creating the "Turing Test," a common standard of intelligent behavior among A.I. researchers in which a machine must be able to fool a human interrogator into believing that it is a human. Several programs, even rather trivial ones, have been able to pass this test, from time to time. I do not believe these programs deserve the badge of "intelligence," artificial or not.

> Several programs, even rather trivial ones, have been able to pass this test, from time to time

Let's say you disagree. Let's say that you think that there is no need to understand how a human brain (or otherwise) works in order to replicate its output. Fine, let's agree to disagree and move on. So you want to create a machine that will *act* "intelligent." What is this "intelligence" anyway? Just on cue, the professor ever so slightly bumps the issue. He states something akin to:

> "Intelligence is hard to define. For that reason, we don't. We just know intelligence when we see it. We can interact with a thing, and know that it is intelligent."

Another uncomfortable jerk. You think that you just *know* intelligence? You don't think you *might* want to have a destination in mind before starting to run full speed? It's really no wonder the A.I. field doesn't seem to have progressed since the 50's. Why is it that we humans expect ourselves to be the arbiters of intelligence, being able to distinguish the intelligent from the unintelligent through some sixth sense? You may have already deduced this expectation from the Turing Test itself. The test puts the emphasis on the interrogater simply *believing* that the computer is intelligent. Nevertheless, I had rather hoped that someone might have wondered "If it must seem intelligent, shouldn't we try to actually define what that means?" Evidently not.

> Why is it that we humans expect ourselves to be the arbiters of intelligence, being able to distinguish the intelligent from the unintelligent through some sixth sense?

But wait! Here, the professor brings up a definition of intelligence from John McCarthy, a long-time A.I. researcher and the inventor of LISP. The quote is as follows:

> "Intelligence is the computational part of the ability to achieve goals in the world."

I think on this for a minute. My intuition tells me that this is utter rubbish, but I'm not going to just blow off a quote by a major computer scientist on my intuition alone. Let's break this quote down.

> "...achieve goals in the real world"

OK, sure. There's some goal that needs achieving. Like writing this blog post, catching a ball, holding a conversation, etc. How does intelligence fit in again?

> "Intelligence is the computational part of..."

I considered this thoughtfully. Merriam-Webster defines "computational" in terms of "compute", which it defines, in turn, as "to find out (something) by using mathematical processes." What part of writing this blog post requires that I use mathematical processes? What part of catching a ball or holding a conversation involves mathematical processes? It is true that you could write an algorithm to transform my notes from class (input) to this blog post (output), much like in Searle's [Chinese Room](http://plato.stanford.edu/entries/chinese-room/). But is that really going on in my head? Would such an algorithm be able to create different blog posts for different inputs as my brain would be able to for multiple sets of notes? What if my entire life was fed as input? Or is there a large ALU somewhere in my skull performing mathematical calculations resulting in the words I write?

> But is that what is really going on in my head?

At an abstract level, it seems somewhat believable. I believe that you could, perhaps, abstract the workings of the brain into a mathematical model, though it would be rather complex. However, I'm not inclined to believe that Dr. McCarthy and I agree on a level of abstraction. Besides, A.I. researchers don't care about how brains work anyway, remember?

Suddenly, things took a turn for the worse. The professor gave forth the reasoning for "Weak A.I." (just trying to emulate output) over "Strong A.I." (simulating a brain, or brain-like functions): Brains are complex. Frankly, goes without saying. If brains were simple, there would be some sort of concensus over how they work at a variety of levels, which there certainly is not.

> Brains are complex

However, as an excuse for not attempting to understand or replicate the inner workings of brains, this idea is ludicrous. To imagine that replicating each of millions of features of a brain, separately, using disparate mathematical methods is *simpler* than trying to learn from nature is preposterous. Don't believe me? Let's look at an example. Let's say you have a chess-playing program that operates by classical A.I. methods: the application of various clever data structures and algorithms. Sure, it plays chess well enough to beat a world champion. Congratulations! But what if I wanted to play checkers against it instead? The rules of checkers are quite different from those of chess, so I imagine that to add some world-class checkers-playing ability while retaining your program's chess-playing skill, you'll have to add some complexity to your code base. What if I wanted it to pass the Turing Test too? What if I wanted it to catch a ball? We are awash in compounding complexity.

> But what if I wanted to play checkers against it instead?

When you think about the problem from the A.I. researcher's position, though, the "advanced data structure and algorithm" route seems intuitive. These are the master tools of the trade, after all. With them, you can accomplish anything! On the other hand, it's somewhat akin to a professional tennis player wanting to use his tennis racket to hit a home run. After all, he masterfully uses that racket to defeat his opponents in another arena, why shouldn't it work on the baseball diamond? The fallacy in the example of the tennis player clear, but evidently the equivalent in computer science has yet to be widely accepted. Perhaps, just perhaps, tools need a little retooling to attack a different class of problem.

> Tools need a little retooling to attack a different class of problem

I suppose the my final cringe came when I saw a quote from Dr. Ray Kurzweil appear in the presentation. I am rather sure that Dr. Kurzweil would be ashamed to appear amongst such rubbish. I will not go into detail here, but Dr. Kurzweil's methods of creating intelligent computer programs are far from the "forget brains and just throw algorithms at the problem" approach. In case you are interested in learning more about his work, I have included a link to his book "How to Create a Mind" below.

Perhaps what really got me was that this class appears to be exactly what I was afraid it would be. In the beginning of his masterful work "On Intelligence," Jeff Hawkins lays out the history of the A.I. movement, and critiques its fallacies and shortcomings. What Hawkins was witnessed the A.I. movement in the 1980's, and, evidently, it hasn't changed at all.

## Resources

**If you are interested in researching a different, more brain-centric view of creating intelligent computer programs, or simply think that it would be nice to have a definition of what intelligence is before attempting to create it, I encourage your to give the books below a look.**

- [On Intelligence](http://www.amazon.com/Intelligence-Jeff-Hawkins/dp/0805078533/) by [Jeff Hawkins](https://en.wikipedia.org/wiki/Jeff_Hawkins).
- [Numenta White Paper](http://numenta.org/resources/HTM_CorticalLearningAlgorithms.pdf) suplimenting the above text (direct link).
- [How to Create a Mind](http://www.amazon.com/How-Create-Mind-Thought-Revealed/dp/1491518839) by [Dr. Ray Kurzweil](http://www.kurzweilai.net/ray-kurzweil-biography).
