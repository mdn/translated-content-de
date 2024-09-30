---
title: "SyntaxError: label not found"
slug: Web/JavaScript/Reference/Errors/Label_not_found
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "label not found" tritt auf, wenn eine {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisung auf ein Label verweist, das bei keiner Anweisung existiert, welche die `break`- oder `continue`-Anweisung enthält.

## Nachricht

```plain
SyntaxError: Undefined label 'label' (V8-based)
SyntaxError: label not found (Firefox)
SyntaxError: Cannot use the undeclared label 'label'. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was schiefgelaufen ist

In JavaScript sind [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) sehr eingeschränkt: Sie können sie nur mit {{jsxref("Statements/break", "break")}}- und {{jsxref("Statements/continue", "continue")}}-Anweisungen verwenden, und Sie können nur von einer Anweisung, die innerhalb der gelabelten Anweisung enthalten ist, zu ihnen springen. Sie können aus keinem anderen Teil des Programms zu diesem Label springen.

## Beispiele

### Unsynktaktischer Sprung

Sie können Labels nicht wie ein `goto` verwenden.

```js-nolint example-bad
start: console.log("Hello, world!");
console.log("Do it again");
break start;
```

Stattdessen können Sie Labels nur verwenden, um die normalen Semantiken von `break`- und `continue`-Anweisungen zu erweitern.

```js example-good
start: {
  console.log("Hello, world!");
  if (Math.random() > 0.5) {
    break start;
  }
  console.log("Maybe I'm logged");
}
```

## Siehe auch

- [Gelabelte Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label)
