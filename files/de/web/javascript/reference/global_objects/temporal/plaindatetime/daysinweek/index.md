---
title: Temporal.PlainDateTime.prototype.daysInWeek
short-title: daysInWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/daysInWeek
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`daysInWeek`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine positive ganze Zahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. Sie ist [kalenderabhängig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Der Set-Zugriff von `daysInWeek` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}.

## Beispiele

### Verwendung von daysInWeek

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.daysInWeek); // 7
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
- {{jsxref("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}}
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}}
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
