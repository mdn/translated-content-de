---
title: "SyntaxError: Function-Anweisung erfordert einen Namen"
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "function statement requires a name" tritt auf, wenn es eine [Function-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/function) im Code gibt, die einen Namen erfordert.

## Meldung

```plain
SyntaxError: Function statements require a function name (V8-based)
SyntaxError: function statement requires a name (Firefox)
SyntaxError: Function statements must have a name. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt eine [Function-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/function) im Code, die einen Namen erfordert. Sie müssen überprüfen, wie Funktionen definiert sind, und ob Sie einen Namen dafür angeben müssen oder ob die betreffende Funktion eine Function-Expression, ein {{Glossary("IIFE", "IIFE")}} sein muss, oder ob der Funktionscode in diesem Kontext überhaupt korrekt platziert ist.

## Beispiele

### Anweisungen vs. Ausdrücke

Eine _[Function-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/function)_ (oder _Function-Deklaration_) erfordert einen Namen. Das wird nicht funktionieren:

```js-nolint example-bad
function () {
  return "Hello world";
}
// SyntaxError: function statement requires a name
```

Sie können stattdessen eine [Function-Expression](/de/docs/Web/JavaScript/Reference/Operators/function) (Zuweisung) verwenden:

```js example-good
const greet = function () {
  return "Hello world";
};
```

Wenn Ihre Funktion als [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (sofort ausgeführter Funktionsausdruck, der eine Funktion ist, die ausgeführt wird, sobald sie definiert ist) gedacht ist, müssen Sie ein paar weitere Klammern hinzufügen:

```js example-good
(function () {
  // …
})();
```

### Markierte Funktionen

[Labels](/de/docs/Web/JavaScript/Reference/Statements/label) sind eine völlig andere Funktion als Funktionsnamen. Sie können ein Label nicht als Funktionsnamen verwenden.

```js-nolint example-bad
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: function statement requires a name
```

Außerdem sind markierte Funktionsdeklarationen selbst ein veraltetes Feature. Verwenden Sie stattdessen reguläre Funktionsdeklarationen.

```js example-good
function Greeter() {
  function german() {
    return "Moin";
  }
}
```

### Objektmethoden

Wenn Sie die Erstellung einer Methode eines Objekts beabsichtigten, müssen Sie ein Objekt erstellen. Die folgende Syntax ohne Namen nach dem `function`-Schlüsselwort ist dann gültig.

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

Überprüfen Sie auch Ihre Syntax bei der Verwendung von Callbacks. Klammern und Kommas können schnell verwirrend werden.

```js-nolint example-bad
promise.then(
  function () {
    console.log("success");
  });
  function () {
    console.log("error");
}
// SyntaxError: function statement requires a name
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
- [`function` expression](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{Glossary("IIFE", "IIFE")}}
- [Markierte Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label)
