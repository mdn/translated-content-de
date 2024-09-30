---
title: Date.prototype.setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

Die **`setMinutes()`**-Methode von {{jsxref("Date")}}-Instanzen ändert die Minuten für dieses Datum entsprechend der lokalen Zeit.

{{EmbedInteractiveExample("pages/js/date-setminutes.html")}}

## Syntax

```js-nolint
setMinutes(minutesValue)
setMinutes(minutesValue, secondsValue)
setMinutes(minutesValue, secondsValue, msValue)
```

### Parameter

- `minutesValue`
  - : Eine ganze Zahl zwischen 0 und 59, die die Minuten darstellt.
- `secondsValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 59, die die Sekunden darstellt. Wenn Sie `secondsValue` angeben, müssen Sie auch `minutesValue` angeben.
- `msValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden darstellt. Wenn Sie `msValue` angeben, müssen Sie auch `minutesValue` und `secondsValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `secondsValue` und `msValue` nicht angeben, werden die gleichen Werte verwendet, die durch {{jsxref("Date/getSeconds", "getSeconds()")}} und {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} zurückgegeben werden.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Wenn Sie beispielsweise 100 für `secondsValue` angeben, werden die Minuten um 1 erhöht (`minutesValue + 1`) und 40 wird für die Sekunden verwendet.

## Beispiele

### Verwendung von setMinutes()

```js
const theBigDay = new Date();
theBigDay.setMinutes(45);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
