---
title: Temporal.Duration.prototype.seconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/seconds
l10n:
  sourceCommit: 262c13dcbcd394beddd98e07d9c78bc79ce3513c
---

{{JSRef}}{{SeeCompatTable}}

Die **`seconds`** Accessor-Eigenschaft von {{jsxref("Temporal.Duration")}}-Instanzen gibt eine Ganzzahl zurück, die die Anzahl der Sekunden in der Dauer repräsentiert.

Sofern die Dauer nicht [ausgeglichen (balanced)](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) ist, können Sie den Wertebereich dieses Wertes nicht annehmen. Sie können jedoch das Vorzeichen dieses Wertes durch Überprüfung der [`sign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign)-Eigenschaft der Dauer erkennen. Wenn die Dauer auf eine Einheit über Sekunden ausgeglichen ist, liegt der absolute Wert von `seconds` zwischen 0 und 59, einschließlich.

Der Set-Accessor von `seconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/Duration/with", "with()")}}, um ein neues `Temporal.Duration`-Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von seconds

```js
const d1 = Temporal.Duration.from({ minutes: 1, seconds: 30 });
const d2 = Temporal.Duration.from({ minutes: -1, seconds: -30 });
const d3 = Temporal.Duration.from({ minutes: 1 });
const d4 = Temporal.Duration.from({ seconds: 60 });

console.log(d1.seconds); // 30
console.log(d2.seconds); // -30
console.log(d3.seconds); // 0
console.log(d4.seconds); // 60

// Balance d4
const d4Balanced = d4.round({ largestUnit: "minutes" });
console.log(d4Balanced.seconds); // 0
console.log(d4Balanced.minutes); // 1
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
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
