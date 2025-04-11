---
title: Temporal.PlainDate.prototype.withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar
l10n:
  sourceCommit: 35512ec91d6a464ebee803d20c2d47464c9ce4e7
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`withCalendar()`** von {{jsxref("Temporal.PlainDate")}} Instanzen gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum im neuen Kalendersystem interpretiert. Da alle `Temporal` Objekte unveränderlich gestaltet sind, fungiert diese Methode im Wesentlichen als der Setter für die {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}} Eigenschaft des Datums.

Um die Datumsbestandteile zu ersetzen, verwenden Sie stattdessen die {{jsxref("Temporal/PlainDate/with", "with()")}} Methode.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameter

- `calendar`
  - : Ein String, der der {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}} Eigenschaft entspricht.

### Rückgabewert

Ein neues `Temporal.PlainDate` Objekt, das das durch das ursprüngliche `PlainDate` angegebene Datum repräsentiert, interpretiert im neuen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `calendar` keine gültige Kalenderkennung ist.

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
