---
title: Temporal.Now.zonedDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/zonedDateTimeISO
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Now.zonedDateTimeISO()`** gibt das aktuelle Datum und die Uhrzeit als ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt im ISO 8601-Kalender und der angegebenen Zeitzone zurück.

## Syntax

```js-nolint
Temporal.Now.zonedDateTimeISO()
Temporal.Now.zonedDateTimeISO(timeZone)
```

### Parameter

- `timeZone` {{optional_inline}}
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die Zeitzone darstellt, in der die Systemzeit interpretiert werden soll. Wenn es sich um eine `Temporal.ZonedDateTime`-Instanz handelt, wird ihre Zeitzone verwendet. Wenn es ein String ist, kann es sich um einen benannten Zeitzonenbezeichner, einen Offset-Zeitzonenbezeichner oder einen Datum-Zeit-String mit einem Zeitzonenbezeichner oder einem Offset handeln (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Das aktuelle Datum und die Uhrzeit in der angegebenen Zeitzone, als ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt unter Verwendung des ISO 8601-Kalenders. Hat die gleiche Genauigkeit wie {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die Zeitzone ungültig ist.

## Beispiele

### Verwendung von Temporal.Now.zonedDateTimeISO()

```js
// The current date and time in the system's time zone
const dateTime = Temporal.Now.zonedDateTimeISO();
console.log(dateTime); // e.g.: 2021-10-01T06:12:34.567890123+03:00

// The current date and time in the "America/New_York" time zone
const dateTimeInNewYork = Temporal.Now.zonedDateTimeISO("America/New_York");
console.log(dateTimeInNewYork); // e.g.: 2021-09-30T23:12:34.567890123-04:00
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Now")}}
- {{jsxref("Temporal.ZonedDateTime")}}
