---
title: Temporal.PlainMonthDay.prototype.calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/calendarId
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die Zugriffs-Property **`calendarId`** von Instanzen von {{jsxref("Temporal.PlainMonthDay")}} gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, welcher zur Interpretation des internen ISO 8601 Datums verwendet wird.

Für eine Liste der häufig unterstützten Werte siehe {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

Der Set-Zugriff von `calendarId` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Es gibt keinen offensichtlichen Weg, ein neues `Temporal.PlainMonthDay`-Objekt mit einem anderen Kalender zu erstellen, der denselben Monat-Tag darstellt. Sie müssen es daher zuerst in ein {{jsxref("Temporal.PlainDate")}}-Objekt umwandeln, den Kalender ändern und dann zurückkonvertieren, indem Sie {{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}} verwenden.

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
