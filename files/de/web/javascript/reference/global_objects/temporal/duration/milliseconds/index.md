---
title: Temporal.Duration.prototype.milliseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/milliseconds
l10n:
  sourceCommit: 262c13dcbcd394beddd98e07d9c78bc79ce3513c
---

{{JSRef}}{{SeeCompatTable}}

Die **`milliseconds`** Zugriffs-Eigenschaft von {{jsxref("Temporal.Duration")}} Instanzen gibt eine ganze Zahl zurück, die die Anzahl der Millisekunden in der Dauer darstellt.

Sofern die Dauer nicht [ausbalanciert](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) ist, können Sie den Bereich dieses Wertes nicht annehmen, aber Sie können dessen Vorzeichen kennen, indem Sie die [`sign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign)-Eigenschaft der Dauer überprüfen. Wenn die Dauer auf eine Einheit über Millisekunden ausbalanciert ist, liegt der Betrag von `milliseconds` zwischen 0 und 999 einschließlich.

Der set-Zugriffs-Accessor von `milliseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/Duration/with", "with()")}}-Methode, um ein neues `Temporal.Duration`-Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von milliseconds

```js
const d1 = Temporal.Duration.from({ seconds: 1, milliseconds: 500 });
const d2 = Temporal.Duration.from({ seconds: -1, milliseconds: -500 });
const d3 = Temporal.Duration.from({ seconds: 1 });
const d4 = Temporal.Duration.from({ milliseconds: 1000 });

console.log(d1.milliseconds); // 500
console.log(d2.milliseconds); // -500
console.log(d3.milliseconds); // 0
console.log(d4.milliseconds); // 1000

// Balance d4
const d4Balanced = d4.round({ largestUnit: "seconds" });
console.log(d4Balanced.milliseconds); // 0
console.log(d4Balanced.seconds); // 1
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
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
