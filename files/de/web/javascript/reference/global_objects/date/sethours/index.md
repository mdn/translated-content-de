---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`setHours()`**-Methode von {{jsxref("Date")}}-Instanzen ändert die Stunden, Minuten, Sekunden und/oder Millisekunden dieses Datums entsprechend der lokalen Zeit.

{{InteractiveExample("JavaScript Demo: Date.setHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");
event.setHours(20);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary

event.setHours(20, 21, 22);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"
```

## Syntax

```js-nolint
setHours(hoursValue)
setHours(hoursValue, minutesValue)
setHours(hoursValue, minutesValue, secondsValue)
setHours(hoursValue, minutesValue, secondsValue, msValue)
```

### Parameter

- `hoursValue`
  - : Eine Ganzzahl zwischen 0 und 23, die die Stunden repräsentiert.
- `minutesValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 0 und 59, die die Minuten repräsentiert.
- `secondsValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 0 und 59, die die Sekunden repräsentiert. Wenn Sie `secondsValue` angeben, müssen Sie auch `minutesValue` angeben.
- `msValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 0 und 999, die die Millisekunden repräsentiert. Wenn Sie `msValue` angeben, müssen Sie auch `minutesValue` und `secondsValue` angeben.

### Rückgabewert

Verändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt seinen neuen [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu [NaN umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie z. B. `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und es wird `NaN` zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `minutesValue`, `secondsValue` und `msValue` nicht angeben, werden die gleichen Werte verwendet, die durch {{jsxref("Date/getMinutes", "getMinutes()")}}, {{jsxref("Date/getSeconds", "getSeconds()")}} und {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} zurückgegeben werden.

Wenn ein angegebenes Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Wenn Sie beispielsweise 100 für `secondsValue` angeben, werden die Minuten um 1 erhöht (`minutesValue + 1`), und 40 wird für die Sekunden verwendet.

## Beispiele

### Verwendung von setHours()

```js
const theBigDay = new Date();
theBigDay.setHours(7);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
