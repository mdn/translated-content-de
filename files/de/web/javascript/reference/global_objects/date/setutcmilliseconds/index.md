---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

Die **`setUTCMilliseconds()`** Methode von {{jsxref("Date")}} Instanzen ändert die Millisekunden für dieses Datum gemäß der Weltzeit.

{{EmbedInteractiveExample("pages/js/date-setutcmilliseconds.html")}}

## Syntax

```js-nolint
setUTCMilliseconds(millisecondsValue)
```

### Parameter

- `millisecondsValue`
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt vor Ort und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `millisecondsValue` `NaN` ist (oder andere Werte, die zu `NaN` [erzwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCMilliseconds()`, die Datumsinformationen im {{jsxref("Date")}} Objekt entsprechend zu aktualisieren. Wenn Sie zum Beispiel 1100 für `millisecondsValue` verwenden, werden die Sekunden im {{jsxref("Date")}} Objekt um 1 erhöht und 100 wird für die Millisekunden verwendet.

## Beispiele

### Verwendung von setUTCMilliseconds()

```js
const theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
