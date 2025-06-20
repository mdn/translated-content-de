---
title: Temporal.Instant.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/compare
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Instant.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob der erste Zeitpunkt vor, gleich oder nach dem zweiten Zeitpunkt liegt. Sie entspricht dem Vergleich der {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} der beiden Zeitpunkte.

## Syntax

```js-nolint
Temporal.Instant.compare(instant1, instant2)
```

### Parameter

- `instant1`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}}-Instanz, die den ersten zu vergleichenden Zeitpunkt darstellt. Er wird mit demselben Algorithmus wie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} in ein `Temporal.Instant`-Objekt umgewandelt.
- `instant2`
  - : Der zweite zu vergleichende Zeitpunkt, der mit demselben Algorithmus wie `instant1` in ein `Temporal.Instant`-Objekt umgewandelt wird.

### Rückgabewert

Gibt `-1` zurück, wenn `instant1` vor `instant2` liegt, `0`, wenn sie gleich sind, und `1`, wenn `instant1` nach `instant2` liegt.

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

Der Zweck dieser `compare()`-Funktion besteht darin, als Vergleichsfunktion zu dienen, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
