---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}} {{Deprecated_Header}}

Die **`setYear()`**-Methode von {{jsxref("Date")}}-Instanzen setzt das Jahr für ein angegebenes Datum entsprechend der lokalen Zeit.

Die Weise, wie die veraltete `setYear()`-Methode Jahrwerte setzt, unterscheidet sich jedoch von der Art und Weise, wie die bevorzugte {{jsxref("Date/setFullYear", "setFullYear()")}}-Methode Jahrwerte setzt – und in einigen Fällen auch von der Art und Weise, wie `new Date()` und {{jsxref("Date.parse()")}} Jahrwerte setzen. Insbesondere bei zweistelligen Zahlen, wie `22` und `61`:

- `setYear()` interpretiert jede zweistellige Zahl als Offset zu `1900`; also wird bei `date.setYear(22)` der Jahrwert auf `1922` gesetzt und bei `date.setYear(61)` auf `1961`. (Im Gegensatz dazu wird bei `new Date(61, 1)` der Jahrwert ebenfalls auf `1961` gesetzt, während bei `new Date("2/1/22")` der Jahrwert auf `2022` gesetzt wird; Ähnliches gilt für {{jsxref("Date.parse()")}}).

- {{jsxref("Date/setFullYear", "setFullYear()")}} interpretiert den Wert nicht auf besondere Weise, sondern verwendet den wörtlichen zweistelligen Wert, um das Jahr zu setzen; also ergibt `date.setFullYear(61)` den Jahrwert `0061`, und `date.setFullYear(22)` ergibt `0022`.

Wegen dieser Unterschiede im Verhalten sollten Sie die veraltete `setYear()`-Methode nicht mehr verwenden, sondern stattdessen die bevorzugte {{jsxref("Date/setFullYear", "setFullYear()")}}-Methode nutzen.

## Syntax

```js-nolint
setYear(yearValue)
```

### Parameter

- `yearValue`
  - : Eine ganze Zahl.

### Rückgabewert

Verändert das {{jsxref("Date")}}-Objekt und gibt seinen neuen [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `yearValue` `NaN` ist (oder andere Werte, die zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn `yearValue` eine Zahl zwischen 0 und 99 (einschließlich) ist, wird das Jahr für
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
