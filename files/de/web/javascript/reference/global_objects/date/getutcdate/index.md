---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
l10n:
  sourceCommit: 4436acdeb5087c7fc5afc58fc8b475e30481c801
---

{{JSRef}}

Die **`getUTCDate()`** Methode von {{jsxref("Date")}} Instanzen gibt den Tag des Monats für dieses Datum gemäß der Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutcdate.html")}}

## Syntax

```js-nolint
getUTCDate()
```

### Parameter

Keine.

### Rückgabewert

Ein ganzzahliger Wert, zwischen 1 und 31, der den Tag des Monats für das angegebene Datum gemäß der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCDate()

Das folgende Beispiel weist der Variablen `dayOfMonth` den Tag des Monats des aktuellen Datums zu.

```js
const today = new Date();
const dayOfMonth = today.getUTCDate();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
