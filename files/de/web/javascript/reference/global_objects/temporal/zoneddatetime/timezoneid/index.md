---
title: Temporal.ZonedDateTime.prototype.timeZoneId
short-title: timeZoneId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/timeZoneId
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`timeZoneId`** Accessor-Eigenschaft von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt eine Zeichenkette zurück, die den [Zeitzonenbezeichner](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) repräsentiert, der verwendet wird, um den internen Zeitpunkt zu interpretieren. Die Zeichenkette ist entweder ein benannter Bezeichner im bevorzugten Format (wie `"America/New_York"`), oder ein Offset in der Form `"±hh:mm"`. Wenn die Zeitzone Aliasse hat, ist `timeZoneId` der Bezeichner, der verwendet wurde, um die `ZonedDateTime` zu erstellen, ohne eine Kanonisierung zum primären Bezeichner.

Der Set-Accessor von `timeZoneId` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

> [!NOTE]
> Diese Zeichenkette ist nicht für die Anzeige an Benutzer vorgesehen. Verwenden Sie {{jsxref("Temporal.ZonedDateTime/toLocaleString", "toLocaleString()")}} mit den entsprechenden Optionen, um eine lokalisierte Zeichenkette zu erhalten.

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

Die `timeZoneId` wird nie zum primären Bezeichner kanonisiert; sie ist identisch mit derjenigen, die zur Erstellung der `ZonedDateTime` verwendet wurde.

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

Darstellungsunterschiede werden jedoch kanonisiert.

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
