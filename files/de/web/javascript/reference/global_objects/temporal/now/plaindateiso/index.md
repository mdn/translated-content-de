---
title: Temporal.Now.plainDateISO()
short-title: plainDateISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateISO
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`Temporal.Now.plainDateISO()`** statische Methode gibt das aktuelle Datum als ein {{jsxref("Temporal.PlainDate")}} Objekt im ISO 8601-Kalender und der angegebenen Zeitzone zurück.

## Syntax

```js-nolint
Temporal.Now.plainDateISO()
Temporal.Now.plainDateISO(timeZone)
```

### Parameter

- `timeZone` {{optional_inline}}
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die die Zeitzone repräsentiert, in der die Systemzeit interpretiert werden soll. Ist es eine `Temporal.ZonedDateTime`-Instanz, wird ihre Zeitzone verwendet. Ist es ein String, kann es ein benannter Zeitzonen-Bezeichner, ein Offset-Zeitzonen-Bezeichner oder ein Datum-Uhrzeit-String sein, der einen Zeitzonen-Bezeichner oder ein Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Das aktuelle Datum in der angegebenen Zeitzone, als ein {{jsxref("Temporal.PlainDate")}} Objekt im ISO 8601-Kalender.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die Zeitzone ungültig ist.

## Beispiele

### Verwendung von Temporal.Now.plainDateISO()

```js
// The current date in the system's time zone
const date = Temporal.Now.plainDateISO();
console.log(date); // e.g.: 2021-10-01

// The current date in the "America/New_York" time zone
const dateInNewYork = Temporal.Now.plainDateISO("America/New_York");
console.log(dateInNewYork); // e.g.: 2021-09-30
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Now")}}
- {{jsxref("Temporal.PlainDate")}}
