---
title: Date.prototype.setFullYear()
short-title: setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

Die **`setFullYear()`**-Methode von {{jsxref("Date")}}-Instanzen ändert das Jahr, den Monat und/oder den Tag des Monats für dieses Datum gemäß der lokalen Zeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setFullYear()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setFullYear(1969);

console.log(event.getFullYear());
// Expected output: 1969

event.setFullYear(0);

console.log(event.getFullYear());
// Expected output: 0
```

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

Ändert das {{jsxref("Date")}}-Objekt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `monthValue` und `dateValue` nicht angeben, werden die gleichen Werte verwendet, die von {{jsxref("Date/getMonth", "getMonth()")}} und {{jsxref("Date/getDate", "getDate()")}} zurückgegeben werden.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Zum Beispiel, wenn Sie 15 für `monthValue` angeben, wird das Jahr um 1 erhöht (`yearValue + 1`), und 3 wird für den Monat verwendet.

Da `setFullYear()` auf der lokalen Zeit basiert, kann das Überqueren einer Zeitzonen-Umstellung durch Sommerzeit (DST) zu einer anderen verstrichenen Zeit führen als erwartet. Zum Beispiel, wenn das Setzen des Datums eine Frühjahrsumstellung (eine Stunde weniger) überschreitet, ist der Unterschied in den Zeitstempeln zwischen dem neuen und alten Datum eine Stunde weniger als der nominelle Tagesunterschied multipliziert mit 24 Stunden. Umgekehrt führt das Überqueren einer Herbstumstellung (eine Stunde mehr) zu einer zusätzlichen Stunde. Wenn Sie das Datum um eine feste Zeitspanne anpassen müssen, sollten Sie {{jsxref("Date/setUTCFullYear", "setUTCFullYear()")}} oder {{jsxref("Date/setTime", "setTime()")}} verwenden.

Wenn die neue lokale Zeit innerhalb einer Offset-Übergangszeit fällt, wird die genaue Zeit unter Verwendung des gleichen Verhaltens wie die `disambiguation: "compatible"`-Option von `Temporal` [abgeleitet](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time). Das bedeutet, wenn die lokale Zeit zwei Zeitpunkten entspricht, wird der frühere gewählt; existiert die lokale Zeit nicht (es gibt eine Lücke), gehen wir um die Dauer der Lücke nach vorne.

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
