---
title: Temporal.PlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/PlainDate
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainDate()`** Konstruktor erstellt {{jsxref("Temporal.PlainDate")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Angabe der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal` Klassen sollten Sie normalerweise `Temporal.PlainDate` Objekte mit der statischen Methode {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konstruieren, die eine Vielzahl von Eingabedaten verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainDate(year, month, day)
new Temporal.PlainDate(year, month, day, calendar)
```

> [!NOTE] > `Temporal.PlainDate()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `year`
  - : Eine Zahl, abgeschnitten auf eine ganze Zahl, die das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, abgeschnitten auf eine ganze Zahl, die den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, abgeschnitten auf eine ganze Zahl, die den Tag des Monats im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) angibt, der verwendet werden soll. Sehen Sie sich [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste häufig unterstützter Kalendertypen an. Standardwert ist `"iso8601"`. Beachten Sie, dass unabhängig vom `calendar` die `year`, `month` und `day` im ISO 8601-Kalendersystem sein müssen.

### Rückgabewert

Ein neues `Temporal.PlainDate` Objekt, das das durch `year`, `month`, `day` (im ISO-Kalender) angegebene Datum darstellt, interpretiert im Kalendersystem, das durch `calendar` angegeben wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `day` ist keine endliche Zahl.
    - Die Kombination aus `year`, `month` und `day` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche umfasst.
    - `calendar` ist kein gültiger Kalenderbezeichner.

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
