---
title: Date.prototype.getUTCFullYear()
short-title: getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`getUTCFullYear()`** von {{jsxref("Date")}}-Instanzen gibt das Jahr dieses Datums gemäß der koordinierten Weltzeit (UTC) zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCFullYear()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCFullYear());
// Expected output: 1975

console.log(date2.getUTCFullYear());
// Expected output: 1976
```

## Syntax

```js-nolint
getUTCFullYear()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl, die das Jahr des angegebenen Datums gemäß der koordinierten Weltzeit (UTC) darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Anders als bei {{jsxref("Date/getYear", "getYear()")}} ist der von `getUTCFullYear()` zurückgegebene Wert eine absolute Zahl. Für Datumsangaben zwischen den Jahren 1000 und 9999 gibt `getUTCFullYear()` eine vierstellige Zahl zurück, beispielsweise 1995. Verwenden Sie diese Funktion, um sicherzustellen, dass die Jahreszahl auch für Jahre nach 2000 korrekt ist.

## Beispiele

### Verwendung von getUTCFullYear()

Das folgende Beispiel weist der Variablen `year` den vierstelligen Wert des aktuellen Jahres zu.

```js
const today = new Date();
const year = today.getUTCFullYear();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
