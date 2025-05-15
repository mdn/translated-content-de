---
title: Temporal.PlainMonthDay.prototype.calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/calendarId
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Die Zugriffseigenschaft **`calendarId`** von Instanzen von {{jsxref("Temporal.PlainMonthDay")}} gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der zur Interpretation des internen ISO 8601-Datums verwendet wird.

Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen.

Der Set-Accessor von `calendarId` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Es gibt keinen offensichtlichen Weg, ein neues `Temporal.PlainMonthDay`-Objekt mit einem anderen Kalender zu erstellen, das denselben Monat-Tag darstellt, daher müssen Sie es zunächst in ein {{jsxref("Temporal.PlainDate")}}-Objekt mit {{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}} umwandeln, den Kalender ändern und es dann zurück konvertieren.

## Beispiele

### Verwendung von calendarId

```js
const md = Temporal.PlainMonthDay.from("07-01");
console.log(md.calendarId); // "iso8601"; default

const md2 = Temporal.PlainMonthDay.from("2021-07-01[u-ca=chinese]");
console.log(md2.calendarId); // "chinese"
```

### Ändern von calendarId

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMD = md
  .toPlainDate({ year: 2021 })
  .withCalendar("chinese")
  .toPlainMonthDay();
console.log(newMD.monthCode, newMD.day); // "M05" 22

const newMD2 = md
  .toPlainDate({ year: 2022 })
  .withCalendar("chinese")
  .toPlainMonthDay();
console.log(newMD2.monthCode, newMD2.day); // "M06" 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
