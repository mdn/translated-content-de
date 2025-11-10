---
title: Temporal.PlainYearMonth.prototype.daysInYear
short-title: daysInYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/daysInYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die Zugriffs-Eigenschaft **`daysInYear`** von Instanzen des Objekts {{jsxref("Temporal.PlainYearMonth")}} gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. Sie ist abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Der Set-Zugriff von `daysInYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}.

## Beispiele

### Verwendung von daysInYear

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.daysInYear); // 365
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
- {{jsxref("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
