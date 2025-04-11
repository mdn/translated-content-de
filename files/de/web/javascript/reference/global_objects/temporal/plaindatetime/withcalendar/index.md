---
title: Temporal.PlainDateTime.prototype.withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar
l10n:
  sourceCommit: 35512ec91d6a464ebee803d20c2d47464c9ce4e7
---

{{JSRef}}{{SeeCompatTable}}

Die **`withCalendar()`**-Methode der Instanzen von {{jsxref("Temporal.PlainDateTime")}} gibt ein neues `Temporal.PlainDateTime`-Objekt zurück, das diesen Datums- und Uhrzeitpunkt interpretiert im neuen Kalendersystem darstellt. Da alle `Temporal`-Objekte so konzipiert sind, dass sie unveränderlich sind, fungiert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}-Eigenschaft des Datums- und Uhrzeitpunkts.

Um die Datums- und Uhrzeitenkomponenten-Eigenschaften zu ersetzen, verwenden Sie stattdessen die {{jsxref("Temporal/PlainDateTime/with", "with()")}}-Methode.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameter

- `calendar`
  - : Ein String, der der {{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}-Eigenschaft entspricht.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, das das durch das ursprüngliche `PlainDateTime` angegebene Datum und die Uhrzeit darstellt, interpretiert im neuen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `calendar` keine gültige Kalenderkennung ist.

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
