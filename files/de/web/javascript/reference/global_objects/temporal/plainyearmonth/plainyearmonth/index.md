---
title: Temporal.PlainYearMonth()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/PlainYearMonth
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainYearMonth()`** Konstruktor erstellt {{jsxref("Temporal.PlainYearMonth")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen zu erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal` Klassen sollten Sie in der Regel `Temporal.PlainYearMonth` Objekte mit der {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} statischen Methode konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainYearMonth(year, month)
new Temporal.PlainYearMonth(year, month, calendar)
new Temporal.PlainYearMonth(year, month, calendar, referenceDay)
```

> **Hinweis:** `Temporal.PlainYearMonth()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

> [!WARNING]
> Vermeiden Sie die Verwendung der Parameter `calendar` und `referenceDay`, weil {{jsxref("Temporal/PlainYearMonth/equals", "equals()")}} und {{jsxref("Temporal/PlainYearMonth/compare", "compare()")}} den Referenztag für den Vergleich berücksichtigen. Dadurch können zwei gleichwertige Jahr-Monate als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenztage haben. Um ein `Temporal.PlainYearMonth` Objekt mit einem nicht-ISO-Kalender zu erstellen, verwenden Sie die {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} statische Methode.

### Parameter

- `year` {{optional_inline}}
  - : Eine Zahl, auf eine ganze Zahl abgerundet, die das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, auf eine ganze Zahl abgerundet, die den Monat im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste häufig unterstützter Kalendertypen. Standardwert ist `"iso8601"`. Beachten Sie, dass unabhängig vom `calendar` die Angaben für `year`, `month` und `referenceDay` im ISO 8601 Kalendersystem sein müssen.
- `referenceDay`
  - : Eine Zahl, auf eine ganze Zahl abgerundet, die den Tag des Monats im ISO-Kalendersystem darstellt. Standardwert ist `1`. Das gleiche ISO-Jahr-Monat kann in verschiedenen Monaten an verschiedenen Tagen mit nicht-ISO-Kalendern dargestellt werden. Beispielsweise können die Tage 2021-07-01 und 2021-07-31 in einem nicht-gregorianischen Kalender in verschiedenen Monaten liegen, und nur die Angabe "2021-07" reicht nicht aus, um einen Monat im Zielkalender eindeutig zu bestimmen. Daher sollten Sie fast immer einen `referenceDay` angeben, wenn Sie einen nicht-ISO-Kalender verwenden.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth` Objekt, das das Jahr-Monat des durch `year`, `month` und `referenceDay` (im ISO-Kalender) angegebenen Datums repräsentiert, interpretiert im Kalendersystem, das durch `calendar` angegeben wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `referenceDay` ist keine endliche Zahl.
    - Die Kombination aus `year`, `month` und `referenceDay` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre ab der Unix-Epoche beträgt.
    - `calendar` ist kein gültiger Kalenderbezeichner.

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

### Unsachgemäße Verwendung

Sie sollten die Verwendung der Parameter `calendar` und `referenceDay` vermeiden, es sei denn, Sie wissen, dass der `referenceDay` der kanonische Referenztag ist, der von `Temporal.PlainYearMonth.from()` für das gleiche Jahr-Monat ausgewählt würde.

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
