---
title: Date.prototype.setUTCMilliseconds()
short-title: setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setUTCMilliseconds()`** Methode von {{jsxref("Date")}} Instanzen ändert die Millisekunden dieses Datums entsprechend der Weltzeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setUTCMilliseconds()")}}

```js interactive-example
const date1 = new Date("2018-01-24T12:38:29.069Z");

console.log(date1.getUTCMilliseconds());
// Expected output: 69

date1.setUTCMilliseconds(420);

console.log(date1.getUTCMilliseconds());
// Expected output: 420
```

## Syntax

```js-nolint
setUTCMilliseconds(millisecondsValue)
```

### Parameter

- `millisecondsValue`
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden repräsentiert.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt vor Ort und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `millisecondsValue` `NaN` ist (oder andere Werte, die in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCMilliseconds()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Wenn Sie beispielsweise 1100 für `millisecondsValue` verwenden, werden die im {{jsxref("Date")}}-Objekt gespeicherten Sekunden um 1 erhöht und 100 für Millisekunden verwendet.

## Beispiele

### Verwendung von setUTCMilliseconds()

```js
const theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
