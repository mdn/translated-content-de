---
title: Temporal.Instant.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/equals
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`equals()`**-Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt `true` zurück, wenn dieses Instant gleichwertig im Wert zu einem anderen Instant ist (in einer Form, die mit {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} umwandelbar ist), und `false` andernfalls. Sie werden anhand ihrer {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} verglichen. Es ist äquivalent zu `Temporal.Instant.compare(this, other) === 0`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}} Instanz, die das andere zu vergleichende Instant repräsentiert. Es wird in ein `Temporal.Instant` Objekt umgewandelt, das denselben Algorithmus wie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} verwendet.

### Rückgabewert

`true`, wenn dieses Instant gleich `other` in Nanosekunden ist, andernfalls `false`.

## Beispiele

### Verwendung von equals()

```js
const instant1 = Temporal.Instant.from("2021-08-01T12:34:56Z");
const instant2 = Temporal.Instant.fromEpochMilliseconds(1627821296000);
console.log(instant1.equals(instant2)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}}
