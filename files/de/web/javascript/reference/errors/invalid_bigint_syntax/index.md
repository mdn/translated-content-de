---
title: "SyntaxError: Ungültige BigInt-Syntax"
slug: Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "ungültige BigInt-Syntax" tritt auf, wenn ein String-Wert in ein {{jsxref("BigInt")}} umgewandelt werden soll, aber nicht als Ganzzahl geparst werden konnte.

## Meldung

```plain
SyntaxError: Cannot convert x to a BigInt (V8-based)
SyntaxError: invalid BigInt syntax (Firefox)
SyntaxError: Failed to parse String to BigInt (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Beim Verwenden der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion zur Umwandlung eines Strings in ein BigInt wird der String auf die gleiche Weise geparst wie der Quellcode, und der resultierende Wert muss eine Ganzzahl sein.

## Beispiele

### Ungültige Fälle

```js example-bad
const a = BigInt("1.5");
const b = BigInt("1n");
const c = BigInt.asIntN(4, "8n");
// SyntaxError: invalid BigInt syntax
```

### Gültige Fälle

```js example-good
const a = BigInt("1");
const b = BigInt("  1   ");
const c = BigInt.asIntN(4, "8");
```

## Siehe auch

- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
