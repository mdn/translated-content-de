---
title: Temporal.Duration.prototype.minutes
short-title: minutes
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/minutes
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`minutes`** Zugriffseigenschaft von {{jsxref("Temporal.Duration")}} Instanzen gibt eine ganze Zahl zurück, die die Anzahl der Minuten in der Dauer darstellt.

Sofern die Dauer nicht [ausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) ist, können Sie die Reichweite dieses Wertes nicht annehmen, aber Sie können das Vorzeichen ermitteln, indem Sie die [`sign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) Eigenschaft der Dauer prüfen. Wenn sie zu einer Einheit über Minuten ausgeglichen ist, wird der absolute Wert der `minutes` zwischen 0 und 59 liegen, einschließlich.

Der set-Accessor von `minutes` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/Duration/with", "with()")}}, um ein neues `Temporal.Duration` Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von minutes

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });
const d3 = Temporal.Duration.from({ hours: 1 });
const d4 = Temporal.Duration.from({ minutes: 60 });

console.log(d1.minutes); // 1
console.log(d2.minutes); // -1
console.log(d3.minutes); // 0
console.log(d4.minutes); // 60

// Balance d4
const d4Balanced = d4.round({ largestUnit: "hours" });
console.log(d4Balanced.minutes); // 0
console.log(d4Balanced.hours); // 1
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
- {{jsxref("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}}
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
