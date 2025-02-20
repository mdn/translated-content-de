---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`getUTCDate()`** von {{jsxref("Date")}}-Instanzen gibt den Tag des Monats für dieses Datum entsprechend der Weltzeit zurück.

{{InteractiveExample("JavaScript Demo: Date.getUTCDate()")}}

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

Eine Ganzzahl zwischen 1 und 31, die den Tag des Monats für das angegebene Datum entsprechend der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCDate()

Das folgende Beispiel weist der Variablen `dayOfMonth` den Tag des Monats des aktuellen Datums zu.

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
