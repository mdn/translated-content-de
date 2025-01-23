---
title: Temporal.ZonedDateTime.prototype.offsetNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/offsetNanoseconds
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`offsetNanoseconds`** Zugriffs-Eigenschaft von Instanzen des {{jsxref("Temporal.ZonedDateTime")}} gibt eine Ganzzahl zurück, die den [Offset](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) darstellt, der verwendet wird, um den internen Zeitpunkt als Anzahl von Nanosekunden (positiv oder negativ) zu interpretieren. Der Wert ist eine sichere Ganzzahl, da er kleiner als ein Tag ist, was 8,64e15 Nanosekunden entspricht.

Die Set-Zugriffsfunktion von `offsetNanoseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Ändern Sie {{jsxref("Temporal/ZonedDateTime/offset", "offset")}}, um diese Eigenschaft ebenfalls zu ändern.

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

Hier ist eine Möglichkeit, eine `ZonedDateTime` zu erhalten, die die gleiche Uhrzeit in UTC darstellt:

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
- {{jsxref("Temporal.ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- {{jsxref("Temporal.ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
- {{jsxref("Temporal.ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
