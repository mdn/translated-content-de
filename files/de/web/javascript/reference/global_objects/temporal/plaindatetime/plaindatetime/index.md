---
title: Temporal.PlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/PlainDateTime
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainDateTime()`** Konstruktor erstellt {{jsxref("Temporal.PlainDateTime")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Angabe der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainDateTime`-Objekte normalerweise mit der statischen Methode {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} erstellen, die eine Vielzahl von Eingabetypen verarbeiten kann.

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

> [!NOTE] > `Temporal.PlainDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `year`
  - : Eine Zahl, als ganze Zahl abgeschnitten, die das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, als ganze Zahl abgeschnitten, die den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, als ganze Zahl abgeschnitten, die den Tag des Monats im ISO-Kalendersystem darstellt.
- `hour` {{optional_inline}}
  - : Eine Zahl, als ganze Zahl abgeschnitten, die die Stundenkomponente darstellt.
- `minute` {{optional_inline}}
  - : Eine Zahl, als ganze Zahl abgeschnitten, die die Minutenkomponente darstellt.
- `second` {{optional_inline}}
  - : Eine Zahl, als ganze Zahl abgeschnitten, die die Sekundenkomponente darstellt.
- `millisecond` {{optional_inline}}
  - : Eine Zahl, als ganze Zahl abgeschnitten, die die Millisekundenkomponente darstellt.
- `microsecond` {{optional_inline}}
  - : Eine Zahl, als ganze Zahl abgeschnitten, die die Mikrosekundenkomponente darstellt.
- `nanosecond` {{optional_inline}}
  - : Eine Zahl, als ganze Zahl abgeschnitten, die die Nanosekundenkomponente darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der allgemein unterstützten Kalendertypen. Standard ist `"iso8601"`. Beachten Sie, dass unabhängig vom `calendar` die `year`, `month` und `day` im ISO 8601-Kalendersystem sein müssen.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, das das durch die Parameter angegebene Datum und die Uhrzeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine beliebige Datum-Uhrzeit-Komponente ist keine endliche Zahl.
    - Die Kombination der Datum-Uhrzeit-Komponenten stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre vom Unix-Epoch umfasst.
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
