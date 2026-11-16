---
title: Date.prototype.setYear()
short-title: setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`setYear()`** von {{jsxref("Date")}}-Instanzen setzt das Jahr eines angegebenen Datums gemäß der lokalen Zeit.

Die veraltete Methode `setYear()` setzt Jahreswerte jedoch anders als die bevorzugte Methode {{jsxref("Date/setFullYear", "setFullYear()")}} – und in manchen Fällen auch anders als `new Date()` und {{jsxref("Date.parse()")}}. Insbesondere gilt für zweistellige Zahlen wie `22` und `61`:

- `setYear()` interpretiert jede zweistellige Zahl als Versatz zu `1900`: `date.setYear(22)` setzt den Jahreswert also auf `1922`, und `date.setYear(61)` setzt ihn auf `1961`. (Im Gegensatz dazu setzt `new Date(61, 1)` den Jahreswert zwar ebenfalls auf `1961`, `new Date("2/1/22")` setzt ihn jedoch auf `2022`; Gleiches gilt entsprechend für {{jsxref("Date.parse()")}}.)

- {{jsxref("Date/setFullYear", "setFullYear()")}} nimmt keine besondere Interpretation vor, sondern verwendet den zweistelligen Wert unverändert als Jahreszahl: `date.setFullYear(61)` setzt den Jahreswert also auf `0061`, und `date.setFullYear(22)` setzt ihn auf `0022`.

Aufgrund dieser Unterschiede im Verhalten sollten Sie die veraltete Methode `setYear()` nicht mehr verwenden. Nutzen Sie stattdessen die bevorzugte Methode {{jsxref("Date/setFullYear", "setFullYear()")}}.

## Syntax

```js-nolint
setYear(yearValue)
```

### Parameter

- `yearValue`
  - : Eine Ganzzahl.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `yearValue` `NaN` ist (oder ein anderer Wert, der zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird, etwa `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn `yearValue` eine Zahl zwischen 0 und 99 (einschließlich) ist, wird das Jahr von `dateObj` auf `1900 + yearValue` gesetzt. Andernfalls wird das Jahr von `dateObj` auf `yearValue` gesetzt.

## Beispiele

### Verwendung von setYear()

Die ersten beiden Aufrufe von `setYear()` setzen das Jahr auf 1996. Der dritte setzt es auf 2000.

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

- [Polyfill für `Date.prototype.setYear` in `core-js`](https://core-js.io/docs/features/ecmascript/date)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
