---
title: Temporal.Duration()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/Duration
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.Duration()`** Konstruktor erstellt {{jsxref("Temporal.Duration")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen zu erstellen, indem Sie direkt die zugrunde liegenden Daten angeben. Wie bei allen anderen `Temporal` Klassen sollten Sie `Temporal.Duration` Objekte normalerweise mit der statischen Methode {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.Duration()
new Temporal.Duration(years)
new Temporal.Duration(years, months)
new Temporal.Duration(years, months, weeks)
new Temporal.Duration(years, months, weeks, days)
new Temporal.Duration(years, months, weeks, days, hours)
new Temporal.Duration(years, months, weeks, days, hours, minutes)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds)
```

> **Note:** `Temporal.Duration()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `years` {{optional_inline}}
  - : Anzahl der Jahre oder `undefined` (was als `0` behandelt wird).
- `months` {{optional_inline}}
  - : Anzahl der Monate oder `undefined` (was als `0` behandelt wird).
- `weeks` {{optional_inline}}
  - : Anzahl der Wochen oder `undefined` (was als `0` behandelt wird).
- `days` {{optional_inline}}
  - : Anzahl der Tage oder `undefined` (was als `0` behandelt wird).
- `hours` {{optional_inline}}
  - : Anzahl der Stunden oder `undefined` (was als `0` behandelt wird).
- `minutes` {{optional_inline}}
  - : Anzahl der Minuten oder `undefined` (was als `0` behandelt wird).
- `seconds` {{optional_inline}}
  - : Anzahl der Sekunden oder `undefined` (was als `0` behandelt wird).
- `milliseconds` {{optional_inline}}
  - : Anzahl der Millisekunden oder `undefined` (was als `0` behandelt wird).
- `microseconds` {{optional_inline}}
  - : Anzahl der Mikrosekunden oder `undefined` (was als `0` behandelt wird).
- `nanoseconds` {{optional_inline}}
  - : Anzahl der Nanosekunden oder `undefined` (was als `0` behandelt wird).

### Rückgabewert

Ein neues `Temporal.Duration` Objekt, möglicherweise [unbalanciert](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), mit den angegebenen Komponenten.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Einer der Parameter ist keine ganze Zahl (einschließlich nicht-finite Werte).
    - Eine [Kalendereinheit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (Jahre, Monate, Wochen) hat einen absoluten Wert ≥ 2<sup>32</sup>.
    - Der nicht-kalenderische Teil der Dauer (Tage und darunter), ausgedrückt in Sekunden, hat einen absoluten Wert ≥ 2<sup>53</sup>.

## Beispiele

### Verwendung von Temporal.Duration()

```js
const d = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(d.toString()); // "P1Y2M3W4DT5H6M7.00800901S"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}
