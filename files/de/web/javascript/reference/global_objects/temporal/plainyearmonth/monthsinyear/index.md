---
title: Temporal.PlainYearMonth.prototype.monthsInYear
short-title: monthsInYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/monthsInYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`monthsInYear`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. Es ist [kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.

Der Set-Zugriff von `monthsInYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}.

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
