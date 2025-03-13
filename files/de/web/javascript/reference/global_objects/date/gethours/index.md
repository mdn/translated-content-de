---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`getHours()`**-Methode von {{jsxref("Date")}} Instanzen gibt die Stunden für dieses Datum gemäß der lokalen Zeit zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getHours()", "shorter")}}

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getHours());
// Expected output: 4
```

## Syntax

```js-nolint
getHours()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl zwischen 0 und 23, die die Stunden für das gegebene Datum gemäß der lokalen Zeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getHours()

Die Variable `hours` hat den Wert `23`, basierend auf dem Wert des {{jsxref("Date")}} Objekts `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const hours = xmas95.getHours();

console.log(hours); // 23
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
