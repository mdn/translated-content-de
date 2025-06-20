---
title: Temporal.Instant.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`add()`**-Methode von {{jsxref("Temporal.Instant")}}-Instanzen gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt um eine angegebene Dauer nach vorne verschoben darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist).

## Syntax

```js-nolint
add(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die zu diesem Zeitpunkt hinzugefügt werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}}-Objekt, das das Hinzufügen von `duration` zu diesem Zeitpunkt darstellt. Falls `duration` positiv ist, dann ist der zurückgegebene Zeitpunkt später als dieser Zeitpunkt; falls `duration` negativ ist, dann ist der zurückgegebene Zeitpunkt früher als dieser Zeitpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat einen nicht-nullwertigen `years`, `months` oder `weeks`) oder hat einen nicht-nullwertigen `days`, da Kalenderdauern ohne Kalender und Zeitreferenz mehrdeutig sind.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre vom Unix-Epoch umfasst.

## Beschreibung

Im Wesentlichen ermittelt die `add()`-Methode zuerst die Anzahl der Nanosekunden, die von `duration` dargestellt werden, addiert sie zu den {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} dieses Zeitpunkts und erstellt dann ein neues `Temporal.Instant`-Objekt aus dem Ergebnis. Daher muss die Dauer eindeutig eine festgelegte Zeitmenge darstellen.

Wenn Sie eine Kalenderdauer hinzufügen möchten, muss die Addition im Kontext eines Kalenders und einer Zeitzone erfolgen, um die variablen Längen von Monaten, Jahren und Tagen (aufgrund der Sommerzeit) zu berücksichtigen. In diesem Fall konvertieren Sie den Zeitpunkt in ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt, fügen Sie die Dauer hinzu und konvertieren Sie das Ergebnis dann zurück in einen Zeitpunkt.

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
