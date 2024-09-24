---
title: "RangeError: precision liegt außerhalb des Bereichs"
slug: Web/JavaScript/Reference/Errors/Precision_range
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "precision liegt außerhalb des Bereichs" tritt auf, wenn eine Zahl, die außerhalb des erlaubten Bereichs liegt, in `toExponential`, `toFixed` oder `toPrecision` übergeben wurde.

## Nachricht

```plain
RangeError: toExponential() argument must be between 0 and 100 (V8-based & Safari)
RangeError: toFixed() digits argument must be between 0 and 100 (V8-based & Safari)
RangeError: toPrecision() argument must be between 1 und 100 (V8-based & Safari)
RangeError: precision -1 out of range (Firefox)
```

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Es gab ein Präzisionsargument außerhalb des Bereichs bei einer dieser Methoden:

- {{jsxref("Number.prototype.toExponential()")}}, welches Arguments zwischen 0 und 100, einschließlich, erfordert.
- {{jsxref("Number.prototype.toFixed()")}}, welches Arguments zwischen 0 und 100, einschließlich, erfordert.
- {{jsxref("Number.prototype.toPrecision()")}}, welches Arguments zwischen 1 und 100, einschließlich, erfordert.

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
(2.35).toFixed(1); // 2.4 (beachten Sie, dass es in diesem Fall aufrundet)

(5.123456).toPrecision(5); // 5.1235
(5.123456).toPrecision(2); // 5.1
(5.123456).toPrecision(1); // 5
```

## Siehe auch

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
