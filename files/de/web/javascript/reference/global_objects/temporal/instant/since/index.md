---
title: Temporal.Instant.prototype.since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`since()`** Methode von {{jsxref("Temporal.Instant")}}-Instanzen gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Zeitpunkt (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertiert werden kann) zu diesem Zeitpunkt darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt vor diesem liegt, und negativ, wenn danach.

Diese Methode führt `this - other` aus. Um `other - this` zu bestimmen, verwenden Sie die {{jsxref("Temporal/Instant/until", "until()")}} Methode.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameter

- `other`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}}-Instanz, die einen Zeitpunkt darstellt, der von diesem Zeitpunkt subtrahiert wird. Er wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} in ein `Temporal.Instant`-Objekt konvertiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} enthält, einschließlich `largestUnit`, `roundingIncrement`, `roundingMode` und `smallestUnit`. `largestUnit` und `smallestUnit` akzeptieren nur die Einheiten: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder deren Pluralformen. Für `largestUnit` bedeutet der Standardwert `"auto"` `"second"` oder `smallestUnit`, je nachdem, was größer ist. Für `smallestUnit` ist der Standardwert `"nanosecond"`.

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}}-Objekt, das die Dauer _seit_ `other` bis zu diesem Zeitpunkt darstellt. Die Dauer ist positiv, wenn `other` vor diesem Zeitpunkt liegt, und negativ, wenn danach.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Verwendung von since()

```js
const lastUpdated = Temporal.Instant.fromEpochMilliseconds(1735235418000);
const now = Temporal.Now.instant();
const duration = now.since(lastUpdated, { smallestUnit: "minute" });
console.log(`Last updated ${duration.toLocaleString("en-US")} ago`);
```

### Ausbalancieren der resultierenden Dauer

Da ein Zeitpunkt keine Kalenderinformationen enthält, vermeidet die resultierende Dauer [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations), die ohne Kalender- und Zeitbezug mehrdeutig sind. Daher ist das Ergebnis [unausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), da `hours` größer als `24` sein kann. Um die Dauer auszugleichen, runden Sie die resultierende Dauer erneut mit der gewünschten `largestUnit`, indem Sie ein `relativeTo` übergeben, das die Kalenderinformationen enthält.

```js
const lastUpdated = Temporal.Instant.fromEpochMilliseconds(1735235418000);
const now = Temporal.Now.instant();
const duration = now.since(lastUpdated, { smallestUnit: "minute" });
const roundedDuration = duration.round({
  largestUnit: "year",
  // Use the ISO calendar; you can convert to another calendar using
  // withCalendar()
  relativeTo: now.toZonedDateTimeISO("UTC"),
});
console.log(`Last updated ${roundedDuration.toLocaleString("en-US")} ago`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
