---
title: Temporal.PlainDate.prototype.daysInYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/daysInYear
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`daysInYear`** Zugriffsobjekteigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. Sie ist abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Für den ISO 8601 Kalender sind dies 365 oder 366 in einem Schaltjahr. In anderen Kalendersystemen unterscheidet sich die Anzahl der Tage wahrscheinlich, insbesondere in nicht-solaren Kalendern.

Der Set-Zugriff von `daysInWeek` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von daysInYear

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.daysInYear); // 365

const date2 = Temporal.PlainDate.from("2020-07-01");
console.log(date2.daysInYear); // 366; 2020 is a leap year

const date3 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date3.daysInYear); // 354

const date4 = Temporal.PlainDate.from("2023-07-01[u-ca=chinese]");
console.log(date4.daysInYear); // 384; 2023 is a Chinese leap year
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
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
