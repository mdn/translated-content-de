---
title: Temporal.Instant.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/compare
l10n:
  sourceCommit: 028c0fe110e66173c3f9ce6c3ab1a3db4b2e8df9
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Instant.compare()`** gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Ereignis vor, gleich oder nach dem zweiten Ereignis kommt. Sie ist gleichbedeutend mit dem Vergleich der {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} der beiden Instants.

## Syntax

```js-nolint
Temporal.Instant.compare(instant1, instant2)
```

### Parameter

- `instant1`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}} Instanz, die das erste zu vergleichende Ereignis darstellt. Es wird in ein `Temporal.Instant`-Objekt umgewandelt, wobei derselbe Algorithmus wie in {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} verwendet wird.
- `instant2`
  - : Das zweite zu vergleichende Ereignis, das mit demselben Algorithmus wie `instant1` in ein `Temporal.Instant`-Objekt umgewandelt wird.

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

### Sortieren eines Arrays von Instants

Der Zweck dieser `compare()`-Funktion besteht darin, als Vergleichsfunktion verwendet zu werden, die an {{jsxref("Array.prototype.sort()")}} und verwandte Funktionen übergeben wird.

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
