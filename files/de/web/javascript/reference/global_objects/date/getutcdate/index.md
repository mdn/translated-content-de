---
title: Date.prototype.getUTCDate()
short-title: getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getUTCDate()`** Methode von {{jsxref("Date")}} Instanzen gibt den Tag des Monats für dieses Datum gemäß der Weltzeit zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCDate()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

console.log(date1.getUTCDate());
// Expected output: 19

console.log(date2.getUTCDate());
// Expected output: 20
```

## Syntax

```js-nolint
getUTCDate()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl, zwischen 1 und 31, die den Tag des Monats für das angegebene Datum gemäß der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCDate()

Das folgende Beispiel weist den Tag des Monats des aktuellen Datums der Variablen `dayOfMonth` zu.

```js
const today = new Date();
const dayOfMonth = today.getUTCDate();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
