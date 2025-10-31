---
title: Temporal.ZonedDateTime.prototype.hour
short-title: hour
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/hour
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die **`hour`**-Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.

Der Set-Accessor von `hour` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}}.

Für `ZonedDateTime` kann `hour` diskontinuierlich sein aufgrund von Offset-Änderungen wie den Übergängen der Sommerzeit. In diesem Fall kann die Stunde wiederholt oder übersprungen werden.

## Beispiele

### Verwendung von hour

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.hour); // 12
```

### Diskontinuierliche Stunde

Diskontinuierliche Stunden sind sehr häufig aufgrund von Übergängen der Sommerzeit, was näher erklärt wird unter [Ambiguität und Lücken von lokaler Zeit zu UTC-Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).

```js
const dt = Temporal.ZonedDateTime.from(
  "2024-11-03T01:59:00-04:00[America/New_York]",
);
console.log(dt.hour); // 1
const dt2 = dt.add({ minutes: 1 });
console.log(dt2.hour); // 1
console.log(dt2.toString()); // 2024-11-03T01:00:00-05:00[America/New_York]

const dt3 = Temporal.ZonedDateTime.from(
  "2024-03-10T01:59:00-05:00[America/New_York]",
);
console.log(dt3.hour); // 1
const dt4 = dt3.add({ minutes: 1 });
console.log(dt4.hour); // 3
console.log(dt4.toString()); // 2024-03-10T03:00:00-04:00[America/New_York]
```

Aus diesem Grund sollten Sie immer {{jsxref("Temporal/ZonedDateTime/add", "add()")}} und {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} bevorzugen, um Daten und Zeiten zu manipulieren, anstatt die `hour`-Eigenschaft direkt zu ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}}
