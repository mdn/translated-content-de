---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`setUTCSeconds()`**-Methode von {{jsxref("Date")}} Instanzen ändert die Sekunden und/oder Millisekunden dieses Datums entsprechend der Weltzeit.

{{EmbedInteractiveExample("pages/js/date-setutcseconds.html")}}

## Syntax

```js-nolint
setUTCSeconds(secondsValue)
setUTCSeconds(secondsValue, msValue)
```

### Parameter

- `secondsValue`
  - : Eine ganze Zahl zwischen 0 und 59, die die Sekunden darstellt.
- `msValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Falls Sie den `msValue` Parameter nicht angeben, wird der Wert verwendet, der von der
{{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}}-Methode
zurückgegeben wird.

Falls ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCSeconds()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Wenn Sie beispielsweise 100 für
`secondsValue` verwenden, werden die im {{jsxref("Date")}}-Objekt gespeicherten Minuten um 1 erhöht, und 40 wird für Sekunden verwendet.

## Beispiele

### Verwendung von setUTCSeconds()

```js
const theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
