---
title: Temporal.ZonedDateTime.prototype.inLeapYear
short-title: inLeapYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/inLeapYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die Zugriffsobjekteigenschaft **`inLeapYear`** von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das aufgrund eines Schalttages oder Schaltmonats mehr Tage hat als ein gewöhnliches Jahr. Dies ist kalenderabhängig (siehe [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Der Setzugriff von `inLeapYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}.

## Beispiele

### Verwendung von inLeapYear

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.inLeapYear); // false
console.log(dt.daysInYear); // 365
console.log(dt.monthsInYear); // 12
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
- {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}
