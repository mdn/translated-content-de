---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`getUTCMonth()`**-Methode von {{jsxref("Date")}}-Instanzen gibt den Monat für dieses Datum gemäß Weltzeit als einen Null-basierten Wert zurück (wobei Null den ersten Monat des Jahres angibt).

{{EmbedInteractiveExample("pages/js/date-getutcmonth.html")}}

## Syntax

```js-nolint
getUTCMonth()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl zwischen 0 und 11, die den Monat für das gegebene Datum nach Weltzeit darstellt: 0 für Januar, 1 für Februar usw. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCMonth()

Das folgende Beispiel weist den Monatsteil des aktuellen Datums der Variable `month` zu.

```js
const today = new Date();
const month = today.getUTCMonth();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
