---
title: Temporal.Now.plainDateTimeISO()
short-title: plainDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateTimeISO
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die statische Methode **`Temporal.Now.plainDateTimeISO()`** gibt das aktuelle Datum und die Uhrzeit als ein {{jsxref("Temporal.PlainDateTime")}}-Objekt im ISO 8601-Kalender und der angegebenen Zeitzone zurück.

## Syntax

```js-nolint
Temporal.Now.plainDateTimeISO()
Temporal.Now.plainDateTimeISO(timeZone)
```

### Parameter

- `timeZone` {{optional_inline}}
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die Zeitzone darstellt, in der die Systemzeit interpretiert werden soll. Wenn es eine `Temporal.ZonedDateTime`-Instanz ist, wird ihre Zeitzone verwendet. Wenn es ein String ist, kann es sich um eine benannte Zeitzonenkennung, eine Offset-Zeitzonenkennung oder einen Datum-Zeit-String handeln, der eine Zeitzonenkennung oder einen Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Das aktuelle Datum und die Uhrzeit in der angegebenen Zeitzone, als ein {{jsxref("Temporal.PlainDateTime")}}-Objekt unter Verwendung des ISO 8601-Kalenders. Hat die gleiche Genauigkeit wie {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}}.

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
