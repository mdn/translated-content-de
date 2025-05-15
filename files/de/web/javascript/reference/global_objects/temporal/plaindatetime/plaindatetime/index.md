---
title: Temporal.PlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/PlainDateTime
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainDateTime()`** Konstruktor erstellt {{jsxref("Temporal.PlainDateTime")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen direkt durch die Angabe der zugrunde liegenden Daten zu erstellen. Wie alle anderen `Temporal` Klassen sollten `Temporal.PlainDateTime` Objekte normalerweise mit der {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} statischen Methode konstruiert werden, die eine Vielzahl von Eingabetypen verarbeiten kann.

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

> **Note:** `Temporal.PlainDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `year`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, repräsentiert das Jahr im ISO-Kalendersystem.
- `month`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, repräsentiert den Monat im ISO-Kalendersystem.
- `day`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, repräsentiert den Tag des Monats im ISO-Kalendersystem.
- `hour` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, repräsentiert die Stundenkomponente.
- `minute` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, repräsentiert die Minutenkomponente.
- `second` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, repräsentiert die Sekundenkomponente.
- `millisecond` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, repräsentiert die Millisekundenkomponente.
- `microsecond` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, repräsentiert die Mikrosekundenkomponente.
- `nanosecond` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, repräsentiert die Nanosekundenkomponente.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) angibt, der verwendet werden soll. Sehen Sie sich [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen an. Standardmäßig wird `"iso8601"` verwendet. Beachten Sie, dass unabhängig vom `calendar` das `year`, `month` und `day` im ISO 8601 Kalendersystem sein müssen.

### Rückgabewert

Ein neues `Temporal.PlainDateTime` Objekt, das das durch die Parameter spezifizierte Datum-Uhrzeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Datum-Zeit-Komponente ist keine endliche Zahl.
    - Die Kombination aus Datum-Zeit-Komponente stellt kein gültiges Datum im ISO-Kalendersystem dar oder befindet sich nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage, oder etwa ±273.972,6 Jahre, seit dem Unix-Epoch umfasst.
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
