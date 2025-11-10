---
title: Temporal.PlainYearMonth.prototype.inLeapYear
short-title: inLeapYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/inLeapYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`inLeapYear`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob das Jahr-Monat in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttags oder Schaltmonats) als ein gewöhnliches Jahr hat. Es ist kalenderabhängig ([calendar](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Der Set-Accessor von `inLeapYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}.

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
