---
title: Date.prototype.getUTCMilliseconds()
short-title: getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`getUTCMilliseconds()`** Methode von {{jsxref("Date")}} Instanzen gibt die Millisekunden für dieses Datum gemäß der Weltzeit zurück.

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

Eine ganze Zahl, zwischen 0 und 999, die die Millisekunden für das angegebene Datum gemäß der Weltzeit darstellt. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

Nicht zu verwechseln mit dem Zeitstempel. Um die Gesamtanzahl der Millisekunden seit der Epoche zu erhalten, verwenden Sie die Methode [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime).

## Beispiele

### Verwendung von getUTCMilliseconds()

Das folgende Beispiel weist die Millisekunden-Komponente der aktuellen Zeit der Variablen `milliseconds` zu.

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
