---
title: Temporal.ZonedDateTime.prototype.offset
short-title: offset
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/offset
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`offset`** Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt einen String zurück, der den [Offset](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) darstellt, der verwendet wird, um den internen Zeitpunkt im Format `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Unterminutenpräzision wie nötig) zu interpretieren. Dieser Offset ist garantiert gültig für den gegebenen Zeitpunkt und die Zeitzone zum Zeitpunkt der Erstellung.

Der set-Accessor von `offset` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/ZonedDateTime/with", "with()")}}, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen (was üblicherweise auch das Datum/Zeit ändert), oder verwenden Sie die Methode {{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}, um ein neues `Temporal.ZonedDateTime`-Objekt in einer anderen Zeitzone zu erstellen.

## Beispiele

### Verwenden von offset

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

### Ändern des Offset

Falls die Lokalzeit zufällig zwei gültige Offsets hat, wie zum Beispiel innerhalb eines Sommerzeit-Übergangs, können Sie den Offset ändern, ohne etwas anderes zu ändern:

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
