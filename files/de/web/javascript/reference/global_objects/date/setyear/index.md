---
title: Date.prototype.setYear()
short-title: setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Die **`setYear()`** Methode von {{jsxref("Date")}}-Instanzen setzt das Jahr für ein angegebenes Datum entsprechend der Ortszeit.

Allerdings unterscheidet sich die Art und Weise, wie die veraltete `setYear()` Methode Jahrwerte setzt, von der bevorzugten {{jsxref("Date/setFullYear", "setFullYear()")}} Methode — und in einigen Fällen auch von der Art und Weise, wie `new Date()` und {{jsxref("Date.parse()")}} Jahrwerte setzen. Insbesondere bei zweistelligen Zahlen wie `22` und `61`:

- `setYear()` interpretiert jede zweistellige Zahl als Offset zu `1900`; daher wird bei `date.setYear(22)` der Jahrwert auf `1922` gesetzt, und bei `date.setYear(61)` auf `1961`. (Im Gegensatz dazu setzt `new Date(61, 1)` den Jahrwert ebenfalls auf `1961`, aber `new Date("2/1/22")` setzt den Jahrwert auf `2022`; und ähnlich für {{jsxref("Date.parse()")}}).

- {{jsxref("Date/setFullYear", "setFullYear()")}} führt keine spezielle Interpretation durch, sondern verwendet den wörtlichen zweistelligen Wert, um das Jahr zu setzen; daher wird bei `date.setFullYear(61)` der Jahrwert auf `0061` gesetzt und bei `date.setFullYear(22)` auf `0022`.

Aufgrund dieser Verhaltensunterschiede sollten Sie die veraltete `setYear()` Methode nicht mehr verwenden, sondern stattdessen die bevorzugte {{jsxref("Date/setFullYear", "setFullYear()")}} Methode nutzen.

## Syntax

```js-nolint
setYear(yearValue)
```

### Parameter

- `yearValue`
  - : Eine ganze Zahl.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `yearValue` `NaN` ist (oder andere Werte, die [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) zu `NaN` werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn `yearValue` eine Zahl zwischen 0 und 99 (einschließlich) ist, dann wird das Jahr von
`dateObj` auf `1900 + yearValue` gesetzt. Andernfalls wird das Jahr für
`dateObj` auf `yearValue` gesetzt.

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
