

<head>
<meta charset="UTF-8">
<title>ALGODUCK</title>
<META NAME="Description" CONTENT="Wanna see some algorithms ? You came to the right place.">
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

  ![LOGO](/duck.png)
  <a class="active" href="/index.html">Home</a>
  <a href="javascript:void(0)">Data Structures</a>
  <a href="/Problems/problems.html">Problems</a>
  <a href="javascript:void(0)">Contact</a>
  </div>
</div>

<div class ="non-essential">
<div id="right-navbar">
<div id="space">
</div>

[Introduction](#introduction-to-competitive-programming)

</div>
</div>
<div class="content">

# Introduction to Competitive Programming
### WARNING : THE SITE IS UNDER CONSTRUCTION

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

<div style="font-size:30pt; line-height: 1.5; font-family: 'Courier New', Courier, monospace;">

<pre style="font-size:12pt; line-height: 1.5;">
$ g++ -Wall -Wextra -std=gnu++17 greetings.cpp -o greetings
$ ./greetings
$ Hello there !!! 
$ From: WeakBlood
</pre>

</div>

Competitive programming is a ***sport***, a mental one, you need just to write 
some lines of c++ code, but to write those lines, you need endless preparation.

***Se questo può sembrare simile al processo di risoluzione di un problema matematico è perchè ogni problema di questo tipo ha una o più soluzioni, e la loro correttezza può essere dimostrata matematicamente!***  

## Requisiti:

 - Conoscenza base della lingua inglese poichè: Manuali, descrizione del problema e dispense di ogni tipo saranno gran parte delle volte disponibili ***SOLO IN INGLESE***, ed una traduzione letterale del linguaggio tecnico (come quella di google translate, strumento per giunta proibito dal [regolamento](https://drive.google.com/file/d/13te3l83j3q-u_q7Gp0YybwvLwH33KOgY/view)) spesso porterà ad ***incomprensioni.***
  
 - Conoscenza di concetti base dell'aritmetica e della geometria, quando dico di base, lo intendo, non ti servirà risolvere integrali o mettere a sistema qualche variabile.

 - Spirito competitivo.
  
 - Una mascotte. ( Fondamentale per la buona riuscita del contest)
  
 - Tanta, molta, moltissima pazienza, ma credimi, è una soddisfazione, come tutte le attività alle quali si dedica molto tempo ;)
  
<div style="font-size: 10px;">

> ***"Non sarà possibile utilizzare dizionari o traduttori cartacei o in formato elettronico."*** (Art. 8 Regolamento OIS)

</div>



## Per iniziare:
Per muovere i primi passi in questo mondo ti consiglio caldamente di metterti sotto braccio una copia della [bibbia del competitive programming](https://cses.fi/book/book.pdf) essa comprende: 

- Introduzione al competitive programming e funzionamento della STL.
  
- Strutture dati fondamentali.
  
- Greedy Techniques.
  
- Graph Theory.
  
- Dynamic Programming.

- Much more ;)

<div style="font-size:9pt">

> Il non conoscere i termini che ho appena utilizzato è perfettamente normale, giusto per spiegarteli al volo: 

 - STL: Immagina che C++ ti dia una scatola piena di strumenti (vettori, liste, code, pile e tanto altro) che ti aiutano a risolvere rapidamente diversi tipi di problemi senza doverli reinventare da zero.

 - Le tecnica greedy segue un semplice esempio: Pensa a una persona che, in un viaggio, prende sempre la decisione più vantaggiosa al momento, senza considerare cosa potrebbe essere meglio nel lungo termine. Alcuni problemi sono strutturati in modo che questo ragionamento funzioni sempre, altri invece, richiederanno accorgimenti ulteriori.
  
 - Teoria dei grafi è uno degli argomenti più intriganti del competitive programming, si basa su Nodi (punti, non geometrici) ed Archi (collegamenti tra di essi) dovrai spesso esplorare le proprietà di essi ( distanza tra due o più Nodi, percorsi tra nodi aventi proprietà particolari etc ) ti servirà decisamente un quaderno per risolvere i problemi di questa categoria ;)
  
 - Dynamic programming è una versione perfetta della tecnica greedy menzionata prima, con il dynamic programming si intende costruire la soluzione partendo da uno o più casi base/assunzioni.
</div>



Tale testo deve essere inteso come un manuale, ogni volta che leggi un problema prova a vedere se una delle tecniche di [questo handbook](https://cses.fi/book/book.pdf) può essere applicata nella soluzione e poi prova ad implementarla!

Per la pratica, può essere una buona idea provare a risolvere più problemi possibili del noto problem set [CSES](https://cses.fi/problemset/).
<div style="font-size: 13px;">

> ***GRAN PARTE DEI PROBLEMI PRESENTI IN QUESTO PROBLEMSET SONO RISOLVIBILI CON UNA LETTURA ATTENTA DEL MANUALE, CERCA DI RESISTERE ALLA TENTAZIONE DI LEGGERE LE SOLUZIONI IMMEDIATAMENTE, SOLO CON LA PAZIENZA MIGLIORERAI GIORNO DOPO GIORNO!***

 ***Qualora dopo svariati tentativi non riuscissi proprio a trovare una soluzione, non ti preoccupare, scrivi il nome del problema specificando "CSES" alla fine della ricerca, questa ricerca ti metterà davanti a soluzioni implementate da altri utenti le quali implementazioni a primo impatto risulteranno essere scritte in arabo.***

> Per le soluzioni CSES ti consiglio quindi [questa github repository molto più comprensibile](https://github.com/lorenzo-ferrari/cses/tree/main/src) miraccomando, non abusare di questa repo, ***puoi farcela anche senza***!
>
</div>

Per avvicinarti allo stile delle oilimpiadi italiane comincia dai problemi sulla piattaforma ufficiale di allenamento dove [ALGOBADGE](https://training.olinfo.it/algobadge/intro) e [problemi taggati territoriali](https://training.olinfo.it/tasks/terry/1) ti offriranno una solida base.


#### Oltre al manuale per uno studio guidato considera l'utilizzo di: 
  - [USACOGUIDE](https://usaco.guide/) ( una guida estremamente dettagliata ma con esercizi provenienti dalla piattaforma di allenamento USA)
  
  - [CSES](https://cses.fi/problemset/) ( il problem set completo menzionato prima, le spiegazioni dei problemi si trovano con estrema facilità sul web)

  - [LEETCODE](https://leetcode.com/) ( just kidding, da questo stanne alla larga, non c'è bisogno di spendere soldi per accedere al sapere :)

  - [CODEFORCES BLOGS](https://codeforces.com/) ( estremamente dispersivo ma pieno di gemme preziose ed implementazioni mozzafiatto di alcuni ***red coder.*** )
  
  - [WIKI/OLINFO](https://wiki.olinfo.it/) (anche questo non segue alcun filo logico ma andando in alcune cartelle OII si troverà una cartella "stage" in essa sono contenute lezioni completamente in italiano su tecniche di base ma anche tecniche molto complesse.)


### Il mio template base: 

~~~cpp
#include <bits/stdc++.h> // includo la libreria menzionata prima

#define ll long long int // creo qualche macro per abbreviare
#define inf 1e9
using namespace std; 

int main(){
    ios_base::sync_with_stdio(false); // questa e la linea dopo 
    cin.tie(NULL);// servono per ottimizzare le operazione di input/output
    #ifdef LOCAL // comandi al compilatore 
    ifstream cin("input.txt"); // lettura da file 
    #endif
    return 0;
}

~~~
<div style="font-size:8pt;">

>Nel template:

 >- Includo la libreria STL menzionata prima in modo da avere a disposizione molte strutture dati, raramente l'inclusione 
di così tante strutture in una volta sola causerà problemi di efficienza. 

>- Aggiungo i define che mi consentono di rinominare determinate scritture per esempio ogni volta che scriverò "ll" sarà per il codice come se avessi scritto "long long int" il punto di questo è un guadagno ingente di velocità di scrittura.
  
>- La namespace mi serve per evitare di aggiungere prima dell'utilizzo di funzioni provenienti dalle libraria la dicitura "std::" la quale è decisamente scomoda.
  
>- Nel main ho aggiunto un paio di righe che ottimizzano le operazioni I/O, credimi, fanno la differenza quelle due linee in termini di velocità di lettura e scrittura.
  
>- Infine #ifdef è un comando riferito al compilatore, dice al computer che se il codice è eseguito con quel flag in questo caso "LOCAL" allora deve eseguire quelle cose tra #ifdef ed #endif, io solitamente aggiungo una lettura da file ma non una scrittura in modo che il risultato mi venga stampato sul terminale senza bisogno di andare ad aprire l'output.txt ogni volta.

</div>
</div>

<script src="/js/highlightRightNav.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

