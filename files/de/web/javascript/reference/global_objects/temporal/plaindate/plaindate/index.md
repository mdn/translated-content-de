---
title: Temporal.PlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/PlainDate
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Der **`Temporal.PlainDate()`** Konstruktor erstellt {{jsxref("Temporal.PlainDate")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen zu erstellen, indem Sie direkt die zugrundeliegenden Daten bereitstellen. Wie bei allen anderen `Temporal`-Klassen sollten Sie normalerweise `Temporal.PlainDate`-Objekte mit der {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} statischen Methode konstruieren, die mit einer Vielzahl von Eingabetypen umgehen kann.

## Syntax

```js-nolint
new Temporal.PlainDate(year, month, day)
new Temporal.PlainDate(year, month, day, calendar)
```

> **Hinweis:** `Temporal.PlainDate()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `year`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt ist und das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt ist und den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt ist und den Tag des Monats im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet werden soll. Beachten Sie, dass unabhängig vom `calendar`, die `year`, `month`, und `day` im ISO 8601-Kalendersystem sein müssen. Standardmäßig `"iso8601"`.

### Rückgabewert

Ein neues `Temporal.PlainDate` Objekt, das das durch `year`, `month`, `day` (im ISO-Kalender) spezifizierte Datum darstellt, interpretiert im Kalendersystem, das durch `calendar` angegeben ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `day` ist keine endliche Zahl oder repräsentiert kein gültiges Datum im ISO-Kalendersystem.
    - `calendar` ist kein gültiger Kalender-Identifier.

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
