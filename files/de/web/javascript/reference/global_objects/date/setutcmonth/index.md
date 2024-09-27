---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`setUTCMonth()`**-Methode von {{jsxref("Date")}}-Instanzen ändert den Monat und/oder den Tag des Monats für dieses Datum gemäß der Weltzeit.

{{EmbedInteractiveExample("pages/js/date-setutcmonth.html")}}

## Syntax

```js-nolint
setUTCMonth(monthValue)
setUTCMonth(monthValue, dateValue)
```

### Parameter

- `monthValue`
  - : Eine ganze Zahl, die den Monat darstellt: 0 für Januar, 1 für Februar und so weiter.
- `dateValue` {{optional_inline}}
  - : Eine ganze Zahl von 1 bis 31, die den Tag des Monats darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt vor Ort und gibt seinen neuen [timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie den `dateValue`-Parameter nicht angeben, wird der Wert, der von der
{{jsxref("Date/getUTCDate", "getUTCDate()")}}-Methode zurückgegeben wird, verwendet.

Wenn ein Parameter, den Sie angeben, außerhalb des erwarteten Bereichs liegt, versucht `setUTCMonth()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Zum Beispiel, wenn Sie 15 für `monthValue` verwenden, wird das Jahr um 1 erhöht und 3 wird für den Monat verwendet.

## Beispiele

### Verwendung von setUTCMonth()

```js
const theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
