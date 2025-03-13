---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`getUTCDay()`** Methode von {{jsxref("Date")}} Instanzen gibt den Wochentag für dieses Datum gemäß der Weltzeit zurück, wobei 0 für Sonntag steht.

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCDay()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

// Tuesday
console.log(date1.getUTCDay());
// Expected output: 2

// Wednesday
console.log(date2.getUTCDay());
// Expected output: 3
```

## Syntax

```js-nolint
getUTCDay()
```

### Parameter

Keine.

### Rückgabewert

Ein ganzzahliger Wert, der dem Wochentag für das angegebene Datum gemäß der Weltzeit entspricht: 0 für Sonntag, 1 für Montag, 2 für Dienstag und so weiter. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCDay()

Das folgende Beispiel weist den Wochentag des aktuellen Datums der Variablen `weekday` zu.

```js
const today = new Date();
const weekday = today.getUTCDay();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
