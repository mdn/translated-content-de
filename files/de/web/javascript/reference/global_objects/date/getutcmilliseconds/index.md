---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`getUTCMilliseconds()`** von {{jsxref("Date")}}-Instanzen gibt die Millisekunden für dieses Datum gemäß der koordinierten Weltzeit zurück.

{{InteractiveExample("JavaScript Demo: Date.getUTCMilliseconds()", "shorter")}}

```js interactive-example
const exampleDate = new Date("2018-01-02T03:04:05.678Z"); // 2 January 2018, 03:04:05.678 (UTC)

console.log(exampleDate.getUTCMilliseconds());
// Expected output: 678
```

## Syntax

```js-nolint
getUTCMilliseconds()
```

### Parameter

Keine.

### Rückgabewert

Eine ganze Zahl zwischen 0 und 999, die die Millisekunden für das angegebene Datum gemäß der koordinierten Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

Nicht zu verwechseln mit dem Zeitstempel. Um die gesamten Millisekunden seit der Epoche zu erhalten, verwenden Sie die Methode [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime).

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
