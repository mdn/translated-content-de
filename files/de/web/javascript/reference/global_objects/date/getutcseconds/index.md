---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`getUTCSeconds()`** von {{jsxref("Date")}}-Instanzen gibt die Sekunden des angegebenen Datums gemäß der universellen Zeit zurück.

{{InteractiveExample("JavaScript Demo: Date.getUTCSeconds()", "shorter")}}

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

Ein ganzzahliger Wert zwischen 0 und 59, der die Sekunden für das angegebene Datum gemäß der universellen Zeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCSeconds()

Im folgenden Beispiel wird der Sekundenanteil der aktuellen Uhrzeit der Variablen `seconds` zugewiesen.

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
