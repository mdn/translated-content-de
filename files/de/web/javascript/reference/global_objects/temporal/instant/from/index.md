---
title: Temporal.Instant.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/from
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`Temporal.Instant.from()`** statische Methode erstellt ein neues `Temporal.Instant`-Objekt aus einem anderen `Temporal.Instant`-Objekt oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format)-String.

## Syntax

```js-nolint
Temporal.Instant.from(info)
```

### Parameter

- `info`
  - : Einer der folgenden:
    - Eine {{jsxref("Temporal.Instant")}}-Instanz, die eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format)-String, der ein Datum, eine Uhrzeit und einen Zeitzonen-Offset enthält. Der Zeitzonenname wird ignoriert; nur der Offset wird verwendet.

### Rückgabewert

Ein neues `Temporal.Instant`-Objekt, das den durch `info` spezifizierten Zeitpunkt darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `info` weder eine `Temporal.Instant`-Instanz noch ein String ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der String kein gültiger RFC 9557-String ist, oder wenn das Datum und die Uhrzeit außerhalb des darstellbaren Bereichs von Zeitpunkten liegen (±10<sup>8</sup> Tage, oder etwa ±273.972,6 Jahre).

## Beispiele

### Einen Zeitpunkt aus einem String erstellen

```js
const instant = Temporal.Instant.from("1970-01-01T00Z");
console.log(instant.toString()); // 1970-01-01T00:00:00Z

const instant2 = Temporal.Instant.from("1970-01-01T00+08:00");
console.log(instant.toString()); // 1969-12-31T16:00:00Z

// America/New_York is UTC-5 in January 1970, not UTC+8
const instant3 = Temporal.Instant.from("1970-01-01T00+08:00[America/New_York]");
console.log(instant.toString()); // 1969-12-31T16:00:00Z; the time zone name is ignored
```

### Einen Zeitpunkt aus einem anderen Zeitpunkt erstellen

```js
const instant = Temporal.Instant.from("1970-01-01T00Z");
const instant2 = Temporal.Instant.from(instant);
console.log(instant2.toString()); // 1970-01-01T00:00:00Z
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
