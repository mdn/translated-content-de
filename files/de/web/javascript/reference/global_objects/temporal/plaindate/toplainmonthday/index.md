---
title: Temporal.PlainDate.prototype.toPlainMonthDay()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainMonthDay
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die Methode **`toPlainMonthDay()`** von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt ein neues {{jsxref("Temporal.PlainMonthDay")}}-Objekt zurück, das den {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} und den {{jsxref("Temporal/PlainDate/day", "day")}} dieses Datums im gleichen Kalendersystem darstellt.

Beachten Sie, dass `PlainMonthDay`-Objekte keine `month`-Komponente haben, da Monate mit demselben Namen unterschiedliche `month`-Indizes in verschiedenen Jahren haben können, bedingt durch Schaltmonate.

## Syntax

```js-nolint
toPlainMonthDay()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, das den {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} und den {{jsxref("Temporal/PlainDate/day", "day")}} dieses Datums im gleichen Kalendersystem darstellt.

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
