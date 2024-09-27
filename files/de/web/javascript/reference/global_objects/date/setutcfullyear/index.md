---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`setUTCFullYear()`**-Methode von {{jsxref("Date")}}-Instanzen ändert das Jahr für dieses Datum entsprechend der universellen Zeit.

{{EmbedInteractiveExample("pages/js/date-setutcfullyear.html")}}

## Syntax

```js-nolint
setUTCFullYear(yearValue)
setUTCFullYear(yearValue, monthValue)
setUTCFullYear(yearValue, monthValue, dateValue)
```

### Parameter

- `yearValue`
  - : Ein ganzzahliger Wert, der das Jahr repräsentiert. Zum Beispiel 1995.
- `monthValue` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Monat repräsentiert: 0 für Januar, 1 für Februar, und so weiter.
- `dateValue` {{optional_inline}}
  - : Ein ganzzahliger Wert zwischen 1 und 31, der den Tag des Monats repräsentiert. Wenn Sie `dateValue` angeben, müssen Sie auch `monthValue` angeben.

### Rückgabewert

Verändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `monthValue` und `dateValue` nicht angeben, werden die von den {{jsxref("Date/getUTCMonth", "getUTCMonth()")}}- und {{jsxref("Date/getUTCDate", "getUTCDate()")}}-Methoden zurückgegebenen Werte verwendet.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCFullYear()`, die anderen Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Zum Beispiel, wenn Sie 15 für `monthValue` angeben, wird das Jahr um 1 erhöht (`yearValue + 1`), und 3 wird für den Monat verwendet.

## Beispiele

### Verwendung von setUTCFullYear()

```js
const theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
