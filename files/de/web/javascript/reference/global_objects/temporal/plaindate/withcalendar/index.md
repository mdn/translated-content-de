---
title: Temporal.PlainDate.prototype.withCalendar()
short-title: withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`withCalendar()`** Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum im neuen Kalendersystem interpretiert darstellt. Da alle `Temporal` Objekte unveränderlich gestaltet sind, fungiert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}} Eigenschaft des Datums.

Um die Datumskomponenten-Eigenschaften zu ersetzen, verwenden Sie stattdessen die {{jsxref("Temporal/PlainDate/with", "with()")}} Methode.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameter

- `calendar`
  - : Ein String, der der {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}} Eigenschaft entspricht. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen.

### Rückgabewert

Ein neues `Temporal.PlainDate` Objekt, das das ursprüngliche `PlainDate` Datum im neuen Kalendersystem interpretiert darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `calendar` kein gültiger Kalender-Identifier ist.

## Beispiele

### Verwendung von withCalendar()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.withCalendar("islamic-umalqura");
console.log(newDate.toLocaleString("en-US", { calendar: "islamic-umalqura" }));
// 11/21/1442 AH
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
- {{jsxref("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}}
