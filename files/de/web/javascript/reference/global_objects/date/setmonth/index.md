---
title: Date.prototype.setMonth()
short-title: setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`setMonth()`** von {{jsxref("Date")}}-Instanzen ändert den Monat und/oder den Tag des Monats für dieses Datum gemäß der Ortszeit.

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
  - : Eine Ganzzahl, die den Monat angibt: 0 für Januar, 1 für Februar und so weiter.
- `dateValue` {{optional_inline}}
  - : Eine Ganzzahl von 1 bis 31, die den Tag des Monats angibt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder ein anderer Wert, der in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird, etwa `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie den Parameter `dateValue` nicht angeben, wird derselbe Wert verwendet, den {{jsxref("Date/getDate", "getDate()")}} zurückgibt.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden die anderen Parameter und die Datumsangaben im {{jsxref("Date")}}-Objekt entsprechend angepasst. Wenn Sie beispielsweise für `monthValue` den Wert 15 angeben, wird das Jahr um 1 erhöht und für den Monat der Wert 3 verwendet.

Der aktuelle Tag des Monats beeinflusst das Verhalten dieser Methode. Vereinfacht gesagt wird die Anzahl der Tage, die dem aktuellen Tag des Monats minus eins entspricht, zum ersten Tag des als Parameter angegebenen neuen Monats addiert. Daraus ergibt sich das neue Datum. Wenn das aktuelle Datum beispielsweise der 31. Januar 2016 ist, ergibt ein Aufruf von `setMonth()` mit dem Wert 1 den 2. März 2016. Das liegt daran, dass der Februar 2016 29 Tage hatte.

Da `setMonth()` mit der Ortszeit arbeitet, kann beim Überschreiten einer Zeitumstellung die verstrichene Zeit vom erwarteten Wert abweichen. Wenn durch das Setzen des Monats beispielsweise eine Umstellung auf die Sommerzeit überschritten wird (bei der eine Stunde entfällt), ist die Differenz zwischen den Zeitstempeln des neuen und des alten Datums um eine Stunde geringer als die rechnerische Differenz in Tagen multipliziert mit 24 Stunden. Umgekehrt ergibt sich beim Überschreiten einer Umstellung zurück auf die Normalzeit (bei der eine Stunde hinzukommt) eine zusätzliche Stunde. Wenn Sie das Datum um eine feste Zeitspanne verschieben müssen, sollten Sie {{jsxref("Date/setUTCMonth", "setUTCMonth()")}} oder {{jsxref("Date/setTime", "setTime()")}} verwenden.

Wenn die neue Ortszeit in eine Zeitumstellung fällt, wird der genaue Zeitpunkt nach demselben Verfahren bestimmt wie bei der Option [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) von `Temporal`: Entspricht die Ortszeit zwei Zeitpunkten, wird der frühere gewählt. Existiert die Ortszeit nicht, weil eine Lücke entsteht, wird die Uhrzeit um die Dauer der Lücke vorwärts verschoben.

## Beispiele

### setMonth() verwenden

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
