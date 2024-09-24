---
title: "SyntaxError: Bezeichnung nicht gefunden"
slug: Web/JavaScript/Reference/Errors/Label_not_found
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "label not found" tritt auf, wenn eine {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Anweisung sich auf eine Bezeichnung bezieht, die in keiner Anweisung existiert, die die `break`- oder `continue`-Anweisung enthält.

## Meldung

```plain
SyntaxError: Undefined label 'label' (V8-based)
SyntaxError: label not found (Firefox)
SyntaxError: Cannot use the undeclared label 'label'. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

In JavaScript sind [Bezeichnungen](/de/docs/Web/JavaScript/Reference/Statements/label) sehr eingeschränkt: Sie können sie nur mit {{jsxref("Statements/break", "break")}}- und {{jsxref("Statements/continue", "continue")}}-Anweisungen verwenden, und Sie können nur von einer innerhalb der benannten Anweisung enthaltenen Anweisung zu ihnen springen. Sie können nicht von irgendwo im Programm zu dieser Bezeichnung springen.

## Beispiele

### Unsyntaktischer Sprung

Sie können Bezeichnungen nicht so verwenden, als wären sie `goto`.

```js-nolint example-bad
start: console.log("Hello, world!");
console.log("Do it again");
break start;
```

Stattdessen können Sie Bezeichnungen nur verwenden, um die normalen Semantiken von `break`- und `continue`-Anweisungen zu erweitern.

```js example-good
start: {
  console.log("Hello, world!");
  if (Math.random() > 0.5) {
    break start;
  }
  console.log("Vielleicht bin ich protokolliert");
}
```

## Siehe auch

- [Benannte Anweisung](/de/docs/Web/JavaScript/Reference/Statements/label)
