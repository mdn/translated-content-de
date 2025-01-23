---
title: Temporal.ZonedDateTime.prototype.offset
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/offset
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`offset`** Accessor-Eigenschaft von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt eine Zeichenkette zurück, die den [Offset](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) darstellt, der verwendet wird, um den internen Moment zu interpretieren, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Präzision wie nötig unterhalb der Minute). Dieser Offset ist garantiert für den gegebenen Moment und die Zeitzone zur Erstellungszeit gültig.

Der Set-Accessor von `offset` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode, um ein neues `Temporal.ZonedDateTime` Objekt mit dem gewünschten neuen Wert zu erstellen (in der Regel auch mit Änderung von Datum/Uhrzeit), oder verwenden Sie die {{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}-Methode, um ein neues `Temporal.ZonedDateTime` Objekt in einer anderen Zeitzone zu erstellen.

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

### Offset ändern

Falls die lokale Zeit zufällig zwei gültige Offsets hat, wie innerhalb einer Sommerzeitumstellung, können Sie den Offset ändern, ohne etwas anderes zu ändern:

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
