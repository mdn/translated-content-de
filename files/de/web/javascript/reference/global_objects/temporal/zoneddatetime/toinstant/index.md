---
title: Temporal.ZonedDateTime.prototype.toInstant()
short-title: toInstant()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toInstant
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toInstant()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Zeitpunkt dieses Datums und dieser Uhrzeit darstellt.

## Syntax

```js-nolint
toInstant()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Temporal.Instant")}}-Objekt, das den Zeitpunkt dieses Datums und dieser Uhrzeit darstellt.

## Beispiele

### Verwendung von toInstant()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const instant = zdt.toInstant();
console.log(instant.toString()); // 2021-07-01T16:34:56.987654321Z
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}
