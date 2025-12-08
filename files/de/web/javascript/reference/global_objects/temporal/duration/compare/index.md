---
title: Temporal.Duration.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`Temporal.Duration.compare()`** statische Methode gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Dauer kürzer, gleich oder länger ist als die zweite Dauer.

## Syntax

```js-nolint
Temporal.Duration.compare(duration1, duration2)
Temporal.Duration.compare(duration1, duration2, options)
```

### Parameter

- `duration1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}} Instanz, die die erste zu vergleichende Dauer repräsentiert. Sie wird mit demselben Algorithmus in ein `Temporal.Duration` Objekt umgewandelt wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `duration2`
  - : Die zweite zu vergleichende Dauer, umgewandelt in ein `Temporal.Duration` Objekt nach demselben Algorithmus wie `duration1`.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `relativeTo` {{optional_inline}}
      - : Ein zoned oder plain Datum(Zeit), das die Zeit- und Kalenderinformationen liefert, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) aufzulösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `duration1` oder `duration2` eine Kalenderdauer ist (es sei denn, sie sind komponentenweise gleich, in diesem Fall wird `0` ohne Berechnungen zurückgegeben).

### Rückgabewert

Gibt `-1` zurück, wenn `duration1` kürzer als `duration2` ist, `0`, wenn sie gleich sind, und `1`, wenn `duration1` länger als `duration2` ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn entweder `duration1` oder `duration2` eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) ist (sie hat eine nicht null `years`, `months` oder `weeks`), und `relativeTo` nicht angegeben ist.

## Beschreibung

Wenn `relativeTo` eine zoned date-time ist und entweder `duration1` oder `duration2` eine Kalenderdauer ist, wird das Ergebnis berechnet, indem die Dauern zum Ausgangspunkt hinzugefügt werden und dann die resultierenden Momente verglichen werden. Andernfalls erfolgt der Vergleich, indem beide in Nanosekunden umgerechnet werden (angenommene 24-Stunden-Tage und Verwendung des Kalenders von `relativeTo` falls notwendig) und die Ergebnisse verglichen werden.

## Beispiele

### Verwendung von Temporal.Duration.compare()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ minutes: 100 });
console.log(Temporal.Duration.compare(d1, d2)); // -1

const d3 = Temporal.Duration.from({ hours: 2 });
const d4 = Temporal.Duration.from({ minutes: 110 });
console.log(Temporal.Duration.compare(d3, d4)); // 1

const d5 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d6 = Temporal.Duration.from({ seconds: 5400 });
console.log(Temporal.Duration.compare(d5, d6)); // 0
```

### Vergleich von Kalenderdauern

```js
const d1 = Temporal.Duration.from({ days: 31 });
const d2 = Temporal.Duration.from({ months: 1 });

console.log(
  Temporal.Duration.compare(d1, d2, {
    relativeTo: Temporal.PlainDate.from("2021-01-01"), // ISO 8601 calendar
  }),
); // 0

console.log(
  Temporal.Duration.compare(d1, d2, {
    relativeTo: Temporal.PlainDate.from("2021-02-01"), // ISO 8601 calendar
  }),
); // 1; February has 28 days
```

### Verwendung von zoned relativeTo

Wenn ein zoned `relativeTo` verwendet wird, können sogar Änderungen der Sommerzeit berücksichtigt werden. Am `2024-11-03` wechselt die USA von Sommerzeit auf Normalzeit, sodass dieser Tag 25 Stunden hat, da die Uhr um 1 Stunde zurückgestellt wird.

```js
const d1 = Temporal.Duration.from({ days: 1 });
const d2 = Temporal.Duration.from({ hours: 24 });

console.log(
  Temporal.Duration.compare(d1, d2, {
    relativeTo: Temporal.ZonedDateTime.from(
      "2024-11-03T01:00-04:00[America/New_York]",
    ),
  }),
); // 1
```

### Sortierung eines Arrays von Dauern

Der Zweck dieser `compare()` Funktion ist es, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

```js
const durations = [
  Temporal.Duration.from({ hours: 1 }),
  Temporal.Duration.from({ hours: 2 }),
  Temporal.Duration.from({ hours: 1, minutes: 30 }),
  Temporal.Duration.from({ hours: 1, minutes: 45 }),
];

durations.sort(Temporal.Duration.compare);
console.log(durations.map((d) => d.toString()));
// [ 'PT1H', 'PT1H30M', 'PT1H45M', 'PT2H' ]
```

Optionen wie folgt übergeben:

```js
durations.sort((a, b) =>
  Temporal.Duration.compare(a, b, {
    relativeTo: Temporal.Now.zonedDateTimeISO(),
  }),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
