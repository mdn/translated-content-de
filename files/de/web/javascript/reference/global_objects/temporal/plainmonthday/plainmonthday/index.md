---
title: Temporal.PlainMonthDay()-Konstruktor
short-title: Temporal.PlainMonthDay()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/PlainMonthDay
l10n:
  sourceCommit: c44f591049bc129b356acb0a9ce281974c035113
---

Der Konstruktor **`Temporal.PlainMonthDay()`** erstellt {{jsxref("Temporal.PlainMonthDay")}}-Objekte.

Mit diesem Konstruktor können Sie Instanzen erstellen, indem Sie die zugrunde liegenden Daten direkt angeben. Wie bei allen anderen `Temporal`-Klassen sollten Sie `Temporal.PlainMonthDay`-Objekte in der Regel mit der statischen Methode {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} erstellen, die verschiedene Eingabetypen verarbeiten kann.

## Syntax

```js-nolint
new Temporal.PlainMonthDay(month, day)
new Temporal.PlainMonthDay(month, day, calendar)
new Temporal.PlainMonthDay(month, day, calendar, referenceYear)
```

> [!NOTE]
> `Temporal.PlainMonthDay()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

> [!WARNING]
> Vermeiden Sie die Verwendung der Parameter `calendar` und `referenceYear`, da {{jsxref("Temporal/PlainMonthDay/equals", "equals()")}} das Referenzjahr beim Vergleich berücksichtigt. Dadurch gelten zwei gleichwertige Monats-Tag-Kombinationen als unterschiedlich, wenn sie verschiedene Referenzjahre haben. Um ein `Temporal.PlainMonthDay`-Objekt mit einem Nicht-ISO-Kalender zu erstellen, verwenden Sie die statische Methode {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}.

### Parameter

- `month`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und den Monat im ISO-Kalendersystem angibt.
- `day`
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und den Tag des Monats im ISO-Kalendersystem angibt.
- `calendar` {{optional_inline}}
  - : Ein String, der den zu verwendenden [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) angibt. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert ist `"iso8601"`. Beachten Sie, dass `referenceYear`, `month` und `day` unabhängig von `calendar` im ISO-8601-Kalendersystem angegeben werden müssen.
- `referenceYear` {{optional_inline}}
  - : Eine Zahl, die auf eine Ganzzahl gekürzt wird und das Jahr im ISO-Kalendersystem angibt. Der Standardwert ist `1972`. Bei Nicht-ISO-Kalendern kann dieselbe ISO-Monats-Tag-Kombination in verschiedenen Jahren unterschiedlichen Kalenderdaten entsprechen. Beispielsweise können die Tage 2021-07-01 und 1972-07-01 in einem nichtgregorianischen Kalender auf unterschiedliche Monats-Tag-Kombinationen fallen. Die Angabe von „07-01“ allein reicht daher nicht aus, um eine Monats-Tag-Kombination im Zielkalender eindeutig zu bestimmen. Deshalb sollten Sie bei Verwendung eines Nicht-ISO-Kalenders praktisch immer ein `referenceYear` angeben.

### Rückgabewert

Ein neues `Temporal.PlainMonthDay`-Objekt, das die Monats-Tag-Kombination des durch `referenceYear`, `month` und `day` angegebenen Datums (im ISO-Kalender) repräsentiert, interpretiert im durch `calendar` angegebenen Kalendersystem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `calendar` weder ein String noch `undefined` ist.
- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `referenceYear`, `month` oder `day` ist keine endliche Zahl.
    - Die Kombination aus `referenceYear`, `month` und `day` stellt kein gültiges Datum im ISO-Kalendersystem dar oder liegt außerhalb des [darstellbaren Bereichs](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates). Dieser reicht von der Unix-Epoche aus gerechnet ±(10<sup>8</sup> + 1) Tage oder etwa ±273.972,6 Jahre.
    - `calendar` ist keine gültige Kalenderkennung.

## Beispiele

### Temporal.PlainMonthDay() verwenden

```js
const md = new Temporal.PlainMonthDay(7, 1);
console.log(md.toString()); // 07-01

const md2 = new Temporal.PlainMonthDay(7, 1, "chinese");
console.log(md2.toString()); // 1972-07-01[u-ca=chinese]

const md3 = new Temporal.PlainMonthDay(7, 1, "chinese", 2021);
console.log(md3.toString()); // 2021-07-01[u-ca=chinese]
```

### Unsachgemäße Verwendung

Sie sollten die Parameter `calendar` und `referenceYear` nur verwenden, wenn Sie wissen, dass `referenceYear` das kanonische Referenzjahr ist, das `Temporal.PlainMonthDay.from()` für dieselbe Monats-Tag-Kombination auswählen würde.

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
