---
title: Temporal.Instant.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/from
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Instant.from()`** erstellt ein neues `Temporal.Instant`-Objekt aus einem anderen `Temporal.Instant`-Objekt oder aus einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format)-String.

## Syntax

```js-nolint
Temporal.Instant.from(info)
```

### Parameter

- `info`
  - : Eines der folgenden:
    - Eine {{jsxref("Temporal.Instant")}}-Instanz, welche eine Kopie der Instanz erstellt.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#rfc_9557_format)-String, der ein Datum, eine Uhrzeit und einen Zeitzonenversatz enthält. Der Name der Zeitzone wird ignoriert; nur der Versatz wird verwendet.

### Rückgabewert

Ein neues `Temporal.Instant`-Objekt, das den im `info` angegebenen Zeitpunkt darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `info` keine `Temporal.Instant`-Instanz oder ein String ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der String ist kein gültiger RFC 9557-String.
    - Die Info befindet sich nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), welcher ±10<sup>8</sup> Tage, oder etwa ±273.972,6 Jahre vom Unix-Epoch umfasst.

## Beispiele

### Erstellen eines Instants aus einem String

```js
const instant = Temporal.Instant.from("1970-01-01T00Z");
console.log(instant.toString()); // 1970-01-01T00:00:00Z

const instant2 = Temporal.Instant.from("1970-01-01T00+08:00");
console.log(instant2.toString()); // 1969-12-31T16:00:00Z

// America/New_York is UTC-5 in January 1970, not UTC+8
const instant3 = Temporal.Instant.from("1970-01-01T00+08:00[America/New_York]");
console.log(instant3.toString()); // 1969-12-31T16:00:00Z; the time zone name is ignored
```

### Erstellen eines Instants aus einem anderen Instant

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
