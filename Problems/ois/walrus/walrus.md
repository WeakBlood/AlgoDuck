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
[Getting Started](#per-iniziare)
[My Template](#il-mio-template-base)

</div>
</div>
<div class="content">

# WALRUS SOLUTION


#### Time complexity is $N \; \log(N)$
~~~cpp
/* WeakBlood <3 */
#include <bits/stdc++.h>

#define ll long long int
#define inf 1e9
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    #ifdef LOCAL
    ifstream cin("input.txt");
    #endif
    int T;
    cin >> T;
    while(T--){
        int N;
        cin >> N;
        string s;
        cin >> s;
        priority_queue<array<int,2>> q;
        vector<bool> touched(N,false);
        for(int i = 0; i < N; i++){
            int r = i;
            if(s[r] == '.' && !touched[r]){
                touched[r]=true;
                while(r+1 < N && s[r+1] == '.'){
                    touched[r+1]=true;
                    r++;
                }
                q.push({r-i,(r+i)/2});
            }
        }   
        int warlus = 0;
        int time = 0;
        while(!q.empty()){
            int wakeUP = q.top()[1];
            q.pop();
            warlus++;
            queue<array<int,2>> q1;
            s[wakeUP]='-';
            q1.push({wakeUP,warlus});
            while(!q1.empty()){
                auto [awake,t] = q1.front();
                time=max(time,t);
                q1.pop();
                if(awake-1 > 0 && s[awake-1] == '.'){
                    s[awake-1]='-';
                    q1.push({awake-1,t+1});
                } 
                if(awake+1 < N && s[awake+1] == '.'){
                    s[awake+1]='-';
                    q1.push({awake+1,t+1});
                }
            }
        }
        cout << warlus << ' ' << time << '\n';
    }
    return 0;
}

~~~

</div>
</body>
<footer>

Algoduck © 2024 by WeakBlood is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>.

</footer>
<script>hljs.initHighlightingOnLoad();</script>

