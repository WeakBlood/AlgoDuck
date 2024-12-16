<!DOCTYPE html>
<html lang = "en">
<head>
<meta charset="UTF-8">
<title>
Introduction to Data Structures
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

# Sparse Table

A sparse table is a very powerful data structure that allows 
us to perform most of range queries in ***$O(logN)$*** with a ***preprocessing of only $O(N \;logN)$***, the big deal comes from the ***$O(1)$*** 
minimum and maximum queries which is much harder to achieve with any other data 
structure. 


~~~cpp
/* WeakBlood <3 */
struct SparseTable{
    // fucking fast query
    vector<vector<int>> table;
    vector<vector<int>> id;
    SparseTable(int N, vector<int> &arr){
        int log = log2(N) + 1;
        table.resize(N,vector<int>(log));
        id.resize(N,vector<int>(log));
        for(int i = 0; i < N; i++){
            table[i][0] = arr[i];
            id[i][0] = i;
        }

        for(int j = 1; j < log; j++){
            for(int i = 0; i + (1 << j) <= N; i++){
                if(table[i][j-1] < table[i+(1 << (j-1))][j-1]){
                    table[i][j] = table[i][j-1];
                    id[i][j] = id[i][j-1];
                } else{
                    table[i][j] = table[i+(1 << (j-1))][j-1];
                    id[i][j] = id[i+(1 << (j-1))][j-1];
                }
            }
        }
    }

    int query(int l, int r){
        int j = log2(r-l+1);
        if(table[l][j]  < table[r - (1 << j) + 1][j]){
            return id[l][j];
        } else{
            return id[r - (1 << j) + 1][j];
        }
    }
};

~~~
</div>

</body>
<footer>

Algoduck © 2024 by WeakBlood is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>.

</footer>
<script>hljs.initHighlightingOnLoad();</script>
</html>