---
title: Temporal.Instant.prototype.toZonedDateTimeISO()
short-title: toZonedDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toZonedDateTimeISO
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toZonedDateTimeISO()`**-Methode von {{jsxref("Temporal.Instant")}}-Instanzen gibt ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt zurück, das diesen Zeitpunkt in der angegebenen Zeitzone unter Verwendung des ISO 8601-Kalendersystems darstellt.

## Syntax

```js-nolint
toZonedDateTimeISO(timeZone)
```

### Parameter

- `timeZone`
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die zu verwendende Zeitzone darstellt. Bei einer `Temporal.ZonedDateTime`-Instanz wird deren Zeitzone verwendet. Bei einem String kann es sich um einen benannten Zeitzonen-Identifier, einen Offset-Zeitzonen-Identifier oder einen Datum-Uhrzeit-String mit einem Zeitzonen-Identifier oder Offset handeln (siehe [time zones and offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Ein neues {{jsxref("Temporal.ZonedDateTime")}}-Objekt, das diesen Zeitpunkt in der angegebenen Zeitzone unter Verwendung des ISO 8601-Kalendersystems darstellt.

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
