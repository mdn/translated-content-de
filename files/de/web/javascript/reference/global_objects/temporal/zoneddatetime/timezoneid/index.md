---
title: Temporal.ZonedDateTime.prototype.timeZoneId
short-title: timeZoneId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/timeZoneId
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die Zugriffseigenschaft **`timeZoneId`** von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt einen String zurück, der den [Zeitzonenidentifikator](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) darstellt, der verwendet wird, um den internen Moment zu interpretieren. Der String ist entweder ein benannter Identifikator im bevorzugten Format (z. B. `"America/New_York"`) oder eine Verschiebung in der Form `"±hh:mm"`. Wenn die Zeitzone Aliasse hat, ist `timeZoneId` der Identifikator, der zur Erstellung des `ZonedDateTime` verwendet wurde, ohne Kanonisierung auf den primären Identifikator.

Der Set-Accessor von `timeZoneId` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

> [!NOTE]
> Dieser String ist nicht zur Anzeige für Benutzer gedacht. Verwenden Sie {{jsxref("Temporal/ZonedDateTime/toLocaleString", "toLocaleString()")}} mit den entsprechenden Optionen, um einen lokalisierten String zu erhalten.

## Beispiele

### Verwendung von timeZoneId

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
console.log(dt.timeZoneId); // "America/Los_Angeles"

const dt2 = Temporal.ZonedDateTime.from("2021-07-01T12:00:00-07:00[-07:00]");
console.log(dt2.timeZoneId); // "-07:00"

const dt3 = dt2.withTimeZone("Asia/Shanghai");
console.log(dt3.timeZoneId); // "Asia/Shanghai"
```

Der `timeZoneId` wird niemals auf den primären Identifikator kanonisiert; er ist derselbe wie derjenige, der zur Erstellung des `ZonedDateTime` verwendet wurde.

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+07:00[Asia/Ho_Chi_Minh]",
);
const dt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+07:00[Asia/Saigon]",
);
console.log(dt.timeZoneId); // "Asia/Ho_Chi_Minh"
console.log(dt2.timeZoneId); // "Asia/Saigon"
```

Präsentationsunterschiede werden jedoch kanonisiert.

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+07:00[asia/ho_chi_minh]",
);
console.log(dt.timeZoneId); // "Asia/Ho_Chi_Minh"

const dt2 = Temporal.ZonedDateTime.from("2021-07-01T12:00:00+07:00[+07]");
console.log(dt2.timeZoneId); // "+07:00"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
