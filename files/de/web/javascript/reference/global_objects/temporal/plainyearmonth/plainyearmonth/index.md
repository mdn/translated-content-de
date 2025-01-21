---
title: Temporal.PlainYearMonth()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/PlainYearMonth
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Der **`Temporal.PlainYearMonth()`** Konstruktor erstellt {{jsxref("Temporal.PlainYearMonth")}} Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal` Klassen sollten Sie normalerweise `Temporal.PlainYearMonth` Objekte mit der {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} statischen Methode konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainYearMonth(year, month)
new Temporal.PlainYearMonth(year, month, calendar)
new Temporal.PlainYearMonth(year, month, calendar, referenceDay)
```

> **Hinweis:** `Temporal.PlainYearMonth()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

> [!WARNING]
> Vermeiden Sie die Verwendung der Parameter `calendar` und `referenceDay`, da {{jsxref("Temporal/PlainYearMonth/equals", "equals()")}} und {{jsxref("Temporal/PlainYearMonth/compare", "compare()")}} den Referenztag für den Vergleich in Betracht ziehen werden. Dadurch könnten zwei äquivalente Jahr-Monate als unterschiedlich angesehen werden, wenn sie verschiedene Referenztage haben. Um ein `Temporal.PlainYearMonth` Objekt mit einem nicht-ISO Kalender zu erstellen, verwenden Sie die {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} statische Methode.

### Parameter

- `year` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die den Monat im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert. Beachten Sie, dass unabhängig vom `calendar`, das `year`, der `month` und der `referenceDay` im ISO 8601-Kalendersystem sein müssen. Standardwert ist `"iso8601"`.
- `referenceDay`
  - : Eine Zahl, auf eine Ganzzahl abgeschnitten, die den Tag des Monats im ISO-Kalendersystem darstellt. Standardwert ist `1`. Dasselbe ISO-Jahr-Monat kann mit nicht-ISO Kalendern unterschiedliche Monate an verschiedenen Tagen repräsentieren. Zum Beispiel können die Tage 2021-07-01 und 2021-07-31 in verschiedenen Monaten in einem nicht-gregorianischen Kalender fallen, und die bloße Angabe von "2021-07" reicht nicht aus, um einen Monat im Zielkalender eindeutig zu bestimmen. Daher sollten Sie fast immer einen `referenceDay` angeben, wenn Sie einen nicht-ISO Kalender verwenden.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth` Objekt, das das Jahr-Monat des durch `year`, `month` und `referenceDay` (im ISO-Kalender) angegebenen Datums darstellt, interpretiert im durch `calendar` angegebenen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `referenceDay` ist keine endliche Zahl oder repräsentiert kein gültiges Datum im ISO-Kalendersystem.
    - `calendar` ist kein gültiger Kalender-Identifikator.

## Beispiele

### Verwendung von Temporal.PlainYearMonth()

```js
const ym = new Temporal.PlainYearMonth(2021, 7);
console.log(ym.toString()); // 2021-07

const ym2 = new Temporal.PlainYearMonth(2021, 7, "chinese");
console.log(ym2.toString()); // 2021-07-01[u-ca=chinese]

const ym3 = new Temporal.PlainYearMonth(2021, 7, "chinese", 31);
console.log(ym3.toString()); // 2021-07-31[u-ca=chinese]
```

### Ungeeignete Verwendung

Sie sollten die Verwendung der Parameter `calendar` und `referenceDay` vermeiden, es sei denn, Sie wissen, dass der `referenceDay` der kanonische Referenztag ist, der von `Temporal.PlainYearMonth.from()` für dasselbe Jahr-Monat ausgewählt würde.

```js
const ym = new Temporal.PlainYearMonth(2021, 7, "chinese", 1);
const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=chinese]");
console.log(ym.equals(ym2)); // false
console.log(ym.toString()); // 2021-07-01[u-ca=chinese]
console.log(ym2.toString()); // 2021-06-10[u-ca=chinese]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
