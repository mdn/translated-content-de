---
title: Temporal.PlainDateTime()-Konstruktor
short-title: Temporal.PlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/PlainDateTime
l10n:
  sourceCommit: c44f591049bc129b356acb0a9ce281974c035113
---

Der **`Temporal.PlainDateTime()`**-Konstruktor erstellt {{jsxref("Temporal.PlainDateTime")}}-Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainDateTime`-Objekte in der Regel mit der statischen Methode {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} erstellen, die verschiedene Eingabetypen verarbeiten kann.

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

> [!NOTE]
> `Temporal.PlainDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Wenn Sie versuchen, den Konstruktor ohne `new` aufzurufen, wird ein {{jsxref("TypeError")}} ausgelöst.

### Parameter

- `year`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und das Jahr im ISO-Kalendersystem angibt.
- `month`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und den Monat im ISO-Kalendersystem angibt.
- `day`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und den Tag des Monats im ISO-Kalendersystem angibt.
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
- `calendar` {{optional_inline}}
  - : Eine Zeichenfolge, die den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) angibt. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert ist `"iso8601"`. Beachten Sie, dass `year`, `month` und `day` unabhängig von `calendar` dem ISO-8601-Kalendersystem entsprechen müssen.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, das das durch die Parameter angegebene Datum und die Uhrzeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Datums- oder Uhrzeitkomponente ist keine endliche Zahl.
    - Die Kombination der Datums- und Uhrzeitkomponenten stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt außerhalb des [darstellbaren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates). Dieser umfasst ±(10<sup>8</sup> + 1) Tage beziehungsweise etwa ±273.972,6 Jahre relativ zur Unix-Epoche.
    - `calendar` ist kein gültiger Kalenderbezeichner.

## Beispiele

### Temporal.PlainDateTime() verwenden

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
