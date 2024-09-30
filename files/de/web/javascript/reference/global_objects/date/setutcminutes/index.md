---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die Methode **`setUTCMinutes()`** von {{jsxref("Date")}}-Instanzen ändert die Minuten dieses Datums entsprechend der universellen Zeit.

{{EmbedInteractiveExample("pages/js/date-setutcminutes.html")}}

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
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden darstellt. Wenn Sie `msValue` angeben, müssen Sie auch `minutesValue` und `secondsValue` spezifizieren.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` (oder andere Werte, die zu [NaN umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`) ist, wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn die Parameter `secondsValue` und `msValue` nicht angegeben werden, werden die Werte der Methoden {{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}} und {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} verwendet.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCMinutes()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Wenn Sie zum Beispiel 100 für `secondsValue` verwenden, werden die Minuten um 1 erhöht (`minutesValue + 1`), und 40 wird für die Sekunden verwendet.

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
