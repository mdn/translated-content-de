---
title: Temporal.Instant.prototype.since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`since()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Instant (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} umwandelbar ist) bis zu diesem Instant darstellt. Die Dauer ist positiv, wenn das andere Instant vor diesem Instant liegt, und negativ, wenn es danach liegt.

Diese Methode führt `this - other` aus. Um `other - this` zu berechnen, verwenden Sie die {{jsxref("Temporal/Instant/until", "until()")}} Methode.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameter

- `other`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}} Instanz, die ein Instant darstellt, das von diesem Instant subtrahiert werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} in ein `Temporal.Instant` Objekt konvertiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} enthält, einschließlich `largestUnit`, `roundingIncrement`, `roundingMode` und `smallestUnit`. `largestUnit` und `smallestUnit` akzeptieren nur die Einheiten: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` oder deren Pluralformen. Für `largestUnit` bedeutet der Standardwert `"auto"` entweder `"second"` oder `smallestUnit`, je nachdem, welches größer ist. Für `smallestUnit` ist der Standardwert `"nanosecond"`.

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer _seit_ `other` bis zu diesem Instant darstellt. Die Dauer ist positiv, wenn `other` vor diesem Instant ist, und negativ, wenn danach.

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

### Ausgleich der resultierenden Dauer

Da ein Instant keine Kalenderinformationen enthält, vermeidet die resultierende Dauer [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations), die ohne Kalender- und Zeitreferenz mehrdeutig sind. Daher ist das Ergebnis [unausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), da `hours` größer als `24` sein können. Um die Dauer auszugleichen, [runden](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round) Sie die resultierende Dauer erneut mit der gewünschten `largestUnit`, indem Sie eine `relativeTo` angeben, die die Kalenderinformationen enthält.

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
