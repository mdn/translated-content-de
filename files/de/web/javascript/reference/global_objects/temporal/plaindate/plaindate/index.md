---
title: Temporal.PlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/PlainDate
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

{{SeeCompatTable}}

Der **`Temporal.PlainDate()`** Konstruktor erstellt {{jsxref("Temporal.PlainDate")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen direkt durch die Angabe der zugrunde liegenden Daten zu erstellen. Wie alle anderen `Temporal` Klassen sollten `Temporal.PlainDate` Objekte in der Regel mit der statischen Methode {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konstruiert werden, welche eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainDate(year, month, day)
new Temporal.PlainDate(year, month, day, calendar)
```

> [!NOTE]
> `Temporal.PlainDate()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}} aus.

### Parameter

- `year`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, welche das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, welche den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, welche den Tag des Monats im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet werden soll. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der allgemein unterstützten Kalendertypen. Standardmäßig `"iso8601"`. Beachten Sie, dass unabhängig vom `calendar`, `year`, `month` und `day` im ISO 8601 Kalendersystem sein müssen.

### Rückgabewert

Ein neues `Temporal.PlainDate` Objekt, das das durch `year`, `month`, `day` (im ISO-Kalender) spezifizierte Datum repräsentiert, interpretiert im Kalendersystem, das durch `calendar` angegeben ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `day` ist keine endliche Zahl.
    - Die Kombination von `year`, `month` und `day` stellt kein gültiges Datum im ISO-Kalendersystem dar oder befindet sich nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), welcher ±(10<sup>8</sup> + 1) Tage, oder etwa ±273.972,6 Jahre, ab dem Unix-Epoch umfasst.
    - `calendar` ist kein gültiger Kalenderbezeichner.

## Beispiele

### Verwendung von Temporal.PlainDate()

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
