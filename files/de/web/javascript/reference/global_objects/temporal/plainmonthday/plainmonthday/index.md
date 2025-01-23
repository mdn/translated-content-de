---
title: Temporal.PlainMonthDay()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/PlainMonthDay
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainMonthDay()`** Konstruktor erstellt {{jsxref("Temporal.PlainMonthDay")}} Objekte.

Dieser Konstruktor erlaubt es Ihnen, Instanzen direkt durch Bereitstellung der zugrundeliegenden Daten zu erstellen. Wie bei allen anderen `Temporal` Klassen sollten Sie normalerweise `Temporal.PlainMonthDay` Objekte mit der {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} statischen Methode konstruieren, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainMonthDay(month, day)
new Temporal.PlainMonthDay(month, day, calendar)
new Temporal.PlainMonthDay(month, day, calendar, referenceYear)
```

> **Hinweis:** `Temporal.PlainMonthDay()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

> [!WARNING]
> Vermeiden Sie die Verwendung der Parameter `calendar` und `referenceYear`, da {{jsxref("Temporal/PlainMonthDay/equals", "equals()")}} das Referenzjahr zur Gleichheitsprüfung heranzieht, was dazu führen kann, dass zwei äquivalente Monatstage als unterschiedlich angesehen werden, wenn sie unterschiedliche Referenzjahre haben. Um ein `Temporal.PlainMonthDay` Objekt mit einem nicht-ISO Kalender zu erstellen, verwenden Sie die {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} statische Methode.

### Parameter

- `month`
  - : Eine Zahl, auf eine ganzzahlige Größe gekürzt, die den Monat im ISO-Kalendersystem darstellt.
- `day`
  - : Eine Zahl, auf eine ganzzahlige Größe gekürzt, die den Tag des Monats im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Eine Zeichenkette, die den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der verwendet werden soll. Beachten Sie, dass unabhängig vom `calendar` die `referenceYear`, `month` und `day` im ISO 8601-Kalendersystem sein müssen. Standardmäßig `"iso8601"`.
- `referenceYear` {{optional_inline}}
  - : Eine Zahl, auf eine ganzzahlige Größe gekürzt, die das Jahr im ISO-Kalendersystem darstellt. Standardmäßig `1972`. Derselbe ISO-Monatstag kann in verschiedenen Jahren mit nicht-ISO Kalendern unterschiedliche Daten darstellen. Beispielsweise können die Tage 2021-07-01 und 1972-07-01 in einem nicht-gregorianischen Kalender auf unterschiedliche Monatstage fallen, und lediglich "07-01" anzugeben, reicht nicht aus, um einen Monatstag im Zielkalender eindeutig zu bestimmen. Sie möchten daher praktisch immer eine `referenceYear` angeben, wenn Sie einen nicht-ISO Kalender verwenden.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay` Objekt, das den Monatstag des durch `referenceYear`, `month`, `day` (im ISO-Kalender) festgelegten Datums repräsentiert, interpretiert im Kalendersystem, das durch `calendar` angegeben ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` keine Zeichenkette oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `referenceYear`, `month` oder `day` ist keine endliche Zahl oder stellt kein gültiges Datum im ISO-Kalendersystem dar.
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

### Ungeeignete Verwendung

Sie sollten die `calendar` und `referenceYear` Parameter vermeiden, es sei denn, Sie wissen, dass das `referenceYear` das kanonische Referenzjahr ist, das durch `Temporal.PlainMonthDay.from()` für denselben Monatstag ausgewählt würde.

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
