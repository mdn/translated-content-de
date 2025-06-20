---
title: Temporal.ZonedDateTime.prototype.withTimeZone()
short-title: withTimeZone()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withTimeZone
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`withTimeZone()`**-Methode von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Moment wie dieses Datum und diese Uhrzeit, jedoch in der neuen Zeitzone, darstellt. Da alle `Temporal`-Objekte unveränderlich gestaltet sind, fungiert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}-Eigenschaft der Datum-Uhrzeit.

Um die Eigenschaften der Datum-Uhrzeit-Komponenten zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode. Um den Kalender zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}}-Methode.

## Syntax

```js-nolint
withTimeZone(timeZone)
```

### Parameter

- `timeZone`
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die zu verwendende Zeitzone darstellt. Wenn es eine `Temporal.ZonedDateTime`-Instanz ist, wird ihre Zeitzone verwendet. Wenn es ein String ist, kann es sich um einen benannten Zeitzonen-Bezeichner, einen Offset-Zeitzonen-Bezeichner oder einen Datum-Uhrzeit-String handeln, der einen Zeitzonen-Bezeichner oder einen Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das denselben Moment wie dieses Datum und diese Uhrzeit, jedoch in der neuen Zeitzone, darstellt.

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

### Ersetzen der Zeitzone bei Beibehaltung derselben Wanduhrzeit

In dem seltenen Fall, dass Sie die Wanduhrzeit beibehalten, aber die Zeitzone ändern möchten (was zu einem anderen Moment führt), konvertieren Sie es zuerst in ein {{jsxref("Temporal.PlainDateTime")}}:

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
