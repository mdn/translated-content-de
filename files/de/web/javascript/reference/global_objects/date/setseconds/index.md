---
title: Date.prototype.setSeconds()
short-title: setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
l10n:
  sourceCommit: 5ed8a617221499f2255e55634ce2122c942eb610
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

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder ein anderer Wert, der wie `undefined` in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie den Parameter `msValue` nicht angeben, wird der von der Methode {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} zurückgegebene Wert verwendet.

Wenn ein angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setSeconds()`, die Datumsangaben im {{jsxref("Date")}}-Objekt entsprechend anzupassen. Wenn Sie beispielsweise für `secondsValue` den Wert 100 verwenden, werden die im {{jsxref("Date")}}-Objekt gespeicherten Minuten um 1 erhöht und für die Sekunden wird 40 verwendet.

Da `setSeconds()` mit der lokalen Zeit arbeitet, kann beim Überschreiten einer Zeitumstellungsgrenze die verstrichene Zeit vom erwarteten Wert abweichen. Wenn durch das Setzen der Sekunden beispielsweise eine Umstellung auf die Sommerzeit überschritten wird (bei der eine Stunde entfällt), ist die Differenz zwischen dem neuen und dem alten Zeitstempel um eine Stunde kleiner als die nominelle Zeitdifferenz. Umgekehrt kommt beim Überschreiten der Umstellung zurück auf die Normalzeit (bei der eine Stunde hinzukommt) eine zusätzliche Stunde hinzu. Wenn Sie das Datum um eine feste Zeitspanne anpassen müssen, verwenden Sie stattdessen {{jsxref("Date/setUTCSeconds", "setUTCSeconds()")}} oder {{jsxref("Date/setTime", "setTime()")}}.

Wenn die neue lokale Zeit in einen Zeitumstellungsbereich fällt, wird der genaue Zeitpunkt nach demselben Verfahren bestimmt wie bei der Option [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) von `Temporal`. Entspricht die lokale Zeit zwei Zeitpunkten, wird der frühere gewählt. Existiert die lokale Zeit nicht (es gibt eine Lücke), wird die Zeit um die Dauer der Lücke vorgestellt.

## Beispiele

### `setSeconds()` verwenden

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
