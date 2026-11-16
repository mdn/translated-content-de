---
title: Date.prototype.setHours()
short-title: setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`setHours()`** von {{jsxref("Date")}}-Instanzen ändert die Stunden, Minuten, Sekunden und/oder Millisekunden dieses Datums entsprechend der Ortszeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");
event.setHours(20);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary

event.setHours(20, 21, 22);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"
```

## Syntax

```js-nolint
setHours(hoursValue)
setHours(hoursValue, minutesValue)
setHours(hoursValue, minutesValue, secondsValue)
setHours(hoursValue, minutesValue, secondsValue, msValue)
```

### Parameter

- `hoursValue`
  - : Eine Ganzzahl zwischen 0 und 23, die die Stunden angibt.
- `minutesValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 0 und 59, die die Minuten angibt.
- `secondsValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 0 und 59, die die Sekunden angibt. Wenn Sie `secondsValue` angeben, müssen Sie auch `minutesValue` angeben.
- `msValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 0 und 999, die die Millisekunden angibt. Wenn Sie `msValue` angeben, müssen Sie auch `minutesValue` und `secondsValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder ein anderer Wert, der [in `NaN` umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird, etwa `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `minutesValue`, `secondsValue` und `msValue` nicht angeben, werden dieselben Werte verwendet, die {{jsxref("Date/getMinutes", "getMinutes()")}}, {{jsxref("Date/getSeconds", "getSeconds()")}} und {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} zurückgeben.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsangaben im {{jsxref("Date")}}-Objekt entsprechend angepasst. Wenn Sie beispielsweise für `secondsValue` den Wert 100 angeben, werden die Minuten um 1 erhöht (`minutesValue + 1`) und für die Sekunden wird der Wert 40 verwendet.

Da `setHours()` mit der Ortszeit arbeitet, kann das Überschreiten einer Zeitumstellungsgrenze zu einer anderen verstrichenen Zeit als erwartet führen. Wenn das Setzen der Stunden beispielsweise eine Umstellung auf die Sommerzeit überschreitet (bei der eine Stunde entfällt), ist die Differenz zwischen dem neuen und dem alten Zeitstempel eine Stunde geringer als die nominelle Stundendifferenz. Umgekehrt ergibt sich beim Überschreiten einer Umstellung auf die Winterzeit (bei der eine Stunde hinzukommt) eine zusätzliche Stunde. Wenn Sie das Datum um eine feste Zeitspanne verschieben müssen, sollten Sie {{jsxref("Date/setUTCHours", "setUTCHours()")}} oder {{jsxref("Date/setTime", "setTime()")}} verwenden.

Wenn die neue Ortszeit in einen Zeitraum der Zeitumstellung fällt, wird der genaue Zeitpunkt nach demselben Verhalten bestimmt wie bei der Option [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) von `Temporal`. Das bedeutet: Entspricht die Ortszeit zwei Zeitpunkten, wird der frühere gewählt. Existiert die Ortszeit nicht (es gibt eine Lücke), wird sie um die Dauer der Lücke nach vorn verschoben.

## Beispiele

### setHours() verwenden

```js
const theBigDay = new Date();
theBigDay.setHours(7);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
