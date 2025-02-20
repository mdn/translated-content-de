---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`setUTCHours()`** von {{jsxref("Date")}}-Instanzen ändert die Stunden, Minuten, Sekunden und/oder Millisekunden für dieses Datum gemäß der Weltzeit (universal time).

{{InteractiveExample("JavaScript Demo: Date.setUTCHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 02:15:30 GMT"

console.log(event.getUTCHours());
// Expected output: 2

event.setUTCHours(23);

console.log(event.toUTCString());
// Expected output: "Wed, 20 Aug 1975 23:15:30 GMT"
```

## Syntax

```js-nolint
setUTCHours(hoursValue)
setUTCHours(hoursValue, minutesValue)
setUTCHours(hoursValue, minutesValue, secondsValue)
setUTCHours(hoursValue, minutesValue, secondsValue, msValue)
```

### Parameter

- `hoursValue`
  - : Eine ganze Zahl im Bereich von 0 bis 23, die die Stunden darstellt.
- `minutesValue` {{optional_inline}}
  - : Eine ganze Zahl im Bereich von 0 bis 59, die die Minuten darstellt.
- `secondsValue` {{optional_inline}}
  - : Eine ganze Zahl im Bereich von 0 bis 59, die die Sekunden darstellt. Wenn Sie `secondsValue` angeben, müssen Sie auch `minutesValue` angeben.
- `msValue` {{optional_inline}}
  - : Eine ganze Zahl im Bereich von 0 bis 999, die die Millisekunden darstellt. Wenn Sie `msValue` angeben, müssen Sie auch `minutesValue` und `secondsValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt, und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `minutesValue`, `secondsValue` und `msValue` nicht angeben, werden die Werte verwendet, die von den Methoden {{jsxref("Date/getUTCMinutes", "getUTCMinutes()")}}, {{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}} und {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} zurückgegeben werden.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCHours()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Zum Beispiel: Wenn Sie 100 für `secondsValue` verwenden, werden die Minuten um 1 erhöht (`minutesValue + 1`), und 40 wird für die Sekunden verwendet.

## Beispiele

### Verwendung von setUTCHours()

```js
const theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
