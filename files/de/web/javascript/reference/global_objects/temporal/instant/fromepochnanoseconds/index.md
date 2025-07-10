---
title: Temporal.Instant.fromEpochNanoseconds()
short-title: fromEpochNanoseconds()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/fromEpochNanoseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die statische Methode **`Temporal.Instant.fromEpochNanoseconds()`** erstellt ein neues `Temporal.Instant`-Objekt anhand der Anzahl von Nanosekunden seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC).

Um ein {{jsxref("Date")}}-Objekt in ein `Temporal.Instant`-Objekt zu konvertieren, verwenden Sie stattdessen {{jsxref("Date.prototype.toTemporalInstant()")}}.

## Syntax

```js-nolint
Temporal.Instant.fromEpochNanoseconds(epochNanoseconds)
```

### Parameter

- `epochNanoseconds`
  - : Ein [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt), der die Anzahl von Nanosekunden seit dem Unix-Epoch darstellt.

### Rückgabewert

Ein neues `Temporal.Instant`-Objekt, das den Zeitpunkt repräsentiert, der durch `epochNanoseconds` angegeben ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `epochNanoseconds` nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) liegt, welcher ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre ab dem Unix-Epoch umfasst.

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
