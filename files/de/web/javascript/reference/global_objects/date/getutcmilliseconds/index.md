---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die **`getUTCMilliseconds()`**-Methode von {{jsxref("Date")}}-Instanzen gibt die Millisekunden für dieses Datum gemäß der koordinierten Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html", "shorter")}}

## Syntax

```js-nolint
getUTCMilliseconds()
```

### Parameter

Keine.

### Rückgabewert

Eine Ganzzahl zwischen 0 und 999, die die Millisekunden des angegebenen Datums gemäß der koordinierten Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

Nicht zu verwechseln mit dem Zeitstempel. Um die Gesamtanzahl der Millisekunden seit der Epoche zu erhalten, verwenden Sie die Methode [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime).

## Beispiele

### Verwendung von getUTCMilliseconds()

Das folgende Beispiel weist den Millisekundenanteil der aktuellen Zeit der Variablen `milliseconds` zu.

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
