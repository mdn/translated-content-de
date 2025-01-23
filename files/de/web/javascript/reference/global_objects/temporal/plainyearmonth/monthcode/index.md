---
title: Temporal.PlainYearMonth.prototype.monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/monthCode
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`monthCode`** Zugriffs-Eigenschaft von Instanzen des {{jsxref("Temporal.PlainYearMonth")}} gibt einen kalender-spezifischen String zurück, der den Monat dieses Jahr-Monats darstellt. Sie ist kalenderabhängig (siehe [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Normalerweise handelt es sich um `M` plus eine zweistellige Monatszahl. Bei Schaltmonaten ist es der Code des Vormonats gefolgt von `L` (selbst wenn es konzeptionell ein Derivat des Folgemonats ist; zum Beispiel im hebräischen Kalender hat Adar I den Code `M05L`, aber Adar II hat den Code `M06`). Falls der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.

Der Set-Zugriff von `monthCode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/PlainYearMonth/with", "with()")}}, um ein neues `Temporal.PlainYearMonth`-Objekt mit dem gewünschten neuen Wert zu erstellen.

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
