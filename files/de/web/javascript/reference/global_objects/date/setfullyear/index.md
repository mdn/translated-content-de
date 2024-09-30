---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

Die **`setFullYear()`** Methode von {{jsxref("Date")}} Instanzen ändert das Jahr, den Monat und/oder den Tag des Monats für dieses Datum entsprechend der Ortszeit.

{{EmbedInteractiveExample("pages/js/date-setfullyear.html")}}

## Syntax

```js-nolint
setFullYear(yearValue)
setFullYear(yearValue, monthValue)
setFullYear(yearValue, monthValue, dateValue)
```

### Parameter

- `yearValue`
  - : Ein ganzzahliger Wert, der das Jahr darstellt. Zum Beispiel 1995.
- `monthValue` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Monat darstellt: 0 für Januar, 1 für Februar und so weiter.
- `dateValue` {{optional_inline}}
  - : Ein ganzzahliger Wert zwischen 1 und 31, der den Tag des Monats darstellt. Wenn Sie `dateValue` angeben, müssen Sie auch `monthValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt an Ort und Stelle und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wie z.B. `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `monthValue` und `dateValue` nicht angeben, werden dieselben Werte verwendet, die durch {{jsxref("Date/getMonth", "getMonth()")}} und {{jsxref("Date/getDate", "getDate()")}} zurückgegeben werden.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}} Objekt entsprechend aktualisiert. Zum Beispiel, wenn Sie 15 für `monthValue` angeben, wird das Jahr um 1 erhöht (`yearValue + 1`) und 3 wird für den Monat verwendet.

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
