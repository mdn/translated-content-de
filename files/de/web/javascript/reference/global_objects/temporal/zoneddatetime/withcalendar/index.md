---
title: Temporal.ZonedDateTime.prototype.withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar
l10n:
  sourceCommit: 35512ec91d6a464ebee803d20c2d47464c9ce4e7
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`withCalendar()`** von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit-Wert im neuen Kalendersystem darstellt. Da alle `Temporal`-Objekte so entworfen sind, dass sie unveränderlich sind, fungiert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}-Eigenschaft der Datum-Uhrzeit.

Um die Eigenschaften der Datumskomponente zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode. Um die Zeitzone zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}-Methode.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameter

- `calendar`
  - : Ein String, der der {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}-Eigenschaft entspricht.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das die vom ursprünglichen `ZonedDateTime` angegebene Datum-Uhrzeit im neuen Kalendersystem darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `calendar` kein gültiger Kalenderbezeichner ist.

## Beispiele

### Verwendung von withCalendar()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56[America/New_York]",
);
const newZDT = zdt.withCalendar("islamic-umalqura");
console.log(newZDT.toLocaleString("en-US", { calendar: "islamic-umalqura" }));
// 11/21/1442 AH, 12:34:56 PM EDT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
