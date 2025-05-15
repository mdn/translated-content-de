---
title: Temporal.PlainDateTime.prototype.calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/calendarId
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Die **`calendarId`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, welcher zur Interpretation des internen ISO 8601 Datums verwendet wird.

Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der allgemein unterstützten Kalendertypen.

Der Set-Accessor von `calendarId` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/PlainDateTime/withCalendar", "withCalendar()")}}, um ein neues `Temporal.PlainDateTime` Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von calendarId

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T08:00:00");
console.log(dt.calendarId); // "iso8601"; default

const dt2 = Temporal.PlainDateTime.from("2021-07-01T08:00:00[u-ca=chinese]");
console.log(dt2.calendarId); // "chinese"

const dt3 = dt2.withCalendar("hebrew");
console.log(dt3.calendarId); // "hebrew"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
