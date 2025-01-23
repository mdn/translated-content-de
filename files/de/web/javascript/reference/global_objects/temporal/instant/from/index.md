---
title: Temporal.Instant.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/from
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Instant.from()`** erstellt ein neues `Temporal.Instant`-Objekt aus einem anderen `Temporal.Instant`-Objekt oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format)-String.

## Syntax

```js-nolint
Temporal.Instant.from(info)
```

### Parameter

- `info`
  - : Einer der folgenden:
    - Eine {{jsxref("Temporal.Instant")}}-Instanz, die eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format)-String, der ein Datum, eine Uhrzeit und eine Zeitzonenverschiebung enthält. Der Zeitzonenname wird ignoriert; nur die Verschiebung wird verwendet.

### Rückgabewert

Ein neues `Temporal.Instant`-Objekt, das den durch `info` angegebenen Moment in der Zeit darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `info` weder eine `Temporal.Instant`-Instanz noch ein String ist.
- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn der String kein gültiger RFC 9557-String ist oder wenn Datum und Uhrzeit außerhalb des Bereichs der darstellbaren Augenblicke liegen (±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre).

## Beispiele

### Erstellen eines Augenblicks aus einem String

```js
const instant = Temporal.Instant.from("1970-01-01T00Z");
console.log(instant.toString()); // 1970-01-01T00:00:00Z

const instant2 = Temporal.Instant.from("1970-01-01T00+08:00");
console.log(instant.toString()); // 1969-12-31T16:00:00Z

// America/New_York is UTC-5 in January 1970, not UTC+8
const instant3 = Temporal.Instant.from("1970-01-01T00+08:00[America/New_York]");
console.log(instant.toString()); // 1969-12-31T16:00:00Z; the time zone name is ignored
```

### Erstellen eines Augenblicks aus einem anderen Augenblick

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
