---
title: Temporal.PlainYearMonth.prototype.until()
short-title: until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/until
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`until()`** Methode von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von diesem Jahr-Monat zu einem anderen Jahr-Monat (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn der andere Monat nach diesem Monat liegt, und negativ, wenn er davor liegt.

Diese Methode berechnet `other - this`. Um `this - other` zu berechnen, verwenden Sie die {{jsxref("Temporal/PlainYearMonth/since", "since()")}} Methode.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}} Instanz, die einen Jahr-Monat darstellt, von dem dieser Jahr-Monat subtrahiert werden soll. Es wird mit demselben Algorithmus in ein `Temporal.PlainYearMonth` Objekt umgewandelt wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Dieselben Optionen wie bei [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}} Objekt, das die Dauer von diesem Jahr-Monat _bis_ `other` darstellt. Die Dauer ist positiv, wenn `other` nach diesem Jahr-Monat liegt, und negativ, wenn er davor liegt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `other` hat einen anderen Kalender als `this`.
    - Eine der Optionen ist ungültig.

## Beispiele

### Verwendung von until()

```js
const launch = Temporal.PlainYearMonth.from("2035-01");
const now = Temporal.Now.plainDateISO().toPlainYearMonth();
const duration = now.until(launch);
console.log(`It will be ${duration.toLocaleString("en-US")} until the launch`);
```

Weitere Beispiele finden Sie unter [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/since).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- {{jsxref("Temporal/PlainYearMonth/since", "Temporal.PlainYearMonth.prototype.since()")}}
