---
title: Temporal.ZonedDateTime.prototype.toPlainDate()
short-title: toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainDate
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toPlainDate()`** Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsanteil dieses Datums-Zeit-Objekts darstellt.

## Syntax

```js-nolint
toPlainDate()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.PlainDate")}}-Objekt, das den Datumsanteil dieses Datums-Zeit-Objekts darstellt.

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
