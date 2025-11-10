---
title: Temporal.Duration.prototype.years
short-title: years
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/years
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`years`** Zugriffs-Eigenschaft von {{jsxref("Temporal.Duration")}} Instanzen gibt eine Ganzzahl zurück, die die Anzahl der Jahre in der Dauer darstellt.

Sie können das Vorzeichen von `years` erkennen, indem Sie die [`sign`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign)-Eigenschaft der Dauer überprüfen.

Der Set-Accessor von `years` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/Duration/with", "with()")}}-Methode, um ein neues `Temporal.Duration`-Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von years

```js
const d1 = Temporal.Duration.from({ years: 1, months: 1 });
const d2 = Temporal.Duration.from({ years: -1, months: -1 });
const d3 = Temporal.Duration.from({ years: 1 });
const d4 = Temporal.Duration.from({ months: 12 });

console.log(d1.years); // 1
console.log(d2.years); // -1
console.log(d3.years); // 1
console.log(d4.years); // 0

// Balance d4
const d4Balanced = d4.round({
  largestUnit: "years",
  relativeTo: Temporal.PlainDate.from("2021-01-01"), // ISO 8601 calendar
});
console.log(d4Balanced.years); // 1
console.log(d4Balanced.months); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/months", "Temporal.Duration.prototype.months")}}
- {{jsxref("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}}
- {{jsxref("Temporal/Duration/days", "Temporal.Duration.prototype.days")}}
- {{jsxref("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}}
- {{jsxref("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}}
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
