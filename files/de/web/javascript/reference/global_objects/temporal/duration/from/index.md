---
title: Temporal.Duration.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/from
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die statische Methode **`Temporal.Duration.from()`** erstellt ein neues `Temporal.Duration`-Objekt aus einem anderen `Temporal.Duration`-Objekt, einem Objekt mit Dauer-Eigenschaften oder einem ISO 8601-String.

## Syntax

```js-nolint
Temporal.Duration.from(info)
```

### Parameter

- `info`

  - : Eines der folgenden:

    - Eine {{jsxref("Temporal.Duration")}}-Instanz, die eine Kopie der Instanz erstellt.
    - Ein [ISO 8601](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) String, der eine Dauer darstellt.
    - Ein Objekt, das mindestens eine der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):

      - {{jsxref("Temporal/Duration/days", "days")}}
      - {{jsxref("Temporal/Duration/hours", "hours")}}
      - {{jsxref("Temporal/Duration/microseconds", "microseconds")}}
      - {{jsxref("Temporal/Duration/milliseconds", "milliseconds")}}
      - {{jsxref("Temporal/Duration/minutes", "minutes")}}
      - {{jsxref("Temporal/Duration/months", "months")}}
      - {{jsxref("Temporal/Duration/nanoseconds", "nanoseconds")}}
      - {{jsxref("Temporal/Duration/seconds", "seconds")}}
      - {{jsxref("Temporal/Duration/weeks", "weeks")}}
      - {{jsxref("Temporal/Duration/years", "years")}}

      Jede Eigenschaft sollte einen ganzzahligen Zahlenwert enthalten. Die resultierende Dauer darf keine [gemischten Vorzeichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_sign) aufweisen, daher müssen alle diese Eigenschaften dasselbe Vorzeichen (oder Null) haben. Fehlende Eigenschaften werden als Null behandelt.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, möglicherweise [unausgeglichen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), mit den angegebenen Komponenten.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine der erkannten Eigenschaften im `info`-Objekt ist keine Ganzzahl (einschließlich unendlicher Werte).
    - Eine [Kalendereinheit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (Jahre, Monate, Wochen) hat einen absoluten Wert ≥ 2<sup>32</sup>.
    - Der nicht-kalenderische Teil der Dauer (Tage und darunter), ausgedrückt in Sekunden, hat einen absoluten Wert ≥ 2<sup>53</sup>.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `info` ist kein Objekt oder String.
    - Alle erkannten Eigenschaften im `info`-Objekt sind `undefined`.

## Beispiele

### Erstellen einer Dauer aus einem Objekt

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
console.log(d1.toString()); // "PT1H30M"

const d2 = Temporal.Duration.from({ months: 1, days: 2 });
console.log(d2.toString()); // "P1M2D"

// Uncommon because unbalanced, but valid
const unbalanced = Temporal.Duration.from({
  hours: 100,
  minutes: 100,
  seconds: 100,
});
console.log(unbalanced.toString()); // "PT100H100M100S"

const neg = Temporal.Duration.from({ hours: -1, minutes: -30 });
console.log(neg.toString()); // "-PT1H30M"
```

### Erstellen einer Dauer aus einem String

```js
const d = Temporal.Duration.from("P1Y2M3W4DT5H6M7.00800901S");
console.log(d.hours); // 5
```

### Erstellen einer Dauer aus einer anderen Dauer

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from(d1);
console.log(d2.toString()); // "PT1H30M"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}}
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}}
