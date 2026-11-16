---
title: Date.prototype.setSeconds()
short-title: setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`setSeconds()`** von {{jsxref("Date")}}-Instanzen ändert die Sekunden und/oder Millisekunden dieses Datums gemäß der lokalen Zeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setSeconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setSeconds(42);

console.log(event.getSeconds());
// Expected output: 42

console.log(event);
// Expected output: "Tue Aug 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary
```

## Syntax

```js-nolint
setSeconds(secondsValue)
setSeconds(secondsValue, msValue)
```

### Parameter

- `secondsValue`
  - : Eine Ganzzahl zwischen 0 und 59, die die Sekunden angibt.
- `msValue` {{optional_inline}}
  - : Eine Ganzzahl zwischen 0 und 999, die die Millisekunden angibt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder ein anderer Wert, der zu `NaN` [konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird, beispielsweise `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie den Parameter `msValue` nicht angeben, wird der von der Methode {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} zurückgegebene Wert verwendet.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setSeconds()`, die Datumsangaben im {{jsxref("Date")}}-Objekt entsprechend anzupassen. Wenn Sie beispielsweise 100 für `secondsValue` verwenden, wird die im {{jsxref("Date")}}-Objekt gespeicherte Minutenzahl um 1 erhöht und für die Sekunden der Wert 40 verwendet.

Da `setSeconds()` mit der lokalen Zeit arbeitet, kann beim Überschreiten eines Wechsels zwischen Sommer- und Normalzeit eine andere Zeitspanne vergehen als erwartet. Wenn durch das Setzen der Sekunden beispielsweise ein Wechsel zur Sommerzeit überschritten wird, bei dem eine Stunde übersprungen wird, ist die Differenz zwischen den Zeitstempeln des neuen und des alten Datums eine Stunde kleiner als die nominelle Zeitdifferenz. Beim Überschreiten eines Wechsels zur Normalzeit, bei dem eine Stunde hinzukommt, ist sie dagegen eine Stunde größer. Wenn Sie das Datum um eine feste Zeitspanne ändern müssen, sollten Sie {{jsxref("Date/setUTCSeconds", "setUTCSeconds()")}} oder {{jsxref("Date/setTime", "setTime()")}} verwenden.

Wenn die neue lokale Zeit in einen Zeitzonenwechsel fällt, wird der genaue Zeitpunkt nach demselben Verfahren bestimmt wie bei der Option [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) von `Temporal`: Entspricht die lokale Zeit zwei Zeitpunkten, wird der frühere gewählt. Existiert die lokale Zeit nicht, weil sie in eine Zeitlücke fällt, wird sie um die Dauer dieser Lücke nach vorn verschoben.

## Beispiele

### Verwendung von setSeconds()

```js
const theBigDay = new Date();
theBigDay.setSeconds(30);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
