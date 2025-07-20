---
title: Date.prototype.setUTCMilliseconds()
short-title: setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`setUTCMilliseconds()`**-Methode von {{jsxref("Date")}}-Instanzen ändert die Millisekunden für dieses Datum gemäß der koordinierte Weltzeit (UTC).

{{InteractiveExample("JavaScript Demo: Date.prototype.setUTCMilliseconds()")}}

```js interactive-example
const date = new Date("2018-01-24T12:38:29.069Z");

console.log(date.getUTCMilliseconds());
// Expected output: 69

date.setUTCMilliseconds(420);

console.log(date.getUTCMilliseconds());
// Expected output: 420
```

## Syntax

```js-nolint
setUTCMilliseconds(millisecondsValue)
```

### Parameter

- `millisecondsValue`
  - : Ein ganzzahliger Wert zwischen 0 und 999, der die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt den neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `millisecondsValue` `NaN` ist (oder andere Werte, die zu `NaN` [gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie z.B. `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCMilliseconds()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Wenn Sie beispielsweise 1100 für `millisecondsValue` verwenden, werden die in dem {{jsxref("Date")}}-Objekt gespeicherten Sekunden um 1 erhöht und 100 werden für die Millisekunden verwendet.

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
