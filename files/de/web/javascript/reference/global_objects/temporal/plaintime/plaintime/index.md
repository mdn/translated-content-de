---
title: Temporal.PlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/PlainTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Der **`Temporal.PlainTime()`** Konstruktor erstellt {{jsxref("Temporal.PlainTime")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Angabe der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal` Klassen, sollten Sie `Temporal.PlainTime` Objekte normalerweise mit der {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} statischen Methode erstellen, die eine Vielzahl von Eingabetypen verarbeiten kann.

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

> [!NOTE]
> `Temporal.PlainTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `hour` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Stundenkomponente darstellt.
- `minute` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Minutenkomponente darstellt.
- `second` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Sekundenkomponente darstellt.
- `millisecond` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Millisekundenkomponente darstellt.
- `microsecond` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Mikrosekundenkomponente darstellt.
- `nanosecond` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Nanosekundenkomponente darstellt.

### Rückgabewert

Ein neues `Temporal.PlainTime` Objekt, das die durch die Parameter spezifizierte Zeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Komponenten keine endliche Zahl ist oder sie keine gültige Zeit darstellen.

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
