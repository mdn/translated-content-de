---
title: Temporal.ZonedDateTime.prototype.hoursInDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/hoursInDay
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`hoursInDay`** Accessor-Eigenschaft von Instanzen von {{jsxref("Temporal.ZonedDateTime")}} gibt eine positive Ganzzahl zurück, die die Anzahl der Stunden in dem Tag dieses Datums in der Zeitzone darstellt. Diese Zahl kann im Falle von Offset-Änderungen wie z.B. Sommerzeit mehr oder weniger als 24 sein.

Da `ZonedDateTime` die einzige Klasse ist, die zeitzonenbewusst ist, und sich die Stundenanzahl an einem Tag nur durch Offset-Änderungen ändern kann, gehen alle anderen Klassen von 24-Stunden-Tagen aus.

Der Set-Accessor von `hoursInDay` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von hoursInDay

```js
const dt = Temporal.ZonedDateTime.from(
  "2024-03-10T01:58:00-05:00[America/New_York]",
);
console.log(dt.hoursInDay); // 23; this is the day of transition into DST

const dt2 = Temporal.ZonedDateTime.from(
  "2024-11-03T01:58:00-04:00[America/New_York]",
);
console.log(dt2.hoursInDay); // 25; this is the day of transition out of DST

const dt3 = Temporal.ZonedDateTime.from(
  "2024-11-04T01:58:00-05:00[America/New_York]",
);
console.log(dt3.hoursInDay); // 24
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
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
