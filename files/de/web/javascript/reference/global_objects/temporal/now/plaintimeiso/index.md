---
title: Temporal.Now.plainTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainTimeISO
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Now.plainTimeISO()`** gibt die aktuelle Uhrzeit als ein {{jsxref("Temporal.PlainTime")}}-Objekt in der angegebenen Zeitzone zurück.

Beachten Sie, dass obwohl die Methode "ISO" im Namen enthält, {{jsxref("Temporal.PlainTime")}}-Objekte keinen zugeordneten Kalender haben, da das Zeitformat nicht kalenderabhängig ist.

## Syntax

```js-nolint
Temporal.Now.plainTimeISO()
Temporal.Now.plainTimeISO(timeZone)
```

### Parameter

- `timeZone` {{optional_inline}}
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die Zeitzone repräsentiert, in der die Systemzeit interpretiert werden soll. Wenn es sich um eine `Temporal.ZonedDateTime`-Instanz handelt, wird deren Zeitzone verwendet. Wenn es ein String ist, kann es sich um einen benannten Zeitzonenidentifikator, einen Offset-Zeitzonenidentifikator oder eine Datums- und Uhrzeitzeichenkette handeln, die einen Zeitzonenidentifikator oder einen Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Die aktuelle Uhrzeit in der angegebenen Zeitzone, als ein {{jsxref("Temporal.PlainTime")}}-Objekt. Hat die gleiche Präzision wie {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die Zeitzone ungültig ist.

## Beispiele

### Verwendung von Temporal.Now.plainTimeISO()

```js
// The current time in the system's time zone
const time = Temporal.Now.plainTimeISO();
console.log(time); // e.g.: 06:12:34.567890123

// The current time in the "America/New_York" time zone
const timeInNewYork = Temporal.Now.plainTimeISO("America/New_York");
console.log(timeInNewYork); // e.g.: 23:12:34.567890123
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Now")}}
- {{jsxref("Temporal.PlainTime")}}
