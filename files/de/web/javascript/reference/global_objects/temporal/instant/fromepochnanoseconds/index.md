---
title: Temporal.Instant.fromEpochNanoseconds()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/fromEpochNanoseconds
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Instant.fromEpochNanoseconds()`** erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Nanosekunden seit dem Unix-Epoch (Mitternacht am Anfang des 1. Januar 1970, UTC).

Um ein {{jsxref("Date")}}-Objekt in ein `Temporal.Instant`-Objekt zu konvertieren, verwenden Sie stattdessen {{jsxref("Date.prototype.toTemporalInstant()")}}.

## Syntax

```js-nolint
Temporal.Instant.fromEpochNanoseconds(epochNanoseconds)
```

### Parameter

- `epochNanoseconds`
  - : Ein [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt), der die Anzahl der Nanosekunden seit dem Unix-Epoch darstellt.

### Rückgabewert

Ein neues `Temporal.Instant`-Objekt, das den durch `epochNanoseconds` angegebenen Zeitpunkt in der Zeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `epochNanoseconds` außerhalb des Bereichs eines darstellbaren Zeitpunkts liegt, was ±10<sup>8</sup> Tage (±8.64e21 Nanosekunden oder etwa ±273,972.6 Jahre) umfasst.

## Beispiele

### Verwendung von Temporal.Instant.fromEpochNanoseconds()

```js
const instant = Temporal.Instant.fromEpochNanoseconds(0n);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff =
  Temporal.Instant.fromEpochNanoseconds(-275248380000000000n);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = Temporal.Instant.fromEpochNanoseconds(355924804000000000n);
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
- {{jsxref("Date.prototype.toTemporalInstant()")}}
