---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`setSeconds()`** von {{jsxref("Date")}}-Instanzen ändert die Sekunden und/oder Millisekunden für dieses Datum entsprechend der lokalen Zeit.

{{InteractiveExample("JavaScript Demo: Date.setSeconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setSeconds(42);

console.log(event.getSeconds());
// Expected output: 42

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary
```

## Syntax

```js-nolint
setSeconds(secondsValue)
setSeconds(secondsValue, msValue)
```

### Parameter

- `secondsValue`
  - : Eine ganze Zahl zwischen 0 und 59, die die Sekunden darstellt.
- `msValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` (oder andere Werte, die zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie z. B. `undefined`) ist, wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie den Parameter `msValue` nicht angeben, wird der Wert verwendet, der von der Methode {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} zurückgegeben wird.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setSeconds()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Wenn Sie beispielsweise 100 für `secondsValue` verwenden, werden die Minuten, die im {{jsxref("Date")}}-Objekt gespeichert sind, um 1 erhöht, und 40 wird für die Sekunden verwendet.

## Beispiele

### Verwendung von setSeconds()

```js
const theBigDay = new Date();
theBigDay.setSeconds(30);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
