---
title: Temporal.PlainYearMonth.prototype.year
short-title: year
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/year
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`year`** Zugriffs-Eigenschaft von Instanzen von {{jsxref("Temporal.PlainYearMonth")}} gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Jahr-Monats relativ zum Beginn eines kalender-spezifischen Epoch-Jahres darstellt. Sie ist [kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.

Der Set-Zugriff für `year` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainYearMonth/with", "with()")}}-Methode, um ein neues `Temporal.PlainYearMonth`-Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}.

## Beispiele

### Verwendung von year

```js
const ym = Temporal.PlainYearMonth.from("2021-07"); // ISO 8601 calendar
console.log(ym.year); // 2021
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
- {{jsxref("Temporal/PlainYearMonth/era", "Temporal.PlainYearMonth.prototype.era")}}
- {{jsxref("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}}
- {{jsxref("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}}
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
