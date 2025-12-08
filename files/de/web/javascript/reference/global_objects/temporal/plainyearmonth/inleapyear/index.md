---
title: Temporal.PlainYearMonth.prototype.inLeapYear
short-title: inLeapYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/inLeapYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`inLeapYear`** Zugriffseigenschaft von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieses Jahr-Monat in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines zusätzlichen Tages oder Monats) als ein normales Jahr. Es hängt vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) ab.

Der set-Zugriff von `inLeapYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für allgemeine Informationen und weitere Beispiele, siehe {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}.

## Beispiele

### Verwendung von inLeapYear

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.inLeapYear); // false
console.log(ym.daysInYear); // 365
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
- {{jsxref("Temporal/PlainYearMonth/daysInYear", "Temporal.PlainYearMonth.prototype.daysInYear")}}
- {{jsxref("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}}
- {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}
