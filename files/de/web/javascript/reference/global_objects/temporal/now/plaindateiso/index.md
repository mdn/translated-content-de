---
title: Temporal.Now.plainDateISO()
short-title: plainDateISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateISO
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`Temporal.Now.plainDateISO()`** statische Methode gibt das aktuelle Datum als ein {{jsxref("Temporal.PlainDate")}} Objekt zurück, im ISO 8601-Kalender und der angegebenen Zeitzone.

## Syntax

```js-nolint
Temporal.Now.plainDateISO()
Temporal.Now.plainDateISO(timeZone)
```

### Parameter

- `timeZone` {{optional_inline}}
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die die Zeitzone darstellt, in der die Systemzeit interpretiert werden soll. Wenn es sich um eine `Temporal.ZonedDateTime` Instanz handelt, wird deren Zeitzone verwendet. Wenn es ein String ist, kann es sich um einen benannten Zeitzonenbezeichner, einen Offset-Zeitzonenbezeichner oder einen Datumszeit-String mit einem Zeitzonenbezeichner oder einem Offset handeln (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Das aktuelle Datum in der angegebenen Zeitzone, als ein {{jsxref("Temporal.PlainDate")}} Objekt mit dem ISO 8601-Kalender.

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
