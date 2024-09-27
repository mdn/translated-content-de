---
title: "SyntaxError: function statement requires a name"
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "function statement requires a name" tritt auf, wenn im Code eine [Funktionsdefinition](/de/docs/Web/JavaScript/Reference/Statements/function) vorhanden ist, die einen Namen benötigt.

## Nachricht

```plain
SyntaxError: Function statements require a function name (V8-based)
SyntaxError: function statement requires a name (Firefox)
SyntaxError: Function statements must have a name. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im Code befindet sich eine [Funktionsdefinition](/de/docs/Web/JavaScript/Reference/Statements/function), die einen Namen benötigt. Sie müssen überprüfen, wie Funktionen definiert werden und ob Sie einen Namen dafür angeben müssen, oder ob die betreffende Funktion als Funktionsausdruck, als [IIFE](/de/docs/Glossary/IIFE) oder überhaupt korrekt in diesem Kontext platziert werden muss.

## Beispiele

### Anweisungen vs. Ausdrücke

Eine _[Funktionsdefinition](/de/docs/Web/JavaScript/Reference/Statements/function)_ (oder _Funktionsdeklaration_) erfordert einen Namen. Dies wird nicht funktionieren:

```js-nolint example-bad
function () {
  return "Hello world";
}
// SyntaxError: function statement requires a name
```

Sie können stattdessen einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) (Zuweisung) verwenden:

```js example-good
const greet = function () {
  return "Hello world";
};
```

Wenn Ihre Funktion als [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Immediately Invoked Function Expression, eine Funktion, die sofort ausgeführt wird, wenn sie definiert ist) gedacht ist, müssen Sie ein paar weitere Klammern hinzufügen:

```js example-good
(function () {
  // …
})();
```

### Bezeichnete Funktionen

[Labels](/de/docs/Web/JavaScript/Reference/Statements/label) sind eine völlig andere Funktion als Funktionsnamen. Sie können ein Label nicht als Funktionsnamen verwenden.

```js-nolint example-bad
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: function statement requires a name
```

Darüber hinaus sind bezeichnete Funktionsdeklarationen selbst ein veraltetes Feature. Verwenden Sie stattdessen reguläre Funktionsdeklarationen.

```js example-good
function Greeter() {
  function german() {
    return "Moin";
  }
}
```

### Objektmethoden

Wenn Sie beabsichtigen, eine Methode eines Objekts zu erstellen, müssen Sie ein Objekt erstellen. Die folgende Syntax ohne einen Namen nach dem `function`-Schlüsselwort ist dann gültig.

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
- [IIFE](/de/docs/Glossary/IIFE)
- [Bezeichnete Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label)
