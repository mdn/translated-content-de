---
title: Funktion
slug: Glossary/Function
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Eine **Funktion** ist ein Codeausschnitt, der von anderem Code oder von sich selbst aufgerufen werden kann, oder eine {{Glossary("variable", "Variable")}}, die auf die Funktion verweist. Wenn eine Funktion aufgerufen wird, werden der Funktion {{Glossary("Argument", "Argumente")}} als Eingabe übergeben, und die Funktion kann optional einen Wert zurückgeben. Eine Funktion in {{Glossary("JavaScript", "JavaScript")}} ist auch ein {{Glossary("object", "Objekt")}}.

Ein Funktionsname ist ein {{Glossary("identifier", "Bezeichner")}}, der als Teil einer Funktionsdeklaration oder Funktionsausdruck enthalten ist. Der {{Glossary("scope", "Gültigkeitsbereich")}} des Funktionsnamens hängt davon ab, ob der Funktionsname eine Deklaration oder ein Ausdruck ist.

## Verschiedene Arten von Funktionen

Eine **anonyme Funktion** ist eine Funktion ohne Funktionsname. Nur Funktionsausdrücke können anonym sein, Funktionsdeklarationen müssen einen Namen haben:

```js
// Anonymous function created as a function expression
(function () {});

// Anonymous function created as an arrow function
() => {};
```

Die folgenden Begriffe werden nicht in der ECMAScript-Sprachspezifikation verwendet. Sie sind Jargon, der verwendet wird, um verschiedene Arten von Funktionen zu bezeichnen.

Eine **benannte Funktion** ist eine Funktion mit einem Funktionsnamen:

```js
// Function declaration
function foo() {}

// Named function expression
(function bar() {});

// Arrow function
const baz = () => {};
```

Eine **innere Funktion** ist eine Funktion innerhalb einer anderen Funktion (`square` in diesem Fall). Eine **äußere Funktion** ist eine Funktion, die eine Funktion enthält (`addSquares` in diesem Fall):

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

// Arrow function
const addSquares2 = (a, b) => {
  const square = (x) => x * x;
  return square(a) + square(b);
};
```

Eine **rekursive Funktion** ist eine Funktion, die sich selbst aufruft. Siehe {{Glossary("Recursion", "Rekursion")}}.

```js
function loop(x) {
  if (x >= 10) return;
  loop(x + 1);
}

// Arrow function
const loop2 = (x) => {
  if (x >= 10) return;
  loop2(x + 1);
};
```

Ein **sofort ausgeführter Funktionsausdruck** ({{Glossary("IIFE", "IIFE")}}) ist eine Funktion, die direkt nach dem Laden der Funktion in den Compiler des Browsers aufgerufen wird. Ein IIFE lässt sich an den zusätzlichen linken und rechten Klammern am Ende der Funktionsdefinition erkennen.

Funktionsausdrücke, ob benannt oder anonym, können sofort aufgerufen werden.

```js
(function foo() {
  console.log("Hello Foo");
})();

(function food() {
  console.log("Hello Food");
})();

(() => console.log("hello world"))();
```

Deklarierte Funktionen können nicht auf diese Weise sofort aufgerufen werden, da IIFEs Funktions*aussdrücke* sein müssen.

```js-nolint example-bad
function foo() {
  console.log("Hello Foo");
}();
```

Wenn Sie mehr über IIFEs erfahren möchten, schauen Sie auf der folgenden Wikipedia-Seite nach: [Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression)

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
