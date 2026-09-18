---
title: Konstruktor Temporal.PlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/PlainDateTime
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

Der Konstruktor **`Temporal.PlainDateTime()`** erstellt {{jsxref("Temporal.PlainDateTime")}}-Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainDateTime`-Objekte normalerweise mit der statischen Methode {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} erstellen, die verschiedene Eingabetypen verarbeiten kann.

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
> `Temporal.PlainDateTime()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `year`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und den Tag des Monats im ISO-Kalendersystem darstellt.
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
- `calendar` {{optional_inline}}
  - : Eine Zeichenkette, die den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert ist `"iso8601"`. Beachten Sie, dass `year`, `month` und `day` unabhängig von `calendar` im ISO-8601-Kalendersystem angegeben werden müssen.

### Rückgabewert

Ein neues `Temporal.PlainDateTime`-Objekt, das das durch die Parameter angegebene Datum und die angegebene Uhrzeit darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine beliebige Datum-Uhrzeit-Komponente ist keine endliche Zahl.
    - Die Kombination der Datum-Uhrzeit-Komponenten stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage bzw. etwa ±273.972,6 Jahre vom Unix-Epoch entfernt beträgt.
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
