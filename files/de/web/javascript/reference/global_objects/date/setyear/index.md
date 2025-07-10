---
title: Date.prototype.setYear()
short-title: setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

Die Methode **`setYear()`** von {{jsxref("Date")}}-Instanzen setzt das Jahr für ein bestimmtes Datum entsprechend der lokalen Zeit.

Die Art und Weise, wie die veraltete `setYear()`-Methode Jahreswerte setzt, unterscheidet sich jedoch von der bevorzugten {{jsxref("Date/setFullYear", "setFullYear()")}}-Methode und in einigen Fällen auch von der Art und Weise, wie `new Date()` und {{jsxref("Date.parse()")}} Jahreswerte setzen. Insbesondere bei zweistelligen Zahlen, wie `22` und `61`:

- `setYear()` interpretiert jede zweistellige Zahl als einen Offset zu `1900`; daher führt `date.setYear(22)` dazu, dass der Jahreswert auf `1922` gesetzt wird, und `date.setYear(61)` setzt den Jahreswert auf `1961`. (Im Gegensatz dazu führt `new Date(61, 1)` auch dazu, dass der Jahreswert auf `1961` gesetzt wird, aber `new Date("2/1/22")` setzt den Jahreswert auf `2022`; und ähnlich für {{jsxref("Date.parse()")}}).

- {{jsxref("Date/setFullYear", "setFullYear()")}} macht keine spezielle Interpretation, sondern verwendet den wörtlichen zweistelligen Wert, um das Jahr zu setzen; daher wird bei `date.setFullYear(61)` der Jahreswert auf `0061` gesetzt, und bei `date.setFullYear(22)` wird der Jahreswert auf `0022` gesetzt.

Aufgrund dieser Unterschiede im Verhalten sollten Sie die veraltete `setYear()`-Methode nicht mehr verwenden, sondern stattdessen die bevorzugte {{jsxref("Date/setFullYear", "setFullYear()")}}-Methode nutzen.

## Syntax

```js-nolint
setYear(yearValue)
```

### Parameter

- `yearValue`
  - : Eine Ganzzahl.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt den neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `yearValue` `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn `yearValue` eine Zahl zwischen 0 und 99 (einschließlich) ist, dann wird das Jahr für `dateObj` auf `1900 + yearValue` gesetzt. Andernfalls wird das Jahr für `dateObj` auf `yearValue` gesetzt.

## Beispiele

### Verwendung von setYear()

Die ersten beiden Zeilen setzen das Jahr auf 1996. Die dritte setzt das Jahr auf 2000.

```js
const theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Date.prototype.setYear` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
