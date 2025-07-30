---
title: Date.prototype.setDate()
short-title: setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

Die **`setDate()`** Methode von {{jsxref("Date")}} Instanzen ändert den Tag des Monats für dieses Datum entsprechend der lokalen Zeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setDate(24);

console.log(event.getDate());
// Expected output: 24

event.setDate(32);
// Only 31 days in August!

console.log(event.getDate());
// Expected output: 1
```

## Syntax

```js-nolint
setDate(dateValue)
```

### Parameter

- `dateValue`
  - : Ein ganzzahliger Wert, der den Tag des Monats darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt direkt und gibt dessen neuen [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `dateValue` `NaN` ist (oder andere Werte, die zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie eine Zahl außerhalb des erwarteten Bereichs angeben, werden die Datumsinformationen im {{jsxref("Date")}} Objekt entsprechend aktualisiert. Zum Beispiel, wenn das `Date` Objekt den 1. Juni enthält, ändert ein `dateValue` von 40 das Datum auf den 10. Juli, während ein `dateValue` von 0 das Datum auf den letzten Tag des vorherigen Monats, den 31. Mai, ändert.

Da `setDate()` mit der lokalen Zeit arbeitet, kann das Überschreiten einer Sommerzeitumstellung (Daylight Saving Time, DST) zu einem anderen als dem erwarteten Zeitunterschied führen. Zum Beispiel, wenn das Setzen des Datums eine Vorwärts-Umstellung im Frühjahr (eine Stunde weniger) überschreitet, ist die Differenz in den Timestamps zwischen dem neuen und dem alten Datum eine Stunde weniger als der nominelle Tagesunterschied multipliziert mit 24 Stunden. Umgekehrt führt das Überschreiten einer Rückwärts-Umstellung im Herbst (eine Stunde mehr) zu einer zusätzlichen Stunde. Wenn Sie das Datum um einen festen Zeitraum anpassen müssen, sollten Sie {{jsxref("Date/setUTCDate", "setUTCDate()")}} oder {{jsxref("Date/setTime", "setTime()")}} in Betracht ziehen.

Wenn die neue lokale Zeit innerhalb eines Offset-Übergangs liegt, wird die genaue Zeit unter Verwendung desselben Verhaltens wie `Temporal` mit der [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) Option abgeleitet. Das bedeutet, dass, wenn die lokale Zeit zwei Instanzen entspricht, die frühere gewählt wird; wenn die lokale Zeit nicht existiert (es gibt eine Lücke), gehen wir um die Länge der Lücke vorwärts.

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
