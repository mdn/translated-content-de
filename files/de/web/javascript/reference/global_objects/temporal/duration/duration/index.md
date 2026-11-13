---
title: Temporal.Duration()-Konstruktor
short-title: Temporal.Duration()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/Duration
l10n:
  sourceCommit: c44f591049bc129b356acb0a9ce281974c035113
---

Der Konstruktor **`Temporal.Duration()`** erstellt {{jsxref("Temporal.Duration")}}-Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.Duration`-Objekte in der Regel mit der statischen Methode {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} erstellen, die verschiedene Eingabetypen verarbeiten kann.

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

> [!NOTE]
> `Temporal.Duration()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `years` {{optional_inline}}
  - : Anzahl der Jahre oder `undefined` (wird als `0` behandelt).
- `months` {{optional_inline}}
  - : Anzahl der Monate oder `undefined` (wird als `0` behandelt).
- `weeks` {{optional_inline}}
  - : Anzahl der Wochen oder `undefined` (wird als `0` behandelt).
- `days` {{optional_inline}}
  - : Anzahl der Tage oder `undefined` (wird als `0` behandelt).
- `hours` {{optional_inline}}
  - : Anzahl der Stunden oder `undefined` (wird als `0` behandelt).
- `minutes` {{optional_inline}}
  - : Anzahl der Minuten oder `undefined` (wird als `0` behandelt).
- `seconds` {{optional_inline}}
  - : Anzahl der Sekunden oder `undefined` (wird als `0` behandelt).
- `milliseconds` {{optional_inline}}
  - : Anzahl der Millisekunden oder `undefined` (wird als `0` behandelt).
- `microseconds` {{optional_inline}}
  - : Anzahl der Mikrosekunden oder `undefined` (wird als `0` behandelt).
- `nanoseconds` {{optional_inline}}
  - : Anzahl der Nanosekunden oder `undefined` (wird als `0` behandelt).

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt mit den angegebenen Komponenten, das möglicherweise [nicht ausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Einer der Parameter ist keine Ganzzahl (einschließlich nicht endlicher Werte).
    - Eine [Kalendereinheit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (Jahre, Monate, Wochen) hat einen Absolutwert von mindestens 2<sup>32</sup>.
    - Der nicht kalendarische Teil der Dauer (Tage und kleinere Einheiten) hat, in Sekunden ausgedrückt, einen Absolutwert von mindestens 2<sup>53</sup>.

## Beispiele

### Temporal.Duration() verwenden

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
