---
title: Temporal.Instant.prototype.until()
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/until
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`until()`**-Methode von {{jsxref("Temporal.Instant")}}-Instanzen gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Zeitpunkt zu einem anderen Zeitpunkt darstellt (in einer Form, die durch {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} konvertierbar ist). Die Dauer ist positiv, wenn der andere Zeitpunkt nach diesem Zeitpunkt liegt, und negativ, wenn er davor liegt.

Diese Methode führt `other - this` aus. Um `this - other` zu berechnen, verwenden Sie die {{jsxref("Temporal/Instant/since", "since()")}}-Methode.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Eine Zeichenkette oder eine {{jsxref("Temporal.Instant")}}-Instanz, die einen Zeitpunkt darstellt, von dem dieser Zeitpunkt subtrahiert werden soll. Sie wird mit demselben Algorithmus in ein `Temporal.Instant`-Objekt umgewandelt wie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `options` {{optional_inline}}
  - : Die gleichen Optionen wie bei [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}}-Objekt, das die Dauer von diesem Zeitpunkt _bis_ `other` darstellt. Die Dauer ist positiv, wenn `other` nach diesem Zeitpunkt liegt, und negativ, wenn er davor liegt.

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
