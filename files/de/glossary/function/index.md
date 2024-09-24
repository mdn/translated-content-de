---
title: Funktion
slug: Glossary/Function
l10n:
  sourceCommit: 07fd308d45223fc5792d6dc13e3ab2c8826e1b44
---

{{GlossarySidebar}}

Eine **Funktion** ist ein Code-Snippet, das von anderem Code oder von sich selbst aufgerufen werden kann, oder eine {{Glossary("variable")}}, die sich auf die Funktion bezieht. Wenn eine Funktion aufgerufen wird, werden {{Glossary("Argument", "arguments")}} an die Funktion als Eingabe übergeben, und die Funktion kann optional einen Wert zurückgeben. Eine Funktion in {{glossary("JavaScript")}} ist auch ein {{glossary("object")}}.

Ein Funktionsname ist ein {{Glossary("identifier")}}, der als Teil einer Funktionsdeklaration oder eines Funktionsausdrucks enthalten ist. Der {{Glossary("scope")}} des Funktionsnamens hängt davon ab, ob der Funktionsname eine Deklaration oder ein Ausdruck ist.

### Verschiedene Arten von Funktionen

Eine **anonyme Funktion** ist eine Funktion ohne Funktionsname. Nur Funktionsausdrücke können anonym sein, Funktionsdeklarationen müssen einen Namen haben:

```js
// Anonyme Funktion, die als Funktionsausdruck erstellt wurde
(function () {});

// Anonyme Funktion, die als Pfeilfunktion erstellt wurde
() => {};
```

Die folgenden Begriffe werden nicht in der ECMAScript-Sprachspezifikation verwendet, sondern sind Jargon, der verwendet wird, um verschiedene Arten von Funktionen zu beschreiben.

Eine **benannte Funktion** ist eine Funktion mit einem Funktionsnamen:

```js
// Funktionsdeklaration
function foo() {}

// Benannter Funktionsausdruck
(function bar() {});

// Pfeilfunktion
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

// Pfeilfunktion
const addSquares2 = (a, b) => {
  const square = (x) => x * x;
  return square(a) + square(b);
};
```

Eine **rekursive Funktion** ist eine Funktion, die sich selbst aufruft. Siehe {{Glossary("Recursion", "rekursion")}}.

```js
function loop(x) {
  if (x >= 10) return;
  loop(x + 1);
}

// Pfeilfunktion
const loop2 = (x) => {
  if (x >= 10) return;
  loop(x + 1);
};
```

Ein **sofort aufgerufener Funktionsausdruck** ({{glossary("IIFE")}}) ist eine Funktion, die direkt nach dem Laden in den Compiler des Browsers aufgerufen wird. Ein IIFE lässt sich an den zusätzlichen linken und rechten Klammern am Ende der Funktionsdefinition erkennen.

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

Deklarierte Funktionen können auf diese Weise nicht sofort aufgerufen werden, da IIFEs Funktions_Ausdrücke_ sein müssen.

```js example-bad
function foo() {
  console.log('Hello Foo');
}();
```

Wenn Sie mehr über IIFEs erfahren möchten, besuchen Sie die folgende Seite auf Wikipedia: [Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression)

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
