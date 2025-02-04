---
title: Temporal.Instant.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues `Temporal.Instant` Objekt zurück, das diesen Zeitpunkt um eine gegebene Dauer vorwärts verschoben repräsentiert (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist).

## Syntax

```js-nolint
add(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die eine Dauer repräsentiert, die zu diesem Zeitpunkt hinzugefügt werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration` Objekt konvertiert.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}} Objekt, das die Addition von `duration` zu diesem Zeitpunkt darstellt. Ist `duration` positiv, so ist der zurückgegebene Zeitpunkt später als dieser Zeitpunkt; ist `duration` negativ, so ist der zurückgegebene Zeitpunkt früher als dieser Zeitpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat eine ungleich null `years`, `months`, oder `weeks`), oder hat ein ungleich null `days`, da Kalenderdauern ohne Kalender und Zeitreferenz mehrdeutig sind.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), welcher ±10<sup>8</sup> Tage, oder etwa ±273.972,6 Jahre, ab der Unix-Epoche ist.

## Beschreibung

Im Wesentlichen erhält die `add()` Methode zuerst die Anzahl der Nanosekunden, die durch `duration` repräsentiert werden, addiert sie zu diesem Zeitpunkt's {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}, und erstellt dann ein neues `Temporal.Instant` Objekt aus dem Ergebnis. Daher muss die Dauer eindeutig eine feste Zeitmenge darstellen.

Wenn Sie eine Kalenderdauer hinzufügen möchten, muss die Addition im Kontext eines Kalenders und einer Zeitzone erfolgen, um die variablen Längen von Monaten, Jahren und Tagen (wegen Sommerzeit) zu berücksichtigen. In diesem Fall konvertieren Sie den Zeitpunkt in ein {{jsxref("Temporal.ZonedDateTime")}} Objekt, addieren die Dauer und konvertieren das Ergebnis dann zurück in einen Zeitpunkt.

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
