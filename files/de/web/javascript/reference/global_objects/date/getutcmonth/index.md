---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`getUTCMonth()`**-Methode von {{jsxref("Date")}} Instanzen gibt den Monat für dieses Datum gemäß der universellen Zeit als null-basierten Wert zurück (wobei Null den ersten Monat des Jahres angibt).

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCMonth()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

// December
console.log(date1.getUTCMonth());
// Expected output: 11

// January
console.log(date2.getUTCMonth());
// Expected output: 0
```

## Syntax

```js-nolint
getUTCMonth()
```

### Parameter

Keine.

### Rückgabewert

Ein ganzzahliger Wert zwischen 0 und 11, der den Monat für das angegebene Datum gemäß der universellen Zeit darstellt: 0 für Januar, 1 für Februar und so weiter. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCMonth()

Das folgende Beispiel weist den Monatsanteil des aktuellen Datums der Variablen `month` zu.

```js
const today = new Date();
const month = today.getUTCMonth();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
