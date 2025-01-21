---
title: Temporal.PlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/PlainTime
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Der **`Temporal.PlainTime()`** Konstruktor erstellt {{jsxref("Temporal.PlainTime")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Angabe der zugrunde liegenden Daten zu erstellen. Wie alle anderen `Temporal` Klassen sollten Sie normalerweise `Temporal.PlainTime` Objekte mit der statischen Methode {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainTime()
new Temporal.PlainTime(hour)
new Temporal.PlainTime(hour, minute)
new Temporal.PlainTime(hour, minute, second)
new Temporal.PlainTime(hour, minute, second, millisecond)
new Temporal.PlainTime(hour, minute, second, millisecond, microsecond)
new Temporal.PlainTime(hour, minute, second, millisecond, microsecond, nanosecond)
```

> **Note:** `Temporal.PlainTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `hour` {{optional_inline}}
  - : Eine Zahl, zu einem Integer gekürzt, die die Stunde darstellt.
- `minute` {{optional_inline}}
  - : Eine Zahl, zu einem Integer gekürzt, die die Minute darstellt.
- `second` {{optional_inline}}
  - : Eine Zahl, zu einem Integer gekürzt, die die Sekunde darstellt.
- `millisecond` {{optional_inline}}
  - : Eine Zahl, zu einem Integer gekürzt, die die Millisekunde darstellt.
- `microsecond` {{optional_inline}}
  - : Eine Zahl, zu einem Integer gekürzt, die die Mikrosekunde darstellt.
- `nanosecond` {{optional_inline}}
  - : Eine Zahl, zu einem Integer gekürzt, die die Nanosekunde darstellt.

### Rückgabewert

Ein neues `Temporal.PlainTime` Objekt, das die durch die Parameter angegebene Zeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn eine der Komponenten keine endliche Zahl ist oder sie keine gültige Zeit darstellen.

## Beispiele

### Verwendung von Temporal.PlainTime()

```js
const time = new Temporal.PlainTime(12, 34, 56, 123, 456, 789);
console.log(time.toString()); // 12:34:56.123456789
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
