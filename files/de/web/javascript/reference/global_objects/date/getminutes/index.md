---
title: Date.prototype.getMinutes()
short-title: getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getMinutes()`**-Methode von {{jsxref("Date")}}-Instanzen gibt die Minuten für dieses Datum gemäß der Ortszeit zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getMinutes()", "shorter")}}

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getMinutes());
// Expected output: 20
```

## Syntax

```js-nolint
getMinutes()
```

### Parameter

Keine.

### Rückgabewert

Ein ganzzahliger Wert zwischen 0 und 59, der die Minuten für das angegebene Datum gemäß der Ortszeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getMinutes()

Die Variable `minutes` hat den Wert `15`, basierend auf dem Wert des {{jsxref("Date")}}-Objekts `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const minutes = xmas95.getMinutes();

console.log(minutes); // 15
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
