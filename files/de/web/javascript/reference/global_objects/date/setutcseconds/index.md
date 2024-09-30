---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`setUTCSeconds()`** Methode von {{jsxref("Date")}} Instanzen ändert die Sekunden und/oder Millisekunden dieses Datums gemäß der Weltzeit.

{{EmbedInteractiveExample("pages/js/date-setutcseconds.html")}}

## Syntax

```js-nolint
setUTCSeconds(secondsValue)
setUTCSeconds(secondsValue, msValue)
```

### Parameter

- `secondsValue`
  - : Ein ganzzahliger Wert zwischen 0 und 59, der die Sekunden darstellt.
- `msValue` {{optional_inline}}
  - : Ein ganzzahliger Wert zwischen 0 und 999, der die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt direkt und gibt dessen neuen [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die auf `NaN` [erzwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie den Parameter `msValue` nicht angeben, wird der Wert, der von der Methode {{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} zurückgegeben wird, verwendet.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCSeconds()` die Datumsinformationen im {{jsxref("Date")}} Objekt entsprechend zu aktualisieren. Wenn Sie beispielsweise 100 für `secondsValue` verwenden, werden die im {{jsxref("Date")}} Objekt gespeicherten Minuten um 1 erhöht und 40 wird für Sekunden verwendet.

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
