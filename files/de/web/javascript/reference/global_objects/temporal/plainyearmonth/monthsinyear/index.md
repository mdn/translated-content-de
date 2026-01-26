---
title: Temporal.PlainYearMonth.prototype.monthsInYear
short-title: monthsInYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/monthsInYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`monthsInYear`**-Zugriffseigenschaft von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums repräsentiert. Sie ist kalenderabhängig ([calendar](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Der Set-Zugriff von `monthsInYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Allgemeine Informationen und weitere Beispiele finden Sie unter {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}.

## Beispiele

### Verwendung von monthsInYear

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.monthsInYear); // 12
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- {{jsxref("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}}
- {{jsxref("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}}
- {{jsxref("Temporal/PlainYearMonth/monthCode", "Temporal.PlainYearMonth.prototype.monthCode")}}
- {{jsxref("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
