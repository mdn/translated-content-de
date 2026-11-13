---
title: Temporal.PlainDate()-Konstruktor
short-title: Temporal.PlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/PlainDate
l10n:
  sourceCommit: c44f591049bc129b356acb0a9ce281974c035113
---

Der Konstruktor **`Temporal.PlainDate()`** erstellt {{jsxref("Temporal.PlainDate")}}-Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainDate`-Objekte normalerweise mit der statischen Methode {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} erstellen, die verschiedene Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainDate(year, month, day)
new Temporal.PlainDate(year, month, day, calendar)
```

> [!NOTE]
> `Temporal.PlainDate()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `year`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und das Jahr im ISO-Kalendersystem angibt.
- `month`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und den Monat im ISO-Kalendersystem angibt.
- `day`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und den Tag des Monats im ISO-Kalendersystem angibt.
- `calendar` {{optional_inline}}
  - : Ein String, der den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) angibt. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert ist `"iso8601"`. Unabhängig von `calendar` müssen `year`, `month` und `day` im ISO-8601-Kalendersystem angegeben werden.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das durch `year`, `month` und `day` angegebene Datum (im ISO-Kalender) repräsentiert, interpretiert im durch `calendar` angegebenen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` weder ein String noch `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `day` ist keine endliche Zahl.
    - Die Kombination aus `year`, `month` und `day` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt außerhalb des [darstellbaren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates). Dieser umfasst ±(10<sup>8</sup> + 1) Tage beziehungsweise etwa ±273.972,6 Jahre ab der Unix-Epoche.
    - `calendar` ist kein gültiger Kalenderbezeichner.

## Beispiele

### Temporal.PlainDate() verwenden

```js
const plainDate = new Temporal.PlainDate(2021, 7, 1);
console.log(plainDate.toString()); // 2021-07-01

// Note that the date is stored internally as ISO 8601, even when it's
// interpreted in a different calendar system. For example, even though
// 2021-07-01 ISO is 5781-10-21 in the Hebrew calendar, you still pass the
// ISO date to the constructor.
const plainDate2 = new Temporal.PlainDate(2021, 7, 1, "hebrew");
console.log(plainDate2.toString()); // 2021-07-01[u-ca=hebrew]
console.log(plainDate2.year); // 5781
console.log(plainDate2.month); // 10
console.log(plainDate2.day); // 21
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
