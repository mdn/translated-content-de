---
title: Temporal.PlainTime.prototype.until()
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/until
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`until()`** Methode der {{jsxref("Temporal.PlainTime")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von dieser Zeit bis zu einer anderen Zeit darstellt (in einer Form, die von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist). Die Dauer ist positiv, wenn die andere Zeit nach dieser Zeit liegt, und negativ, wenn sie davor liegt.

Diese Methode führt `other - this` aus. Um `this - other` durchzuführen, verwenden Sie die {{jsxref("Temporal/PlainTime/since", "since()")}} Methode.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainTime")}} Instanz, die eine Zeit darstellt, von der diese Zeit subtrahiert werden soll. Es wird unter Verwendung desselben Algorithmus wie {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} in ein `Temporal.PlainTime` Objekt konvertiert. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Dieselben Optionen wie bei [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer von dieser Zeit _bis_ `other` darstellt. Die Dauer ist positiv, wenn `other` nach dieser Zeit liegt, und negativ, wenn davor.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.

## Beispiele

### Verwendung von until()

```js
const lunchTime = Temporal.PlainTime.from("12:30:00");
const now = Temporal.Now.plainTimeISO();
const duration = now.until(lunchTime);
console.log(`It will be ${duration.toLocaleString("en-US")} until lunch`);
// Example output: "It will be 3 hr, 42 min, 21 sec, 343 ms, 131 μs, 718 ns until lunch"
```

Für weitere Beispiele, siehe [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/since).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}
