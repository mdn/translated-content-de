---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`getUTCDate()`**-Methode von {{jsxref("Date")}}-Instanzen gibt den Tag des Monats für dieses Datum gemäß der koordinierten Weltzeit zurück.

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

Ein ganzzahliger Wert zwischen 1 und 31, der den Tag des Monats für das angegebene Datum gemäß der koordinierten Weltzeit repräsentiert. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

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
