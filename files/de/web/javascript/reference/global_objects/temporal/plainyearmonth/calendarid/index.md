---
title: Temporal.PlainYearMonth.prototype.calendarId
short-title: calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/calendarId
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die Zugriffseigenschaft **`calendarId`** von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, mit dem das interne ISO 8601-Datum interpretiert wird.

Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen.

Der Set-Zugriff von `calendarId` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Es gibt keinen offensichtlichen Weg, um ein neues `Temporal.PlainYearMonth`-Objekt mit einem anderen Kalender zu erstellen, das dasselbe Jahr-Monat repräsentiert, daher müssen Sie es zuerst in ein {{jsxref("Temporal.PlainDate")}}-Objekt umwandeln, den Kalender ändern und es dann zurück konvertieren.

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

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompatibilität}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
