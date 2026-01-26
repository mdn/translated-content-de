---
title: Temporal.ZonedDateTime.prototype.offsetNanoseconds
short-title: offsetNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/offsetNanoseconds
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`offsetNanoseconds`** Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}} Instanzen liefert eine Ganzzahl, die den [Offset](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) darstellt, welcher zur Interpretation des internen Moments verwendet wird, als Anzahl von Nanosekunden (positiv oder negativ). Der Wert ist eine sichere Ganzzahl, da er kleiner als ein Tag ist, welcher 8.64e15 Nanosekunden beträgt.

Der Setzugriff von `offsetNanoseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Ändern Sie {{jsxref("Temporal/ZonedDateTime/offset", "offset")}}, um auch diese Eigenschaft zu ändern.

## Beispiele

### Verwendung von offsetNanoseconds

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
console.log(dt.offsetNanoseconds); // -25200000000000

const dt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+08:00[Asia/Shanghai]",
);
console.log(dt2.offsetNanoseconds); // 28800000000000

const dt3 = Temporal.ZonedDateTime.from(
  "1900-01-01T00:00:00+00:09:21[Europe/Paris]",
);
console.log(dt3.offsetNanoseconds); // 561000000000
```

Hier ist eine Möglichkeit, ein `ZonedDateTime` zu erhalten, das die gleiche Wanduhrzeit in UTC darstellt:

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
const dtInUTC = dt.add({ nanoseconds: dt.offsetNanoseconds });
console.log(dtInUTC.withTimeZone("UTC").toString()); // "2021-07-01T12:00:00+00:00[UTC]"
```

Hier ist eine bessere Möglichkeit, das gleiche Ergebnis zu erzielen:

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
const dtInUTC = dt.toPlainDateTime().toZonedDateTime("UTC");
console.log(dtInUTC.toString()); // "2021-07-01T12:00:00+00:00[UTC]"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
