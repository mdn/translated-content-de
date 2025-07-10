---
title: Temporal.PlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/PlainDate
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Der **`Temporal.PlainDate()`** Konstruktor erstellt {{jsxref("Temporal.PlainDate")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Angabe der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal`-Klassen sollten Sie in der Regel `Temporal.PlainDate`-Objekte mit der {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} statischen Methode erstellen, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainDate(year, month, day)
new Temporal.PlainDate(year, month, day, calendar)
```

> [!NOTE]
> `Temporal.PlainDate()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, sie ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `year`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird und das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird und den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird und den Tag des Monats im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) beschreibt, der verwendet werden soll. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen. Standard ist `"iso8601"`. Beachten Sie, dass unabhängig vom `calendar` die Angaben `year`, `month` und `day` im ISO 8601-Kalendersystem sein müssen.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das durch `year`, `month`, `day` (im ISO-Kalender) angegebene Datum darstellt, im Kalendersystem, das durch `calendar` spezifiziert wurde, interpretiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `day` ist keine endliche Zahl.
    - Die Kombination aus `year`, `month` und `day` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273,972.6 Jahre vom Unix-Epochendatum umfasst.
    - `calendar` ist kein gültiger Kalenderidentifikator.

## Beispiele

### Verwendung von Temporal.PlainDate()

```js
const plainDate = new Temporal.PlainDate(2021, 7, 1);
console.log(plainDate.toString()); // 2021-07-01

// Note that the date is stored internally as ISO 8601, even when it's
// interpreted in a different calendar system. For example, even though
// 2021-07-01 is 4658-05-22 in the Chinese calendar, you still pass the
// ISO date to the constructor.
const plainDate2 = new Temporal.PlainDate(2021, 7, 1, "chinese");
console.log(plainDate2.toString()); // 2021-07-01[u-ca=chinese]
console.log(plainDate2.year); // 4658
console.log(plainDate2.month); // 5
console.log(plainDate2.day); // 22
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
