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
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="stylesheet" href="/stylesheet/style.css">
<script src="/js/highlight.min.js"></script>
</head>


<div id="navbar">
  <div class="buttons">

  <a href="/index.html">
  <img src ="/images/duck.png" alt = "duckIco">
  </a>
  <a class="active" href="/index.html">Home</a>
  <a href="javascript:void(0)" id = "Algorithms">Algorithms</a>
<div id = "hiddenNav">
<div class = "buttonLists">
  <a href="javascript:void(0)">Math</a>
  <a href="/Problems/problems.html">Data Structures</a>
  <a href="javascript:void(0)">Graphs </a>
  <a href=""> Strings </a>
</div>
</div>
  <a href="/Problems/problems.html">MyArchive</a>
  <a href="javascript:void(0)">Contact</a>
  <a href="https://github.com/WeakBlood/AlgoDuck">
  <img src ="/images/githubAlt1.png" alt = "githubIco">
  </a>
  
  </div>
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
<script>hljs.initHighlightingOnLoad();</script>

