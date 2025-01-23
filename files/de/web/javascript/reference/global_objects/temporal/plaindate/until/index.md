---
title: Temporal.PlainDate.prototype.until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/until
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`until()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Datum zu einem anderen Datum repräsentiert (in einer Form konvertierbar durch {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}). Die Dauer ist positiv, wenn das andere Datum nach diesem Datum liegt und negativ, wenn es davor liegt.

Diese Methode führt `other - this` aus. Um `this - other` durchzuführen, verwenden Sie die {{jsxref("Temporal/PlainDate/since", "since()")}}-Methode.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainDate")}}-Instanz, die ein Datum repräsentiert, von dem dieses Datum subtrahiert werden soll. Es wird unter Verwendung des gleichen Algorithmus wie bei {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} in ein `Temporal.PlainDate`-Objekt konvertiert. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Dieselben Optionen wie bei [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}}-Objekt, das die Dauer von diesem Datum _bis_ `other` repräsentiert. Die Dauer ist positiv, wenn `other` nach diesem Datum liegt, und negativ, wenn davor.

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

Für weitere Beispiele, siehe [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since).

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
