---
title: Temporal.Instant.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`**-Methode von Instanzen des {{jsxref("Temporal.Instant")}} gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Moment um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist) nach vorne verschoben darstellt.

## Syntax

```js-nolint
add(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.Duration")}}, die eine hinzuzufügende Dauer zu diesem Moment darstellt. Es wird mit dem gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}}-Objekt, das die Addition von `duration` zu diesem Moment darstellt. Ist `duration` positiv, dann liegt der zurückgegebene Moment später als dieser Moment; ist `duration` negativ, dann liegt der zurückgegebene Moment früher als dieser Moment.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat `years`, `months` oder `weeks` ungleich null) oder hat `days` ungleich null, da Kalenderdauern ohne Kalender- und Zeitreferenz mehrdeutig sind.
    - Die Summe von `this` und `duration` überschreitet das maximal darstellbare oder unterschreitet das minimal darstellbare Datum, das ±10<sup>8</sup> Tage (etwa ±273.972,6 Jahre) beträgt.

## Beschreibung

Im Wesentlichen ermittelt die `add()`-Methode zunächst die Anzahl der von `duration` dargestellten Nanosekunden, addiert sie zu den {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} dieses Moments und erstellt dann ein neues `Temporal.Instant`-Objekt aus dem Ergebnis. Deshalb muss die Dauer eindeutig eine feste Zeitmenge darstellen.

Wenn Sie eine Kalenderdauer hinzufügen möchten, muss die Addition im Kontext eines Kalenders und einer Zeitzone durchgeführt werden, um die variablen Längen von Monaten, Jahren und Tagen (aufgrund von Sommerzeit) zu berücksichtigen. In diesem Fall konvertieren Sie den Moment in ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt, fügen die Dauer hinzu und konvertieren das Ergebnis dann wieder in einen Moment.

Das Hinzufügen einer Dauer ist gleichbedeutend mit dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Beispiele

### Hinzufügen einer Temporal.Duration

```js
const instant = Temporal.Instant.fromEpochMilliseconds(0);
const duration = Temporal.Duration.from("PT1S");
const newInstant = instant.add(duration);
console.log(newInstant.epochMilliseconds); // 1000
```

### Hinzufügen eines Objekts oder eines Strings

```js
const instant = Temporal.Instant.fromEpochMilliseconds(0);
const newInstant = instant.add({ seconds: 1 });
console.log(newInstant.epochMilliseconds); // 1000

const newInstant2 = instant.add("PT1S");
console.log(newInstant2.epochMilliseconds); // 1000
```

### Hinzufügen einer Kalenderdauer

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1730610000000);
const duration = Temporal.Duration.from({ days: 1 });

// This instant is 2024-11-03T01:00:00-04:00[America/New_York],
// which is a DST transition day in the US.
const instant2 = instant
  .toZonedDateTimeISO("America/New_York")
  .add(duration)
  .toInstant();
console.log(instant2.epochMilliseconds); // 1730700000000

// The same instant is not a DST transition day in Paris.
const instant3 = instant
  .toZonedDateTimeISO("Europe/Paris")
  .add(duration)
  .toInstant();
console.log(instant3.epochMilliseconds); // 1730696400000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
