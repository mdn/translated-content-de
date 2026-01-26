---
title: Temporal.PlainDateTime.prototype.monthsInYear
short-title: monthsInYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/monthsInYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`monthsInYear`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. Sie ist [kalenderabhängig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Der Setz-Accessor von `monthsInYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}.

## Beispiele

### Verwendung von monthsInYear

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.monthsInYear); // 12
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
- {{jsxref("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}}
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
