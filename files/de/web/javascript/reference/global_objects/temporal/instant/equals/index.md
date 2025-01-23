---
title: Temporal.Instant.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/equals
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`equals()`**-Methode von {{jsxref("Temporal.Instant")}}-Instanzen gibt `true` zurück, wenn dieser Zeitpunkt in seinem Wert einem anderen Zeitpunkt entspricht (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist) und `false` andernfalls. Sie werden anhand ihrer {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} verglichen. Es ist gleichbedeutend mit `Temporal.Instant.compare(this, other) === 0`.

## Syntax

```js-nolint
equals(other)
```

### Parameter

- `other`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}}-Instanz, die den anderen zu vergleichenden Zeitpunkt darstellt. Sie wird mit demselben Algorithmus wie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} in ein `Temporal.Instant`-Objekt konvertiert.

### Rückgabewert

`true` wenn dieser Zeitpunkt in Nanosekunden gleich `other` ist, `false` andernfalls.

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
