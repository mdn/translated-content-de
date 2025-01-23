---
title: Temporal.Duration.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/compare
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Duration.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Dauer kürzer, gleich oder länger als die zweite Dauer ist.

## Syntax

```js-nolint
Temporal.Duration.compare(duration1, duration2)
Temporal.Duration.compare(duration1, duration2, options)
```

### Parameter

- `duration1`
  - : Eine Zeichenkette, ein Objekt oder eine {{jsxref("Temporal.Duration")}}-Instanz, die die erste zu vergleichende Dauer repräsentiert. Sie wird mit demselben Algorithmus wie {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} in ein `Temporal.Duration`-Objekt umgewandelt.
- `duration2`
  - : Die zweite zu vergleichende Dauer, mit dem gleichen Algorithmus wie `duration1` in ein `Temporal.Duration`-Objekt umgewandelt.
- `options` {{optional_inline}}
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `relativeTo` {{optional_inline}}
      - : Ein zonenbezogenes oder einfaches Datum (Zeit), das die Zeit- und Kalenderinformationen bereitstellt, um [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) zu lösen (siehe den Link für die allgemeine Interpretation dieser Option). Erforderlich, wenn entweder `duration1` oder `duration2` eine Kalenderdauer ist (es sei denn, sie sind komponentenweise gleich, dann wird ohne Berechnungen `0` zurückgegeben).

### Rückgabewert

Gibt `-1` zurück, wenn `duration1` kürzer als `duration2` ist, `0` wenn sie gleich sind, und `1` wenn `duration1` länger ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn entweder `duration1` oder `duration2` eine [Kalenderdauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (sie hat einen nicht-null `years`, `months` oder `weeks`) ist, und `relativeTo` nicht angegeben ist.

## Beschreibung

Wenn `relativeTo` ein zonengebundenes Datum-Zeit ist und entweder `duration1` oder `duration2` eine Kalenderdauer ist, wird das Ergebnis berechnet, indem die Dauern zum Ausgangspunkt hinzugefügt und dann die resultierenden Zeitpunkte verglichen werden. Andernfalls erfolgt der Vergleich durch Umwandlung beider in Nanosekunden (unter der Annahme von 24-Stunden-Tagen und ggf. Verwendung des Kalenders von `relativeTo`) und Vergleich der Ergebnisse.

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

### Verwendung von zonenbezogenem relativeTo

Unter Verwendung eines zonenbezogenen `relativeTo` kann man sogar die Umstellung auf Sommerzeit berücksichtigen. Am `2024-11-03` wechselt die USA von Sommerzeit zu Standardzeit, sodass dieser Tag 25 Stunden hat, weil die Uhr um 1 Stunde zurückgestellt wird.

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

Der Zweck dieser `compare()`-Funktion besteht darin, als Vergleichsfunktion übergeben zu werden, um in {{jsxref("Array.prototype.sort()")}} und verwandten Funktionen verwendet zu werden.

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

Optionen so übergeben:

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
