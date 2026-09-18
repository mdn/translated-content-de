---
title: Temporal.PlainMonthDay() constructor
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/PlainMonthDay
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

Der Konstruktor **`Temporal.PlainMonthDay()`** erstellt {{jsxref("Temporal.PlainMonthDay")}}-Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainMonthDay`-Objekte normalerweise mithilfe der statischen Methode {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} erstellen, die verschiedene Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainMonthDay(month, day)
new Temporal.PlainMonthDay(month, day, calendar)
new Temporal.PlainMonthDay(month, day, calendar, referenceYear)
```

> [!NOTE]
> `Temporal.PlainMonthDay()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

> [!WARNING]
> Vermeiden Sie die Verwendung der Parameter `calendar` und `referenceYear`, da {{jsxref("Temporal/PlainMonthDay/equals", "equals()")}} das Referenzjahr bei Gleichheitsvergleichen berücksichtigt. Dadurch werden zwei äquivalente Monats-Tage als unterschiedlich betrachtet, wenn sie unterschiedliche Referenzjahre haben. Um ein `Temporal.PlainMonthDay`-Objekt mit einem Nicht-ISO-Kalender zu erstellen, verwenden Sie die statische Methode {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}.

### Parameter

- `month`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und den Tag des Monats im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert ist `"iso8601"`. Beachten Sie, dass `referenceYear`, `month` und `day` unabhängig von `calendar` im ISO-8601-Kalendersystem angegeben werden müssen.
- `referenceYear` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und das Jahr im ISO-Kalendersystem darstellt. Der Standardwert ist `1972`. Derselbe ISO-Monatstag kann in verschiedenen Jahren mit Nicht-ISO-Kalendern unterschiedliche Daten darstellen. Beispielsweise können die Tage 2021-07-01 und 1972-07-01 in einem nicht-gregorianischen Kalender auf unterschiedliche Monats-Tage fallen, und die bloße Angabe von „07-01“ reicht nicht aus, um einen Monatstag im Zielkalender eindeutig zu bestimmen. Daher sollten Sie bei Verwendung eines Nicht-ISO-Kalenders praktisch immer ein `referenceYear` angeben.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, das den Monatstag des durch `referenceYear`, `month` und `day` angegebenen Datums (im ISO-Kalender) darstellt, interpretiert im durch `calendar` angegebenen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String und nicht `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `referenceYear`, `month` oder `day` ist keine endliche Zahl.
    - Die Kombination aus `referenceYear`, `month` und `day` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage beziehungsweise etwa ±273.972,6 Jahre von der Unix-Epoche beträgt.
    - `calendar` ist kein gültiger Kalenderbezeichner.

## Beispiele

### Verwendung von Temporal.PlainMonthDay()

```js
const md = new Temporal.PlainMonthDay(7, 1);
console.log(md.toString()); // 07-01

const md2 = new Temporal.PlainMonthDay(7, 1, "chinese");
console.log(md2.toString()); // 1972-07-01[u-ca=chinese]

const md3 = new Temporal.PlainMonthDay(7, 1, "chinese", 2021);
console.log(md3.toString()); // 2021-07-01[u-ca=chinese]
```

### Unsachgemäße Verwendung

Sie sollten die Parameter `calendar` und `referenceYear` vermeiden, sofern Sie nicht wissen, dass `referenceYear` das kanonische Referenzjahr ist, das von `Temporal.PlainMonthDay.from()` für denselben Monatstag ausgewählt würde.

```js
const md = new Temporal.PlainMonthDay(7, 1, "chinese", 2021);
const md2 = Temporal.PlainMonthDay.from("2021-07-01[u-ca=chinese]");
console.log(md.equals(md2)); // false
console.log(md.toString()); // 2021-07-01[u-ca=chinese]
console.log(md2.toString()); // 1972-07-02[u-ca=chinese]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
