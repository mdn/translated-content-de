---
title: Temporal.PlainDate.prototype.toPlainMonthDay()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainMonthDay
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toPlainMonthDay()`**-Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt ein neues {{jsxref("Temporal.PlainMonthDay")}} Objekt zurück, das den {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} und {{jsxref("Temporal/PlainDate/day", "day")}} dieses Datums im selben Kalendersystem darstellt.

Beachten Sie, dass `PlainMonthDay`-Objekte keine `month`-Komponente haben, da Monate mit demselben Namen in verschiedenen Jahren aufgrund von Schaltmonaten unterschiedliche `month`-Indizes haben können.

## Syntax

```js-nolint
toPlainMonthDay()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, das den {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} und {{jsxref("Temporal/PlainDate/day", "day")}} dieses Datums im selben Kalendersystem darstellt.

## Beispiele

### Verwendung von toPlainMonthDay()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const monthDay = date.toPlainMonthDay();
console.log(monthDay.toString()); // 07-01
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- {{jsxref("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}}
