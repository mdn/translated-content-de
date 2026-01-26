---
title: Temporal.Instant.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`Temporal.Instant.compare()`** statische Methode gibt eine Zahl (-1, 0 oder 1) zurück, die anzeigt, ob der erste Zeitpunkt vor, gleich oder nach dem zweiten Zeitpunkt kommt. Es ist äquivalent zum Vergleich der {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} der beiden Zeitpunkte.

## Syntax

```js-nolint
Temporal.Instant.compare(instant1, instant2)
```

### Parameter

- `instant1`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}} Instanz, die den ersten Zeitpunkt darstellt, der verglichen werden soll. Er wird mithilfe des gleichen Algorithmus wie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} in ein `Temporal.Instant` Objekt konvertiert.
- `instant2`
  - : Der zweite Zeitpunkt, der verglichen werden soll, ebenfalls in ein `Temporal.Instant` Objekt konvertiert, unter Verwendung des gleichen Algorithmus wie `instant1`.

### Rückgabewert

Gibt `-1` zurück, wenn `instant1` vor `instant2` kommt, `0`, wenn sie gleich sind, und `1`, wenn `instant1` nach `instant2` kommt.

## Beispiele

### Verwendung von Temporal.Instant.compare()

```js
const instant1 = Temporal.Instant.from("2021-08-01T12:34:56Z");
const instant2 = Temporal.Instant.from("2021-08-01T12:34:56Z");

console.log(Temporal.Instant.compare(instant1, instant2)); // 0

const instant3 = Temporal.Instant.from("2021-08-01T13:34:56Z");
console.log(Temporal.Instant.compare(instant1, instant3)); // -1
```

### Sortieren eines Arrays von Zeitpunkten

Der Zweck dieser `compare()` Funktion ist es, als ein Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

```js
const instants = [
  Temporal.Instant.from("2021-08-01T12:34:56Z"),
  Temporal.Instant.from("2021-08-01T12:34:56+01:00"),
  Temporal.Instant.from("2021-08-01T12:34:56-01:00"),
];

instants.sort(Temporal.Instant.compare);
console.log(instants.map((instant) => instant.toString()));
// [ '2021-08-01T11:34:56Z', '2021-08-01T12:34:56Z', '2021-08-01T13:34:56Z' ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}}
