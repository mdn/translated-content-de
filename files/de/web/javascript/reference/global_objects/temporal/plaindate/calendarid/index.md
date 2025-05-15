---
title: Temporal.PlainDate.prototype.calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/calendarId
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Die **`calendarId`** Zugriffseigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet wird, um das interne ISO 8601-Datum zu interpretieren.

Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste von häufig unterstützten Kalendertypen.

Der Set-Zugriffsmerkmal von `calendarId` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/PlainDate/withCalendar", "withCalendar()")}}, um ein neues `Temporal.PlainDate` Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von calendarId

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.calendarId); // "iso8601"; default

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.calendarId); // "chinese"

const date3 = date2.withCalendar("hebrew");
console.log(date3.calendarId); // "hebrew"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
