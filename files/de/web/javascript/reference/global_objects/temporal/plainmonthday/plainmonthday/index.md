---
title: Temporal.PlainMonthDay()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/PlainMonthDay
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Der **`Temporal.PlainMonthDay()`** Konstruktor erstellt {{jsxref("Temporal.PlainMonthDay")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Angabe der zugrunde liegenden Daten zu erstellen. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainMonthDay`-Objekte normalerweise mit der {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}-statischen Methode konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainMonthDay(month, day)
new Temporal.PlainMonthDay(month, day, calendar)
new Temporal.PlainMonthDay(month, day, calendar, referenceYear)
```

> **Hinweis:** `Temporal.PlainMonthDay()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

> [!WARNING]
> Vermeiden Sie die Verwendung der `calendar`- und `referenceYear`-Parameter, da {{jsxref("Temporal/PlainMonthDay/equals", "equals()")}} die Referenzjahr für die Gleichheit berücksichtigt, was dazu führen kann, dass zwei äquivalente Monat-Tage als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenzjahre haben. Um ein `Temporal.PlainMonthDay`-Objekt mit einem nicht ISO-Kalender zu erstellen, verwenden Sie die {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}-statische Methode.

### Parameter

- `month`
  - : Eine Zahl, auf einen ganzzahligen Monat im ISO-Kalendersystem gekürzt, die den Monat darstellt.
- `day`
  - : Eine Zahl, auf einen ganzzahligen Monat im ISO-Kalendersystem gekürzt, die den Tag des Monats darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet werden soll. Beachten Sie, dass unabhängig vom `calendar` das `referenceYear`, `month` und `day` im ISO 8601-Kalendersystem sein müssen. Standardmäßig `"iso8601"`.
- `referenceYear` {{optional_inline}}
  - : Eine Zahl, auf eine ganzzahlige gekürzt, die das Jahr im ISO-Kalendersystem darstellt. Standardmäßig `1972`. Derselbe ISO-Monat-Tag kann in verschiedenen Jahren in nicht-ISO-Kalendern unterschiedliche Daten repräsentieren. So könnten die Tage 2021-07-01 und 1972-07-01 in einem nicht-gregorianischen Kalender auf unterschiedliche Monat-Tage fallen, und nur "07-01" anzugeben reicht nicht aus, um den Monat-Tag im Zielkalender eindeutig zu bestimmen. Daher möchten Sie in der Regel ein `referenceYear` angeben, wenn Sie einen nicht-ISO-Kalender verwenden.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, das den Monat-Tag des durch `referenceYear`, `month`, `day` (im ISO-Kalender) angegebenen Datums darstellt, interpretiert im Kalendersystem, das durch `calendar` spezifiziert ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `referenceYear`, `month` oder `day` ist keine endliche Zahl oder stellt kein gültiges Datum im ISO-Kalendersystem dar.
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

### Unrichtige Verwendung

Sie sollten die `calendar`- und `referenceYear`-Parameter vermeiden, es sei denn, Sie wissen, dass das `referenceYear` das kanonische Referenzjahr ist, das von `Temporal.PlainMonthDay.from()` für denselben Monat-Tag ausgewählt würde.

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
