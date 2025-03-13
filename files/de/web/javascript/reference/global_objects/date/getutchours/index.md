---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`getUTCHours()`** von {{jsxref("Date")}} Instanzen gibt die Stunden dieses Datums gemäß der Weltzeit zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCHours()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCHours());
// Expected output: 12

console.log(date2.getUTCHours());
// Expected output: 10
```

## Syntax

```js-nolint
getUTCHours()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl, zwischen 0 und 23, die die Stunden für das angegebene Datum gemäß der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCHours()

Im folgenden Beispiel wird der Stundenanteil der aktuellen Zeit der Variablen `hours` zugewiesen.

```js
const today = new Date();
const hours = today.getUTCHours();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
