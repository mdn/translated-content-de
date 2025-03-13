---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`getUTCSeconds()`** Methode von {{jsxref("Date")}} Instanzen gibt die Sekunden des angegebenen Datums gemäß der Weltzeit zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCSeconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 1969, 20:18:04 UTC");

console.log(moonLanding.getUTCSeconds());
// Expected output: 4
```

## Syntax

```js-nolint
getUTCSeconds()
```

### Parameter

Keine.

### Rückgabewert

Ein Integer-Wert zwischen 0 und 59, der die Sekunden für das angegebene Datum gemäß der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCSeconds()

Das folgende Beispiel weist der Variablen `seconds` den Sekundenanteil der aktuellen Zeit zu.

```js
const today = new Date();
const seconds = today.getUTCSeconds();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
