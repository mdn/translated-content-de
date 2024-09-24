---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

Die **`setFullYear()`** Methode von {{jsxref("Date")}} Instanzen ändert das Jahr, den Monat und/oder den Tag des Monats für dieses Datum gemäß der Ortszeit.

{{EmbedInteractiveExample("pages/js/date-setfullyear.html")}}

## Syntax

```js-nolint
setFullYear(yearValue)
setFullYear(yearValue, monthValue)
setFullYear(yearValue, monthValue, dateValue)
```

### Parameter

- `yearValue`
  - : Eine Ganzzahl, die das Jahr darstellt. Zum Beispiel 1995.
- `monthValue` {{optional_inline}}
  - : Eine Ganzzahl, die den Monat darstellt: 0 für Januar, 1 für Februar und so weiter.
- `dateValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 1 und 31, die den Tag des Monats darstellt. Wenn Sie `dateValue` angeben, müssen Sie auch `monthValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt direkt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [gezwungen werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `monthValue` und `dateValue` nicht angeben, werden die gleichen Werte verwendet, die von {{jsxref("Date/getMonth", "getMonth()")}} und {{jsxref("Date/getDate", "getDate()")}} zurückgegeben werden.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}} Objekt entsprechend aktualisiert. Zum Beispiel, wenn Sie 15 für `monthValue` angeben, wird das Jahr um 1 erhöht (`yearValue + 1`) und 3 wird für den Monat verwendet.

## Beispiele

### Verwendung von setFullYear()

```js
const theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
