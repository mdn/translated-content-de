---
title: Temporal.Instant.fromEpochMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/fromEpochMilliseconds
l10n:
  sourceCommit: b1392b60ee71b9f09c0123694a494a71d0dbbb8a
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Instant.fromEpochMilliseconds()`** erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl der Millisekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januars 1970, UTC).

Um ein {{jsxref("Date")}}-Objekt in ein `Temporal.Instant`-Objekt zu konvertieren, verwenden Sie stattdessen {{jsxref("Date.prototype.toTemporalInstant()")}}.

## Syntax

```js-nolint
Temporal.Instant.fromEpochMilliseconds(epochMilliseconds)
```

### Parameter

- `epochMilliseconds`
  - : Eine Zahl, die die Anzahl der Millisekunden seit der Unix-Epoche darstellt. Intern wird sie in ein BigInt umgewandelt und mit `1e6` multipliziert, um die Anzahl der Nanosekunden zu erhalten.

### Rückgabewert

Ein neues `Temporal.Instant`-Objekt, das den durch `epochMilliseconds` angegebenen Zeitpunkt repräsentiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `epochMilliseconds` kann nicht in ein BigInt umgewandelt werden (z. B. ist es keine ganze Zahl).
    - `epochMilliseconds` liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage (etwa ±273.972,6 Jahre) von der Unix-Epoche entfernt ist.

## Beispiele

### Verwendung von Temporal.Instant.fromEpochMilliseconds()

```js
const instant = Temporal.Instant.fromEpochMilliseconds(0);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff = Temporal.Instant.fromEpochMilliseconds(-275248380000);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = Temporal.Instant.fromEpochMilliseconds(355924804000);
console.log(sts1Liftoff.toString()); // 1981-04-12T12:00:04Z
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}}
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
- {{jsxref("Date.prototype.toTemporalInstant()")}}
