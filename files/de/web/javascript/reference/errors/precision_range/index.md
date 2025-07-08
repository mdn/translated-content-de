---
title: "RangeError: precision is out of range"
slug: Web/JavaScript/Reference/Errors/Precision_range
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "precision is out of range" tritt auf, wenn eine Zahl, die außerhalb des erlaubten Bereichs liegt, in `toExponential`, `toFixed` oder `toPrecision` übergeben wurde.

## Meldung

```plain
RangeError: toExponential() argument must be between 0 and 100 (V8-based & Safari)
RangeError: toFixed() digits argument must be between 0 and 100 (V8-based & Safari)
RangeError: toPrecision() argument must be between 1 and 100 (V8-based & Safari)
RangeError: precision -1 out of range (Firefox)
```

## Fehlerart

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Es gab ein Argument für die Präzision, das außerhalb des erlaubten Bereichs lag, in einer dieser Methoden:

- {{jsxref("Number.prototype.toExponential()")}}, bei der die Argumente zwischen 0 und 100 liegen müssen, einschließlich.
- {{jsxref("Number.prototype.toFixed()")}}, bei der die Argumente zwischen 0 und 100 liegen müssen, einschließlich.
- {{jsxref("Number.prototype.toPrecision()")}}, bei der die Argumente zwischen 1 und 100 liegen müssen, einschließlich.

## Beispiele

### Ungültige Fälle

```js example-bad
(77.1234).toExponential(-1); // RangeError
(77.1234).toExponential(101); // RangeError

(2.34).toFixed(-100); // RangeError
(2.34).toFixed(1001); // RangeError

(1234.5).toPrecision(-1); // RangeError
(1234.5).toPrecision(101); // RangeError
```

### Gültige Fälle

```js example-good
(77.1234).toExponential(4); // 7.7123e+1
(77.1234).toExponential(2); // 7.71e+1

(2.34).toFixed(1); // 2.3
(2.35).toFixed(1); // 2.4 (note that it rounds up in this case)

(5.123456).toPrecision(5); // 5.1235
(5.123456).toPrecision(2); // 5.1
(5.123456).toPrecision(1); // 5
```

## Siehe auch

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
