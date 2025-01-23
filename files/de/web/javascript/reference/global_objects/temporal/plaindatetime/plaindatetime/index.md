---
title: Temporal.PlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/PlainDateTime
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainDateTime()`** Konstruktor erstellt {{jsxref("Temporal.PlainDateTime")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen zu erstellen, indem Sie die zugrunde liegenden Daten direkt bereitstellen. Wie alle anderen `Temporal` Klassen sollten `Temporal.PlainDateTime` Objekte normalerweise mit der statischen Methode {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konstruiert werden, die eine Vielzahl von Eingabetypen verarbeiten kann.

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

> **Note:** `Temporal.PlainDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `year`
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die den Tag des Monats im ISO-Kalendersystem darstellt.
- `hour` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die die Stunde darstellt.
- `minute` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die die Minute darstellt.
- `second` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die die Sekunde darstellt.
- `millisecond` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die die Millisekunde darstellt.
- `microsecond` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die die Mikrosekunde darstellt.
- `nanosecond` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die die Nanosekunde darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) angibt, der verwendet werden soll. Beachten Sie, dass unabhängig vom `calendar` die `year`, `month` und `day` im ISO 8601-Kalendersystem sein müssen. Standardwert ist `"iso8601"`.

### Rückgabewert

Ein neues `Temporal.PlainDateTime` Objekt, das das durch die Parameter spezifizierte Datum-Uhrzeit repräsentiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Komponenten keine endliche Zahl ist oder sie kein gültiges Datum-Uhrzeit repräsentieren.

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
