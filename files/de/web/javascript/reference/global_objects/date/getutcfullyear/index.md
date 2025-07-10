---
title: Date.prototype.getUTCFullYear()
short-title: getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getUTCFullYear()`**-Methode von {{jsxref("Date")}}-Instanzen gibt das Jahr für dieses Datum gemäß der Weltzeit zurück.

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

Eine Ganzzahl, die das Jahr für das angegebene Datum gemäß der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Im Gegensatz zu {{jsxref("Date/getYear", "getYear()")}} ist der von `getUTCFullYear()` zurückgegebene Wert eine absolute Zahl. Für Daten zwischen den Jahren 1000 und 9999 gibt `getFullYear()` eine vierstellige Zahl zurück, zum Beispiel 1995. Verwenden Sie diese Funktion, um sicherzustellen, dass ein Jahr den Anforderungen nach dem Jahr 2000 entspricht.

## Beispiele

### Verwendung von getUTCFullYear()

Das folgende Beispiel weist den vierstelligen Wert des aktuellen Jahres der Variablen `year` zu.

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
