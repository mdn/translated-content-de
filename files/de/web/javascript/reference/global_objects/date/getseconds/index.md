---
title: Date.prototype.getSeconds()
short-title: getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getSeconds()`** Methode von {{jsxref("Date")}} Instanzen gibt die Sekunden für dieses Datum basierend auf der lokalen Zeit zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getSeconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getSeconds());
// Expected output: 18
```

## Syntax

```js-nolint
getSeconds()
```

### Parameter

Keine.

### Rückgabewert

Ein Ganzzahlwert, zwischen 0 und 59, der die Sekunden für das gegebene Datum entsprechend der lokalen Zeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getSeconds()

Die Variable `seconds` hat den Wert `30`, basierend auf dem Wert des {{jsxref("Date")}} Objekts `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const seconds = xmas95.getSeconds();

console.log(seconds); // 30
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
