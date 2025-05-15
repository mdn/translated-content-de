---
title: Temporal.PlainYearMonth.prototype.calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/calendarId
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Die **`calendarId`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der zur Interpretation des internen ISO 8601-Datums verwendet wird.

Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste von häufig unterstützten Kalenderarten.

Der Set-Accessor von `calendarId` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Es gibt keinen offensichtlichen Weg, ein neues `Temporal.PlainYearMonth`-Objekt mit einem anderen Kalender, das denselben Jahr-Monat repräsentiert, zu erstellen. Daher müssen Sie es zuerst in ein {{jsxref("Temporal.PlainDate")}}-Objekt mit {{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}} konvertieren, den Kalender ändern und es dann zurück konvertieren.

## Beispiele

### Verwendung von calendarId

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.calendarId); // "iso8601"; default

const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=chinese]");
console.log(ym2.calendarId); // "chinese"
```

### Ändern von calendarId

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
const newYM = ym
  .toPlainDate({ day: 1 })
  .withCalendar("chinese")
  .toPlainYearMonth();
console.log(newYM.year, newYM.monthCode); // 2021 "M05"

const newYM2 = ym
  .toPlainDate({ day: 31 })
  .withCalendar("chinese")
  .toPlainYearMonth();
console.log(newYM2.year, newYM2.monthCode); // 2021 "M06"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
