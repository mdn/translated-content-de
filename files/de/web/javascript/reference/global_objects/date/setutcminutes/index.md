---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`setUTCMinutes()`** von Instanzen von {{jsxref("Date")}} ändert die Minuten dieses Datums gemäß der Universalzeit.

{{InteractiveExample("JavaScript Demo: Date.setUTCMinutes()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCMinutes());
// Expected output: 15

date1.setUTCMinutes(25);

console.log(date1.getUTCMinutes());
// Expected output: 25
```

## Syntax

```js-nolint
setUTCMinutes(minutesValue)
setUTCMinutes(minutesValue, secondsValue)
setUTCMinutes(minutesValue, secondsValue, msValue)
```

### Parameter

- `minutesValue`
  - : Eine ganze Zahl zwischen 0 und 59, die die Minuten darstellt.
- `secondsValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 59, die die Sekunden darstellt. Wenn Sie `secondsValue` angeben, müssen Sie auch `minutesValue` angeben.
- `msValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden darstellt. Wenn Sie `msValue` angeben, müssen Sie auch `minutesValue` und `secondsValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` (oder andere Werte, die in [NaN umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie z. B. `undefined`) ist, wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt, und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `secondsValue` und `msValue` nicht angeben, werden die Werte verwendet, die von den Methoden {{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}} und {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} zurückgegeben werden.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCMinutes()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Beispielsweise wird, wenn Sie 100 für `secondsValue` verwenden, die Minute um 1 erhöht (`minutesValue + 1`), und 40 wird für die Sekunden verwendet.

## Beispiele

### Verwendung von setUTCMinutes()

```js
const theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
