---
title: Temporal.ZonedDateTime.prototype.withCalendar()
short-title: withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`withCalendar()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das dieses Datum-Uhrzeit in dem neuen Kalendersystem interpretiert. Da alle `Temporal` Objekte unveränderlich gestaltet sind, fungiert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} Eigenschaft der Datum-Uhrzeit.

Um die Eigenschaftskomponenten der Datum-Uhrzeit zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode. Um die Zeitzone zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}} Methode.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameter

- `calendar`
  - : Ein String, der der {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} Eigenschaft entspricht. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der allgemein unterstützten Kalendertypen.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, das die in dem originalen `ZonedDateTime` spezifizierte Datum-Uhrzeit darstellt, interpretiert im neuen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `calendar` kein gültiger Kalender-Identifikator ist.

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
