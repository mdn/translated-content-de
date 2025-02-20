---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`setUTCSeconds()`** von {{jsxref("Date")}}-Instanzen ändert die Sekunden und/oder Millisekunden dieses Datums entsprechend der Weltzeit.

{{InteractiveExample("JavaScript Demo: Date.setUTCSeconds()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCSeconds());
// Expected output: 30

date1.setUTCSeconds(39);

console.log(date1.getUTCSeconds());
// Expected output: 39
```

## Syntax

```js-nolint
setUTCSeconds(secondsValue)
setUTCSeconds(secondsValue, msValue)
```

### Parameter

- `secondsValue`
  - : Ein Ganzzahlwert zwischen 0 und 59, der die Sekunden repräsentiert.
- `msValue` {{optional_inline}}
  - : Ein Ganzzahlwert zwischen 0 und 999, der die Millisekunden repräsentiert.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Ist ein Parameter `NaN` (oder ein anderer Wert, der in [NaN umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird, wie z. B. `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Falls der Parameter `msValue` nicht angegeben wird, wird der Wert verwendet, der von der Methode {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} zurückgegeben wird.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCSeconds()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Beispielsweise, wenn Sie 100 für `secondsValue` verwenden, werden die Minuten im {{jsxref("Date")}}-Objekt um 1 erhöht, und 40 wird für die Sekunden verwendet.

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
