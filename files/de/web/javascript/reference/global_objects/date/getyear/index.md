---
title: Date.prototype.getYear()
short-title: getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`getYear()`** von {{jsxref("Date")}}-Instanzen gibt das Jahr dieses Datums gemäß der lokalen Zeit zurück. Da `getYear()` keine vollständigen Jahreszahlen zurückgibt (das „Jahr-2000-Problem“), ist die Methode veraltet und wurde durch {{jsxref("Date/getFullYear", "getFullYear()")}} ersetzt.

## Syntax

```js-nolint
getYear()
```

### Parameter

Keine.

### Rückgabewert

Eine Ganzzahl, die das Jahr des angegebenen Datums gemäß der lokalen Zeit abzüglich 1900 darstellt. Ist das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), wird `NaN` zurückgegeben.

- Für Jahre ab 2000 beträgt der Wert mindestens 100. Wenn das Jahr beispielsweise 2026 ist, gibt `getYear()` den Wert 126 zurück.
- Für Jahre von 1900 bis einschließlich 1999 liegt der von `getYear()` zurückgegebene Wert zwischen 0 und 99. Wenn das Jahr beispielsweise 1976 ist, gibt `getYear()` den Wert 76 zurück.
- Für Jahre vor 1900 ist der von `getYear()` zurückgegebene Wert kleiner als 0. Wenn das Jahr beispielsweise 1800 ist, gibt `getYear()` den Wert -100 zurück.

Diese Methode gibt im Wesentlichen den Wert von {{jsxref("Date/getFullYear", "getFullYear()")}} abzüglich 1900 zurück. Verwenden Sie stattdessen `getFullYear()`, damit das Jahr vollständig angegeben wird.

## Beispiele

### Jahre zwischen 1900 und 1999

Die zweite Anweisung weist der Variablen `year` den Wert 95 zu.

```js
const xmas = new Date("1995-12-25");
const year = xmas.getYear(); // returns 95
```

### Jahre nach 1999

Die zweite Anweisung weist der Variablen `year` den Wert 100 zu.

```js
const xmas = new Date("2000-12-25");
const year = xmas.getYear(); // returns 100
```

### Jahre vor 1900

Die zweite Anweisung weist der Variablen `year` den Wert -100 zu.

```js
const xmas = new Date("1800-12-25");
const year = xmas.getYear(); // returns -100
```

### Festlegen und Abrufen eines Jahres zwischen 1900 und 1999

Die dritte Anweisung weist der Variablen `year` den Wert 95 zu, der für das Jahr 1995 steht.

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

- [Polyfill für `Date.prototype.getYear` in `core-js`](https://core-js.io/docs/features/ecmascript/date)
- [es-shims-Polyfill für `Date.prototype.getYear`](https://www.npmjs.com/package/date.prototype.getyear)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
