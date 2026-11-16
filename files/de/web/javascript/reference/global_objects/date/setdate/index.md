---
title: Date.prototype.setDate()
short-title: setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`setDate()`** von {{jsxref("Date")}}-Instanzen ändert den Tag des Monats für dieses Datum gemäß der Ortszeit.

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
  - : Eine Ganzzahl, die den Tag des Monats angibt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `dateValue` `NaN` ist (oder ein anderer Wert, der zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird, etwa `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie eine Zahl außerhalb des erwarteten Bereichs angeben, werden die Datumsangaben im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Enthält das `Date`-Objekt beispielsweise den 1. Juni, ändert ein `dateValue` von 40 das Datum auf den 10. Juli, während ein `dateValue` von 0 es auf den letzten Tag des Vormonats, den 31. Mai, ändert.

Da `setDate()` mit der Ortszeit arbeitet, kann das Überschreiten einer Grenze zwischen Sommer- und Normalzeit zu einer anderen verstrichenen Zeit führen als erwartet. Wenn beim Setzen des Datums beispielsweise auf Sommerzeit umgestellt wird (wobei eine Stunde entfällt), ist die Differenz zwischen dem neuen und dem alten Zeitstempel eine Stunde geringer als die nominelle Anzahl der Tage multipliziert mit 24 Stunden. Bei der Umstellung auf Normalzeit (wobei eine Stunde hinzukommt) ergibt sich dagegen eine zusätzliche Stunde. Wenn Sie das Datum um eine feste Zeitspanne ändern müssen, sollten Sie {{jsxref("Date/setUTCDate", "setUTCDate()")}} oder {{jsxref("Date/setTime", "setTime()")}} verwenden.

Wenn die neue Ortszeit in einen Zeitzonenübergang fällt, wird der genaue Zeitpunkt nach demselben Verhalten bestimmt wie bei der Option [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) von `Temporal`. Das heißt: Entspricht die Ortszeit zwei Zeitpunkten, wird der frühere gewählt. Existiert die Ortszeit nicht (weil eine Lücke besteht), wird sie um die Dauer der Lücke nach vorn verschoben.

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
