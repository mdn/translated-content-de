---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die **`getFullYear()`**-Methode von {{jsxref("Date")}}-Instanzen gibt das Jahr für dieses Datum entsprechend der lokalen Zeit zurück.

Verwenden Sie diese Methode anstelle der {{jsxref("Date/getYear", "getYear()")}}-Methode.

{{EmbedInteractiveExample("pages/js/date-getfullyear.html", "shorter")}}

## Syntax

```js-nolint
getFullYear()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl, die das Jahr für das angegebene Datum entsprechend der lokalen Zeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

Im Gegensatz zu {{jsxref("Date/getYear", "getYear()")}} ist der von `getFullYear()` zurückgegebene Wert eine absolute Zahl. Für Daten zwischen den Jahren 1000 und 9999 gibt `getFullYear()` eine vierstellige Zahl zurück, zum Beispiel 1995. Verwenden Sie diese Funktion, um sicherzustellen, dass ein Jahr konform mit den Jahren nach 2000 ist.

## Beispiele

### Verwendung von getFullYear()

Die Variable `fullYear` hat den Wert `1995`, basierend auf dem Wert des {{jsxref("Date")}}-Objekts `xmas95`.

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
