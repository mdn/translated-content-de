---
title: Temporal.ZonedDateTime.prototype.withTimeZone()
short-title: withTimeZone()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withTimeZone
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`withTimeZone()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das denselben Zeitpunkt wie dieses Datum-Uhrzeit-Objekt darstellt, jedoch in der neuen Zeitzone. Da alle `Temporal` Objekte dazu konzipiert sind, unveränderlich zu sein, fungiert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} Eigenschaft des Datum-Uhrzeit-Objekts.

Um die Datum-Uhrzeit-Komponenteneigenschaften zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode. Um dessen Kalender zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}} Methode.

## Syntax

```js-nolint
withTimeZone(timeZone)
```

### Parameter

- `timeZone`
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die die zu verwendende Zeitzone darstellt. Wenn es sich um eine `Temporal.ZonedDateTime` Instanz handelt, wird deren Zeitzone verwendet. Wenn es sich um einen String handelt, kann es sich um einen benannten Zeitzonenbezeichner, einen Offset-Zeitzonenbezeichner oder einen Datum-Uhrzeit-String handeln, der einen Zeitzonenbezeichner oder einen Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, das denselben Zeitpunkt wie dieses Datum-Uhrzeit-Objekt darstellt, jedoch in der neuen Zeitzone.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `timeZone` weder ein String noch eine `Temporal.ZonedDateTime` Instanz ist.
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

### Ersetzen der Zeitzone bei Beibehaltung derselben Wand-Uhrzeit

In dem seltenen Fall, dass Sie die Wand-Uhrzeit beibehalten möchten, aber die Zeitzone ändern (und ein anderer Zeitpunkt resultiert), konvertieren Sie sie zuerst in ein {{jsxref("Temporal.PlainDateTime")}}:

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
- {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- {{jsxref("Temporal.ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
