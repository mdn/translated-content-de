---
title: Temporal.Instant.prototype.until()
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/until
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`until()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Moment bis zu einem anderen Instant darstellt (in einer Form umwandelbar durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}). Die Dauer ist positiv, wenn der andere Instant nach diesem liegt, und negativ, wenn er davor liegt.

Diese Methode führt `other - this` aus. Um `this - other` zu erreichen, verwenden Sie die {{jsxref("Temporal/Instant/since", "since()")}} Methode.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String oder eine {{jsxref("Temporal.Instant")}} Instanz, die einen Moment darstellt, von dem dieser Instant subtrahiert werden soll. Er wird in ein `Temporal.Instant` Objekt umgewandelt mit demselben Algorithmus wie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `options` {{optional_inline}}
  - : Die gleichen Optionen wie bei [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer von diesem Instant bis `other` darstellt. Die Dauer ist positiv, wenn `other` nach diesem liegt, und negativ, wenn es davor liegt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Verwendung von until()

```js
const launch = Temporal.Instant.fromEpochMilliseconds(2051222400000);
const now = Temporal.Now.instant();
const duration = now.until(launch, { smallestUnit: "minutes" });
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
