---
title: Temporal.PlainTime()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/PlainTime
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

Der Konstruktor **`Temporal.PlainTime()`** erstellt {{jsxref("Temporal.PlainTime")}}-Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainTime`-Objekte üblicherweise mit der statischen Methode {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} erstellen, die eine Vielzahl von Eingabetypen verarbeiten kann.

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
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Stundenkomponente darstellt.
- `minute` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Minutenkomponente darstellt.
- `second` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Sekundenkomponente darstellt.
- `millisecond` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Millisekundenkomponente darstellt.
- `microsecond` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Mikrosekundenkomponente darstellt.
- `nanosecond` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Nanosekundenkomponente darstellt.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das die durch die Parameter angegebene Zeit darstellt.

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
