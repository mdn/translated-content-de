---
title: Temporal.PlainDate.prototype.toPlainYearMonth()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainYearMonth
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`toPlainYearMonth()`** Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt ein neues {{jsxref("Temporal.PlainYearMonth")}} Objekt zurück, das das {{jsxref("Temporal/PlainDate/year", "Jahr")}} und den {{jsxref("Temporal/PlainDate/month", "Monat")}} dieses Datums im selben Kalendersystem darstellt.

## Syntax

```js-nolint
toPlainYearMonth()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth` Objekt, das das {{jsxref("Temporal/PlainDate/year", "Jahr")}} und den {{jsxref("Temporal/PlainDate/month", "Monat")}} dieses Datums im selben Kalendersystem darstellt.

## Beispiele

### Verwendung von toPlainYearMonth()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const yearMonth = date.toPlainYearMonth();
console.log(yearMonth.toString()); // 2021-07
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- {{jsxref("Temporal/PlainYearMonth/toPlainDate", "Temporal.PlainYearMonth.prototype.toPlainDate()")}}
