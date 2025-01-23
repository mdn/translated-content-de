---
title: Temporal.PlainYearMonth.prototype.until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/until
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`until()`**-Methode von Instanzen des Objekts {{jsxref("Temporal.PlainYearMonth")}} gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Jahr-Monat bis zu einem anderen Jahr-Monat darstellt (in einer Form, die durch {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} umwandelbar ist). Die Dauer ist positiv, wenn der andere Monat nach diesem Monat liegt, und negativ, wenn er davor liegt.

Diese Methode berechnet `other - this`. Um `this - other` zu berechnen, verwenden Sie die Methode {{jsxref("Temporal/PlainYearMonth/since", "since()")}}.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameter

- `other`
  - : Ein String, ein Objekt oder eine {{jsxref("Temporal.PlainYearMonth")}} Instanz, die einen Jahr-Monat darstellt und davon abgezogen wird. Es wird unter Verwendung des gleichen Algorithmus wie {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} in ein `Temporal.PlainYearMonth` Objekt konvertiert. Es muss denselben Kalender wie `this` haben.
- `options` {{optional_inline}}
  - : Die gleichen Optionen wie bei [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/since#options).

### Rückgabewert

Ein neues {{jsxref("Temporal.Duration")}}-Objekt, das die Dauer von diesem Jahr-Monat _bis_ `other` darstellt. Die Dauer ist positiv, wenn `other` nach diesem Jahr-Monat liegt, und negativ, wenn vorher.

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

Für weitere Beispiele siehe [`since()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/since).

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
