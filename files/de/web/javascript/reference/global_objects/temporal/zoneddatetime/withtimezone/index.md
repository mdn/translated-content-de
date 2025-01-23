---
title: Temporal.ZonedDateTime.prototype.withTimeZone()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withTimeZone
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`withTimeZone()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Zeitpunkt wie dieses Datum und diese Zeit darstellt, jedoch in der neuen Zeitzone. Da alle `Temporal`-Objekte unveränderlich gestaltet sind, fungiert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}-Eigenschaft der Datum-Zeit.

Um die Komponenten der Datum-Zeit zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode. Um den Kalender zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}}-Methode.

## Syntax

```js-nolint
withTimeZone(timeZone)
```

### Parameter

- `timeZone`
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die zu verwendende Zeitzone darstellt. Wenn eine `Temporal.ZonedDateTime`-Instanz übergeben wird, wird deren Zeitzone verwendet. Wird ein String übergeben, kann dieser ein benannter Zeitzonenbezeichner, ein Offset-Zeitzonenbezeichner oder ein Datum-Zeit-String mit einem Zeitzonenbezeichner oder Offset sein (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das denselben Zeitpunkt wie dieses Datum und diese Zeit darstellt, jedoch in der neuen Zeitzone.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `timeZone` weder ein String noch eine `Temporal.ZonedDateTime`-Instanz ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Zeitzonenname ungültig ist.

## Beispiele

### Verwendung von withTimeZone()

```js
const meetingTime = Temporal.ZonedDateTime.from(
  "2021-08-01T12:00[America/New_York]",
);
const meetingTimeInParis = meetingTime.withTimeZone("Europe/Paris");
console.log(meetingTimeInParis.toString()); // 2021-08-01T18:00:00+02:00[Europe/Paris]
```

### Ersetzen der Zeitzone, während die gleiche Wanduhrzeit beibehalten wird

Im seltenen Fall, dass Sie die Wanduhrzeit gleich halten, aber die Zeitzone ändern möchten (und in einem anderen Zeitpunkt resultieren), konvertieren Sie es zuerst in ein {{jsxref("Temporal.PlainDateTime")}}:

```js
const meetingTime = Temporal.ZonedDateTime.from(
  "2021-08-01T12:00[America/New_York]",
);
const meetingTimeInParis = meetingTime
  .toPlainDateTime()
  .toZonedDateTime("Europe/Paris");
console.log(meetingTimeInParis.toString()); // 2021-08-01T12:00:00+02:00[Europe/Paris]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal.ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
- {{jsxref("Temporal.ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
