---
title: Temporal.PlainYearMonth()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/PlainYearMonth
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Der **`Temporal.PlainYearMonth()`** Konstruktor erstellt {{jsxref("Temporal.PlainYearMonth")}} Objekte.

Dieser Konstruktor ermöglicht es Ihnen, Instanzen durch direkte Bereitstellung der zugrunde liegenden Daten zu erstellen. Wie alle anderen `Temporal`-Klassen sollten Sie normalerweise `Temporal.PlainYearMonth`-Objekte mit der {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} statischen Methode erstellen, die eine Vielzahl von Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainYearMonth(year, month)
new Temporal.PlainYearMonth(year, month, calendar)
new Temporal.PlainYearMonth(year, month, calendar, referenceDay)
```

> **Hinweis:** `Temporal.PlainYearMonth()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

> [!WARNING]
> Vermeiden Sie die Verwendung der Parameter `calendar` und `referenceDay`, da {{jsxref("Temporal/PlainYearMonth/equals", "equals()")}} und {{jsxref("Temporal/PlainYearMonth/compare", "compare()")}} den Referenztag für den Vergleich berücksichtigen, was dazu führen kann, dass zwei äquivalente Jahr-Monate als unterschiedlich betrachtet werden, wenn sie unterschiedliche Referenztage haben. Um ein `Temporal.PlainYearMonth`-Objekt mit einem nicht-ISO-Kalender zu erstellen, verwenden Sie die statische Methode {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}.

### Parameter

- `year` {{optional_inline}}
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, und das Jahr im ISO-Kalendersystem darstellt.
- `month`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, und den Monat im ISO-Kalendersystem darstellt.
- `calendar` {{optional_inline}}
  - : Ein String, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) angibt, der verwendet werden soll. Beachten Sie, dass unabhängig vom `calendar` die `year`, `month` und `referenceDay` im ISO 8601-Kalendersystem sein müssen. Standardmäßig `"iso8601"`.
- `referenceDay`
  - : Eine Zahl, die auf eine ganze Zahl gekürzt wird, die den Tag des Monats im ISO-Kalendersystem darstellt. Standardmäßig `1`. Derselbe ISO-Jahr-Monat kann auf verschiedenen Tagen in verschiedenen Monaten mit nicht-ISO-Kalendern dargestellt werden. Zum Beispiel können die Tage 2021-07-01 und 2021-07-31 in einem nicht-gregorianischen Kalender in verschiedenen Monaten liegen, und nur die Angabe von "2021-07" reicht nicht aus, um einen Monat im Zielkalender eindeutig zu bestimmen. Daher möchten Sie praktisch immer einen `referenceDay` angeben, wenn Sie einen nicht-ISO-Kalender verwenden.

### Rückgabewert

Ein neues `Temporal.PlainYearMonth`-Objekt, das den Jahr-Monat des Datums repräsentiert, der durch `year`, `month` und `referenceDay` (im ISO-Kalender) angegeben wird, interpretiert im Kalendersystem, das durch `calendar` spezifiziert wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` kein String oder `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `year`, `month` oder `referenceDay` ist keine endliche Zahl oder stellt kein gültiges Datum im ISO-Kalendersystem dar.
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

### Unangebrachte Nutzung

Sie sollten die Parameter `calendar` und `referenceDay` meiden, es sei denn, Sie wissen, dass der `referenceDay` der kanonische Referenztag ist, der von `Temporal.PlainYearMonth.from()` für denselben Jahr-Monat ausgewählt würde.

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
