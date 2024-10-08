---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`setSeconds()`** Methode von {{jsxref("Date")}} Instanzen ändert die Sekunden und/oder Millisekunden für dieses Datum entsprechend der lokalen Zeit.

{{EmbedInteractiveExample("pages/js/date-setseconds.html")}}

## Syntax

```js-nolint
setSeconds(secondsValue)
setSeconds(secondsValue, msValue)
```

### Parameter

- `secondsValue`
  - : Eine ganze Zahl zwischen 0 und 59, die die Sekunden darstellt.
- `msValue` {{optional_inline}}
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt an Ort und Stelle und gibt seinen neuen [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie den `msValue` Parameter nicht angeben, wird der Wert verwendet, der von der {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} Methode zurückgegeben wird.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setSeconds()`, die Datumsinformationen im {{jsxref("Date")}} Objekt entsprechend zu aktualisieren. Wenn Sie zum Beispiel 100 für `secondsValue` verwenden, werden die im {{jsxref("Date")}} Objekt gespeicherten Minuten um 1 erhöht und 40 für die Sekunden verwendet.

## Beispiele

### Verwendung von setSeconds()

```js
const theBigDay = new Date();
theBigDay.setSeconds(30);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
