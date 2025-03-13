---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`getUTCFullYear()`** Methode von {{jsxref("Date")}} Instanzen gibt das Jahr für dieses Datum gemäß der universellen Zeit zurück.

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

Eine ganze Zahl, die das Jahr für das angegebene Datum gemäß der universellen Zeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Anders als {{jsxref("Date/getYear", "getYear()")}}, ist der von `getUTCFullYear()` zurückgegebene Wert eine absolute Zahl. Für Daten zwischen den Jahren 1000 und 9999 gibt `getFullYear()` eine vierstellige Zahl zurück, zum Beispiel 1995. Verwenden Sie diese Funktion, um sicherzustellen, dass ein Jahr mit den Jahren nach 2000 übereinstimmt.

## Beispiele

### Verwendung von getUTCFullYear()

Im folgenden Beispiel wird der vierstellige Wert des aktuellen Jahres der Variable `year` zugewiesen.

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
