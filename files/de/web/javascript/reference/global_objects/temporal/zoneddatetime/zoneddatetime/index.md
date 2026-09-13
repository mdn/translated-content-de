---
title: Konstruktor Temporal.ZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

{{SeeCompatTable}}

Der Konstruktor **`Temporal.ZonedDateTime()`** erstellt {{jsxref("Temporal.ZonedDateTime")}}-Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.ZonedDateTime`-Objekte normalerweise mit der statischen Methode {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} erstellen, die verschiedene Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.ZonedDateTime(epochNanoseconds, timeZone)
new Temporal.ZonedDateTime(epochNanoseconds, timeZone, calendar)
```

> [!NOTE]
> `Temporal.ZonedDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, sie ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `epochNanoseconds`
  - : Ein [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt), das der Eigenschaft {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} entspricht.
- `timeZone`
  - : Eine Zeichenkette, die der Eigenschaft {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} entspricht. Anders als bei allen anderen `Temporal`-APIs muss sie unverändert ein gültiger Zeitzonenbezeichner sein (entweder benannt oder als Offset) und kann weder eine `Temporal.ZonedDateTime`-Instanz noch eine Datum-Uhrzeit-Zeichenkette sein.
- `calendar` {{optional_inline}}
  - : Eine Zeichenkette, die der Eigenschaft {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} entspricht. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert ist `"iso8601"`.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das den durch die Parameter angegebenen spezifischen Zeitpunkt repräsentiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `timeZone` oder `calendar` keine Zeichenkette ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `epochNanoseconds` liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±10<sup>8</sup> Tage beziehungsweise etwa ±273.972,6 Jahre von der Unix-Epoche beträgt.
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
