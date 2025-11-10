---
title: Date.prototype.getDate()
short-title: getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`getDate()`**-Methode von {{jsxref("Date")}}-Instanzen gibt den Tag des Monats für dieses Datum gemäß der lokalen Zeit zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getDate()", "shorter")}}

```js interactive-example
const birthday = new Date("August 19, 1975 23:15:30");
const date = birthday.getDate();

console.log(date);
// Expected output: 19
```

## Syntax

```js-nolint
getDate()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl, zwischen 1 und 31, die den Tag des Monats für das angegebene Datum gemäß der lokalen Zeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getDate()

Die Variable `day` hat den Wert `25`, basierend auf dem Wert des {{jsxref("Date")}}-Objekts `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const day = xmas95.getDate();

console.log(day); // 25
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
