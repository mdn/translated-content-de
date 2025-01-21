---
title: Temporal.Duration()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/Duration
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Der **`Temporal.Duration()`** Konstruktor erstellt {{jsxref("Temporal.Duration")}}-Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen zu erstellen, indem die zugrunde liegenden Daten direkt bereitgestellt werden. Wie alle anderen `Temporal`-Klassen, sollten `Temporal.Duration`-Objekte üblicherweise mit der statischen Methode {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konstruiert werden, die eine Vielzahl von Eingabetypen verarbeiten kann.

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

> **Hinweis:** `Temporal.Duration()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `years` {{optional_inline}}
  - : Anzahl von Jahren oder `undefined` (wird als `0` behandelt).
- `months` {{optional_inline}}
  - : Anzahl von Monaten oder `undefined` (wird als `0` behandelt).
- `weeks` {{optional_inline}}
  - : Anzahl von Wochen oder `undefined` (wird als `0` behandelt).
- `days` {{optional_inline}}
  - : Anzahl von Tagen oder `undefined` (wird als `0` behandelt).
- `hours` {{optional_inline}}
  - : Anzahl von Stunden oder `undefined` (wird als `0` behandelt).
- `minutes` {{optional_inline}}
  - : Anzahl von Minuten oder `undefined` (wird als `0` behandelt).
- `seconds` {{optional_inline}}
  - : Anzahl von Sekunden oder `undefined` (wird als `0` behandelt).
- `milliseconds` {{optional_inline}}
  - : Anzahl von Millisekunden oder `undefined` (wird als `0` behandelt).
- `microseconds` {{optional_inline}}
  - : Anzahl von Mikrosekunden oder `undefined` (wird als `0` behandelt).
- `nanoseconds` {{optional_inline}}
  - : Anzahl von Nanosekunden oder `undefined` (wird als `0` behandelt).

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, möglicherweise [unbalanced](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), mit den angegebenen Komponenten.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Einer der Parameter ist keine ganze Zahl (einschließlich nicht-finiten Werten).
    - Eine [Kalendereinheit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (Jahre, Monate, Wochen) hat einen absoluten Wert ≥ 2<sup>32</sup>.
    - Der nicht kalenderbezogene Teil der Dauer (Tage und darüber hinaus), ausgedrückt in Sekunden, hat einen absoluten Wert ≥ 2<sup>53</sup>.

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
