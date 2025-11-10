---
title: Date.prototype.setUTCSeconds()
short-title: setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die Methode **`setUTCSeconds()`** von {{jsxref("Date")}}-Instanzen ändert die Sekunden und/oder Millisekunden dieses Datums gemäß der koordinierten Weltzeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setUTCSeconds()")}}

```js interactive-example
const date = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date.getUTCSeconds());
// Expected output: 30

date.setUTCSeconds(39);

console.log(date.getUTCSeconds());
// Expected output: 39
```

## Syntax

```js-nolint
setUTCSeconds(secondsValue)
setUTCSeconds(secondsValue, msValue)
```

### Parameter

- `secondsValue`
  - : Ein ganzzahliger Wert zwischen 0 und 59, der die Sekunden darstellt.
- `msValue` {{optional_inline}}
  - : Ein ganzzahliger Wert zwischen 0 und 999, der die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie den Parameter `msValue` nicht angeben, wird der Wert aus der Methode {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} verwendet.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCSeconds()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Wenn Sie beispielsweise 100 für `secondsValue` verwenden, werden die im {{jsxref("Date")}}-Objekt gespeicherten Minuten um 1 erhöht und 40 für die Sekunden verwendet.

## Beispiele

### Verwendung von setUTCSeconds()

```js
const theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
