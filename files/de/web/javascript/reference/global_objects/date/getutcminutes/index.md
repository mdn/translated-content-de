---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`getUTCMinutes()`**-Methode von {{jsxref("Date")}} Instanzen gibt die Minuten für dieses Datum gemäß der Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}

## Syntax

```js-nolint
getUTCMinutes()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl, zwischen 0 und 59, die die Minuten für das angegebene Datum gemäß der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCMinutes()

Das folgende Beispiel weist den Minutenanteil der aktuellen Zeit der Variablen `minutes` zu.

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
