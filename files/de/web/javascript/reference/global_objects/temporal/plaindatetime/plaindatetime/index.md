---
title: Temporal.PlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/PlainDateTime
l10n:
  sourceCommit: b1392b60ee71b9f09c0123694a494a71d0dbbb8a
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainDateTime()`**-Konstruktor erstellt {{jsxref("Temporal.PlainDateTime")}}-Objekte.

Dieser Konstruktor erlaubt es Ihnen, Instanzen durch direkte Übergabe der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal`-Klassen sollten `Temporal.PlainDateTime`-Objekte normalerweise mit der statischen Methode {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} erstellt werden, die eine Vielzahl von Eingabetypen verarbeiten kann.

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

> **Note:** `Temporal.PlainDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) instanziiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `year`
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die den Tag des Monats im ISO-Kalendersystem darstellt.
- `hour` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die die Stundenkomponente darstellt.
- `minute` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die die Minutenkomponente darstellt.
- `second` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die die Sekundenkomponente darstellt.
- `millisecond` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die die Millisekundenkomponente darstellt.
- `microsecond` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die die Mikrosekundenkomponente darstellt.
- `nanosecond` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die die Nanosekundenkomponente darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) angibt, der verwendet werden soll. Beachten Sie, dass unabhängig vom angegebenen `calendar` die Werte für `year`, `month` und `day` im ISO 8601-Kalendersystem sein müssen. Standardmäßig ist `"iso8601"` eingestellt.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, das das durch die Parameter angegebene Datum und die Uhrzeit repräsentiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine der Datum- und Zeitkomponenten ist keine endliche Zahl.
    - Die Kombination der Datum- und Zeitkomponenten stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt außerhalb des [darstellbaren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der bei ±(10<sup>8</sup> + 1) Tagen oder etwa ±273.972,6 Jahren ab dem Unix-Epoch-Timestamp liegt.
    - `calendar` ist keine gültige Kalenderkennung.

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
