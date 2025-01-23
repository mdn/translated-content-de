---
title: Temporal.PlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/PlainTime
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainTime()`** Konstruktor erstellt {{jsxref("Temporal.PlainTime")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Bereitstellung der zugrunde liegenden Daten zu erstellen. Wie alle anderen `Temporal`-Klassen sollten Sie `Temporal.PlainTime`-Objekte normalerweise mit der statischen Methode {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

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

> **Note:** `Temporal.PlainTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `hour` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt ist und die Stundenkomponente darstellt.
- `minute` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt ist und die Minutenkomponente darstellt.
- `second` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt ist und die Sekundenkomponente darstellt.
- `millisecond` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt ist und die Millisekundenkomponente darstellt.
- `microsecond` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt ist und die Mikrosekundenkomponente darstellt.
- `nanosecond` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt ist und die Nanosekundenkomponente darstellt.

### Rückgabewert

Ein neues `Temporal.PlainTime` Objekt, das die durch die Parameter angegebene Zeit darstellt.

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
