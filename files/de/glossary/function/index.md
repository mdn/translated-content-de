---
title: Function
slug: Glossary/Function
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **Funktion** ist ein Codeausschnitt, der von anderem Code oder von sich selbst aufgerufen werden kann oder eine {{Glossary("variable", "Variable")}}, die auf die Funktion verweist. Wenn eine Funktion aufgerufen wird, werden {{Glossary("Argument", "Argumente")}} als Eingabe an die Funktion übergeben, und die Funktion kann optional einen Wert zurückgeben. Eine Funktion in {{Glossary("JavaScript", "JavaScript")}} ist auch ein {{Glossary("object", "Objekt")}}.

Ein Funktionsname ist ein {{Glossary("identifier", "Bezeichner")}}, der als Teil einer Funktionsdeklaration oder Funktionsausdrucks enthalten ist. Der {{Glossary("scope", "Gültigkeitsbereich")}} des Funktionsnamens hängt davon ab, ob es sich um eine Deklaration oder einen Ausdruck handelt.

### Verschiedene Arten von Funktionen

Eine **anonyme Funktion** ist eine Funktion ohne Funktionsnamen. Nur Funktionsausdrücke können anonym sein, Funktionsdeklarationen müssen einen Namen haben:

```js
// Anonymous function created as a function expression
(function () {});

// Anonymous function created as an arrow function
() => {};
```

Die folgenden Begriffe werden nicht in der ECMAScript-Sprachspezifikation verwendet, sondern sind Fachjargon, um verschiedene Arten von Funktionen zu beschreiben.

Eine **benannte Funktion** ist eine Funktion mit einem Funktionsnamen:

```js
// Function declaration
function foo() {}

// Named function expression
(function bar() {});

// Arrow function
const baz = () => {};
```

Eine **innere Funktion** ist eine Funktion innerhalb einer anderen Funktion (`square` in diesem Fall). Eine **äußere Funktion** ist eine Funktion, die eine andere Funktion enthält (`addSquares` in diesem Fall):

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

Ein **sofort aufgerufenes Funktionsausdruck** ({{Glossary("IIFE", "IIFE")}}) ist eine Funktion, die direkt nach dem Laden in den Compiler des Browsers aufgerufen wird. Ein IIFE erkennt man an den zusätzlichen linken und rechten Klammern am Ende der Funktionsdefinition.

Funktionsausdrücke, benannt oder anonym, können sofort aufgerufen werden.

```js
(function foo() {
  console.log("Hello Foo");
})();

(function food() {
  console.log("Hello Food");
})();

(() => console.log("hello world"))();
```

Deklarierte Funktionen können auf diese Weise nicht sofort aufgerufen werden, da IIFEs Funktions*Ausdrücke* sein müssen.

```js-nolint example-bad
function foo() {
  console.log("Hello Foo");
}();
```

Wenn Sie mehr über IIFEs erfahren möchten, besuchen Sie die folgende Seite auf Wikipedia: [Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression)

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
