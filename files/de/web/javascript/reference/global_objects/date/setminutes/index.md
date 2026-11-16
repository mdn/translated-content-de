---
title: Date.prototype.setMinutes()
short-title: setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`setMinutes()`** von {{jsxref("Date")}}-Instanzen ändert die Minuten dieses Datums entsprechend der Ortszeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setMinutes()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setMinutes(45);

console.log(event.getMinutes());
// Expected output: 45

console.log(event);
// Expected output: "Tue Aug 19 1975 23:45:30 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## Syntax

```js-nolint
setMinutes(minutesValue)
setMinutes(minutesValue, secondsValue)
setMinutes(minutesValue, secondsValue, msValue)
```

### Parameter

- `minutesValue`
  - : Eine Ganzzahl zwischen 0 und 59, die die Minuten angibt.
- `secondsValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 0 und 59, die die Sekunden angibt. Wenn Sie `secondsValue` angeben, müssen Sie auch `minutesValue` angeben.
- `msValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 0 und 999, die die Millisekunden angibt. Wenn Sie `msValue` angeben, müssen Sie auch `minutesValue` und `secondsValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist oder in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird, wie etwa `undefined`, wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `secondsValue` und `msValue` nicht angeben, werden die Werte verwendet, die {{jsxref("Date/getSeconds", "getSeconds()")}} und {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} zurückgeben.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsangaben im {{jsxref("Date")}}-Objekt entsprechend angepasst. Wenn Sie beispielsweise für `secondsValue` den Wert 100 angeben, werden die Minuten um 1 erhöht (`minutesValue + 1`) und für die Sekunden wird 40 verwendet.

Da `setMinutes()` mit der Ortszeit arbeitet, kann beim Überschreiten eines Übergangs zur oder von der Sommerzeit (Daylight Saving Time, DST) eine andere Zeitspanne vergehen als erwartet. Wenn das Setzen der Minuten beispielsweise einen Übergang zur Sommerzeit überschreitet, bei dem eine Stunde entfällt, ist die Differenz zwischen dem neuen und dem alten Zeitstempel eine Stunde kleiner als die nominelle Zeitdifferenz. Umgekehrt ergibt sich beim Überschreiten eines Übergangs zurück zur Normalzeit, bei dem eine Stunde hinzukommt, eine zusätzliche Stunde. Wenn Sie das Datum um eine feste Zeitspanne ändern müssen, verwenden Sie stattdessen {{jsxref("Date/setUTCMinutes", "setUTCMinutes()")}} oder {{jsxref("Date/setTime", "setTime()")}}.

Wenn die neue Ortszeit in einen Übergang des UTC-Offsets fällt, wird der genaue Zeitpunkt nach denselben Regeln ermittelt wie bei der Option [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) von `Temporal`. Das bedeutet: Entspricht die Ortszeit zwei Zeitpunkten, wird der frühere gewählt. Existiert die Ortszeit nicht, weil sie in eine Lücke fällt, wird sie um die Dauer der Lücke nach vorne verschoben.

## Beispiele

### setMinutes() verwenden

```js
const theBigDay = new Date();
theBigDay.setMinutes(45);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
