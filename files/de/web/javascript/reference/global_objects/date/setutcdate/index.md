---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

Die **`setUTCDate()`** Methode von {{jsxref("Date")}} Instanzen ändert den Tag des Monats für dieses Datum gemäß der universellen Zeit.

{{EmbedInteractiveExample("pages/js/date-setutcdate.html")}}

## Syntax

```js-nolint
setUTCDate(dateValue)
```

### Parameter

- `dateValue`
  - : Eine ganze Zahl von 1 bis 31, die den Tag des Monats darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt an Ort und Stelle und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `dateValue` `NaN` ist (oder andere Werte, die zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie z.B. `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn der `dateValue` außerhalb des Bereichs der Datumswerte für den Monat liegt, wird `setDate()` das {{jsxref("Date")}} Objekt entsprechend aktualisieren.

Zum Beispiel, wenn 0 für `dateValue` angegeben wird, wird das Datum auf den letzten Tag des vorherigen Monats gesetzt. Wenn Sie 40 für `dateValue` verwenden und der im {{jsxref("Date")}} Objekt gespeicherte Monat Juni ist, wird der Tag auf den 10. geändert und der Monat wird auf Juli erhöht.

Wird eine negative Zahl für `dateValue` angegeben, wird das Datum rückwärts vom letzten Tag des vorherigen Monats gezählt. -1 würde dazu führen, dass das Datum auf einen Tag vor dem letzten Tag des vorherigen Monats gesetzt wird.

## Beispiele

### Verwendung von setUTCDate()

```js
const theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
