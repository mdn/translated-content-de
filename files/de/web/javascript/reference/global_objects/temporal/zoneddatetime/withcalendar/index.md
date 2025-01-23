---
title: Temporal.ZonedDateTime.prototype.withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`withCalendar()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit-Wert im neuen Kalendersystem darstellt. Da alle `Temporal`-Objekte darauf ausgelegt sind, unveränderlich zu sein, fungiert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}-Eigenschaft des Datum-Uhrzeit-Werts.

Um die Datumskomponenten-Eigenschaften zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode. Um die Zeitzone zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}-Methode.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameter

- `calendar`
  - : Ein String, der der {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}-Eigenschaft entspricht.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das die durch die ursprüngliche `ZonedDateTime` angegebene Datum-Uhrzeit darstellt, interpretiert im neuen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `calendar` keine gültige Kalenderkennung ist.

## Beispiele

### Verwendung von withCalendar()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56[America/New_York]",
);
const newZDT = zdt.withCalendar("islamic");
console.log(newZDT.toLocaleString("en-US", { calendar: "islamic" }));
// 11/21/1442 AH, 12:34:56 PM EDT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal.ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- {{jsxref("Temporal.ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
- {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- {{jsxref("Temporal.ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
