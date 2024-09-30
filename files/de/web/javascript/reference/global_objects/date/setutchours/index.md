---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`setUTCHours()`**-Methode von {{jsxref("Date")}}-Instanzen ändert die Stunden, Minuten, Sekunden und/oder Millisekunden für dieses Datum gemäß der Weltzeit.

{{EmbedInteractiveExample("pages/js/date-setutchours.html")}}

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

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `minutesValue`, `secondsValue` und `msValue` nicht angeben, werden die Werte verwendet, die von den Methoden {{jsxref("Date/getUTCMinutes", "getUTCMinutes()")}}, {{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}} und {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} zurückgegeben werden.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCHours()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Wenn Sie zum Beispiel 100 für `secondsValue` verwenden, werden die Minuten um 1 erhöht (`minutesValue + 1`), und 40 wird für die Sekunden verwendet.

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
