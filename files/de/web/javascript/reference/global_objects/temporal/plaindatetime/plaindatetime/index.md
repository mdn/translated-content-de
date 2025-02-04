---
title: Temporal.PlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/PlainDateTime
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainDateTime()`** Konstruktor erstellt {{jsxref("Temporal.PlainDateTime")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen direkt durch Bereitstellung der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal` Klassen sollten Sie `Temporal.PlainDateTime` Objekte normalerweise mit der statischen Methode {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainDateTime(year, month, day)
new Temporal.PlainDateTime(year, month, day, hour)
new Temporal.PlainDateTime(year, month, day, hour, minute)
new Temporal.PlainDateTime(year, month, day, hour, minute, second)
new Temporal.PlainDateTime(year, month, day, hour, minute, second, millisecond)
new Temporal.PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond)
new Temporal.PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond)
new Temporal.PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar)
```

> **Hinweis:** `Temporal.PlainDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `year`
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die den Tag des Monats im ISO-Kalendersystem darstellt.
- `hour` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Stundenvorgabe darstellt.
- `minute` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Minutenvorgabe darstellt.
- `second` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Sekundenvorgabe darstellt.
- `millisecond` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Millisekundenvorgabe darstellt.
- `microsecond` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Mikrosekundenvorgabe darstellt.
- `nanosecond` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die die Nanosekundenvorgabe darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) angibt, der verwendet werden soll. Beachten Sie, dass unabhängig vom `calendar` `year`, `month` und `day` im ISO 8601-Kalendersystem sein müssen. Standardmäßig `"iso8601"`.

### Rückgabewert

Ein neues `Temporal.PlainDateTime` Objekt, das das durch die Parameter angegebene Datum und die Uhrzeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine der Datum-Zeit-Komponenten ist keine endliche Zahl.
    - Die Kombination der Datum-Zeit-Komponenten stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre vom Unix-Epochenpunkt entfernt ist.
    - `calendar` ist kein gültiger Kalenderbezeichner.

## Beispiele

### Verwendung von Temporal.PlainDateTime()

```js
const dt = new Temporal.PlainDateTime(2021, 7, 1);
console.log(dt.toString()); // 2021-07-01T00:00:00

const dt2 = new Temporal.PlainDateTime(2021, 7, 1, 0, 0, 0, 0, 0, 0, "hebrew");
console.log(dt2.toString()); // 2021-07-01T00:00:00[u-ca=hebrew]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
