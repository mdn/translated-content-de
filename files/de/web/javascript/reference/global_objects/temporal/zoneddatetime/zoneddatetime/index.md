---
title: Temporal.ZonedDateTime()-Konstruktor
short-title: Temporal.ZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime
l10n:
  sourceCommit: c44f591049bc129b356acb0a9ce281974c035113
---

Der Konstruktor **`Temporal.ZonedDateTime()`** erstellt {{jsxref("Temporal.ZonedDateTime")}}-Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.ZonedDateTime`-Objekte in der Regel mit der statischen Methode {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} erstellen. Diese kann verschiedene Eingabetypen verarbeiten.

## Syntax

```js-nolint
new Temporal.ZonedDateTime(epochNanoseconds, timeZone)
new Temporal.ZonedDateTime(epochNanoseconds, timeZone, calendar)
```

> [!NOTE]
> `Temporal.ZonedDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `epochNanoseconds`
  - : Ein [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt), der der Eigenschaft {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} entspricht.
- `timeZone`
  - : Ein String, der der Eigenschaft {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} entspricht. Anders als bei allen anderen `Temporal`-APIs muss er unmittelbar ein gültiger Zeitzonenbezeichner (entweder ein benannter Bezeichner oder ein Offset) sein; eine `Temporal.ZonedDateTime`-Instanz oder ein Datums-Uhrzeit-String ist nicht zulässig.
- `calendar` {{optional_inline}}
  - : Ein String, der der Eigenschaft {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} entspricht. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert ist `"iso8601"`.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das den durch die Parameter angegebenen Zeitpunkt darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `timeZone` oder `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `epochNanoseconds` liegt außerhalb des [darstellbaren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) von ±10<sup>8</sup> Tagen beziehungsweise etwa ±273.972,6 Jahren um die Unix-Epoche.
    - `timeZone` ist kein gültiger Zeitzonenbezeichner.
    - `calendar` ist kein gültiger Kalenderbezeichner.

## Beispiele

### Temporal.ZonedDateTime() verwenden

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
