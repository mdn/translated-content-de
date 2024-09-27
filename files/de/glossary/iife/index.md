---
title: IIFE
slug: Glossary/IIFE
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{GlossarySidebar}}

Ein **IIFE** (Immediately Invoked Function Expression) ist eine [JavaScript](/de/docs/Glossary/JavaScript) [Funktion](/de/docs/Glossary/function), die ausgeführt wird, sobald sie definiert ist. Der Begriff IIFE wurde von Ben Alman in [seinem Blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife) gefördert.

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

Es handelt sich um ein Entwurfsmuster, das auch als [Self-Executing Anonymous Function](/de/docs/Glossary/Self-Executing_Anonymous_Function) bekannt ist und aus zwei Hauptteilen besteht:

1. Der erste ist die anonyme Funktion mit einem lexikalischen Gültigkeitsbereich, der innerhalb des [Gruppierungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Grouping) `()` eingeschlossen ist. Dies verhindert den Zugriff auf Variablen innerhalb des IIFE-Idioms und schützt den globalen Gültigkeitsbereich vor Verunreinigungen.
2. Der zweite Teil erzeugt den Immediately Invoked Function Expression `()`, durch den die JavaScript-Engine die Funktion direkt interpretiert.

## Anwendungsfälle

### Vermeidung der Verschmutzung des globalen Namensraums

Da unsere Anwendung viele Funktionen und globale Variablen aus verschiedenen Quelldateien enthalten könnte, ist es wichtig, die Anzahl der globalen Variablen zu beschränken. Wenn wir einige Initialisierungscode haben, den wir nicht erneut verwenden müssen, könnten wir das IIFE-Muster verwenden. Da wir den Code nicht erneut verwenden werden, ist die Verwendung von IIFE in diesem Fall besser als die Verwendung einer Funktionsdeklaration oder eines Funktionsausdrucks.

```js
(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed.
```

### Ausführen einer asynchronen Funktion

Ein [`async`](/de/docs/Web/JavaScript/Reference/Operators/async_function) IIFE ermöglicht Ihnen die Verwendung von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) und [`for-await`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) sogar in älteren Browsern und JavaScript-Laufzeiten, die keinen [top-level await](/de/docs/Web/JavaScript/Reference/Operators/await#top_level_await) haben:

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

Wir würden auch IIFE verwenden, um private und öffentliche Variablen und Methoden zu erstellen. Für eine anspruchsvollere Verwendung des Modul-Musters und weitere Anwendungen von IIFE können Sie das Buch "Learning JavaScript Design Patterns" von Addy Osmani einsehen.

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

Wir könnten die folgende Verwendung von IIFE in einigen alten Codes sehen, bevor die Anweisungen **let** und **const** in **ES6** und der Blockumfang eingeführt wurden. Mit der Anweisung **var** haben wir nur Funktionsumfänge und den globalen Umfang. Angenommen, wir möchten 2 Schaltflächen mit den Texten Button 0 und Button 1 erstellen und wenn wir sie anklicken, sollen sie 0 und 1 ausgeben. Der folgende Code funktioniert nicht:

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

Beim Klicken geben sowohl Button 0 als auch Button 1 die Zahl 2 aus, da `i` global ist und der letzte Wert 2 ist. Um dieses Problem vor ES6 zu beheben, könnten wir das IIFE-Muster verwenden:

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

Beim Klicken geben die Buttons 0 und 1 die Zahlen 0 und 1 aus. Die Variable `i` ist global definiert. Mit der Anweisung **let** könnten wir einfach Folgendes tun:

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

Beim Klicken geben diese Buttons die Zahlen 0 und 1 aus.

## Siehe auch

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- Verwandte Glossarbegriffe:
  - [Function](/de/docs/Glossary/Function)
  - [Self-Executing Anonymous Function](/de/docs/Glossary/Self-Executing_Anonymous_Function)
