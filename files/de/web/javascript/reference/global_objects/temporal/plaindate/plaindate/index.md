---
title: Temporal.PlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/PlainDate
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainDate()`** Konstruktor erstellt {{jsxref("Temporal.PlainDate")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Angabe der zugrunde liegenden Daten zu erstellen. Wie alle anderen `Temporal` Klassen sollten `Temporal.PlainDate` Objekte normalerweise mit der statischen Methode {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} konstruiert werden, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainDate(year, month, day)
new Temporal.PlainDate(year, month, day, calendar)
```

> **Note:** `Temporal.PlainDate()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `year`
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, auf eine ganze Zahl gekürzt, die den Tag des Monats im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) beschreibt, der verwendet werden soll. Beachten Sie, dass unabhängig vom `calendar`, `year`, `month` und `day` im ISO 8601-Kalendersystem sein müssen. Voreingestellt ist `"iso8601"`.

### Rückgabewert

Ein neues `Temporal.PlainDate` Objekt, das das durch `year`, `month`, `day` (im ISO-Kalender) spezifizierte Datum darstellt, interpretiert im Kalendersystem angegeben durch `calendar`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `day` ist keine endliche Zahl oder stellt kein gültiges Datum im ISO-Kalendersystem dar.
    - `calendar` ist keine gültige Kalenderkennung.

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
