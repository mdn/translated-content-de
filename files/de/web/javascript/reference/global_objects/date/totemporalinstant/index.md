---
title: Date.prototype.toTemporalInstant()
short-title: toTemporalInstant()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTemporalInstant
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toTemporalInstant()`** Methode von {{jsxref("Date")}} Instanzen gibt ein neues {{jsxref("Temporal.Instant")}} Objekt mit demselben {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} Wert wie der [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) dieses Datums zurück.

Verwenden Sie diese Methode, um alte `Date`-Werte in die `Temporal`-API zu konvertieren und dann nach Bedarf weiter in andere {{jsxref("Temporal")}} Klassen umzuwandeln.

## Syntax

```js-nolint
toTemporalInstant()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}} Objekt mit demselben {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} Wert wie der Zeitstempel dieses Datums. Seine Mikrosekunden- und Nanosekundenkomponenten sind immer `0`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist (es hat einen Zeitstempel von `NaN`).

## Beispiele

### Verwendung von toTemporalInstant()

```js
const legacyDate = new Date("2021-07-01T12:34:56.789Z");
const instant = legacyDate.toTemporalInstant();

// Further convert it to other objects
const zdt = instant.toZonedDateTimeISO("UTC");
const date = zdt.toPlainDate();
console.log(date.toString()); // 2021-07-01
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
