---
title: Temporal.PlainDate.prototype.withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Die **`withCalendar()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum im neuen Kalendersystem interpretiert. Da alle `Temporal`-Objekte so konzipiert sind, dass sie unveränderlich sind, fungiert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}-Eigenschaft des Datums.

Um die Datumsbestandteile zu ersetzen, verwenden Sie stattdessen die {{jsxref("Temporal/PlainDate/with", "with()")}}-Methode.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameter

- `calendar`
  - : Ein String, der der {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}-Eigenschaft entspricht. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalenderarten.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das Datum repräsentiert, das durch das ursprüngliche `PlainDate` angegeben wird, interpretiert im neuen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `calendar` kein gültiger Kalenderbezeichner ist.

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
