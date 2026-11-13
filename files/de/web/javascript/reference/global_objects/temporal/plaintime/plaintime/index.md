---
title: Temporal.PlainTime()-Konstruktor
short-title: Temporal.PlainTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/PlainTime
l10n:
  sourceCommit: c44f591049bc129b356acb0a9ce281974c035113
---

Der **`Temporal.PlainTime()`**-Konstruktor erstellt {{jsxref("Temporal.PlainTime")}}-Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainTime`-Objekte in der Regel mit der statischen Methode {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} erstellen, die verschiedene Eingabetypen verarbeiten kann.

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
> `Temporal.PlainTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `hour` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Stundenkomponente angibt.
- `minute` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Minutenkomponente angibt.
- `second` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Sekundenkomponente angibt.
- `millisecond` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Millisekundenkomponente angibt.
- `microsecond` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Mikrosekundenkomponente angibt.
- `nanosecond` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und die Nanosekundenkomponente angibt.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das die durch die Parameter angegebene Uhrzeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Komponenten keine endliche Zahl ist oder die Komponenten keine gültige Uhrzeit darstellen.

## Beispiele

### Temporal.PlainTime() verwenden

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
