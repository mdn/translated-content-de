---
title: Date.prototype.setMinutes()
short-title: setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

Die Methode **`setMinutes()`** von {{jsxref("Date")}}-Instanzen ändert die Minuten für dieses Datum entsprechend der Ortszeit.

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
  - : Ein ganzzahliger Wert zwischen 0 und 59, der die Minuten darstellt.
- `secondsValue` {{optional_inline}}
  - : Ein ganzzahliger Wert zwischen 0 und 59, der die Sekunden darstellt. Wenn Sie `secondsValue` angeben, müssen Sie auch `minutesValue` angeben.
- `msValue` {{optional_inline}}
  - : Ein ganzzahliger Wert zwischen 0 und 999, der die Millisekunden darstellt. Wenn Sie `msValue` angeben, müssen Sie auch `minutesValue` und `secondsValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt an Ort und Stelle und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `secondsValue` und `msValue` nicht angeben, werden dieselben Werte wie die, die von {{jsxref("Date/getSeconds", "getSeconds()")}} und {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} zurückgegeben werden, verwendet.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, werden andere Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend aktualisiert. Wenn Sie zum Beispiel 100 für `secondsValue` angeben, wird die Minute um 1 erhöht (`minutesValue + 1`), und 40 wird für die Sekunden verwendet.

Da `setMinutes()` auf die Ortszeit wirkt, kann das Überqueren einer Sommerzeitgrenze (DST) zu einer anderen verstrichenen Zeit als erwartet führen. Zum Beispiel, wenn durch das Setzen der Minuten ein „Vorstellen“ im Frühling (eine Stunde verloren) überquert wird, ist die Differenz in den Zeitstempeln zwischen dem neuen und dem alten Datum um eine Stunde weniger als der nominale Zeitunterschied. Umgekehrt führt das Überqueren eines „Zurück“-Übergangs im Herbst (eine Stunde gewonnen) zu einer zusätzlichen Stunde. Wenn Sie das Datum um einen festen Zeitbetrag anpassen müssen, sollten Sie {{jsxref("Date/setUTCMinutes", "setUTCMinutes()")}} oder {{jsxref("Date/setTime", "setTime()")}} verwenden.

Wenn die neue Ortszeit innerhalb eines Offset-Übergangs liegt, wird die genaue Zeit mit demselben Verhalten wie die Option [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) von `Temporal` abgeleitet. Das heißt, wenn die Ortszeit zwei Zeitpunkte entspricht, wird der frühere gewählt; wenn die Ortszeit nicht existiert (es gibt eine Lücke), springen wir um die Dauer der Lücke vor.

## Beispiele

### Verwendung von setMinutes()

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
