---
title: Temporal.Instant.prototype.toZonedDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toZonedDateTimeISO
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toZonedDateTimeISO()`**-Methode von Instanzen des {{jsxref("Temporal.Instant")}} gibt ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das diesen Moment in der angegebenen Zeitzone unter Verwendung des ISO 8601-Kalendersystems darstellt.

## Syntax

```js-nolint
toZonedDateTimeISO(timeZone)
```

### Parameter

- `timeZone`
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die zu verwendende Zeitzone darstellt. Wenn es sich um eine `Temporal.ZonedDateTime`-Instanz handelt, wird deren Zeitzone verwendet. Wenn es ein String ist, kann es sich um einen benannten Zeitzonenbezeichner, einen Offset-Zeitzonenbezeichner oder einen Datums-Zeit-String mit einem Zeitzonenbezeichner oder einem Offset handeln (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für mehr Informationen).

### Rückgabewert

Ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt, das diesen Moment in der angegebenen Zeitzone unter Verwendung des ISO 8601-Kalendersystems darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Zeitzonenname ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `timeZone` weder ein String noch eine `Temporal.ZonedDateTime`-Instanz ist.

## Beispiele

### Verwendung von toZonedDateTimeISO()

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.123456789Z");
const zonedDateTime = instant.toZonedDateTimeISO("America/New_York");
console.log(zonedDateTime.toString()); // 2021-08-01T08:34:56.123456789-04:00[America/New_York]

const localDateTime = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());
console.log(localDateTime.toString()); // This instant in your timezone
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
