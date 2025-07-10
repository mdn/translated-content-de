---
title: Intl.DurationFormat() Konstruktor
short-title: Intl.DurationFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Intl.DurationFormat()`** Konstruktor erstellt {{jsxref("Intl.DurationFormat")}} Objekte.

## Syntax

```js-nolint
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

> [!NOTE]
> `Intl.DurationFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprach-Tag oder einer {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifier. Die Standard-Locale des Laufzeitsystems wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifier unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften, in der Reihenfolge ihrer Abrufung (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Locale Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifikation und -Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das Zahlensystem, das für die Zahlformatierung verwendet wird, wie `"arab"`, `"hans"`, `"mathsans"`, usw. Eine Liste unterstützter Zahlensystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options`-Eigenschaft Vorrang.
    - `style`
      - : Der Stil der formatierten Dauer. Dieser Wert wird als Standard für alle anderen Einheitsoptionen verwendet und entspricht auch der `style`-Option von {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}} beim Zusammenfügen der Liste von Dauereinheiten. Mögliche Werte sind:
        - `"long"`
          - : Z.B. 1 Stunde und 50 Minuten
        - `"short"` (Standard)
          - : Z.B. 1 Std, 50 Min
        - `"narrow"`
          - : Z.B. 1h 50m
        - `"digital"`
          - : Z.B. 1:50:00
    - `years`
      - : Der Stil der formatierten Jahre. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` sonst.
    - `yearsDisplay`
      - : Gibt an, ob Jahre immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `years` nicht angegeben ist, und `"always"` sonst.
    - `months`
      - : Der Stil der formatierten Monate. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` sonst.
    - `monthsDisplay`
      - : Gibt an, ob Monate immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"` wenn `months` nicht angegeben ist, und `"always"` sonst.
    - `weeks`
      - : Der Stil der formatierten Wochen. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` sonst.
    - `weeksDisplay`
      - : Gibt an, ob Wochen immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"` wenn `weeks` nicht angegeben ist, und `"always"` sonst.
    - `days`
      - : Der Stil der formatierten Tage. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` sonst.
    - `daysDisplay`
      - : Gibt an, ob Tage immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"` wenn `days` nicht angegeben ist, und `"always"` sonst.
    - `hours`
      - : Der Stil der formatierten Stunden. Mögliche Werte sind `"long"`, `"short"`, `"narrow"`, `"numeric"`, und `"2-digit"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `hoursDisplay`
      - : Gibt an, ob Stunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `hours` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` sonst.
    - `minutes`
      - : Der Stil der formatierten Minuten.
        - Wenn `hours` `"numeric"` oder `"2-digit"` ist, sind mögliche Werte `"numeric"` und `"2-digit"`, und `"numeric"` wird zu `"2-digit"` normalisiert; der Standard ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, `"numeric"`, und `"2-digit"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `minutesDisplay`
      - : Gibt an, ob Minuten immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `minutes` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` sonst.
    - `seconds`
      - : Der Stil der formatierten Sekunden.
        - Wenn `minutes` `"numeric"` oder `"2-digit"` ist, sind mögliche Werte `"numeric"` und `"2-digit"`, und `"numeric"` wird zu `"2-digit"` normalisiert; der Standard ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, `"numeric"`, und `"2-digit"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `secondsDisplay`
      - : Gibt an, ob Sekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `seconds` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` sonst.
    - `milliseconds`
      - : Der Stil der formatierten Millisekunden.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"numeric"`; der Standard ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, und `"numeric"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `millisecondsDisplay`
      - : Gibt an, ob Millisekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"auto"`; der Standard ist nur `"auto"`, wenn `milliseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `milliseconds` nicht angegeben ist, und `"always"` sonst.
    - `microseconds`
      - : Der Stil der formatierten Mikrosekunden.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standard ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, und `"numeric"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `microsecondsDisplay`
      - : Gibt an, ob Mikrosekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standard ist nur `"auto"`, wenn `microseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `microseconds` nicht angegeben ist, und `"always"` sonst.
    - `nanoseconds`
      - : Der Stil der formatierten Nanosekunden.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standard ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, und `"numeric"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `nanosecondsDisplay`
      - : Gibt an, ob Nanosekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standard ist nur `"auto"`, wenn `nanoseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `nanoseconds` nicht angegeben ist, und `"always"` sonst.
    - `fractionalDigits`
      - : Anzahl der anzuzeigenden Bruchteile von Sekunden in der Ausgabe. Mögliche Werte reichen von `0` bis `9`; der Standard ist `undefined` (es werden so viele Nachkommastellen einbezogen, wie notwendig).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beschreibung

Für jedes Zeitsegment wird unter der Haube ein {{jsxref("Intl.NumberFormat")}} Objekt konstruiert. Es verwendet die folgenden Optionen (siehe {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}} für Details):

- `numberingSystem`: der Wert von `options.numberingSystem`

Wenn `milliseconds`, `microseconds`, oder `nanoseconds` den `"numeric"` Stil verwenden, werden die folgenden Optionen ebenfalls verwendet:

- `minimumFractionDigits`: `0`, wenn `options.fractionalDigits` `undefined` ist, ansonsten `options.fractionalDigits`
- `maximumFractionDigits`: `9`, wenn `options.fractionalDigits` `undefined` ist, ansonsten `options.fractionalDigits`
- `roundingMode`: `"trunc"`

Wenn das Zeitsegment den `"2-digit"` Stil verwendet, werden die folgenden Optionen ebenfalls verwendet:

- `minimumIntegerDigits`: `2`

Wenn das Zeitsegment den `"long"`-, `"short"`- oder `"narrow"`-Stil verwendet, werden die folgenden Optionen ebenfalls verwendet:

- `style`: `"unit"`, wenn `"long"`, `"short"`, oder `"narrow"` angegeben ist, sonst `undefined`
- `unit`: die aktuell formatierte Einheit (`"years"`, `"days"`, `"nanoseconds"`, etc.)
- `unitDisplay`: der Wert des Zeitsegment-Stils (`"long"`, `"short"`, oder `"narrow"`)

## Beispiele

### Verwendung des Intl.DurationFormat() Konstruktors

```js
const duration = {
  hours: 2,
  minutes: 20,
  seconds: 35,
};

console.log(new Intl.DurationFormat("pt", { style: "long" }).format(duration));
// "2 horas, 20 minutos e 35 segundos"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
