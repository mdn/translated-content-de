---
title: Temporal.Instant.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/from
l10n:
  sourceCommit: b1392b60ee71b9f09c0123694a494a71d0dbbb8a
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Instant.from()`** erstellt ein neues `Temporal.Instant`-Objekt aus einem anderen `Temporal.Instant`-Objekt oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format)-String.

## Syntax

```js-nolint
Temporal.Instant.from(info)
```

### Parameter

- `info`
  - : Eines der folgenden:
    - Eine {{jsxref("Temporal.Instant")}}-Instanz, die eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format)-String, der ein Datum, eine Uhrzeit und einen Zeitzonen-Offset enthält. Der Name der Zeitzone wird ignoriert; nur der Offset wird verwendet.

### Rückgabewert

Ein neues `Temporal.Instant`-Objekt, das den durch `info` angegebenen Moment in der Zeit darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `info` weder eine `Temporal.Instant`-Instanz noch ein String ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der String ist kein gültiger RFC 9557-String.
    - Die Information liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre vom Unix-Epoch umfasst.

## Beispiele

### Ein `Instant` aus einem String erstellen

```js
const instant = Temporal.Instant.from("1970-01-01T00Z");
console.log(instant.toString()); // 1970-01-01T00:00:00Z

const instant2 = Temporal.Instant.from("1970-01-01T00+08:00");
console.log(instant.toString()); // 1969-12-31T16:00:00Z

// America/New_York is UTC-5 in January 1970, not UTC+8
const instant3 = Temporal.Instant.from("1970-01-01T00+08:00[America/New_York]");
console.log(instant.toString()); // 1969-12-31T16:00:00Z; the time zone name is ignored
```

### Ein `Instant` aus einem anderen `Instant` erstellen

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
