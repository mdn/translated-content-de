---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

Die **`setHours()`**-Methode von {{jsxref("Date")}}-Instanzen ändert die Stunden, Minuten, Sekunden und/oder Millisekunden dieses Datums gemäß der lokalen Zeit.

{{EmbedInteractiveExample("pages/js/date-sethours.html")}}

## Syntax

```js-nolint
setHours(hoursValue)
setHours(hoursValue, minutesValue)
setHours(hoursValue, minutesValue, secondsValue)
setHours(hoursValue, minutesValue, secondsValue, msValue)
```

### Parameter

- `hoursValue`
  - : Eine ganze Zahl zwischen 0 und 23, die die Stunden darstellt.
- `minutesValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 59, die die Minuten darstellt.
- `secondsValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 59, die die Sekunden darstellt. Wenn Sie `secondsValue` angeben, müssen Sie auch `minutesValue` angeben.
- `msValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden darstellt. Wenn Sie `msValue` angeben, müssen Sie auch `minutesValue` und `secondsValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `minutesValue`, `secondsValue` und `msValue` nicht angeben, werden dieselben Werte verwendet, wie sie von {{jsxref("Date/getMinutes", "getMinutes()")}}, {{jsxref("Date/getSeconds", "getSeconds()")}} und {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} zurückgegeben werden.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Wenn Sie beispielsweise 100 für `secondsValue` angeben, werden die Minuten um 1 erhöht (`minutesValue + 1`), und 40 wird für die Sekunden verwendet.

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
