---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`getUTCSeconds()`** Methode von {{jsxref("Date")}} Instanzen gibt die Sekunden des angegebenen Datums gemäß Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutcseconds.html", "shorter")}}

## Syntax

```js-nolint
getUTCSeconds()
```

### Parameter

Keine.

### Rückgabewert

Ein Ganzzahlwert zwischen 0 und 59, der die Sekunden für das angegebene Datum gemäß Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beispiele

### Verwendung von getUTCSeconds()

Das folgende Beispiel weist der Variablen `seconds` den Sekundenanteil der aktuellen Uhrzeit zu.

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
