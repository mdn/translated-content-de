---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die Methode **`getUTCMilliseconds()`** von {{jsxref("Date")}}-Instanzen gibt die Millisekunden für dieses Datum gemäß der Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html", "shorter")}}

## Syntax

```js-nolint
getUTCMilliseconds()
```

### Parameter

Keine.

### Rückgabewert

Ein Ganzzahlwert, zwischen 0 und 999, der die Millisekunden für das angegebene Datum gemäß der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

Nicht mit dem Zeitstempel zu verwechseln. Um die Gesamtanzahl der Millisekunden seit der Epoche zu erhalten, verwenden Sie die Methode [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime).

## Beispiele

### Verwendung von getUTCMilliseconds()

Im folgenden Beispiel wird der Millisekundenteil der aktuellen Zeit der Variablen `milliseconds` zugewiesen.

```js
const today = new Date();
const milliseconds = today.getUTCMilliseconds();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
