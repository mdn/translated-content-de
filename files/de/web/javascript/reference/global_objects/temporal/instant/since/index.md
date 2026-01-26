---
title: Temporal.Instant.prototype.since()
short-title: since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`since()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Zeitpunkt (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist) bis zu diesem Zeitpunkt darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt vor diesem Zeitpunkt liegt, und negativ, wenn danach.

Diese Methode führt `this - other` aus. Um `other - this` zu berechnen, verwenden Sie die {{jsxref("Temporal/Instant/until", "until()")}} Methode.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameter

- `other`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}} Instanz, die einen Zeitpunkt darstellt, der von diesem Zeitpunkt abgezogen werden soll. Es wird mithilfe desselben Algorithmus wie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} in ein `Temporal.Instant` Objekt konvertiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} enthält, zu denen `largestUnit`, `roundingIncrement`, `roundingMode` und `smallestUnit` gehören. `largestUnit` und `smallestUnit` akzeptieren nur die Einheiten: `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"` oder deren Singularformen. Für `largestUnit` bedeutet der Standardwert `"auto"` `"seconds"` oder `smallestUnit`, je nachdem, welches größer ist. Für `smallestUnit` ist der Standardwert `"nanoseconds"`.

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer _seit_ `other` bis zu diesem Zeitpunkt darstellt. Die Dauer ist positiv, wenn `other` vor diesem Zeitpunkt ist, und negativ, wenn danach.

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

Da ein Zeitpunkt keine Kalenderinformationen enthält, vermeidet die resultierende Dauer [Kalenderdauern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations), die ohne Kalender- und Zeitreferenz mehrdeutig sind. Daher ist das Ergebnis [unausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), da `hours` größer als `24` sein kann. Um die Dauer auszugleichen, [runden](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round) Sie die resultierende Dauer erneut mit der gewünschten `largestUnit` und übergeben Sie ein `relativeTo`, das die Kalenderinformationen enthält.

```js
const lastUpdated = Temporal.Instant.fromEpochMilliseconds(1735235418000);
const now = Temporal.Now.instant();
const duration = now.since(lastUpdated, { smallestUnit: "minutes" });
const roundedDuration = duration.round({
  largestUnit: "years",
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
