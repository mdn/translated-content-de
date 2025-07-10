---
title: Date.prototype.getUTCMonth()
short-title: getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getUTCMonth()`**-Methode von {{jsxref("Date")}}-Instanzen gibt den Monat für dieses Datum gemäß der Weltzeit als nullbasierten Wert zurück (wobei null den ersten Monat des Jahres angibt).

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

Eine Ganzzahl, zwischen 0 und 11, die den Monat für das angegebene Datum gemäß der Weltzeit darstellt: 0 für Januar, 1 für Februar und so weiter. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCMonth()

Das folgende Beispiel weist den Monatsteil des aktuellen Datums der Variablen `month` zu.

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
