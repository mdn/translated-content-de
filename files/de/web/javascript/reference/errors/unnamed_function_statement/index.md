---
title: "SyntaxError: Funktionsanweisung erfordert einen Namen"
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "function statement requires a name" tritt auf, wenn eine [Funktionsanweisung](/de/docs/Web/JavaScript/Reference/Statements/function) im Code vorhanden ist, die einen Namen benötigt.

## Meldung

```plain
SyntaxError: Function statements require a function name (V8-based)
SyntaxError: function statement requires a name (Firefox)
SyntaxError: Function statements must have a name. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was schiefgelaufen ist

Es gibt im Code eine [Funktionsanweisung](/de/docs/Web/JavaScript/Reference/Statements/function), die einen Namen benötigt. Sie müssen überprüfen, wie Funktionen definiert sind und ob Sie einen Namen dafür angeben müssen, oder ob die betreffende Funktion ein Funktionsausdruck, ein {{Glossary("IIFE", "IIFE")}} sein sollte, oder ob der Funktionscode überhaupt korrekt in diesem Kontext platziert ist.

## Beispiele

### Anweisungen vs. Ausdrücke

Eine _[Funktionsanweisung](/de/docs/Web/JavaScript/Reference/Statements/function)_ (oder _Funktionsdeklaration_) erfordert einen Namen.
Dies wird nicht funktionieren:

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

Wenn Ihre Funktion ein [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Immediately Invoked Function Expression, eine Funktion, die sofort ausgeführt wird, sobald sie definiert ist) sein soll, müssen Sie einige weitere Klammern hinzufügen:

```js example-good
(function () {
  // …
})();
```

### Benannte Funktionen

[Labels](/de/docs/Web/JavaScript/Reference/Statements/label) sind eine völlig andere Funktion als Funktionsnamen. Sie können ein Label nicht als Funktionsname verwenden.

```js-nolint example-bad
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: function statement requires a name
```

Außerdem sind benannte Funktionsdeklarationen selbst ein veraltetes Feature. Verwenden Sie stattdessen reguläre Funktionsdeklarationen.

```js example-good
function Greeter() {
  function german() {
    return "Moin";
  }
}
```

### Objektmethoden

Wenn Sie beabsichtigen, eine Methode eines Objekts zu erstellen, müssen Sie ein Objekt erstellen. Die folgende Syntax ohne Namen nach dem `function`-Schlüsselwort ist dann gültig.

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

- [Leitfaden für Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{Glossary("IIFE", "IIFE")}}
- [Benannte Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label)
