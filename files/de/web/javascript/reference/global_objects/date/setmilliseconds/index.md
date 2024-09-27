---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

Die Methode **`setMilliseconds()`** von {{jsxref("Date")}}-Instanzen ändert die Millisekunden dieses Datums entsprechend der Ortszeit.

{{EmbedInteractiveExample("pages/js/date-setmilliseconds.html")}}

## Syntax

```js-nolint
setMilliseconds(millisecondsValue)
```

### Parameter

- `millisecondsValue`
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt dessen neuen [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Ist `millisecondsValue` `NaN` (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie eine Zahl außerhalb des erwarteten Bereichs angeben, werden die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Beispielsweise wird, wenn Sie 1005 angeben, die Anzahl der Sekunden um 1 erhöht und 5 für die Millisekunden verwendet.

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
