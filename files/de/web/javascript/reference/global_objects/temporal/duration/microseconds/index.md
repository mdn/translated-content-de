---
title: Temporal.Duration.prototype.microseconds
short-title: microseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/microseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`microseconds`** Zugriffsproperty von {{jsxref("Temporal.Duration")}} Instanzen gibt eine ganze Zahl zurück, die die Anzahl der Mikrosekunden in der Dauer repräsentiert.

Es sei denn, die Dauer ist [ausbalanciert](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), können Sie den Bereich dieses Wertes nicht annehmen, aber Sie können sein Vorzeichen erkennen, indem Sie die [`sign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) Property der Dauer überprüfen. Wenn sie zu einer Einheit oberhalb von Mikrosekunden ausbalanciert ist, wird der absolute Wert der `microseconds` zwischen 0 und 999, einschließlich, liegen.

Die Set-Accessor der `microseconds` ist `undefined`. Sie können diese Property nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/Duration/with", "with()")}}, um ein neues `Temporal.Duration` Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von microseconds

```js
const d1 = Temporal.Duration.from({ milliseconds: 1, microseconds: 500 });
const d2 = Temporal.Duration.from({ milliseconds: -1, microseconds: -500 });
const d3 = Temporal.Duration.from({ milliseconds: 1 });
const d4 = Temporal.Duration.from({ microseconds: 1000 });

console.log(d1.microseconds); // 500
console.log(d2.microseconds); // -500
console.log(d3.microseconds); // 0
console.log(d4.microseconds); // 1000

// Balance d4
const d4Balanced = d4.round({ largestUnit: "milliseconds" });
console.log(d4Balanced.microseconds); // 0
console.log(d4Balanced.milliseconds); // 1
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
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
