---
title: Temporal.Duration.prototype.nanoseconds
short-title: nanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/nanoseconds
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`nanoseconds`** Zugriffseigenschaft von {{jsxref("Temporal.Duration")}}-Instanzen gibt eine Ganzzahl zurück, die die Anzahl der Nanosekunden in der Dauer darstellt.

Sofern die Dauer nicht [ausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) ist, können Sie den Bereich dieses Wertes nicht annehmen, aber Sie können das Vorzeichen erkennen, indem Sie die [`sign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) Eigenschaft der Dauer überprüfen. Wenn sie auf eine Einheit über Nanosekunden ausgeglichen ist, wird der absolute Wert der `nanoseconds` zwischen 0 und 999 einschließlich liegen.

Der Set-Zugriff von `nanoseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/Duration/with", "with()")}}-Methode, um ein neues `Temporal.Duration`-Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von nanoseconds

```js
const d1 = Temporal.Duration.from({ microseconds: 1, nanoseconds: 500 });
const d2 = Temporal.Duration.from({ microseconds: -1, nanoseconds: -500 });
const d3 = Temporal.Duration.from({ microseconds: 1 });
const d4 = Temporal.Duration.from({ nanoseconds: 1000 });

console.log(d1.nanoseconds); // 500
console.log(d2.nanoseconds); // -500
console.log(d3.nanoseconds); // 0
console.log(d4.nanoseconds); // 1000

// Balance d4
const d4Balanced = d4.round({ largestUnit: "microseconds" });
console.log(d4Balanced.nanoseconds); // 0
console.log(d4Balanced.microseconds); // 1
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
- {{jsxref("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}}
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
