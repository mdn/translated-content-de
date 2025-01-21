---
title: Temporal.ZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Der **`Temporal.ZonedDateTime()`** Konstruktor erstellt {{jsxref("Temporal.ZonedDateTime")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Bereitstellung der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.ZonedDateTime`-Objekte normalerweise mit der {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}-statischen Methode konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.ZonedDateTime(epochNanoseconds, timeZone)
new Temporal.ZonedDateTime(epochNanoseconds, timeZone, calendar)
```

> **Hinweis:** `Temporal.ZonedDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `epochNanoseconds`
  - : Ein [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt), das der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}-Eigenschaft entspricht.
- `timeZone`
  - : Ein String, der der {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}-Eigenschaft entspricht. Anders als bei allen anderen `Temporal`-APIs muss es ein gültiger Zeitzonenbezeichner (entweder benannt oder als Offset) sein und kann keine `Temporal.ZonedDateTime`-Instanz oder ein Datum-Zeit-String sein.
- `calendar` {{optional_inline}}
  - : Ein String, der der {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}-Eigenschaft entspricht. Standardmäßig `"iso8601"`.

### Rückgabewert

Ein neues `Temporal.ZonedDateTime`-Objekt, das den spezifischen Moment darstellt, der durch die Parameter angegeben wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `timeZone` oder `calendar` kein String ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ein Parameter außerhalb des gültigen Bereichs liegt.

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
