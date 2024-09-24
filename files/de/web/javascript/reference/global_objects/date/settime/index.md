---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
l10n:
  sourceCommit: 3e2369d97e2d6fbfe33a3c496a8edd90e0b539e2
---

{{JSRef}}

Die **`setTime()`**-Methode von {{jsxref("Date")}}-Instanzen ändert den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) für dieses Datum, welcher die Anzahl der Millisekunden seit dem [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist, definiert als Mitternacht zu Beginn des 1. Januar 1970, UTC.

{{EmbedInteractiveExample("pages/js/date-settime.html", "taller")}}

## Syntax

```js-nolint
setTime(timeValue)
```

### Parameter

- `timeValue`
  - : Ein ganzzahliger Wert, der den neuen Zeitstempel darstellt — die Anzahl der Millisekunden seit der Mitternacht zu Beginn des 1. Januar 1970, UTC.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `timeValue` `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beispiele

### Verwendung von setTime()

```js
const theBigDay = new Date("1999-07-01");
const sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
