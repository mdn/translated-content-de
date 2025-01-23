---
title: Temporal.PlainDateTime.prototype.until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/until
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`until()`**-Methode von Instanzen des {{jsxref("Temporal.PlainDateTime")}} gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Datum-Uhrzeit-Punkt zu einem anderen Datum-Uhrzeit-Punkt darstellt (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} umwandelbar ist). Die Dauer ist positiv, wenn das andere Datum-Uhrzeit-Punkt nach diesem liegt, und negativ, wenn es davor liegt.

Diese Methode führt `other - this` aus. Um `this - other` auszuführen, verwenden Sie die {{jsxref("Temporal/PlainDateTime/since", "since()")}}-Methode.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDateTime")}} Instanz, die ein Datum-Uhrzeit-Punkt darstellt, von dem diese Datum-Uhrzeit-Punkt subtrahiert wird. Es wird in ein `Temporal.PlainDateTime` Objekt umgewandelt, wobei der gleiche Algorithmus wie bei {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} verwendet wird. Es muss den gleichen Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Die gleichen Optionen wie [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer von diesem Datum-Uhrzeit-Punkt _bis_ `other` darstellt. Die Dauer ist positiv, wenn `other` nach diesem Datum-Uhrzeit-Punkt liegt, und negativ, wenn es davor liegt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - `other` hat einen anderen Kalender als `this`.
    - Eine der Optionen ist ungültig.

## Beispiele

### Verwendung von until()

```js
let nextBilling = Temporal.PlainDateTime.from({
  year: Temporal.Now.plainDateISO().year,
  month: 4,
  day: 1,
});
const now = Temporal.Now.plainDateTimeISO().round("second");
if (Temporal.PlainDateTime.compare(nextBilling, now) < 0) {
  nextBilling = nextBilling.add({ years: 1 });
}
const duration = now.until(nextBilling);
console.log(`${duration.toLocaleString("en-US")} until next billing`);
```

Für weitere Beispiele siehe [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/since).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}}
