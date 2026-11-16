---
title: Date.prototype.setMilliseconds()
short-title: setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`setMilliseconds()`** von {{jsxref("Date")}}-Instanzen ändert die Millisekunden dieses Datums gemäß der lokalen Zeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setMilliseconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.getMilliseconds());
// Expected output: 0

event.setMilliseconds(456);

console.log(event.getMilliseconds());
// Expected output: 456
```

## Syntax

```js-nolint
setMilliseconds(millisecondsValue)
```

### Parameter

- `millisecondsValue`
  - : Eine Ganzzahl zwischen 0 und 999, die die Millisekunden angibt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `millisecondsValue` `NaN` ist (oder ein anderer Wert, der [zu `NaN` umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird, etwa `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie eine Zahl außerhalb des erwarteten Bereichs angeben, werden die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Wenn Sie beispielsweise 1005 angeben, erhöht sich die Anzahl der Sekunden um 1, und für die Millisekunden wird 5 verwendet.

Da `setMilliseconds()` mit der lokalen Zeit arbeitet, kann das Überschreiten einer Grenze zwischen Sommer- und Winterzeit zu einer anderen verstrichenen Zeit führen als erwartet. Wenn das Setzen der Millisekunden beispielsweise einen Wechsel zur Sommerzeit überschreitet (bei dem eine Stunde entfällt), ist die Differenz zwischen den Zeitstempeln des neuen und des alten Datums eine Stunde kleiner als die nominelle Zeitdifferenz. Umgekehrt führt das Überschreiten eines Wechsels zur Winterzeit (bei dem eine Stunde hinzukommt) zu einer zusätzlichen Stunde. Wenn Sie das Datum um eine feste Zeitspanne ändern müssen, sollten Sie {{jsxref("Date/setUTCMilliseconds", "setUTCMilliseconds()")}} oder {{jsxref("Date/setTime", "setTime()")}} verwenden.

Wenn die neue lokale Zeit in einen Übergang des UTC-Offsets fällt, wird der genaue Zeitpunkt nach demselben Verfahren bestimmt wie bei der Option [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) von `Temporal`. Das heißt: Entspricht die lokale Zeit zwei Zeitpunkten, wird der frühere gewählt. Existiert die lokale Zeit nicht (weil eine Lücke entsteht), wird sie um die Dauer der Lücke nach vorne verschoben.

## Beispiele

### Verwendung von setMilliseconds()

```js
const theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
