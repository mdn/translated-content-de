---
title: Temporal.PlainYearMonth.prototype.month
short-title: month
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/month
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`month`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Jahres-Monats darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}. Es ist vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

Der Set-Zugriff von `month` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainYearMonth/with", "with()")}} Methode, um ein neues `Temporal.PlainYearMonth` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}.

## Beispiele

### Verwendung von month

```js
const ym = Temporal.PlainYearMonth.from("2021-07"); // ISO 8601 calendar
console.log(ym.monthCode); // "M07"
console.log(ym.month); // 7
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
- {{jsxref("Temporal/PlainYearMonth/monthCode", "Temporal.PlainYearMonth.prototype.monthCode")}}
- {{jsxref("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}}
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
