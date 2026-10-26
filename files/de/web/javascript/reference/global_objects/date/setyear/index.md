---
title: Date.prototype.setYear()
short-title: setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`setYear()`** von {{jsxref("Date")}}-Instanzen setzt das Jahr eines angegebenen Datums gemäß der lokalen Zeit.

Die veraltete Methode `setYear()` verarbeitet Jahreswerte jedoch anders als die bevorzugte Methode {{jsxref("Date/setFullYear", "setFullYear()")}} – und in einigen Fällen auch anders als `new Date()` und {{jsxref("Date.parse()")}}. Insbesondere bei zweistelligen Zahlen wie `22` und `61` gilt:

- `setYear()` interpretiert jede zweistellige Zahl als Versatz zu `1900`: `date.setYear(22)` setzt das Jahr auf `1922`, und `date.setYear(61)` setzt es auf `1961`. (Im Gegensatz dazu setzt `new Date(61, 1)` das Jahr zwar ebenfalls auf `1961`, `new Date("2/1/22")` setzt es aber auf `2022`; Entsprechendes gilt für {{jsxref("Date.parse()")}}.)

- {{jsxref("Date/setFullYear", "setFullYear()")}} nimmt keine solche Sonderbehandlung vor, sondern verwendet den zweistelligen Wert unverändert als Jahr: `date.setFullYear(61)` setzt das Jahr auf `0061`, und `date.setFullYear(22)` setzt es auf `0022`.

Aufgrund dieser Unterschiede sollten Sie die veraltete Methode `setYear()` nicht mehr verwenden, sondern stattdessen die bevorzugte Methode {{jsxref("Date/setFullYear", "setFullYear()")}}.

## Syntax

```js-nolint
setYear(yearValue)
```

### Parameter

- `yearValue`
  - : Eine Ganzzahl.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `yearValue` den Wert `NaN` hat (oder ein anderer Wert ist, der in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird, etwa `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn `yearValue` eine Zahl zwischen 0 und 99 (einschließlich) ist, wird das Jahr von `dateObj` auf `1900 + yearValue` gesetzt. Andernfalls wird das Jahr von `dateObj` auf `yearValue` gesetzt.

## Beispiele

### setYear() verwenden

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

- [Polyfill für `Date.prototype.setYear` in `core-js`](https://core-js.io/docs/features/ecmascript/date)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
