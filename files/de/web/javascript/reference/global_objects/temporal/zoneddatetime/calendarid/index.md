---
title: Temporal.ZonedDateTime.prototype.calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/calendarId
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Die Zugriffseigenschaft **`calendarId`** von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der zur Interpretation des internen ISO 8601-Datums verwendet wird.

Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen.

Der Set-Zugriff von `calendarId` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}}-Methode, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erzeugen.

## Beispiele

### Verwendung von calendarId

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T08:00:00-04:00[America/New_York]",
);
console.log(dt.calendarId); // "iso8601"; default

const dt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T08:00:00+08:00[Asia/Shanghai][u-ca=chinese]",
);
console.log(dt2.calendarId); // "chinese"

const dt3 = dt2.withCalendar("hebrew");
console.log(dt3.calendarId); // "hebrew"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
