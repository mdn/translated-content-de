---
title: Funktion
slug: Glossary/Function
l10n:
  sourceCommit: c7e6e6a645ea0164114eddd430480660c52b0bf0
---

{{GlossarySidebar}}

Eine **Funktion** ist ein Code-Snippet, das von anderem Code oder sich selbst aufgerufen werden kann, oder eine {{Glossary("variable", "Variable")}}, die sich auf die Funktion bezieht. Wenn eine Funktion aufgerufen wird, werden {{Glossary("Argument", "Argumente")}} als Eingabe an die Funktion übergeben und die Funktion kann optional einen Wert zurückgeben. Eine Funktion in {{Glossary("JavaScript", "JavaScript")}} ist auch ein {{Glossary("object", "Objekt")}}.

Ein Funktionsname ist ein {{Glossary("identifier", "Bezeichner")}}, der Teil einer Funktionsdeklaration oder Funktionsexpression ist. Der {{Glossary("scope", "Geltungsbereich")}} des Funktionsnamens hängt davon ab, ob der Funktionsname eine Deklaration oder eine Expression ist.

### Verschiedene Arten von Funktionen

Eine **anonyme Funktion** ist eine Funktion ohne Funktionsnamen. Nur Funktionsexpressionen können anonym sein, Funktionsdeklarationen müssen einen Namen haben:

```js
// Anonymous function created as a function expression
(function () {});

// Anonymous function created as an arrow function
() => {};
```

Die folgenden Begriffe werden nicht in der ECMAScript-Sprachspezifikation verwendet, sie sind Fachjargon, um sich auf verschiedene Arten von Funktionen zu beziehen.

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

Eine **sofort-invokierte Funktionsexpression** ({{Glossary("IIFE", "IIFE")}}) ist eine Funktion, die direkt nach dem Laden in den Compiler des Browsers aufgerufen wird. Eine IIFE ist daran zu erkennen, dass zusätzliche runde Klammern am Ende der Funktionsdefinition vorhanden sind.

Funktionsexpressionen, ob benannt oder anonym, können sofort aufgerufen werden.

```js
(function foo() {
  console.log("Hello Foo");
})();

(function food() {
  console.log("Hello Food");
})();

(() => console.log("hello world"))();
```

Deklarierte Funktionen können auf diese Weise nicht sofort aufgerufen werden, da IIFEs Funktion*ausdrücke* sein müssen.

```js example-bad
function foo() {
  console.log('Hello Foo');
}();
```

Wenn Sie mehr über IIFEs erfahren möchten, besuchen Sie folgende Seite auf Wikipedia: [Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression)

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
