---
title: Temporal.PlainYearMonth() constructor
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/PlainYearMonth
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

{{SeeCompatTable}}

Der Konstruktor **`Temporal.PlainYearMonth()`** erstellt {{jsxref("Temporal.PlainYearMonth")}}-Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Angabe der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainYearMonth`-Objekte normalerweise mithilfe der statischen Methode {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} erstellen, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainYearMonth(year, month)
new Temporal.PlainYearMonth(year, month, calendar)
new Temporal.PlainYearMonth(year, month, calendar, referenceDay)
```

> [!NOTE]
> `Temporal.PlainYearMonth()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, sie ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

> [!WARNING]
> Vermeiden Sie die Verwendung der Parameter `calendar` und `referenceDay`, da {{jsxref("Temporal/PlainYearMonth/equals", "equals()")}} und {{jsxref("Temporal/PlainYearMonth/compare", "compare()")}} den Referenztag beim Vergleich berücksichtigen. Dadurch werden zwei gleichwertige Jahr-Monate als unterschiedlich betrachtet, wenn sie verschiedene Referenztage haben. Um ein `Temporal.PlainYearMonth`-Objekt mit einem Nicht-ISO-Kalender zu erstellen, verwenden Sie die statische Methode {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.

### Parameter

- `year` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird und das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird und den Monat im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert ist `"iso8601"`. Beachten Sie, dass `year`, `month` und `referenceDay` unabhängig von `calendar` im ISO-8601-Kalendersystem angegeben werden müssen.
- `referenceDay`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird und den Tag des Monats im ISO-Kalendersystem darstellt. Der Standardwert ist `1`. Derselbe ISO-Jahr-Monat kann in Nicht-ISO-Kalendern an verschiedenen Tagen unterschiedliche Monate darstellen. Beispielsweise können die Tage 2021-07-01 und 2021-07-31 in einem nicht-gregorianischen Kalender in unterschiedliche Monate fallen, und die alleinige Angabe von „2021-07“ reicht nicht aus, um einen Monat im Zielkalender eindeutig zu bestimmen. Daher sollten Sie bei Verwendung eines Nicht-ISO-Kalenders praktisch immer einen `referenceDay` angeben.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, das den Jahr-Monat des durch `year`, `month` und `referenceDay` angegebenen Datums (im ISO-Kalender) darstellt, interpretiert im durch `calendar` angegebenen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `referenceDay` ist keine endliche Zahl.
    - Die Kombination aus `year`, `month` und `referenceDay` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage bzw. etwa ±273.972,6 Jahre von der Unix-Epoche beträgt.
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

Sie sollten die Parameter `calendar` und `referenceDay` vermeiden, sofern Sie nicht wissen, dass `referenceDay` der kanonische Referenztag ist, der von `Temporal.PlainYearMonth.from()` für denselben Jahr-Monat ausgewählt würde.

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
