---
title: Temporal.PlainDate.prototype.toPlainYearMonth()
short-title: toPlainYearMonth()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainYearMonth
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`toPlainYearMonth()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt ein neues {{jsxref("Temporal.PlainYearMonth")}}-Objekt zurück, das das {{jsxref("Temporal/PlainDate/year", "Jahr")}} und den {{jsxref("Temporal/PlainDate/month", "Monat")}} dieses Datums im gleichen Kalendersystem darstellt.

## Syntax

```js-nolint
toPlainYearMonth()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, das das {{jsxref("Temporal/PlainDate/year", "Jahr")}} und den {{jsxref("Temporal/PlainDate/month", "Monat")}} dieses Datums im gleichen Kalendersystem darstellt.

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
