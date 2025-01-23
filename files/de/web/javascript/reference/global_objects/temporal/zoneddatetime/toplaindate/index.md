---
title: Temporal.ZonedDateTime.prototype.toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainDate
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toPlainDate()`**-Methode von Instanzen von {{jsxref("Temporal.ZonedDateTime")}} gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsanteil dieses Datums-Zeit-Werts repräsentiert.

## Syntax

```js-nolint
toPlainDate()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainDate")}}-Objekt, das den Datumsanteil dieses Datums-Zeit-Werts darstellt.

## Beispiele

### Verwendung von toPlainDate()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const plainDate = zdt.toPlainDate();
console.log(plainDate.toString()); // 2021-07-01
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
