---
title: Temporal.ZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.ZonedDateTime()`**-Konstruktor erstellt {{jsxref("Temporal.ZonedDateTime")}}-Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen zu erstellen, indem Sie die zugrunde liegenden Daten direkt bereitstellen. Wie bei allen anderen `Temporal`-Klassen sollten Sie normalerweise `Temporal.ZonedDateTime`-Objekte mit der statischen Methode {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.ZonedDateTime(epochNanoseconds, timeZone)
new Temporal.ZonedDateTime(epochNanoseconds, timeZone, calendar)
```

> **Note:** `Temporal.ZonedDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `epochNanoseconds`
  - : Ein [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt), das der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}-Eigenschaft entspricht.
- `timeZone`
  - : Ein String, der der {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}-Eigenschaft entspricht. Im Gegensatz zu allen anderen `Temporal`-APIs muss es ein gültiger Zeitzonenbezeichner (entweder benannt oder als Offset) sein und kann nicht eine `Temporal.ZonedDateTime`-Instanz oder ein Datum-Uhrzeit-String sein.
- `calendar` {{optional_inline}}
  - : Ein String, der der {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}-Eigenschaft entspricht. Sehen Sie sich [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen an. Standard ist `"iso8601"`.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das den spezifischen Zeitpunkt repräsentiert, der durch die Parameter angegeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `timeZone` oder `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `epochNanoseconds` liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre vom Unix-Epoch umfasst.
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
