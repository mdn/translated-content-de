---
title: Temporal.ZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Der **`Temporal.ZonedDateTime()`** Konstruktor erstellt {{jsxref("Temporal.ZonedDateTime")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen zu erstellen, indem Sie direkt die zugrunde liegenden Daten angeben. Wie bei allen anderen `Temporal` Klassen sollten Sie `Temporal.ZonedDateTime` Objekte normalerweise mit der {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} statischen Methode konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.ZonedDateTime(epochNanoseconds, timeZone)
new Temporal.ZonedDateTime(epochNanoseconds, timeZone, calendar)
```

> [!NOTE]
> `Temporal.ZonedDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `epochNanoseconds`
  - : Ein [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt), das der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} Eigenschaft entspricht.
- `timeZone`
  - : Eine Zeichenkette, die der {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} Eigenschaft entspricht. Anders als bei allen anderen `Temporal` APIs muss es sich dabei um einen gültigen Zeitzonen-Identifier (entweder benannt oder offset) handeln, und es kann keine `Temporal.ZonedDateTime` Instanz oder ein Datum-Uhrzeit-String sein.
- `calendar` {{optional_inline}}
  - : Eine Zeichenkette, die der {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} Eigenschaft entspricht. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalenderarten. Standardmäßig `"iso8601"`.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime` Objekt, das den spezifischen Moment repräsentiert, der durch die Parameter angegeben wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `timeZone` oder `calendar` keine Zeichenkette ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `epochNanoseconds` liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage oder etwa ±273.972,6 Jahre vom Unix-Epoch umfasst.
    - `timeZone` ist kein gültiger Zeitzonen-Identifier.
    - `calendar` ist kein gültiger Kalender-Identifier.

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
