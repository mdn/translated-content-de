---
title: Temporal.PlainMonthDay()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/PlainMonthDay
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainMonthDay()`** Konstruktor erstellt {{jsxref("Temporal.PlainMonthDay")}} Objekte.

Dieser Konstruktor erlaubt es Ihnen, Instanzen zu erstellen, indem Sie die zugrunde liegenden Daten direkt bereitstellen. Wie bei allen anderen `Temporal`-Klassen sollten Sie normalerweise `Temporal.PlainMonthDay` Objekte mit der {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} statischen Methode erstellen, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainMonthDay(month, day)
new Temporal.PlainMonthDay(month, day, calendar)
new Temporal.PlainMonthDay(month, day, calendar, referenceYear)
```

> [!NOTE] > `Temporal.PlainMonthDay()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

> [!WARNING]
> Vermeiden Sie die Verwendung der Parameter `calendar` und `referenceYear`, da {{jsxref("Temporal/PlainMonthDay/equals", "equals()")}} das Referenzjahr für die Gleichheit berücksichtigt, was dazu führt, dass zwei äquivalente Monatstage als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenzjahre haben. Um ein `Temporal.PlainMonthDay` Objekt mit einem nicht ISO-Kalender zu erstellen, verwenden Sie die {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} statische Methode.

### Parameter

- `month`
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die den Monat im ISO-Kalendersystem repräsentiert.
- `day`
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die den Tag des Monats im ISO-Kalendersystem repräsentiert.
- `calendar` {{optional_inline}}
  - : Ein String, der das [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) angibt, das verwendet werden soll. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen. Standardmäßig `"iso8601"`. Beachten Sie, dass unabhängig vom `calendar`, das `referenceYear`, `month` und `day` im ISO 8601-Kalendersystem sein müssen.
- `referenceYear` {{optional_inline}}
  - : Eine Zahl, auf eine Ganzzahl gekürzt, die das Jahr im ISO-Kalendersystem repräsentiert. Standardmäßig `1972`. Derselbe ISO-Monatstag kann in verschiedenen Jahren mit nicht-ISO-Kalendern unterschiedliche Daten darstellen. Zum Beispiel können die Tage 2021-07-01 und 1972-07-01 in einem nicht-gregorianischen Kalender auf unterschiedliche Monatstage fallen, und nur die Angabe von "07-01" ist unzureichend, um einen Monatstag im Zielkalender eindeutig zu bestimmen. Daher möchten Sie praktisch immer ein `referenceYear` angeben, wenn Sie einen nicht-ISO-Kalender verwenden.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay` Objekt, das den Monatstag des durch `referenceYear`, `month`, `day` (im ISO-Kalender) angegebenen Datums darstellt, interpretiert im Kalendersystem, das durch `calendar` angegeben ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `referenceYear`, `month` oder `day` ist keine endliche Zahl.
    - Die Kombination aus `referenceYear`, `month` und `day` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt nicht im [darstellbaren Bereich](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), der ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre ab dem Unix-Epoch umfasst.
    - `calendar` ist keine gültige Kalenderkennung.

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

### Unangemessene Verwendung

Sie sollten die Parameter `calendar` und `referenceYear` vermeiden, es sei denn, Sie wissen, dass das `referenceYear` das kanonische Referenzjahr ist, das von `Temporal.PlainMonthDay.from()` für denselben Monatstag ausgewählt werden würde.

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
