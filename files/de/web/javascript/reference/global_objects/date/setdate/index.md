---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

Die **`setDate()`** Methode von {{jsxref("Date")}} Instanzen ändert den Tag des Monats für dieses Datum gemäß der Ortszeit.

{{EmbedInteractiveExample("pages/js/date-setdate.html")}}

## Syntax

```js-nolint
setDate(dateValue)
```

### Parameter

- `dateValue`
  - : Eine ganze Zahl, die den Tag des Monats darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt direkt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `dateValue` `NaN` ist (oder andere Werte, die zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie z.B. `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie eine Zahl außerhalb des erwarteten Bereichs angeben, werden die Datumsinformationen im {{jsxref("Date")}} Objekt entsprechend aktualisiert. Zum Beispiel, wenn das `Date` Objekt den 1. Juni enthält, ändert ein `dateValue` von 40 das Datum auf den 10. Juli, während ein `dateValue` von 0 das Datum auf den letzten Tag des Vormonats, den 31. Mai, ändert.

## Beispiele

### Verwendung von setDate()

```js
const theBigDay = new Date(1962, 6, 7, 12); // noon of 1962-07-07 (7th of July 1962, month is 0-indexed)
const theBigDay2 = new Date(theBigDay).setDate(24); // 1962-07-24 (24th of July 1962)
const theBigDay3 = new Date(theBigDay).setDate(32); // 1962-08-01 (1st of August 1962)
const theBigDay4 = new Date(theBigDay).setDate(22); // 1962-07-22 (22nd of July 1962)
const theBigDay5 = new Date(theBigDay).setDate(0); // 1962-06-30 (30th of June 1962)
const theBigDay6 = new Date(theBigDay).setDate(98); // 1962-10-06 (6th of October 1962)
const theBigDay7 = new Date(theBigDay).setDate(-50); // 1962-05-11 (11th of May 1962)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date/Date", "Date()")}}
- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
