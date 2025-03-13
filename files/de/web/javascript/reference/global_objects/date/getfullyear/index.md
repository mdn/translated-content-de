---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`getFullYear()`** Methode von {{jsxref("Date")}} Instanzen gibt das Jahr für dieses Datum gemäß lokaler Zeit zurück.

Verwenden Sie diese Methode anstelle der {{jsxref("Date/getYear", "getYear()")}} Methode.

{{InteractiveExample("JavaScript Demo: Date.prototype.getFullYear()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getFullYear());
// Expected output: 1969
```

## Syntax

```js-nolint
getFullYear()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl, die das Jahr für das angegebene Datum gemäß lokaler Zeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Anders als bei {{jsxref("Date/getYear", "getYear()")}}, ist der von `getFullYear()` zurückgegebene Wert eine absolute Zahl. Für Daten zwischen den Jahren 1000 und 9999 gibt `getFullYear()` eine vierstellige Zahl zurück, zum Beispiel 1995. Verwenden Sie diese Funktion, um sicherzustellen, dass ein Jahr mit den Jahren nach 2000 konform ist.

## Beispiele

### Verwendung von getFullYear()

Die Variable `fullYear` hat den Wert `1995`, basierend auf dem Wert des {{jsxref("Date")}} Objekts `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const fullYear = xmas95.getFullYear();

console.log(fullYear); // 1995
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
