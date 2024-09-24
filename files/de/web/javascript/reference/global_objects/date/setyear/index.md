---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}} {{Deprecated_Header}}

Die **`setYear()`** Methode von {{jsxref("Date")}} Instanzen setzt das Jahr für ein angegebenes Datum entsprechend der lokalen Zeit.

Die Art und Weise, wie die veraltete `setYear()` Methode Jahreswerte festlegt, unterscheidet sich jedoch von der bevorzugten {{jsxref("Date/setFullYear", "setFullYear()")}} Methode — und in einigen Fällen auch davon, wie `new Date()` und {{jsxref("Date.parse()")}} Jahreswerte festlegen. Insbesondere bei zweistelligen Zahlen wie `22` und `61`:

- `setYear()` interpretiert jede zweistellige Zahl als einen Offset zu `1900`; daher wird bei `date.setYear(22)` der Jahreswert auf `1922` gesetzt und bei `date.setYear(61)` auf `1961`. (Im Gegensatz dazu wird bei `new Date(61, 1)` der Jahreswert auch auf `1961` gesetzt, während bei `new Date("2/1/22")` der Jahreswert auf `2022` gesetzt wird; und ähnlich verhält es sich bei {{jsxref("Date.parse()")}}).

- {{jsxref("Date/setFullYear", "setFullYear()")}} hingegen nimmt keine spezielle Interpretation vor, sondern verwendet den wörtlichen zweistelligen Wert wie angegeben, um das Jahr festzulegen; so wird bei `date.setFullYear(61)` der Jahreswert auf `0061` gesetzt und bei `date.setFullYear(22)` auf `0022`.

Aufgrund dieser unterschiedlichen Verhaltensweisen sollten Sie die veraltete `setYear()` Methode nicht mehr verwenden, sondern stattdessen die bevorzugte {{jsxref("Date/setFullYear", "setFullYear()")}} Methode nutzen.

## Syntax

```js-nolint
setYear(yearValue)
```

### Parameter

- `yearValue`
  - : Eine ganze Zahl.

### Rückgabewert

Verändert das {{jsxref("Date")}} Objekt direkt und gibt seinen neuen [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `yearValue` `NaN` ist (oder andere Werte, die zu `NaN` [erzwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Ist `yearValue` eine Zahl zwischen 0 und 99 (einschließlich), dann wird für `dateObj` das Jahr auf `1900 + yearValue` gesetzt. Andernfalls wird für `dateObj` das Jahr auf `yearValue` gesetzt.

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
