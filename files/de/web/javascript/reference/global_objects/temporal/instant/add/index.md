---
title: Temporal.Instant.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`add()`**-Methode von {{jsxref("Temporal.Instant")}}-Instanzen gibt ein neues `Temporal.Instant`-Objekt zurück, das diesen Zeitpunkt um eine gegebene Dauer vorwärts bewegt darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann).

## Syntax

```js-nolint
add(duration)
```

### Parameter

- `duration`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Dauer darstellt, die zu diesem Zeitpunkt hinzugefügt werden soll. Diese wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}}-Objekt, das die Addition der `duration` zu diesem Zeitpunkt darstellt. Ist `duration` positiv, ist der zurückgegebene Zeitpunkt später als dieser Zeitpunkt; ist `duration` negativ, ist der zurückgegebene Zeitpunkt früher als dieser Zeitpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `duration` ist eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (hat einen ungleich null `years`, `months` oder `weeks`), oder hat ungleich null `days`, da Kalenderdauern ohne Kalender- und Zeitbezug mehrdeutig sind.
    - Das Ergebnis liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der bei ±10<sup>8</sup> Tagen oder etwa ±273,972.6 Jahren vom Unix-Epoch liegt.

## Beschreibung

Im Wesentlichen ermittelt die `add()`-Methode zuerst die Anzahl der Nanosekunden, die `duration` darstellt, fügt diese den {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} dieses Zeitpunktes hinzu und erstellt dann ein neues `Temporal.Instant`-Objekt aus dem Ergebnis. Daher muss die Dauer eindeutig eine feste Zeitmenge darstellen.

Wenn Sie eine Kalenderdauer hinzufügen möchten, muss die Addition im Kontext eines Kalenders und einer Zeitzone erfolgen, um die variablen Längen von Monaten, Jahren und Tagen (aufgrund von Sommerzeit) zu berücksichtigen. In diesem Fall konvertieren Sie den Zeitpunkt in ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt, fügen die Dauer hinzu und konvertieren das Ergebnis dann zurück in einen Zeitpunkt.

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
