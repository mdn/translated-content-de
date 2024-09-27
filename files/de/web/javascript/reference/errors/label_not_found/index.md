---
title: "SyntaxError: label not found"
slug: Web/JavaScript/Reference/Errors/Label_not_found
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler „label not found“ tritt auf, wenn ein {{jsxref("Statements/break", "break")}}- oder {{jsxref("Statements/continue", "continue")}}-Statement ein Label referenziert, das bei keinem Statement existiert, das das `break`- oder `continue`-Statement enthält.

## Nachricht

```plain
SyntaxError: Undefined label 'label' (V8-based)
SyntaxError: label not found (Firefox)
SyntaxError: Cannot use the undeclared label 'label'. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

In JavaScript sind [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) sehr eingeschränkt: Sie können sie nur mit {{jsxref("Statements/break", "break")}}- und {{jsxref("Statements/continue", "continue")}}-Statements verwenden, und Sie können nur von einem innerhalb des gelabelten Statements enthaltenen Statement zu ihnen springen. Es ist nicht möglich, von irgendwo im Programm zu diesem Label zu springen.

## Beispiele

### Unsyntaktischer Sprung

Sie können Labels nicht so verwenden, als wären sie `goto`.

```js-nolint example-bad
start: console.log("Hello, world!");
console.log("Do it again");
break start;
```

Stattdessen können Sie Labels nur verwenden, um die normalen Semantiken von `break`- und `continue`-Statements zu erweitern.

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

- [Gelabeltes Statement](/de/docs/Web/JavaScript/Reference/Statements/label)
