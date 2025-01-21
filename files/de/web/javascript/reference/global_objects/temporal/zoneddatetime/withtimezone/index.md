---
title: Temporal.ZonedDateTime.prototype.withTimeZone()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withTimeZone
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`withTimeZone()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das denselben Moment wie dieses Datum-Zeit-Objekt, aber in der neuen Zeitzone darstellt. Da alle `Temporal` Objekte unveränderlich gestaltet sind, funktioniert diese Methode im Wesentlichen als Setter für die {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} Eigenschaft des Datum-Zeit-Objekts.

Um die Datum-Zeiten-Komponenteigenschaften zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode. Um den Kalender zu ersetzen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}} Methode.

## Syntax

```js-nolint
withTimeZone(timeZone)
```

### Parameter

- `timeZone`
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die die zu verwendende Zeitzone darstellt. Wenn es sich um eine `Temporal.ZonedDateTime` Instanz handelt, wird ihre Zeitzone verwendet. Wenn es sich um einen String handelt, kann es eine benannte Zeitzonenkennung, eine Offset-Zeitzonenkennung oder ein Datum-Zeit-String sein, das eine Zeitzonenkennung oder einen Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für mehr Informationen).

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, das denselben Moment wie dieses Datum-Zeit-Objekt, aber in der neuen Zeitzone darstellt.

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

### Ersetzen der Zeitzone bei Beibehaltung der gleichen Wanduhrzeit

In dem seltenen Fall, dass Sie die Wanduhrzeit gleich halten, aber die Zeitzone ändern möchten (und einen anderen Moment erhalten), konvertieren Sie sie zuerst in ein {{jsxref("Temporal.PlainDateTime")}}:

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
