<!DOCTYPE html>
<html lang = "en">
<head>
<meta charset="UTF-8">
<title>
AlgoDuck - Competitive Programming and Algorithm Resources
</title>
<META NAME="Description" CONTENT="Wanna see some algorithms ? You came to the right place. 
AlgoDuck is a project about competitive programming algorithms i'm doing on my own, why ? because i was bored, in fact 
this site does not contain any AD or Payment Program. Maybe once it becomes a quack level site then i will 
add donations, until then, enjoy this personal little mess <3 ">
<link rel="canonical" href="https://algoduck.it/">
<link rel="icon" href="/favicon.ico">
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="stylesheet" href="/stylesheet/style.css">
<script src="/js/highlight.min.js"></script>
<script src="/js/highlightRightNav.js"></script>
</head>

<body>
<div id= "navbar">
</div>
<div class ="non-essential">
<div id="right-navbar">
<div id="space">
</div>

[Introduction](#warning-the-site-is-under-construction)
[Getting Started](#getting-started)
[My Template](#a-simple-template)

</div>
</div>
<div class="content">


# Introduction to Competitive Programming


## ⚠️⚠️WARNING⚠️⚠️ : THE SITE IS UNDER CONSTRUCTION👨‍💻👨‍💻

### STAY TUNED quack-


```cpp
#include <iostream>
#include <string>
using namespace std;
int main() {
    string Author = "WeakBlood";
    cout << "Hello there!!!" << '\n';
    cout << "From: " << Author << '\n';
    return 0;
} 
```

<div>

<pre style="font-size:12pt; line-height: 1.5;">
$ g++ -Wall -Wextra -std=gnu++17 greetings.cpp -o greetings
$ ./greetings
$ Hello there !!! 
$ From: WeakBlood
</pre>

</div>

This site is meant to help anyone who wants to learn some simple or more complex algorithms and with this project i also help ***myself*** by forcing to find 
a good explanation for some concepts.

## Getting Started:

- You will need decent English knowledge (like mine, which is kind of shit) because handbooks, problem descriptions (in case you are solving ICPC, IOI, CF, etc.), and most general resources will be translated in English. In some contests, like IOI, the use of translation tools is strictly prohibited, but still not knowing the language 
will keep you at a disadvantage.
  
 - Knowing basics algebra and geometry concepts.

 - Being competitive.
  
 - A mascotte. ( it's mandatory for good scores in contests and for trying out [RUBBER DUCK DEBUGGING](https://en.wikipedia.org/wiki/Rubber_duck_debugging))
  
 - Last but not least, patience, you will need much, much, too much patience, like everything else, it takes ***time*** to grasp these concepts.
  

For moving your first steps into the competitive programming world you *will* need this handbook ( which i personally call:) [The Bible of Competitive Programming](https://cses.fi/book/book.pdf).

It contains: 

- An introduction to the cp world and basics of STL library.
  
- Almost all of the data structures you will ever need in your cp career.
  
- Greedy Techniques.
  
- Graph Theory.
  
- Dynamic Programming.

- Much more ;)

<div style="font-size:9pt">

> If you don't know the meaning of some of the terms mentioned earlier, don't worry, i gotch u: 

 - STL: It's a C++ library, C++ gives a box full of pre-coded tools like (vectors, lists, queues, stacks, ordering algorithms and much more ), by using these tools 
you will save lots of time and also preserve your mental health.

 - Greedy algorithms follow a simple logic, choose always the option that seems better in that moment, 
even if that means losing a future opportunity. 

  
 - Graphs theory, it's by far my favorite topic, it is not a technique it self, but it allows you to see some problems under a comptely different prespective.
In graphs theory you will have Vertexes which will act as cities or points you can reach, the Edges on the other hand are simply the connections made between each Vertex.
(Two cities are two Vertexes, if from city A you can reach city B this means that there is at least one edge between the two).

 - Dynamic programming is a perfected version of the Greedy strategy, with some assumptions and base cases, you will be able to *construct* a *perfect solution*.
</div>

For starting doing some pratice, you can sign up to and try to solve as many problems as possible most of which will be easily solvable by reading the early mentioned [The Bible of Competitive Programming](https://cses.fi/book/book.pdf). [CSES](https://cses.fi/problemset/).

<div style="font-size: 13px;">

> ***EVEN IF YOU ARE NOT ABLE TO INSTANTLY GET TO A SOLUTION RIGHT, KEEP PUSHING, KEEP TRYING, YOU WILL IMPROVE QUICKLY BY NOT GIVING UP EASILY. ***

> ***This does not mean that you should stay on a single problem for weeks, but at your discretion understand when you are completely stalled an start reading some parts of the solution, if still nothing comes to your mind then read the full solution and try as hard as you can to understand it.***

> For CSES solutions i would recommend this well made repository of an Italian OII champion, [GITHUB SOLUTION](https://github.com/lorenzo-ferrari/cses/tree/main/src) do not abuse this repo. ***You got this!***
>
</div>



#### Here are some great platforms for competitive programming: 
  - [USACOGUIDE](https://usaco.guide/) ( an extremely detailed and on point guide with all the needed topics. )
  
  - [CSES](https://cses.fi/problemset/) ( problem set mentioned above. )

  - [LEETCODE](https://leetcode.com/) ( just kidding, stay away from this, at least for the pricey useless features, remember: 
***YOU WILL NEVER HAVE TO PAY SOMEONE ON THE INTERNET FOR GETTING  THIS KIND OF KNOwLEDGE.*** )

  - [CODEFORCES BLOGS](https://codeforces.com/) ( the best of the best for any experience range competitive programmer, full of precious blogs made by ***red coders.*** )
  ( The only drawback is that it can be really inconsistent.)
  
  - [WIKI/OLINFO](https://wiki.olinfo.it/) (A LITTLE GEM FROM MY COUNTRY, FULL OF COOL TOPICS AND IMPLEMENTATIONS)
  (Drawback: Is completely written in italian XD )


### A simple template: 

~~~cpp
#include <bits/stdc++.h> // including the header stl mentioned earlier

#define ll long long int // setting some macros for fast writing 
#define inf 1e9
using namespace std; 

int main(){
    ios_base::sync_with_stdio(false); // this and the other line will speed up I/O operations
    cin.tie(NULL);
    #ifdef LOCAL // compiler command for executing parts of code only locally 
    ifstream cin("input.txt"); // reading by file.txt 
    #endif
    return 0;
}

~~~
<div style="font-size:8pt;">

>In this template:

 >- I am adding the library for getting lots of pre-coded algorithms out of the box, the library it self is *not* an heavyweight library.

>- I am adding macros "#define" that allows me to write a custom shortcut for simplicity and speed. ( You can even create macros with arguments ).
  
>- The namespace std; allows me to skip the syntax needed before using any element from a library for example vector without it would be std::vector<> instead of 
vector<> 
  
>- In the main function, i added some lines for fast I/O and check if the code is being compiled locally or not which is a really useful thing for debugging.

</div>
</div>
</body>
<footer>

Algoduck © 2024 by WeakBlood is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>.

</footer>
<script>hljs.initHighlightingOnLoad();</script>
</html>
