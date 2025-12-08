---
title: Temporal.PlainYearMonth.prototype.monthCode
short-title: monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/monthCode
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`monthCode`** Zugriffseigenschaft von Instanzen von {{jsxref("Temporal.PlainYearMonth")}} gibt einen kalenderabhängigen String zurück, der den Monat dieses Jahres-Monats darstellt. Es ist vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

In der Regel ist es `M`, gefolgt von einer zweistelligen Monatszahl. Für Schaltmonate ist es der Code des vorherigen Monats, gefolgt von einem `L` (selbst wenn es konzeptionell von dem nachfolgenden Monat abgeleitet ist; zum Beispiel hat im hebräischen Kalender Adar I den Code `M05L`, aber Adar II hat den Code `M06`). Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.

Der Set-Accessor von `monthCode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainYearMonth/with", "with()")}} Methode, um ein neues `Temporal.PlainYearMonth` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}.

## Beispiele

### Verwendung von monthCode

```js
const date = Temporal.PlainYearMonth.from("2021-07-01"); // ISO 8601 calendar
console.log(date.monthCode); // "M07"
console.log(date.month); // 7
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
- {{jsxref("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}}
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
