---
title: IIFE (sofort aufgerufener Funktionsausdruck)
slug: Glossary/IIFE
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{GlossarySidebar}}

Ein **IIFE** (sofort aufgerufener Funktionsausdruck) ist eine {{glossary("JavaScript")}}-{{glossary("function")}}, die sofort ausgeführt wird, sobald sie definiert ist. Der Begriff IIFE wurde von Ben Alman in [seinem Blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife) bekannt gemacht.

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

Es ist ein Entwurfsmuster, das auch als {{glossary("Self-Executing Anonymous Function")}} bekannt ist und zwei Hauptbestandteile hat:

1. Der erste Bestandteil ist die anonyme Funktion, die mit lexikalischem Gültigkeitsbereich innerhalb des [Gruppierungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Grouping) `()` eingeschlossen ist. Dies verhindert den Zugriff auf Variablen innerhalb des IIFE-Idioms und verhindert eine Verunreinigung des globalen Gültigkeitsbereichs.
2. Der zweite Bestandteil erstellt den sofort aufgerufenen Funktionsausdruck `()`, den die JavaScript-Engine direkt interpretiert.

## Anwendungsfälle

### Vermeidung der Verschmutzung des globalen Namensraums

Da unsere Anwendung viele Funktionen und globale Variablen aus verschiedenen Quelldateien enthalten könnte, ist es wichtig, die Anzahl der globalen Variablen zu begrenzen. Wenn wir Initialisierungscode haben, den wir nicht wieder verwenden müssen, könnten wir das IIFE-Muster verwenden. Da wir den Code nicht erneut verwenden werden, ist die Verwendung von IIFE in diesem Fall besser als die Verwendung einer Funktionsdeklaration oder eines Funktionsausdrucks.

```js
(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable und secondVariable werden nach der Ausführung der Funktion verworfen.
```

### Eine asynchrone Funktion ausführen

Ein [`async`](/de/docs/Web/JavaScript/Reference/Operators/async_function) IIFE ermöglicht Ihnen die Verwendung von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) und [`for-await`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), selbst in älteren Browsern und JavaScript-Laufzeiten, die kein [top-level await](/de/docs/Web/JavaScript/Reference/Operators/await#top_level_await) unterstützen:

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

Wir würden IIFE auch verwenden, um private und öffentliche Variablen und Methoden zu erstellen. Für eine anspruchsvollere Nutzung des Modul-Musters und andere Verwendungen von IIFE könnten Sie das Buch "Learning JavaScript Design Patterns" von Addy Osmani einsehen.

```js
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // Diese Variable ist privat
    const doBadThings = () => {
      console.log("Ich werde schlechte Dinge mit Ihrem Geld tun");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Ungenügendes Geld";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "Ich werde schlechte Dinge mit Ihrem Geld tun"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; diese Methode ist privat
const secondAccount = makeWithdraw(20); // "Ich werde schlechte Dinge mit Ihrem Geld tun"
console.log(secondAccount.withdraw(30)); // "Ungenügendes Geld"
console.log(secondAccount.withdraw(20)); // 0
```

### For-Schleife mit var vor ES6

Wir könnten die folgende Verwendung von IIFE in einigen alten Codes sehen, vor der Einführung der Anweisungen **let** und **const** in **ES6** und dem Blockbereich. Mit der Anweisung **var** haben wir nur Funktionsbereiche und den globalen Bereich. Angenommen, wir wollen 2 Buttons mit den Texten Button 0 und Button 1 erstellen, und wenn wir auf sie klicken, sollten sie 0 und 1 anzeigen. Der folgende Code funktioniert nicht:

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

Beim Klicken zeigen sowohl Button 0 als auch Button 1 die Zahl 2 an, da `i` global ist, mit dem letzten Wert 2. Um dieses Problem vor ES6 zu beheben, könnten wir das IIFE-Muster verwenden:

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

Beim Klicken zeigen die Buttons 0 und 1 0 bzw. 1 an.
Die Variable `i` ist global definiert.
Mit der Anweisung **let** könnten wir einfach:

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

Beim Klicken zeigen diese Buttons 0 und 1 an.

## Siehe auch

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- Verwandte Glossarbegriffe:
  - {{Glossary("Function")}}
  - {{Glossary("Self-Executing Anonymous Function")}}
