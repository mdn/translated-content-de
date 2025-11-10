---
title: Temporal.Now.plainTimeISO()
short-title: plainTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainTimeISO
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`Temporal.Now.plainTimeISO()`** statische Methode gibt die aktuelle Zeit als ein {{jsxref("Temporal.PlainTime")}} Objekt in der angegebenen Zeitzone zurück.

Obwohl die Methode "ISO" im Namen enthält, haben {{jsxref("Temporal.PlainTime")}} Objekte keine zugeordneten Kalender, da das Zeitformat nicht kalenderabhängig ist.

## Syntax

```js-nolint
Temporal.Now.plainTimeISO()
Temporal.Now.plainTimeISO(timeZone)
```

### Parameter

- `timeZone` {{optional_inline}}
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}} Instanz, die die Zeitzone repräsentiert, in der die Systemzeit interpretiert werden soll. Wenn es sich um eine `Temporal.ZonedDateTime` Instanz handelt, wird ihre Zeitzone verwendet. Handelt es sich um einen String, kann dieser eine benannte Zeitzonenkennung, eine Offset-Zeitzonenkennung oder einen Datum-Uhrzeit-String mit einer Zeitzonenkennung oder einem Offset sein (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für mehr Informationen).

### Rückgabewert

Die aktuelle Zeit in der angegebenen Zeitzone, als ein {{jsxref("Temporal.PlainTime")}} Objekt. Hat die gleiche Präzision wie {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}}.

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
