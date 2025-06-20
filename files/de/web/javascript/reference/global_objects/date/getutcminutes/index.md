---
title: Date.prototype.getUTCMinutes()
short-title: getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`getUTCMinutes()`** Methode von {{jsxref("Date")}} Instanzen gibt die Minuten für dieses Datum gemäß Weltzeit zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCMinutes()")}}

```js interactive-example
const date1 = new Date("1 January 2000 03:15:30 GMT+07:00");
const date2 = new Date("1 January 2000 03:15:30 GMT+03:30");

console.log(date1.getUTCMinutes()); // 31 Dec 1999 20:15:30 GMT
// Expected output: 15

console.log(date2.getUTCMinutes()); // 31 Dec 1999 23:45:30 GMT
// Expected output: 45
```

## Syntax

```js-nolint
getUTCMinutes()
```

### Parameter

Keine.

### Rückgabewert

Ein ganzzahliger Wert, zwischen 0 und 59, der die Minuten des angegebenen Datums gemäß Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCMinutes()

Im folgenden Beispiel wird der Minutenanteil der aktuellen Zeit der Variablen `minutes` zugewiesen.

```js
const today = new Date();
const minutes = today.getUTCMinutes();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
