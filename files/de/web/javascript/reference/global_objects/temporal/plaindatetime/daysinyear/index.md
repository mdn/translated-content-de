---
title: Temporal.PlainDateTime.prototype.daysInYear
short-title: daysInYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/daysInYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`daysInYear`** Zugriffseigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. Sie ist abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Der set-Accessor von `daysInYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}.

## Beispiele

### Verwendung von daysInYear

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.daysInYear); // 365
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
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
- {{jsxref("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}}
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}}
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
