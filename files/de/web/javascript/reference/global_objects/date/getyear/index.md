---
title: Date.prototype.getYear()
short-title: getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

Die **`getYear()`** Methode von {{jsxref("Date")}} Instanzen gibt das Jahr für dieses Datum gemäß lokaler Zeit zurück. Da `getYear()` keine vollen Jahre zurückgibt (das sogenannte "Year-2000-Problem"), ist sie veraltet und wurde durch die {{jsxref("Date/getFullYear", "getFullYear()")}}-Methode ersetzt.

## Syntax

```js-nolint
getYear()
```

### Parameter

Keine.

### Rückgabewert

Eine Ganzzahl, die das Jahr für das angegebene Datum gemäß lokaler Zeit minus 1900 repräsentiert. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

- Für Jahre größer oder gleich 2000 ist der Wert 100 oder größer. Zum Beispiel, wenn das Jahr 2026 ist, gibt `getYear()` 126 zurück.
- Für Jahre zwischen einschließlich 1900 und 1999 liegt der von `getYear()` zurückgegebene Wert zwischen 0 und 99. Zum Beispiel, wenn das Jahr 1976 ist, gibt `getYear()` 76 zurück.
- Für Jahre kleiner als 1900 ist der von `getYear()` zurückgegebene Wert kleiner als 0. Zum Beispiel, wenn das Jahr 1800 ist, gibt `getYear()` -100 zurück.

Diese Methode gibt im Wesentlichen den Wert von {{jsxref("Date/getFullYear", "getFullYear()")}} minus 1900 zurück. Sie sollten `getFullYear()` stattdessen verwenden, damit das Jahr vollständig angegeben wird.

## Beispiele

### Jahre zwischen 1900 und 1999

Die zweite Anweisung weist der Variablen `year` den Wert 95 zu.

```js
const xmas = new Date("1995-12-25");
const year = xmas.getYear(); // returns 95
```

### Jahre über 1999

Die zweite Anweisung weist der Variablen `year` den Wert 100 zu.

```js
const xmas = new Date("2000-12-25");
const year = xmas.getYear(); // returns 100
```

### Jahre unter 1900

Die zweite Anweisung weist der Variablen `year` den Wert -100 zu.

```js
const xmas = new Date("1800-12-25");
const year = xmas.getYear(); // returns -100
```

### Setzen und Abrufen eines Jahres zwischen 1900 und 1999

Die dritte Anweisung weist der Variablen `year` den Wert 95 zu, was das Jahr 1995 darstellt.

```js
const xmas = new Date("2015-12-25");
xmas.setYear(95);
const year = xmas.getYear(); // returns 95
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Date.prototype.getYear` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- [es-shims Polyfill von `Date.prototype.getYear`](https://www.npmjs.com/package/date.prototype.getyear)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
