---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`getUTCHours()`**-Methode von Instanzen des {{jsxref("Date")}} gibt die Stunden für dieses Datum gemäß der Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutchours.html")}}

## Syntax

```js-nolint
getUTCHours()
```

### Parameter

Keine.

### Rückgabewert

Ein Integer, zwischen 0 und 23, der die Stunden für das angegebene Datum gemäß der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCHours()

Das folgende Beispiel weist den Stundenanteil der aktuellen Zeit der Variablen `hours` zu.

```js
const today = new Date();
const hours = today.getUTCHours();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
