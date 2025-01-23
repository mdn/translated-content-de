---
title: Temporal.PlainDateTime.prototype.withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`withCalendar()`**-Methode von {{jsxref("Temporal.PlainDateTime")}}-Instanzen gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das dieses Datum und diese Uhrzeit im neuen Kalendersystem darstellt. Da alle `Temporal`-Objekte als unveränderlich konzipiert sind, fungiert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}-Eigenschaft der Datum-Uhrzeit.

Um die datumszeitlichen Komponenteneigenschaften zu ersetzen, verwenden Sie stattdessen die {{jsxref("Temporal/PlainDateTime/with", "with()")}}-Methode.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameter

- `calendar`
  - : Ein String, der der {{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}-Eigenschaft entspricht.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, das das durch den ursprünglichen `PlainDateTime` angegebene Datum und die Uhrzeit darstellt, interpretiert im neuen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `calendar` kein gültiger Kalenderbezeichner ist.

## Beispiele

### Verwendung von withCalendar()

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const newDT = dt.withCalendar("islamic");
console.log(newDT.toLocaleString("en-US", { calendar: "islamic" }));
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
