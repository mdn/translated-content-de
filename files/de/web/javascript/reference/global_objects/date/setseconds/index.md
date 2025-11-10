---
title: Date.prototype.setSeconds()
short-title: setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

Die **`setSeconds()`** Methode von {{jsxref("Date")}} Instanzen ändert die Sekunden und/oder Millisekunden für dieses Datum gemäß der lokalen Zeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setSeconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setSeconds(42);

console.log(event.getSeconds());
// Expected output: 42

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary
```

## Syntax

```js-nolint
setSeconds(secondsValue)
setSeconds(secondsValue, msValue)
```

### Parameter

- `secondsValue`
  - : Ein ganzzahliger Wert zwischen 0 und 59, der die Sekunden darstellt.
- `msValue` {{optional_inline}}
  - : Ein ganzzahliger Wert zwischen 0 und 999, der die Millisekunden darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt vor Ort und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [gezwungen werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn Sie den `msValue` Parameter nicht angeben, wird der Wert von der {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} Methode verwendet.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setSeconds()`, die Datumsinformationen im {{jsxref("Date")}} Objekt entsprechend zu aktualisieren. Zum Beispiel, wenn Sie 100 für `secondsValue` verwenden, wird die in dem {{jsxref("Date")}} Objekt gespeicherte Minute um 1 erhöht und 40 wird für die Sekunden verwendet.

Da `setSeconds()` in der lokalen Zeit arbeitet, kann das Überqueren einer Sommerzeitgrenze (DST) zu einer anderen verstrichenen Zeit als erwartet führen. Zum Beispiel, wenn das Einstellen der Sekunden eine Vorwärtsumstellung (Verlust einer Stunde) überschreitet, ist der Unterschied in den Zeitstempeln zwischen dem neuen und alten Datum eine Stunde weniger als der nominale Zeitunterschied. Umgekehrt führt das Überqueren einer Rückwärtsumstellung (Gewinn einer Stunde) zu einer zusätzlichen Stunde. Wenn Sie das Datum um einen festen Zeitraum anpassen müssen, sollten Sie {{jsxref("Date/setUTCSeconds", "setUTCSeconds()")}} oder {{jsxref("Date/setTime", "setTime()")}} verwenden.

Wenn die neue lokale Zeit innerhalb einer Offset-Transition fällt, wird die genaue Zeit mit demselben Verhalten wie die `Temporal` [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) Option abgeleitet. Das heißt, wenn die lokale Zeit zwei Instanzen entspricht, wird die frühere gewählt; wenn die lokale Zeit nicht existiert (es gibt eine Lücke), gehen wir um die Dauer der Lücke vorwärts.

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
