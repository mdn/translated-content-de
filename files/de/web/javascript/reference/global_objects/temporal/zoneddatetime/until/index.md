---
title: Temporal.ZonedDateTime.prototype.until()
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/until
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`until()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Datum-Uhrzeit bis zu einem anderen Datum-Uhrzeit darstellt (in einem Format, das durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist). Die Dauer ist positiv, wenn das andere Datum-Uhrzeit nach diesem liegt, und negativ, wenn es davor liegt.

Diese Methode führt `other - this` aus. Um `this - other` auszuführen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/since", "since()")}} Methode.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die ein Datum-Uhrzeit darstellt, von dem diese Datum-Uhrzeit subtrahiert wird. Es wird in ein `Temporal.ZonedDateTime` Objekt konvertiert, indem derselbe Algorithmus wie {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} verwendet wird. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Dieselben Optionen wie [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer von diesem Datum-Uhrzeit _bis_ `other` darstellt. Die Dauer ist positiv, wenn `other` nach diesem Datum-Uhrzeit liegt, und negativ, wenn es davor liegt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `other` hat einen anderen Kalender als `this`.
    - Eine der Optionen ist ungültig.
    - `other` hat eine andere Zeitzone als `this`, und `largestUnit` ist `"days"` oder darüber.

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
