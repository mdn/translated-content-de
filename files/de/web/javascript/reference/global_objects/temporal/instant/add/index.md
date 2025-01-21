---
title: Temporal.Instant.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`add()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues `Temporal.Instant` Objekt zurück, das diesen Zeitpunkt um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) vorwärts verschoben darstellt.

## Syntax

```js-nolint
add(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer darstellt, die zu diesem Zeitpunkt hinzugefügt werden soll. Sie wird mit demselben Algorithmus in ein `Temporal.Duration` Objekt umgewandelt wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}} Objekt, das die Addition von `duration` zu diesem Zeitpunkt darstellt. Wenn `duration` positiv ist, dann liegt der zurückgegebene Zeitpunkt später als dieser Zeitpunkt; wenn `duration` negativ ist, dann liegt der zurückgegebene Zeitpunkt früher als dieser Zeitpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat ein von Null verschiedenes `years`, `months` oder `weeks`) oder hat ein von Null verschiedenes `days`, da Kalenderdauern ohne Kalender und Zeitreferenz mehrdeutig sind.
    - Die Summe aus `this` und `duration` überläuft das maximal darstellbare oder unterläuft das minimal darstellbare Instant, das ±10<sup>8</sup> Tage (etwa ±273.972,6 Jahre) beträgt.

## Beschreibung

Im Wesentlichen ermittelt die `add()` Methode zuerst die Anzahl der Nanosekunden, die durch `duration` repräsentiert werden, addiert sie zu den {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} dieses Zeitpunkts und erstellt dann ein neues `Temporal.Instant` Objekt aus dem Ergebnis. Daher muss die Dauer eindeutig eine feste Zeitmenge darstellen.

Wenn Sie eine Kalenderdauer hinzufügen möchten, muss die Addition im Kontext eines Kalenders und einer Zeitzone erfolgen, um die variablen Längen von Monaten, Jahren und Tagen (aufgrund der Sommerzeit) zu berücksichtigen. In diesem Fall wandeln Sie das Instant in ein {{jsxref("Temporal.ZonedDateTime")}} Objekt um, fügen die Dauer hinzu und wandeln das Ergebnis dann wieder in ein Instant um.

Das Hinzufügen einer Dauer entspricht dem [Subtrahieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract) ihrer [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

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
