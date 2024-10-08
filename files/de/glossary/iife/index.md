---
title: IIFE
slug: Glossary/IIFE
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{GlossarySidebar}}

Ein **IIFE** (Immediately Invoked Function Expression) ist eine {{Glossary("JavaScript", "JavaScript")}}-{{Glossary("function", "Funktion")}}, die ausgeführt wird, sobald sie definiert ist. Der Name IIFE wurde von Ben Alman in [seinem Blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife) geprägt.

```js
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```

Es handelt sich um ein Entwurfsmuster, das auch als {{Glossary("Self-Executing_Anonymous_Function", "Self-Executing Anonymous Function")}} bekannt ist und zwei Hauptteile enthält:

1. Der erste Teil ist die anonyme Funktion mit lexikalischem Gültigkeitsbereich, die durch den [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) `()` eingeschlossen ist. Dies verhindert den Zugriff auf Variablen innerhalb des IIFE-Idioms und die Verschmutzung des globalen Gültigkeitsbereichs.
2. Der zweite Teil erstellt den sofort aufgerufenen Funktionsausdruck `()`, durch den die JavaScript-Engine die Funktion direkt interpretiert.

## Anwendungsfälle

### Verschmutzung des globalen Namensraums vermeiden

Da unsere Anwendung viele Funktionen und globale Variablen aus verschiedenen Quelldateien enthalten könnte, ist es wichtig, die Anzahl der globalen Variablen zu begrenzen. Wenn wir einige Initialisierungscodes haben, die wir nicht wieder verwenden müssen, könnten wir das IIFE-Muster verwenden. Da wir den Code nicht mehr verwenden, ist die Verwendung von IIFE in diesem Fall besser als die Verwendung einer Funktionsdeklaration oder eines Funktionsausdrucks.

```js
(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed.
```

### Ausführung einer asynchronen Funktion

Ein [`async`](/de/docs/Web/JavaScript/Reference/Operators/async_function) IIFE ermöglicht Ihnen die Verwendung von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) und [`for-await`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) selbst in älteren Browsern und JavaScript-Laufzeiten, die keinen [top-level await](/de/docs/Web/JavaScript/Reference/Operators/await#top_level_await) unterstützen:

```js
const getFileStream = async (url) => {
  // implementation
};

(async () => {
  const stream = await getFileStream("https://domain.name/path/file.ext");
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();
```

### Das Modul-Muster

Wir könnten auch IIFE verwenden, um private und öffentliche Variablen und Methoden zu erstellen. Für eine anspruchsvollere Nutzung des Modul-Musters und andere Anwendungsfälle von IIFE könnten Sie das Buch "Learning JavaScript Design Patterns" von Addy Osmani einsehen.

```js
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0
```

### For-Schleife mit var vor ES6

Wir könnten die folgende Verwendung von IIFE in altem Code sehen, vor der Einführung der Anweisungen **let** und **const** in **ES6** und dem Blockbereich. Mit der Anweisung **var** haben wir nur Funktionsbereiche und den globalen Bereich. Angenommen, wir möchten 2 Schaltflächen mit den Texten Button 0 und Button 1 erstellen und beim Anklicken sollen sie 0 und 1 anzeigen. Der folgende Code funktioniert nicht:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2
```

Beim Klick zeigen sowohl Button 0 als auch Button 1 die Zahl 2 an, da `i` global ist und den letzten Wert 2 hat. Um dieses Problem vor ES6 zu beheben, könnten wir das IIFE-Muster verwenden:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = (function (copyOfI) {
    return function () {
      console.log(copyOfI);
    };
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
```

Beim Klick zeigen die Buttons 0 und 1 die Zahlen 0 und 1 an. Die Variable `i` ist global definiert. Mit der Anweisung **let** könnten wir einfach Folgendes tun:

```js
for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

Beim Klick zeigen diese Buttons die Zahlen 0 und 1 an.

## Siehe auch

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- Verwandte Glossarbegriffe:
  - {{Glossary("Function", "Function")}}
  - {{Glossary("Self-Executing_Anonymous_Function", "Self-Executing Anonymous Function")}}
