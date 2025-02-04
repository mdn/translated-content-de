---
title: Temporal.PlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/PlainDate
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainDate()`**-Konstruktor erzeugt {{jsxref("Temporal.PlainDate")}}-Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen zu erstellen, indem Sie die zugrunde liegenden Daten direkt bereitstellen. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainDate`-Objekte üblicherweise mit der {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}-statischen Methode konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainDate(year, month, day)
new Temporal.PlainDate(year, month, day, calendar)
```

> **Hinweis:** `Temporal.PlainDate()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `year`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, die das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, die den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, die den Tag des Monats im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt. Beachten Sie, dass unabhängig vom `calendar` die Werte `year`, `month` und `day` im ISO 8601-Kalendersystem sein müssen. Standardmäßig wird `"iso8601"` verwendet.

### Rückgabewert

Ein neues `Temporal.PlainDate`-Objekt, das das durch `year`, `month`, `day` (im ISO-Kalender) angegebene Datum darstellt, interpretiert im durch `calendar` spezifizierten Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - `year`, `month` oder `day` ist keine endliche Zahl.
    - Die Kombination aus `year`, `month` und `day` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage umfasst, also etwa ±273.972,6 Jahre ab dem Unix-Epoch.
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
