---
title: Date.prototype.setYear()
short-title: setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}} {{Deprecated_Header}}

Die **`setYear()`**-Methode von {{jsxref("Date")}}-Instanzen setzt das Jahr für ein angegebenes Datum entsprechend der lokalen Zeit.

Allerdings unterscheidet sich die Art und Weise, wie die veraltete Methode `setYear()` Jahreswerte setzt, von der bevorzugten {{jsxref("Date/setFullYear", "setFullYear()")}}-Methode — und in einigen Fällen auch von der Art und Weise, wie `new Date()` und {{jsxref("Date.parse()")}} Jahreswerte setzen. Insbesondere bei zweistelligen Zahlen, wie `22` und `61`:

- `setYear()` interpretiert jede zweistellige Zahl als Offset zu `1900`; daher führt `date.setYear(22)` dazu, dass der Jahreswert auf `1922` gesetzt wird, und `date.setYear(61)` führt dazu, dass der Jahreswert auf `1961` gesetzt wird. (Im Gegensatz dazu führt `new Date(61, 1)` ebenfalls dazu, dass der Jahreswert auf `1961` gesetzt wird, aber `new Date("2/1/22")` führt dazu, dass der Jahreswert auf `2022` gesetzt wird; ähnlich verhält es sich mit {{jsxref("Date.parse()")}}).

- {{jsxref("Date/setFullYear", "setFullYear()")}} nimmt keine spezielle Interpretation vor, sondern verwendet den wörtlichen zweistelligen Wert, um das Jahr zu setzen; also führt `date.setFullYear(61)` dazu, dass der Jahreswert auf `0061` gesetzt wird, und `date.setFullYear(22)` dazu, dass der Jahreswert auf `0022` gesetzt wird.

Aufgrund dieser Unterschiede im Verhalten sollten Sie die veraltete `setYear()`-Methode nicht mehr verwenden, sondern stattdessen die bevorzugte {{jsxref("Date/setFullYear", "setFullYear()")}}-Methode.

## Syntax

```js-nolint
setYear(yearValue)
```

### Parameter

- `yearValue`
  - : Eine ganze Zahl.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `yearValue` `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie z.B. `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

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
