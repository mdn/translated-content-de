---
title: "SyntaxError: Funktionsanweisung erfordert einen Namen"
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "function statement requires a name" tritt auf, wenn es im Code eine [Funktionsanweisung](/de/docs/Web/JavaScript/Reference/Statements/function) gibt, die einen Namen erfordert.

## Nachricht

```plain
SyntaxError: Function statements require a function name (V8-based)
SyntaxError: function statement requires a name (Firefox)
SyntaxError: Function statements must have a name. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt eine [Funktionsanweisung](/de/docs/Web/JavaScript/Reference/Statements/function) im Code, die einen Namen erfordert. Sie müssen überprüfen, wie Funktionen definiert sind, und ob Sie einen Namen dafür angeben müssen oder ob die betreffende Funktion ein Funktionsausdruck, ein [IIFE](/de/docs/Glossary/IIFE) sein muss, oder ob der Funktionscode in diesem Kontext überhaupt richtig platziert ist.

## Beispiele

### Anweisungen vs. Ausdrücke

Eine _[Funktionsanweisung](/de/docs/Web/JavaScript/Reference/Statements/function)_ (oder _Funktionsdeklaration_) erfordert einen Namen. Dies wird nicht funktionieren:

```js-nolint example-bad
function () {
  return "Hello world";
}
// SyntaxError: Funktionsanweisung erfordert einen Namen
```

Sie können stattdessen einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) (Zuweisung) verwenden:

```js example-good
const greet = function () {
  return "Hello world";
};
```

Wenn Ihre Funktion als ein [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Immediately Invoked Function Expression, also eine Funktion, die ausgeführt wird, sobald sie definiert ist) gedacht ist, müssen Sie ein paar weitere Klammern hinzufügen:

```js example-good
(function () {
  // …
})();
```

### Beschriftete Funktionen

[Etiketten](/de/docs/Web/JavaScript/Reference/Statements/label) sind eine ganz andere Funktion als Funktionsnamen. Sie können kein Etikett als Funktionsnamen verwenden.

```js-nolint example-bad
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: Funktionsanweisung erfordert einen Namen
```

Darüber hinaus sind beschriftete Funktionsdeklarationen selbst ein veraltetes Feature. Verwenden Sie stattdessen reguläre Funktionsdeklarationen.

```js example-good
function Greeter() {
  function german() {
    return "Moin";
  }
}
```

### Objektmethoden

Wenn Sie beabsichtigt haben, eine Methode eines Objekts zu erstellen, müssen Sie ein Objekt erstellen. Die folgende Syntax ohne einen Namen nach dem `function`-Schlüsselwort ist dann gültig.

```js example-good
const greeter = {
  german: function () {
    return "Moin";
  },
};
```

Sie können auch die [Methodensyntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) verwenden.

```js
const greeter = {
  german() {
    return "Moin";
  },
};
```

### Callback-Syntax

Überprüfen Sie auch Ihre Syntax bei der Verwendung von Rückrufen. Klammern und Kommas können schnell verwirrend werden.

```js-nolint example-bad
promise.then(
  function () {
    console.log("success");
  });
  function () {
    console.log("error");
}
// SyntaxError: Funktionsanweisung erfordert einen Namen
```

Korrekt wäre:

```js example-good
promise.then(
  function () {
    console.log("success");
  },
  function () {
    console.log("error");
  },
);
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{Glossary("IIFE")}}
- [Beschriftete Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label)
