---
title: Temporal.Now.plainTimeISO()
short-title: plainTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainTimeISO
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`Temporal.Now.plainTimeISO()`** statische Methode gibt die aktuelle Uhrzeit als ein {{jsxref("Temporal.PlainTime")}}-Objekt in der angegebenen Zeitzone zurück.

Beachten Sie, dass obwohl die Methode "ISO" in ihrem Namen enthält, {{jsxref("Temporal.PlainTime")}}-Objekte keine zugeordneten Kalender haben, da das Zeitformat nicht kalenderabhängig ist.

## Syntax

```js-nolint
Temporal.Now.plainTimeISO()
Temporal.Now.plainTimeISO(timeZone)
```

### Parameter

- `timeZone` {{optional_inline}}
  - : Entweder ein String oder eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die Zeitzone darstellt, in der die Systemzeit interpretiert werden soll. Ist es eine `Temporal.ZonedDateTime`-Instanz, wird deren Zeitzone verwendet. Wenn es ein String ist, kann es sich um einen benannten Zeitzonenbezeichner, einen Offset-Zeitzonenbezeichner oder einen Datums-Zeit-String handeln, der einen Zeitzonenbezeichner oder einen Offset enthält (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

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
