---
title: Temporal.Instant()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/Instant
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.Instant()`** Konstruktor erzeugt {{jsxref("Temporal.Instant")}} Objekte.

Dieser Konstruktor ist genau gleichbedeutend mit dem Aufruf von {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}.

## Syntax

```js-nolint
new Temporal.Instant(epochNanoseconds)
```

> **Note:** `Temporal.Instant()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `epochNanoseconds`
  - : Ein [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt), das die Anzahl der Nanosekunden seit der Unix-Epoche darstellt.

### Rückgabewert

Ein neues `Temporal.Instant` Objekt, das den durch `epochNanoseconds` angegebenen Zeitpunkt in der Zeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `epochNanoseconds` außerhalb des Bereichs eines darstellbaren Zeitpunkts liegt, was ±10<sup>8</sup> Tage (±8,64e21 Nanosekunden oder etwa ±273.972,6 Jahre) umfasst.

## Beispiele

### Verwendung von Temporal.Instant()

```js
const instant = new Temporal.Instant(0n);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff = new Temporal.Instant(-275248380000000000n);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = new Temporal.Instant(355924804000000000n);
console.log(sts1Liftoff.toString()); // 1981-04-12T12:00:04Z
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
