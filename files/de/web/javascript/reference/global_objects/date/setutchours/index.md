---
title: Date.prototype.setUTCHours()
short-title: setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setUTCHours()`** Methode von {{jsxref("Date")}} Instanzen ändert die Stunden, Minuten, Sekunden und/oder Millisekunden für dieses Datum entsprechend der Weltzeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setUTCHours()")}}

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
  - : Eine ganze Zahl zwischen 0 und 23, die die Stunden repräsentiert.
- `minutesValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 59, die die Minuten repräsentiert.
- `secondsValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 59, die die Sekunden repräsentiert. Wenn Sie `secondsValue` angeben, müssen Sie auch `minutesValue` angeben.
- `msValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden repräsentiert. Wenn Sie `msValue` angeben, müssen Sie auch `minutesValue` und `secondsValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die in [gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) `NaN` konvertiert werden, wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `minutesValue`, `secondsValue` und `msValue` nicht angeben, werden die Werte von den Methoden {{jsxref("Date/getUTCMinutes", "getUTCMinutes()")}}, {{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}} und {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} verwendet.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCHours()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Zum Beispiel, wenn Sie 100 für `secondsValue` verwenden, werden die Minuten um 1 erhöht (`minutesValue + 1`) und 40 wird für Sekunden verwendet.

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
