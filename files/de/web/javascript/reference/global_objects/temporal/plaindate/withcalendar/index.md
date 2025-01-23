---
title: Temporal.PlainDate.prototype.withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`withCalendar()`** Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt ein neues `Temporal.PlainDate` Objekt zurück, das dieses Datum im neuen Kalendersystem interpretiert. Da alle `Temporal` Objekte darauf ausgelegt sind, unveränderlich zu sein, fungiert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}} Eigenschaft des Datums.

Um die Datumsbestandteile zu ersetzen, verwenden Sie stattdessen die {{jsxref("Temporal/PlainDate/with", "with()")}} Methode.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameter

- `calendar`
  - : Ein Zeichenfolge, die der {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}} Eigenschaft entspricht.

### Rückgabewert

Ein neues `Temporal.PlainDate` Objekt, das das von dem originalen `PlainDate` angegebene Datum im neuen Kalendersystem darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` keine Zeichenfolge ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `calendar` keine gültige Kalenderkennung ist.

## Beispiele

### Verwendung von withCalendar()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.withCalendar("islamic");
console.log(newDate.toLocaleString("en-US", { calendar: "islamic" }));
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
