---
title: Temporal.Now.plainDateTimeISO()
short-title: plainDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateTimeISO
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die statische Methode **`Temporal.Now.plainDateTimeISO()`** gibt das aktuelle Datum und die Uhrzeit als ein {{jsxref("Temporal.PlainDateTime")}}-Objekt im ISO 8601-Kalender und der angegebenen Zeitzone zurück.

## Syntax

```js-nolint
Temporal.Now.plainDateTimeISO()
Temporal.Now.plainDateTimeISO(timeZone)
```

### Parameter

- `timeZone` {{optional_inline}}
  - : Entweder eine Zeichenkette oder eine Instanz von {{jsxref("Temporal.ZonedDateTime")}}, die die Zeitzone darstellt, in der die Systemzeit interpretiert werden soll. Wenn eine `Temporal.ZonedDateTime`-Instanz, wird deren Zeitzone verwendet. Wenn es sich um eine Zeichenkette handelt, kann es sich um einen benannten Zeitzonenbezeichner, einen Offset-Zeitzonenbezeichner oder eine Datums-Zeit-Zeichenkette handeln, die einen Zeitzonenbezeichner oder einen Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Das aktuelle Datum und die Uhrzeit in der angegebenen Zeitzone, als ein {{jsxref("Temporal.PlainDateTime")}}-Objekt unter Verwendung des ISO 8601-Kalenders. Hat die gleiche Präzision wie {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die Zeitzone ungültig ist.

## Beispiele

### Verwendung von Temporal.Now.plainDateTimeISO()

```js
// The current date and time in the system's time zone
const dateTime = Temporal.Now.plainDateTimeISO();
console.log(dateTime); // e.g.: 2021-10-01T06:12:34.567890123

// The current date and time in the "America/New_York" time zone
const dateTimeInNewYork = Temporal.Now.plainDateTimeISO("America/New_York");
console.log(dateTimeInNewYork); // e.g.: 2021-09-30T23:12:34.567890123
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Now")}}
- {{jsxref("Temporal.PlainDateTime")}}
