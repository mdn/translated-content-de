---
title: Temporal.ZonedDateTime.prototype.offset
short-title: offset
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/offset
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`offset`**-Accessor-Eigenschaft von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt einen String zurück, der den [Offset](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) darstellt, der verwendet wird, um den internen Zeitpunkt zu interpretieren, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Präzision unterhalb der Minute, wie nötig). Dieser Offset ist garantiert gültig für den angegebenen Zeitpunkt und die Zeitzone zum Zeitpunkt der Konstruktion.

Der Set-Accessor von `offset` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen (was normalerweise auch das Datum/die Uhrzeit ändert), oder verwenden Sie die {{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}-Methode, um ein neues `Temporal.ZonedDateTime`-Objekt in einer anderen Zeitzone zu erstellen.

## Beispiele

### Verwendung von offset

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
console.log(dt.offset); // "-07:00"

const dt2 = Temporal.ZonedDateTime.from("2021-07-01T12:00:00-07[-07]");
console.log(dt2.offset); // "-07:00"

const dt3 = Temporal.ZonedDateTime.from(
  "1900-01-01T00:00:00+00:09:21[Europe/Paris]",
);
console.log(dt3.offset); // "+00:09:21"

const dt4 = Temporal.ZonedDateTime.from("2021-07-01T12:00:00Z[Asia/Shanghai]");
console.log(dt4.offset); // "+08:00"
```

### Ändern des Offsets

Wenn die lokale Zeit zufällig zwei gültige Offsets hat, wie etwa bei einer Sommerzeitumstellung, können Sie den Offset ändern, ohne etwas anderes zu ändern:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2024-11-03T01:05:00-04:00[America/New_York]",
);
const newZDT = zdt.with({ offset: "-05:00" });
console.log(newZDT.toString()); // "2024-11-03T01:05:00-05:00[America/New_York]"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
