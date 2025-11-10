---
title: "SyntaxError: label not found"
slug: Web/JavaScript/Reference/Errors/Label_not_found
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "label not found" tritt auf, wenn eine {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisung auf ein Label verweist, das in keiner Anweisung existiert, die die `break`- oder `continue`-Anweisung enthält.

## Nachricht

```plain
SyntaxError: Undefined label 'label' (V8-based)
SyntaxError: label not found (Firefox)
SyntaxError: Cannot use the undeclared label 'label'. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

In JavaScript sind [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) sehr eingeschränkt: Sie können sie nur mit {{jsxref("Statements/break", "break")}}- und {{jsxref("Statements/continue", "continue")}}-Anweisungen verwenden, und Sie können nur von einer innerhalb der gelabelten Anweisung enthaltenen Anweisung zu ihnen springen. Sie können nicht von irgendwo im Programm zu diesem Label springen.

## Beispiele

### Unsynktaktischer Sprung

Sie können Labels nicht so verwenden, als wären sie `goto`.

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
