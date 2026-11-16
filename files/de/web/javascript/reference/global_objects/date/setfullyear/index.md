---
title: Date.prototype.setFullYear()
short-title: setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`setFullYear()`** von {{jsxref("Date")}}-Instanzen ändert das Jahr, den Monat und/oder den Tag des Monats für dieses Datum entsprechend der lokalen Zeit.

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
  - : Eine Ganzzahl, die das Jahr angibt, beispielsweise 1995.
- `monthValue` {{optional_inline}}
  - : Eine Ganzzahl, die den Monat angibt: 0 für Januar, 1 für Februar und so weiter.
- `dateValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 1 und 31, die den Tag des Monats angibt. Wenn Sie `dateValue` angeben, müssen Sie auch `monthValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder ein anderer Wert, der zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird, beispielsweise `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `monthValue` und `dateValue` nicht angeben, werden die Werte verwendet, die {{jsxref("Date/getMonth", "getMonth()")}} und {{jsxref("Date/getDate", "getDate()")}} zurückgeben.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden die anderen Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend angepasst. Wenn Sie beispielsweise 15 für `monthValue` angeben, wird das Jahr um 1 erhöht (`yearValue + 1`) und 3 als Monat verwendet.

Da `setFullYear()` mit der lokalen Zeit arbeitet, kann beim Überschreiten einer Grenze zwischen Standardzeit und Sommerzeit (Daylight Saving Time, DST) eine andere Zeitspanne vergehen als erwartet. Wenn die Änderung des Datums beispielsweise einen Wechsel zur Sommerzeit überschreitet (bei dem eine Stunde entfällt), ist die Differenz zwischen dem neuen und dem alten Zeitstempel eine Stunde geringer als die nominelle Tagesdifferenz multipliziert mit 24 Stunden. Umgekehrt ergibt sich beim Wechsel zur Standardzeit (bei dem eine Stunde hinzukommt) eine zusätzliche Stunde. Wenn Sie das Datum um eine feste Zeitspanne ändern müssen, verwenden Sie stattdessen {{jsxref("Date/setUTCFullYear", "setUTCFullYear()")}} oder {{jsxref("Date/setTime", "setTime()")}}.

Wenn die neue lokale Zeit in eine Umstellung des UTC-Offsets fällt, wird der genaue Zeitpunkt nach demselben Verfahren bestimmt wie bei der Option [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) von `Temporal`. Das heißt: Entspricht die lokale Zeit zwei Zeitpunkten, wird der frühere gewählt. Existiert die lokale Zeit nicht (weil eine Lücke vorliegt), wird sie um die Dauer der Lücke nach vorn verschoben.

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
