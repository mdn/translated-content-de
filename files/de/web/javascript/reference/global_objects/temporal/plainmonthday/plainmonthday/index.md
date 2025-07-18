---
title: Temporal.PlainMonthDay()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/PlainMonthDay
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Der **`Temporal.PlainMonthDay()`** Konstruktor erstellt {{jsxref("Temporal.PlainMonthDay")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Angabe der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal`-Klassen sollten Sie normalerweise `Temporal.PlainMonthDay` Objekte mithilfe der statischen Methode {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainMonthDay(month, day)
new Temporal.PlainMonthDay(month, day, calendar)
new Temporal.PlainMonthDay(month, day, calendar, referenceYear)
```

> [!NOTE]
> `Temporal.PlainMonthDay()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

> [!WARNING]
> Vermeiden Sie die Verwendung der Parameter `calendar` und `referenceYear`, da {{jsxref("Temporal/PlainMonthDay/equals", "equals()")}} das Bezugsjahr für Gleichheit berücksichtigen wird, was dazu führt, dass zwei äquivalente Monats-Tage als unterschiedlich angesehen werden, wenn sie unterschiedliche Bezugsjahre haben. Um ein `Temporal.PlainMonthDay` Objekt mit einem Nicht-ISO-Kalender zu erstellen, verwenden Sie die statische Methode {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}.

### Parameter

- `month`
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die den Tag des Monats im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste häufig unterstützter Kalendertypen. Standard ist `"iso8601"`. Beachten Sie, dass unabhängig vom `calendar`, `referenceYear`, `month` und `day` im ISO 8601 Kalendersystem sein müssen.
- `referenceYear` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die das Jahr im ISO-Kalendersystem darstellt. Standard ist `1972`. Derselbe ISO-Monat-Tag kann unterschiedliche Daten in verschiedenen Jahren mit Nicht-ISO-Kalendern darstellen. Beispielsweise können die Tage 2021-07-01 und 1972-07-01 in einem nicht-gregorianischen Kalender auf unterschiedliche Monats-Tage fallen, und die bloße Angabe von "07-01" reicht nicht aus, um einen Monat-Tag im Zielkalender eindeutig zu bestimmen. Daher möchten Sie praktisch immer ein `referenceYear` angeben, wenn Sie einen Nicht-ISO-Kalender verwenden.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay` Objekt, das den Monat-Tag des durch `referenceYear`, `month`, `day` spezifizierten Datums (im ISO-Kalender) repräsentiert und im durch `calendar` angegebenen Kalendersystem interpretiert wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `referenceYear`, `month` oder `day` ist keine endliche Zahl.
    - Die Kombination aus `referenceYear`, `month` und `day` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage, oder etwa ±273.972,6 Jahre, vom Unix-Epoch umfasst.
    - `calendar` ist kein gültiger Kalenderidentifikator.

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

### Unzulässige Verwendung

Sie sollten die Parameter `calendar` und `referenceYear` vermeiden, es sei denn, Sie wissen, dass das `referenceYear` das kanonische Bezugsjahr ist, das von `Temporal.PlainMonthDay.from()` für denselben Monat-Tag ausgewählt würde.

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
