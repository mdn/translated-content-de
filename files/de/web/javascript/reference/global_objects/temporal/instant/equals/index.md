---
title: Temporal.Instant.prototype.equals()
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`equals()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt `true` zurück, wenn dieser Zeitpunkt im Wert mit einem anderen Zeitpunkt (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist) gleichwertig ist, und `false` sonst. Sie werden durch ihre {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} verglichen. Es ist äquivalent zu `Temporal.Instant.compare(this, other) === 0`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}} Instanz, die den anderen zu vergleichenden Zeitpunkt darstellt. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} in ein `Temporal.Instant` Objekt konvertiert.

### Rückgabewert

`true` wenn dieser Zeitpunkt nanosekunden-genau gleich `other` ist, andernfalls `false`.

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
