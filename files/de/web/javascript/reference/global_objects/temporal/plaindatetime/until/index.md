---
title: Temporal.PlainDateTime.prototype.until()
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/until
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die Methode **`until()`** von Instanzen von {{jsxref("Temporal.PlainDateTime")}} gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Datum-Zeitpunkt zu einem anderen Datum-Zeitpunkt darstellt (in einer Form, die durch {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbar ist). Die Dauer ist positiv, wenn der andere Datum-Zeitpunkt nach diesem liegt und negativ, wenn er davor liegt.

Diese Methode berechnet `other - this`. Um `this - other` durchzuführen, verwenden Sie die {{jsxref("Temporal/PlainDateTime/since", "since()")}}-Methode.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDateTime")}}-Instanz, die ein Datum-Zeitpunkt darstellt, von dem dieses Datum-Zeitpunkt subtrahiert werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} in ein `Temporal.PlainDateTime`-Objekt konvertiert. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Dieselben Optionen wie [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}}-Objekt, das die Dauer von diesem Datum-Zeitpunkt _bis_ `other` darstellt. Die Dauer ist positiv, wenn `other` nach diesem Datum-Zeitpunkt liegt, und negativ, wenn er davor liegt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
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
