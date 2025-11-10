---
title: Temporal.ZonedDateTime.prototype.until()
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/until
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`until()`** Methode von Instanzen von {{jsxref("Temporal.ZonedDateTime")}} gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Datum und der Zeit bis zu einem anderen Datum und einer anderen Zeit darstellt (in einer Form, die mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist). Die Dauer ist positiv, wenn das andere Datum und die Zeit nach diesem liegen, und negativ, wenn davor.

Diese Methode führt `other - this` aus. Um `this - other` zu berechnen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/since", "since()")}} Methode.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die ein Datum und eine Zeit darstellt, von der dieses Datum und diese Zeit subtrahiert werden sollen. Es wird in ein `Temporal.ZonedDateTime` Objekt umgewandelt, wobei der gleiche Algorithmus wie in {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} verwendet wird. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Dieselben Optionen wie bei [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer von diesem Datum und dieser Zeit _bis_ `other` darstellt. Die Dauer ist positiv, wenn `other` nach diesem Datum und dieser Zeit liegt, und negativ, wenn davor.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `other` hat einen anderen Kalender als `this`.
    - Eine der Optionen ist ungültig.
    - `other` hat eine andere Zeitzone als `this`, und `largestUnit` ist `"days"` oder höher.

## Beispiele

### Verwendung von until()

```js
const flight = Temporal.ZonedDateTime.from(
  "2024-12-21T13:31:00-05:00[America/New_York]",
);
const now = Temporal.Now.zonedDateTimeISO("America/New_York").round("second");
if (Temporal.ZonedDateTime.compare(flight, now) < 0) {
  console.error(
    "The flight is already in the past. The result may not make sense.",
  );
}
const duration = now.until(flight, { largestUnit: "days" });
console.log(`The flight is in ${duration.toLocaleString("en-US")}`);
```

Für weitere Beispiele, siehe [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
