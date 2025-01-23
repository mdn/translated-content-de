---
title: Temporal.Now.plainDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateTimeISO
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Now.plainDateTimeISO()`** gibt das aktuelle Datum und die aktuelle Uhrzeit als ein {{jsxref("Temporal.PlainDateTime")}}-Objekt im ISO-8601-Kalender und der angegebenen Zeitzone zurück.

## Syntax

```js-nolint
Temporal.Now.plainDateTimeISO()
Temporal.Now.plainDateTimeISO(timeZone)
```

### Parameter

- `timeZone` {{optional_inline}}
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die Zeitzone zur Interpretation der Systemzeit darstellt. Ist es eine `Temporal.ZonedDateTime`-Instanz, wird deren Zeitzone verwendet. Bei einem String kann es sich um einen benannten Zeitzonen-Identifikator, einen Offset-Zeitzonen-Identifikator oder einen Datum-Zeit-String mit einem Zeitzonen-Identifikator oder Offset handeln (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Das aktuelle Datum und die aktuelle Uhrzeit in der angegebenen Zeitzone, als ein {{jsxref("Temporal.PlainDateTime")}}-Objekt im ISO-8601-Kalender. Hat die gleiche Präzision wie {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn die Zeitzone ungültig ist.

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
