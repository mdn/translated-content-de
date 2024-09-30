---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

Die **`setMonth()`**-Methode von {{jsxref("Date")}}-Instanzen ändert den Monat und/oder Tag des Monats für dieses Datum gemäß der Ortszeit.

{{EmbedInteractiveExample("pages/js/date-setmonth.html")}}

## Syntax

```js-nolint
setMonth(monthValue)
setMonth(monthValue, dateValue)
```

### Parameter

- `monthValue`
  - : Ein ganzzahliger Wert, der den Monat darstellt: 0 für Januar, 1 für Februar und so weiter.
- `dateValue` {{optional_inline}}
  - : Ein ganzzahliger Wert von 1 bis 31, der den Tag des Monats darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie den `dateValue`-Parameter nicht angeben, wird der gleiche Wert wie der zurückgegeben von {{jsxref("Date/getDate", "getDate()")}} verwendet.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Wenn Sie zum Beispiel 15 für `monthValue` angeben, wird das Jahr um 1 erhöht und 3 wird für den Monat verwendet.

Der aktuelle Tag des Monats wird das Verhalten dieser Methode beeinflussen. Konzeptionell wird die Anzahl der Tage, die durch den aktuellen Tag des Monats angegeben wird, zum 1. Tag des neuen Monats, der als Parameter angegeben wird, hinzugefügt, um das neue Datum zurückzugeben. Zum Beispiel: Wenn der aktuelle Wert der 31. Januar 2016 ist, wird das Aufrufen von `setMonth` mit einem Wert von 1 den 2. März 2016 zurückgeben. Dies liegt daran, dass Februar im Jahr 2016 29 Tage hatte.

## Beispiele

### Verwendung von setMonth()

```js
const theBigDay = new Date();
theBigDay.setMonth(6);

//Watch out for end of month transitions
const endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
