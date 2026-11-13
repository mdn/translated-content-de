---
title: Temporal.PlainYearMonth()-Konstruktor
short-title: Temporal.PlainYearMonth()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/PlainYearMonth
l10n:
  sourceCommit: c44f591049bc129b356acb0a9ce281974c035113
---

Der Konstruktor **`Temporal.PlainYearMonth()`** erstellt {{jsxref("Temporal.PlainYearMonth")}}-Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainYearMonth`-Objekte in der Regel mit der statischen Methode {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} erstellen, die verschiedene Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainYearMonth(year, month)
new Temporal.PlainYearMonth(year, month, calendar)
new Temporal.PlainYearMonth(year, month, calendar, referenceDay)
```

> [!NOTE]
> `Temporal.PlainYearMonth()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

> [!WARNING]
> Vermeiden Sie die Verwendung der Parameter `calendar` und `referenceDay`, da {{jsxref("Temporal/PlainYearMonth/equals", "equals()")}} und {{jsxref("Temporal/PlainYearMonth/compare", "compare()")}} den Referenztag beim Vergleich berücksichtigen. Dadurch können zwei gleichwertige Jahr-Monat-Werte als unterschiedlich gelten, wenn sie verschiedene Referenztage haben. Um ein `Temporal.PlainYearMonth`-Objekt mit einem Nicht-ISO-Kalender zu erstellen, verwenden Sie die statische Methode {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.

### Parameter

- `year` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird und das Jahr im ISO-Kalendersystem angibt.
- `month`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird und den Monat im ISO-Kalendersystem angibt.
- `calendar` {{optional_inline}}
  - : Ein String, der den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) angibt. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert ist `"iso8601"`. Beachten Sie, dass `year`, `month` und `referenceDay` unabhängig von `calendar` Werte des ISO-8601-Kalendersystems sein müssen.
- `referenceDay`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird und den Tag des Monats im ISO-Kalendersystem angibt. Der Standardwert ist `1`. Derselbe ISO-Jahr-Monat-Wert kann bei Nicht-ISO-Kalendern je nach Tag unterschiedliche Monate bezeichnen. Beispielsweise können die Tage 2021-07-01 und 2021-07-31 in einem nicht-gregorianischen Kalender in unterschiedliche Monate fallen. Die Angabe von „2021-07“ allein reicht daher nicht aus, um einen Monat im Zielkalender eindeutig zu bestimmen. Wenn Sie einen Nicht-ISO-Kalender verwenden, sollten Sie deshalb praktisch immer einen `referenceDay` angeben.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, das den Jahr-Monat-Wert des durch `year`, `month` und `referenceDay` angegebenen Datums (im ISO-Kalender) repräsentiert, interpretiert im durch `calendar` angegebenen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` weder ein String noch `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `referenceDay` ist keine endliche Zahl.
    - Die Kombination aus `year`, `month` und `referenceDay` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt außerhalb des [darstellbaren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates). Dieser umfasst ±(10<sup>8</sup> + 1) Tage beziehungsweise etwa ±273.972,6 Jahre ab der Unix-Epoche.
    - `calendar` ist kein gültiger Kalenderbezeichner.

## Beispiele

### Temporal.PlainYearMonth() verwenden

```js
const ym = new Temporal.PlainYearMonth(2021, 7);
console.log(ym.toString()); // 2021-07

const ym2 = new Temporal.PlainYearMonth(2021, 7, "chinese");
console.log(ym2.toString()); // 2021-07-01[u-ca=chinese]

const ym3 = new Temporal.PlainYearMonth(2021, 7, "chinese", 31);
console.log(ym3.toString()); // 2021-07-31[u-ca=chinese]
```

### Unsachgemäße Verwendung

Sie sollten die Parameter `calendar` und `referenceDay` nur verwenden, wenn Sie wissen, dass `referenceDay` der kanonische Referenztag ist, den `Temporal.PlainYearMonth.from()` für denselben Jahr-Monat-Wert auswählen würde.

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
