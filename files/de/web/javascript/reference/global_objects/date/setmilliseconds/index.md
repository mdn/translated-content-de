---
title: Date.prototype.setMilliseconds()
short-title: setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

Die **`setMilliseconds()`**-Methode von {{jsxref("Date")}}-Instanzen ändert die Millisekunden dieses Datums gemäß der lokalen Zeit.

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
  - : Eine ganze Zahl zwischen 0 und 999, die die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt vor Ort und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `millisecondsValue` `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie eine Zahl außerhalb des erwarteten Bereichs angeben, werden die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Zum Beispiel, wenn Sie 1005 angeben, wird die Anzahl der Sekunden um 1 erhöht und 5 wird für die Millisekunden verwendet.

Da `setMilliseconds()` auf der lokalen Zeit arbeitet, kann das Überqueren einer Sommerzeitgrenze (DST) zu einer anderen verstrichenen Zeit führen als erwartet. Zum Beispiel, wenn das Setzen der Millisekunden eine Vorwärtsverschiebung im Frühling (eine Stunde weniger) überquert, ist der Unterschied in den Zeitstempeln zwischen dem neuen und alten Datum eine Stunde weniger als der nominelle Zeitunterschied. Umgekehrt führt das Überqueren einer Rückverschiebung im Herbst (eine Stunde mehr) zu einer zusätzlichen Stunde. Wenn Sie das Datum um einen festen Zeitraum anpassen müssen, sollten Sie {{jsxref("Date/setUTCMilliseconds", "setUTCMilliseconds()")}} oder {{jsxref("Date/setTime", "setTime()")}} verwenden.

Wenn die neue lokale Zeit in eine Offset-Übergangsphase fällt, wird die genaue Zeit unter Verwendung desselben Verhaltens wie die `disambiguation: "compatible"`-Option von `Temporal`'s [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) abgeleitet. Das heißt, wenn die lokale Zeit zwei Momenten entspricht, wird der frühere gewählt; existiert die lokale Zeit nicht (es gibt eine Lücke), gehen wir um die Dauer der Lücke vorwärts.

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
