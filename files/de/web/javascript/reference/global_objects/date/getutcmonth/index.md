---
title: Date.prototype.getUTCMonth()
short-title: getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`getUTCMonth()`**-Methode von {{jsxref("Date")}}-Instanzen gibt den Monat für dieses Datum nach Universal Time zurück, als einen nullbasierten Wert (wobei null den ersten Monat des Jahres angibt).

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

Eine ganze Zahl zwischen 0 und 11, die den Monat für das angegebene Datum nach Universal Time darstellt: 0 für Januar, 1 für Februar usw. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCMonth()

Im folgenden Beispiel wird der Monatsteil des aktuellen Datums der Variablen `month` zugewiesen.

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
