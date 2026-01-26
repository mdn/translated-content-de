---
title: Temporal.PlainDate.prototype.inLeapYear
short-title: inLeapYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/inLeapYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`inLeapYear`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttages oder Schaltmonats) hat als ein normales Jahr. Es hängt vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) ab.

Für den ISO 8601-Kalender ist ein Schaltjahr ein Jahr, das ohne Rest durch 4 teilbar ist, mit Ausnahme der Jahre, die ohne Rest durch 100 teilbar sind, es sei denn, das Jahr ist auch ohne Rest durch 400 teilbar. Für den ISO 8601-Kalender haben Schaltjahre 366 Tage, während normale Jahre 365 Tage haben. Bei anderen Kalendersystemen unterscheiden sich die Regeln wahrscheinlich, und Schaltjahre können mehr Tage hinzugefügt bekommen (wie z.B. einen Schaltmonat).

Der Set-Accessor von `inLeapYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von inLeapYear

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.inLeapYear); // false
console.log(date.daysInYear); // 365
console.log(date.monthsInYear); // 12

const date2 = Temporal.PlainDate.from("2020-07-01");
console.log(date2.inLeapYear); // true
console.log(date2.daysInYear); // 366
console.log(date2.monthsInYear); // 12

const date3 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date3.inLeapYear); // false
console.log(date3.daysInYear); // 354
console.log(date3.monthsInYear); // 12

const date4 = Temporal.PlainDate.from("2023-07-01[u-ca=chinese]");
console.log(date4.inLeapYear); // true
console.log(date4.daysInYear); // 384
console.log(date4.monthsInYear); // 13
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
