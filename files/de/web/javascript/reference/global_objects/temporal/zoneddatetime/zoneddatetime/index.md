---
title: Temporal.ZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.ZonedDateTime()`** Konstruktor erstellt {{jsxref("Temporal.ZonedDateTime")}} Objekte.

Dieser Konstruktor erlaubt es, Instanzen direkt durch Bereitstellung der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal` Klassen sollten `Temporal.ZonedDateTime` Objekte normalerweise mit der statischen Methode {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konstruiert werden, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.ZonedDateTime(epochNanoseconds, timeZone)
new Temporal.ZonedDateTime(epochNanoseconds, timeZone, calendar)
```

> **Note:** `Temporal.ZonedDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `epochNanoseconds`
  - : Ein [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt), das der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} Eigenschaft entspricht.
- `timeZone`
  - : Ein String, der der {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} Eigenschaft entspricht. Anders als bei allen anderen `Temporal` APIs muss es sich um einen gültigen Zeitzonenbezeichner (entweder benannt oder als Offset) handeln und kann keine `Temporal.ZonedDateTime` Instanz oder ein Datums-Zeit-String sein.
- `calendar` {{optional_inline}}
  - : Ein String, der der {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} Eigenschaft entspricht. Standard ist `"iso8601"`.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, das den durch die Parameter angegebenen spezifischen Zeitpunkt darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `timeZone` oder `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `epochNanoseconds` liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre ab dem Unix-Epoch umfasst.
    - `timeZone` ist kein gültiger Zeitzonenbezeichner.
    - `calendar` ist kein gültiger Kalenderbezeichner.

## Beispiele

### Verwendung von Temporal.ZonedDateTime()

```js
const zdt = new Temporal.ZonedDateTime(0n, "America/New_York");
console.log(zdt.toString()); // '1969-12-31T19:00:00-05:00[America/New_York]'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
