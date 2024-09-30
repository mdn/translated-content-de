---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

Die **`setMilliseconds()`**-Methode von {{jsxref("Date")}}-Instanzen ändert die Millisekunden für dieses Datum gemäß der lokalen Zeit.

{{EmbedInteractiveExample("pages/js/date-setmilliseconds.html")}}

## Syntax

```js-nolint
setMilliseconds(millisecondsValue)
```

### Parameter

- `millisecondsValue`
  - : Ein ganzzahliger Wert zwischen 0 und 999, der die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt in-place und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `millisecondsValue` `NaN` ist (oder andere Werte, die auf `NaN` [erzwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie eine Zahl außerhalb des erwarteten Bereichs angeben, wird die Datumsinformation im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Wenn Sie beispielsweise 1005 angeben, wird die Anzahl der Sekunden um 1 erhöht, und 5 wird für die Millisekunden verwendet.

## Beispiele

### Verwendung von setMilliseconds()

```js
const theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
