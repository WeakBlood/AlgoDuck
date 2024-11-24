<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="/stylesheet/style.css">
   <link rel="stylesheet" href="/stylesheet/style.css">
    <script src="/js/highlight.min.js"></script>
</head>

<div style="page-break-after: always;">

# WALRUS SOLUTION

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

