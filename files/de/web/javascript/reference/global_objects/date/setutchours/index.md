---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die Methode **`setUTCHours()`** von {{jsxref("Date")}} Instanzen ändert die Stunden, Minuten, Sekunden und/oder Millisekunden für dieses Datum gemäß der Weltzeit.

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
  - : Ein Ganzzahlwert zwischen 0 und 23, der die Stunden darstellt.
- `minutesValue` {{optional_inline}}
  - : Ein Ganzzahlwert zwischen 0 und 59, der die Minuten darstellt.
- `secondsValue` {{optional_inline}}
  - : Ein Ganzzahlwert zwischen 0 und 59, der die Sekunden darstellt. Wenn Sie `secondsValue` angeben, müssen Sie auch `minutesValue` angeben.
- `msValue` {{optional_inline}}
  - : Ein Ganzzahlwert zwischen 0 und 999, der die Millisekunden darstellt. Wenn Sie `msValue` angeben, müssen Sie auch `minutesValue` und `secondsValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt den neuen [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `minutesValue`,
`secondsValue` und `msValue` nicht angeben,
werden die Werte verwendet, die von den {{jsxref("Date/getUTCMinutes", "getUTCMinutes()")}}, {{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}}
und {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} Methoden
zurückgegeben werden.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCHours()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren.
Zum Beispiel, wenn Sie 100 für `secondsValue` verwenden, werden die Minuten
um 1 erhöht (`minutesValue + 1`), und 40 wird für die Sekunden verwendet.

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
