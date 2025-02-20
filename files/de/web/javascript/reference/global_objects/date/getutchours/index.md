---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`getUTCHours()`**-Methode von {{jsxref("Date")}}-Instanzen gibt die Stunden für dieses Datum gemäß der universellen Zeit zurück.

{{InteractiveExample("JavaScript Demo: Date.getUTCHours()")}}

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

Ein Ganzzahlwert, zwischen 0 und 23, der die Stunden für das angegebene Datum gemäß der universellen Zeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCHours()

Das folgende Beispiel weist den Stundenanteil der aktuellen Zeit der Variablen `hours` zu.

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
