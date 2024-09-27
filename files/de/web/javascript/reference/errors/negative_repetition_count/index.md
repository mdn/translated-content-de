---
title: "RangeError: repeat count muss nicht-negativ sein"
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "repeat count muss nicht-negativ sein" tritt auf, wenn die Methode {{jsxref("String.prototype.repeat()")}} mit einem `count`-Argument verwendet wird, das eine negative Zahl ist.

## Nachricht

```plain
RangeError: Invalid count value: -1 (V8-based)
RangeError: repeat count must be non-negative (Firefox)
RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Die Methode {{jsxref("String.prototype.repeat()")}} wurde verwendet. Sie hat einen `count`-Parameter, der angibt, wie oft der String wiederholt werden soll. Er muss zwischen 0 und weniger als positive {{jsxref("Infinity")}} liegen und darf keine negative Zahl sein. Der Bereich der erlaubten Werte kann so beschrieben werden: \[0, +∞).

## Beispiele

### Ungültige Fälle

```js example-bad
"abc".repeat(-1); // RangeError
```

### Gültige Fälle

```js example-good
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
```

## Siehe auch

- {{jsxref("String.prototype.repeat()")}}
