---
title: Temporal.Now.plainDateISO()
short-title: plainDateISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateISO
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Now.plainDateISO()`** gibt das aktuelle Datum als ein {{jsxref("Temporal.PlainDate")}}-Objekt im ISO-8601-Kalender und der angegebenen Zeitzone zurück.

## Syntax

```js-nolint
Temporal.Now.plainDateISO()
Temporal.Now.plainDateISO(timeZone)
```

### Parameter

- `timeZone` {{optional_inline}}
  - : Entweder ein String oder eine Instanz von {{jsxref("Temporal.ZonedDateTime")}}, die die Zeitzone repräsentiert, in der die Systemzeit interpretiert werden soll. Wird eine `Temporal.ZonedDateTime`-Instanz angegeben, wird deren Zeitzone verwendet. Wenn ein String angegeben wird, kann dieser ein benannter Zeitzonen-Bezeichner, ein Offset-Zeitzonen-Bezeichner oder ein Datum-Uhrzeit-String mit einem Zeitzonen-Bezeichner oder Offset sein (siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen).

### Rückgabewert

Das aktuelle Datum in der angegebenen Zeitzone, als {{jsxref("Temporal.PlainDate")}}-Objekt unter Verwendung des ISO 8601-Kalenders.

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
