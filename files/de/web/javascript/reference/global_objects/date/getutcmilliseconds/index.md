---
title: Date.prototype.getUTCMilliseconds()
short-title: getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`getUTCMilliseconds()`** von {{jsxref("Date")}}-Instanzen gibt die Millisekunden für dieses Datum gemäß der Weltzeit zurück.

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCMilliseconds()", "shorter")}}

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

Ein ganzzahliger Wert zwischen 0 und 999, der die Millisekunden für das angegebene Datum gemäß der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

Nicht zu verwechseln mit dem Zeitstempel. Um die gesamten Millisekunden seit der Epoche zu ermitteln, verwenden Sie die Methode [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime).

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
