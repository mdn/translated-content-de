---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`setUTCMonth()`**-Methode von {{jsxref("Date")}}-Instanzen ändert den Monat und/oder Tag des Monats für dieses Datum entsprechend der Weltzeit.

{{EmbedInteractiveExample("pages/js/date-setutcmonth.html")}}

## Syntax

```js-nolint
setUTCMonth(monthValue)
setUTCMonth(monthValue, dateValue)
```

### Parameter

- `monthValue`
  - : Ein ganzzahliger Wert, der den Monat repräsentiert: 0 für Januar, 1 für Februar und so weiter.
- `dateValue` {{optional_inline}}
  - : Ein ganzzahliger Wert von 1 bis 31, der den Tag des Monats repräsentiert.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [gezwungen werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie den Parameter `dateValue` nicht angeben, wird der Wert, der von der Methode {{jsxref("Date/getUTCDate", "getUTCDate()")}} zurückgegeben wird, verwendet.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCMonth()`, die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Wenn Sie zum Beispiel 15 für `monthValue` verwenden, wird das Jahr um 1 erhöht und 3 wird als Monat verwendet.

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
