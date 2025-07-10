---
title: Temporal.Duration.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/compare
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die statische Methode **`Temporal.Duration.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die anzeigt, ob die erste Dauer kürzer, gleich oder länger als die zweite Dauer ist.

## Syntax

```js-nolint
Temporal.Duration.compare(duration1, duration2)
Temporal.Duration.compare(duration1, duration2, options)
```

### Parameter

- `duration1`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die die erste zu vergleichende Dauer darstellt. Sie wird in ein `Temporal.Duration`-Objekt konvertiert, unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `duration2`
  - : Die zweite zu vergleichende Dauer, konvertiert zu einem `Temporal.Duration`-Objekt nach dem gleichen Algorithmus wie `duration1`.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `relativeTo` {{optional_inline}}
      - : Ein zoniertes oder einfaches Datum(Zeit), das die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) aufzulösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `duration1` oder `duration2` eine Kalenderdauer ist (es sei denn, sie sind komponentenweise gleich, in diesem Fall wird `0` ohne Berechnungen zurückgegeben).

### Rückgabewert

Gibt `-1` zurück, wenn `duration1` kürzer als `duration2` ist, `0`, wenn sie gleich sind, und `1`, wenn `duration1` länger als `duration2` ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn entweder `duration1` oder `duration2` eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) ist (sie hat ein nicht-gleich-null `years`, `months` oder `weeks`), und `relativeTo` nicht bereitgestellt wird.

## Beschreibung

Wenn `relativeTo` ein zoniertes Datum-Zeit ist und entweder `duration1` oder `duration2` eine Kalenderdauer ist, wird das Ergebnis berechnet, indem die Dauern zum Ausgangspunkt hinzugefügt und anschließend die resultierenden Instanzen verglichen werden. Andernfalls erfolgt der Vergleich durch Umwandlung beider in Nanosekunden (angenommen wird 24-Stunden-Tage, unter Nutzung des Kalenders von `relativeTo` falls notwendig) und Vergleichen der Ergebnisse.

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

Durch die Verwendung eines zonierten `relativeTo` können sogar Änderungen der Sommerzeit berücksichtigt werden. Am `2024-11-03` wechselt die USA von der Sommerzeit zur Normalzeit, sodass dieser Tag 25 Stunden hat, weil die Uhr um 1 Stunde zurückgestellt wird.

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

Der Zweck dieser Funktion `compare()` ist, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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

So übergeben Sie Optionen:

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
