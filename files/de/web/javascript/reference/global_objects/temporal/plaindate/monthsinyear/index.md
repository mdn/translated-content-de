---
title: Temporal.PlainDate.prototype.monthsInYear
short-title: monthsInYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/monthsInYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`monthsInYear`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. Sie ist [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.

Für den ISO 8601-Kalender sind dies immer 12 Monate, aber in anderen Kalendersystemen kann dies unterschiedlich sein. Zum Beispiel haben in Kalendern, die Schaltmonate verwenden, Schaltjahre einen Monat mehr als gewöhnliche Jahre.

Der Set-Accessor von `monthsInYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von monthsInYear

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.monthsInYear); // 12

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.monthsInYear); // 12

const date3 = Temporal.PlainDate.from("2023-07-01[u-ca=chinese]");
console.log(date3.monthsInYear); // 13; 2023 is a Chinese leap year
```

### Wechsel zum vorletzten Monat des Jahres

Sie können `monthsInYear` verwenden, um zum vorletzten Monat des Jahres zu wechseln:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const secondLastMonth = date.with({ month: date.monthsInYear - 1 });
console.log(secondLastMonth.toString()); // 2021-11-01
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
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
