---
title: Temporal.PlainYearMonth()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/PlainYearMonth
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainYearMonth()`** Konstruktor erstellt {{jsxref("Temporal.PlainYearMonth")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Angabe der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal` Klassen, sollten Sie `Temporal.PlainYearMonth` Objekte normalerweise mit der {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} statischen Methode erzeugen, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainYearMonth(year, month)
new Temporal.PlainYearMonth(year, month, calendar)
new Temporal.PlainYearMonth(year, month, calendar, referenceDay)
```

> **Hinweis:** `Temporal.PlainYearMonth()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

> [!WARNING]
> Vermeiden Sie die Verwendung der `calendar` und `referenceDay` Parameter, da {{jsxref("Temporal/PlainYearMonth/equals", "equals()")}} und {{jsxref("Temporal/PlainYearMonth/compare", "compare()")}} den Referenztag für den Vergleich berücksichtigen, was dazu führt, dass zwei äquivalente Jahr-Monate als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenztage haben. Um ein `Temporal.PlainYearMonth` Objekt mit einem nicht-ISO-Kalender zu erstellen, verwenden Sie die {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} statische Methode.

### Parameter

- `year` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die den Monat im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet werden soll. Beachten Sie, dass unabhängig vom `calendar`, die `year`, `month` und `referenceDay` Werte im ISO 8601-Kalendersystem sein müssen. Standardmäßig ist es `"iso8601"`.
- `referenceDay`
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die den Tag des Monats im ISO-Kalendersystem darstellt. Standardmäßig `1`. Das gleiche ISO Jahr-Monat kann mit nicht-ISO-Kalendern unterschiedliche Monate an verschiedenen Tagen darstellen. Beispielsweise können die Tage 2021-07-01 und 2021-07-31 in einem nicht-gregorianischen Kalender in unterschiedliche Monate fallen, und allein die Angabe "2021-07" reicht nicht aus, um einen Monat im Zielkalender eindeutig zu bestimmen. Daher sollten Sie praktisch immer einen `referenceDay` angeben, wenn Sie einen nicht-ISO-Kalender verwenden.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth` Objekt, das das Jahr-Monat des durch `year`, `month` und `referenceDay` angegebenen Datums darstellt (im ISO-Kalender), interpretiert im Kalender-System, das durch `calendar` spezifiziert ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `referenceDay` ist keine endliche Zahl.
    - Die Kombination aus `year`, `month` und `referenceDay` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), das sind ±(10<sup>8</sup> + 1) Tage, oder etwa ±273.972,6 Jahre vom Unix-Epoch.
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

### Unsachgemäße Verwendung

Sie sollten die `calendar` und `referenceDay` Parameter vermeiden, es sei denn, Sie wissen, dass der `referenceDay` der kanonische Referenztag ist, der von `Temporal.PlainYearMonth.from()` für das gleiche Jahr-Monat ausgewählt würde.

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
