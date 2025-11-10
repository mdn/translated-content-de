---
title: Temporal.PlainDate.prototype.inLeapYear
short-title: inLeapYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/inLeapYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die Zugriffseigenschaft **`inLeapYear`** von Instanzen von {{jsxref("Temporal.PlainDate")}} gibt einen booleschen Wert zurück, der anzeigt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schalttages oder Schaltmonats) als ein gewöhnliches Jahr. Es ist kalenderabhängig ([calendar](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Für den ISO 8601-Kalender ist ein Schaltjahr ein Jahr, das ohne Rest durch 4 teilbar ist, abgesehen von Jahren, die ohne Rest durch 100 teilbar sind, es sei denn, das Jahr ist auch ohne Rest durch 400 teilbar. Für den ISO 8601-Kalender haben Schaltjahre 366 Tage, während gewöhnliche Jahre 365 Tage haben. Für andere Kalendersysteme können die Regeln unterschiedlich sein, und Schaltjahre können mehr zugefügte Tage haben (wie ein Schaltmonat).

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
