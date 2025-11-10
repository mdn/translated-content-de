---
title: Temporal.PlainDate.prototype.daysInWeek
short-title: daysInWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/daysInWeek
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`daysInWeek`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine positive ganze Zahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. Diese ist [kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.

Im ISO 8601-Kalender sind es immer 7, aber in anderen Kalendersystemen kann diese Zahl von Woche zu Woche variieren. Alle gängigen, unterstützten Kalender verwenden 7-Tage-Wochen.

Der Set-Zugriff von `daysInWeek` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von daysInWeek

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.daysInWeek); // 7

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.daysInWeek); // 7
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
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
