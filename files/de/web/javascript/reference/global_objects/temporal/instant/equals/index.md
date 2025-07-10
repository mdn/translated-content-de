---
title: Temporal.Instant.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/equals
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die Methode **`equals()`** von {{jsxref("Temporal.Instant")}}-Instanzen gibt `true` zurück, wenn dieser Zeitpunkt einem anderen Zeitpunkt im Wert entspricht (in einer Form, die von {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden durch ihre {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} verglichen. Es entspricht `Temporal.Instant.compare(this, other) === 0`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}}-Instanz, die den anderen zu vergleichenden Zeitpunkt darstellt. Er wird mit demselben Algorithmus, den {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} verwendet, in ein `Temporal.Instant`-Objekt konvertiert.

### Rückgabewert

`true`, wenn dieser Zeitpunkt gleich `other` in Nanosekunden ist, `false` sonst.

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
