---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

Die **`setUTCDate()`** Methode von {{jsxref("Date")}} Instanzen ändert den Tag des Monats für dieses Datum gemäß der Koordinierte Weltzeit (UTC).

{{EmbedInteractiveExample("pages/js/date-setutcdate.html")}}

## Syntax

```js-nolint
setUTCDate(dateValue)
```

### Parameter

- `dateValue`
  - : Eine ganze Zahl von 1 bis 31, die den Tag des Monats darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt in-place und gibt seinen neuen [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `dateValue` `NaN` ist (oder andere Werte, die in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn der `dateValue` außerhalb des Bereichs der Datumswerte des Monats liegt, wird das {{jsxref("Date")}} Objekt durch `setDate()` entsprechend aktualisiert.

Wenn zum Beispiel 0 als `dateValue` angegeben wird, wird das Datum auf den letzten Tag des vorherigen Monats gesetzt. Wenn Sie 40 für `dateValue` verwenden, und der in dem {{jsxref("Date")}} Objekt gespeicherte Monat Juni ist, wird der Tag auf den 10. geändert und der Monat auf Juli erhöht.

Wenn eine negative Zahl für `dateValue` angegeben wird, wird das Datum rückwärts vom letzten Tag des vorherigen Monats gezählt. -1 würde dazu führen, dass das Datum einen Tag vor dem letzten Tag des vorherigen Monats festgelegt wird.

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
