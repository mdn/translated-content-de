---
title: Date.prototype.setMonth()
short-title: setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

Die **`setMonth()`**-Methode von {{jsxref("Date")}}-Instanzen ändert den Monat und/oder Tag des Monats für dieses Datum gemäß der Ortszeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setMonth()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setMonth(3);

console.log(event.getMonth());
// Expected output: 3

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
// Note: your timezone may vary
```

## Syntax

```js-nolint
setMonth(monthValue)
setMonth(monthValue, dateValue)
```

### Parameter

- `monthValue`
  - : Eine ganze Zahl, die den Monat repräsentiert: 0 für Januar, 1 für Februar und so weiter.
- `dateValue` {{optional_inline}}
  - : Eine ganze Zahl von 1 bis 31, die den Tag des Monats repräsentiert.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie den `dateValue`-Parameter nicht angeben, wird derselbe Wert wie der verwendet, der von {{jsxref("Date/getDate", "getDate()")}} zurückgegeben wird.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Wenn Sie beispielsweise 15 für `monthValue` angeben, wird das Jahr um 1 erhöht und 3 wird für den Monat verwendet.

Der aktuelle Tag des Monats hat Auswirkungen auf das Verhalten dieser Methode. Konzeptuell wird die Anzahl der Tage, die der aktuelle Tag des Monats darstellt, zum 1. Tag des neuen Monats hinzugefügt, der als Parameter angegeben ist, um das neue Datum zu berechnen. Beispielsweise, wenn der aktuelle Wert der 31. Januar 2016 ist, wird ein Aufruf von setMonth mit einem Wert von 1 den 2. März 2016 ergeben. Dies liegt daran, dass Februar 2016 29 Tage hatte.

Da `setMonth()` auf der Ortszeit basiert, kann das Überschreiten einer Grenze der Sommerzeit (Daylight Saving Time, DST) zu einer anderen vergangenen Zeit als erwartet führen. Wenn beispielsweise das Setzen des Monats einen Übergang zum Vorstellen der Uhrzeit (eine Stunde weniger) überschreitet, ist die Differenz zwischen dem neuen und alten Datum eine Stunde weniger als der nominelle Unterschied der Tage multipliziert mit 24 Stunden. Umgekehrt führt das Überschreiten eines Übergangs zum Zurückstellen (eine Stunde mehr) zu einer zusätzlichen Stunde. Wenn Sie das Datum um eine feste Zeitspanne anpassen müssen, ziehen Sie in Betracht, {{jsxref("Date/setUTCMonth", "setUTCMonth()")}} oder {{jsxref("Date/setTime", "setTime()")}} zu verwenden.

Wenn die neue Ortszeit in einen Offset-Übergang fällt, wird die genaue Zeit unter Verwendung desselben Verhaltens wie die `Temporal`-Option [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) abgeleitet. Das heißt, wenn die Ortszeit zwei Zeitpunkten entspricht, wird der frühere gewählt; existiert die Ortszeit nicht (es gibt eine Lücke), wird um die Dauer der Lücke vorgegangen.

## Beispiele

### Verwendung von setMonth()

```js
const theBigDay = new Date();
theBigDay.setMonth(6);

// Watch out for end of month transitions
const endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); // Wed Mar 02 2016 00:00:00
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
