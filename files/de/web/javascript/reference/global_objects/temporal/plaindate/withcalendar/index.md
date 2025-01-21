---
title: Temporal.PlainDate.prototype.withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die Methode **`withCalendar()`** von Instanzen des {{jsxref("Temporal.PlainDate")}} gibt ein neues `Temporal.PlainDate`-Objekt zurück, das dieses Datum im neuen Kalender-System interpretiert. Da alle `Temporal`-Objekte so entworfen sind, unveränderlich zu sein, fungiert diese Methode im Wesentlichen als der Setter für die {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}-Eigenschaft des Datums.

Um die Datumskomponenteneigenschaften zu ersetzen, verwenden Sie stattdessen die {{jsxref("Temporal/PlainDate/with", "with()")}}-Methode.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameter

- `calendar`
  - : Ein String, der der {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}-Eigenschaft entspricht.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das Datum darstellt, das durch das ursprüngliche `PlainDate` spezifiziert ist und im neuen Kalender-System interpretiert wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `calendar` kein gültiger Kalenderidentifikator ist.

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
