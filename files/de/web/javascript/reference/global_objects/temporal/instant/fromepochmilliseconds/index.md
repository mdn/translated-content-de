---
title: Temporal.Instant.fromEpochMilliseconds()
short-title: fromEpochMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/fromEpochMilliseconds
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`Temporal.Instant.fromEpochMilliseconds()`** statische Methode erstellt ein neues `Temporal.Instant`-Objekt aus der Anzahl von Millisekunden seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januars 1970, UTC).

Um ein {{jsxref("Date")}}-Objekt in ein `Temporal.Instant`-Objekt zu konvertieren, verwenden Sie stattdessen {{jsxref("Date.prototype.toTemporalInstant()")}}.

## Syntax

```js-nolint
Temporal.Instant.fromEpochMilliseconds(epochMilliseconds)
```

### Parameter

- `epochMilliseconds`
  - : Eine Zahl, die die Anzahl der Millisekunden seit dem Unix-Epoch darstellt. Intern wird sie in ein BigInt umgewandelt und mit `1e6` multipliziert, um die Anzahl der Nanosekunden zu erhalten.

### Rückgabewert

Ein neues `Temporal.Instant`-Objekt, das den im `epochMilliseconds` angegebenen Zeitpunkt darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `epochMilliseconds` kann nicht in ein BigInt konvertiert werden (z. B. kein Ganzzahlwert).
    - `epochMilliseconds` liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), welcher ±10<sup>8</sup> Tage, oder etwa ±273.972,6 Jahre, vom Unix-Epoch beträgt.

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
