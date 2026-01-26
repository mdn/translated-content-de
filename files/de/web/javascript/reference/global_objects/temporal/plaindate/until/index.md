---
title: Temporal.PlainDate.prototype.until()
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/until
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`until()`** Methode von Instanzen des {{jsxref("Temporal.PlainDate")}} gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Datum zu einem anderen Datum darstellt (in einer Form, die durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konvertierbar ist). Die Dauer ist positiv, wenn das andere Datum nach diesem Datum liegt, und negativ, wenn es davor liegt.

Diese Methode führt `other - this` aus. Verwenden Sie die {{jsxref("Temporal/PlainDate/since", "since()")}} Methode, um `this - other` auszuführen.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine Instanz von {{jsxref("Temporal.PlainDate")}}, die ein Datum darstellt, von dem dieses Datum subtrahiert werden soll. Es wird mit demselben Algorithmus wie {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} in ein `Temporal.PlainDate` Objekt konvertiert. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Dieselben Optionen wie [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer von diesem Datum _bis_ `other` darstellt. Die Dauer ist positiv, wenn `other` nach diesem Datum liegt, und negativ, wenn es davor liegt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `other` hat einen anderen Kalender als `this`.
    - Eine der Optionen ist ungültig.

## Beispiele

### Verwendung von until()

```js
const launch = Temporal.PlainDate.from("2035-01-01");
const now = Temporal.Now.plainDateISO();
const duration = now.until(launch);
console.log(`It will be ${duration.toLocaleString("en-US")} until the launch`);
```

Für weitere Beispiele siehe [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}}
