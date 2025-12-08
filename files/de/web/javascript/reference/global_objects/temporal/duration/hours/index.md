---
title: Temporal.Duration.prototype.hours
short-title: hours
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/hours
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`hours`** Zugriffseigenschaft von {{jsxref("Temporal.Duration")}}-Instanzen gibt eine Ganzzahl zurück, die die Anzahl der Stunden in der Dauer darstellt.

Sofern die Dauer nicht [ausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) ist, können Sie den Bereich dieses Wertes nicht annehmen, aber Sie können dessen Vorzeichen kennen, indem Sie die [`sign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) Eigenschaft der Dauer überprüfen. Wenn es auf eine Einheit über Stunden ausgeglichen ist, liegt der Absolutwert von `hours` zwischen 0 und 23, einschließlich.

Der Set-Zugriff von `hours` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/Duration/with", "with()")}}-Methode, um ein neues `Temporal.Duration`-Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von hours

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });
const d3 = Temporal.Duration.from({ days: 1 });
const d4 = Temporal.Duration.from({ hours: 24 });

console.log(d1.hours); // 1
console.log(d2.hours); // -1
console.log(d3.hours); // 0
console.log(d4.hours); // 24

// Balance d4
const d4Balanced = d4.round({ largestUnit: "days" });
console.log(d4Balanced.hours); // 0
console.log(d4Balanced.days); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/years", "Temporal.Duration.prototype.years")}}
- {{jsxref("Temporal/Duration/months", "Temporal.Duration.prototype.months")}}
- {{jsxref("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}}
- {{jsxref("Temporal/Duration/days", "Temporal.Duration.prototype.days")}}
- {{jsxref("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}}
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
