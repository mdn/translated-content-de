---
title: Temporal.PlainYearMonth.prototype.daysInMonth
short-title: daysInMonth
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/daysInMonth
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`daysInMonth`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. Sie ist von dem [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

Der Set-Accessor von `daysInMonth` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}.

## Beispiele

### Verwendung von daysInMonth

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.daysInMonth); // 31
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
- {{jsxref("Temporal/PlainYearMonth/daysInYear", "Temporal.PlainYearMonth.prototype.daysInYear")}}
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
