---
title: Temporal.Instant.prototype.until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/until
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`until()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Zeitpunkt bis zu einem anderen Zeitpunkt darstellt (in einer Form, die von {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist). Die Dauer ist positiv, wenn der andere Zeitpunkt nach diesem Zeitpunkt liegt, und negativ, wenn davor.

Diese Methode führt `other - this` aus. Um `this - other` zu berechnen, verwenden Sie die {{jsxref("Temporal/Instant/since", "since()")}} Methode.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}} Instanz, die einen Zeitpunkt darstellt, von dem dieser Zeitpunkt abgezogen werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} in ein `Temporal.Instant` Objekt konvertiert.
- `options` {{optional_inline}}
  - : Dieselben Optionen wie [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer von diesem Zeitpunkt _bis_ `other` darstellt. Die Dauer ist positiv, wenn `other` nach diesem Zeitpunkt liegt, und negativ, wenn davor.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Verwendung von until()

```js
const launch = Temporal.Instant.fromEpochMilliseconds(2051222400000);
const now = Temporal.Now.instant();
const duration = now.until(launch, { smallestUnit: "minute" });
console.log(`It will be ${duration.toLocaleString("en-US")} until the launch`);
```

Für weitere Beispiele siehe [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}
