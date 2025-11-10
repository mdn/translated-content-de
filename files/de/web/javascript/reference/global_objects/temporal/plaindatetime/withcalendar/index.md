---
title: Temporal.PlainDateTime.prototype.withCalendar()
short-title: withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die Methode **`withCalendar()`** der Instanzen von {{jsxref("Temporal.PlainDateTime")}} gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das diesen Datum-Uhrzeit-Wert im neuen Kalendersystem interpretiert. Da alle `Temporal`-Objekte unveränderlich gestaltet sind, funktioniert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}-Eigenschaft der Datum-Uhrzeit.

Um die Datums- und Uhrzeitkomponenten-Eigenschaften zu ersetzen, nutzen Sie stattdessen die Methode {{jsxref("Temporal/PlainDateTime/with", "with()")}}.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameter

- `calendar`
  - : Ein String, der der {{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}-Eigenschaft entspricht. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, das die durch das ursprüngliche `PlainDateTime` angegebene Datum-Uhrzeit darstellt, interpretiert im neuen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `calendar` kein gültiger Kalender-Identifikator ist.

## Beispiele

### Verwendung von withCalendar()

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const newDT = dt.withCalendar("islamic-umalqura");
console.log(newDT.toLocaleString("en-US", { calendar: "islamic-umalqura" }));
// 11/21/1442 AH, 12:34:56 PM
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- {{jsxref("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}}
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
- {{jsxref("Temporal/PlainDateTime/calendarId", "Temporal.PlainDateTime.prototype.calendarId")}}
