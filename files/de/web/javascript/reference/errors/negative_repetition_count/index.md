---
title: "RangeError: Wiederholungsanzahl muss nicht negativ sein"
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "Wiederholungsanzahl muss nicht negativ sein" tritt auf, wenn die Methode {{jsxref("String.prototype.repeat()")}} mit einem `count`-Argument verwendet wird, das eine negative Zahl ist.

## Meldung

```plain
RangeError: Invalid count value: -1 (V8-based)
RangeError: repeat count must be non-negative (Firefox)
RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Die Methode {{jsxref("String.prototype.repeat()")}} wurde verwendet. Diese hat einen `count`-Parameter, der angibt, wie oft der String wiederholt werden soll. Der Wert muss zwischen 0 und weniger als positivem {{jsxref("Infinity")}} liegen und darf keine negative Zahl sein. Der zulässige Wertebereich kann folgendermaßen beschrieben werden: \[0, +∞).

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
