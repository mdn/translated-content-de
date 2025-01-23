---
title: Temporal.ZonedDateTime.prototype.until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/until
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`until()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Datum-Zeit-Punkt zu einem anderen Datum-Zeit-Punkt darstellt (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist). Die Dauer ist positiv, wenn der andere Datum-Zeit-Punkt nach diesem liegt, und negativ, wenn davor.

Diese Methode führt `other - this` aus. Um `this - other` auszuführen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/since", "since()")}} Methode.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die einen Datum-Zeit-Punkt darstellt, von dem dieser Datum-Zeit-Punkt subtrahiert wird. Er wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} in ein `Temporal.ZonedDateTime` Objekt umgewandelt. Er muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Die gleichen Optionen wie bei [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer von diesem Datum-Zeit-Punkt _bis_ `other` darstellt. Die Dauer ist positiv, wenn `other` nach diesem Datum-Zeit-Punkt liegt, und negativ, wenn davor.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `other` hat einen anderen Kalender als `this`.
    - Eine der Optionen ist ungültig.
    - `other` hat eine andere Zeitzone als `this`, und `largestUnit` ist `"day"` oder höher.

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
const duration = now.until(flight, { largestUnit: "day" });
console.log(`The flight is in ${duration.toLocaleString("en-US")}`);
```

Für weitere Beispiele siehe [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since).

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
