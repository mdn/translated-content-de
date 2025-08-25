---
title: Intl.DurationFormat() Konstruktor
short-title: Intl.DurationFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
l10n:
  sourceCommit: 96336268293d3958a19fa7552d84ec1af96dd59e
---

Der **`Intl.DurationFormat()`** Konstruktor erstellt {{jsxref("Intl.DurationFormat")}} Objekte.

## Syntax

```js-nolint
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

> [!NOTE]
> `Intl.DurationFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichungsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Lokalidentifikation und -aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das zu verwendende Zahlensystem für die Zahlformatierung, wie beispielsweise `"arab"`, `"hans"`, `"mathsans"` und so weiter. Für eine Liste unterstützter Zahlensystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standardwert ist Locale-abhängig. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `nu` gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `style`
      - : Der Stil der formatierten Dauer. Dieser Wert wird als Standardwert für alle anderen Einheit-Optionen verwendet und entspricht auch der `style`-Option von {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}, wenn die Liste von Dauer-Einheiten zusammengefügt wird. Mögliche Werte sind:
        - `"long"`
          - : Z.B. 1 hour and 50 minutes
        - `"short"` (Standard)
          - : Z.B. 1 hr, 50 min
        - `"narrow"`
          - : Z.B. 1h 50m
        - `"digital"`
          - : Z.B. 1:50:00
    - `years`
      - : Der Stil der formatierten Jahre. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` sonst.
    - `yearsDisplay`
      - : Ob Jahre immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `years` nicht angegeben ist, und `"always"` sonst.
    - `months`
      - : Der Stil der formatierten Monate. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` sonst.
    - `monthsDisplay`
      - : Ob Monate immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `months` nicht angegeben ist, und `"always"` sonst.
    - `weeks`
      - : Der Stil der formatierten Wochen. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` sonst.
    - `weeksDisplay`
      - : Ob Wochen immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `weeks` nicht angegeben ist, und `"always"` sonst.
    - `days`
      - : Der Stil der formatierten Tage. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` sonst.
    - `daysDisplay`
      - : Ob Tage immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `days` nicht angegeben ist, und `"always"` sonst.
    - `hours`
      - : Der Stil der formatierten Stunden. Mögliche Werte sind `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `hoursDisplay`
      - : Ob Stunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `hours` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` sonst.
    - `minutes`
      - : Der Stil der formatierten Minuten.
        - Wenn `hours` `"numeric"` oder `"2-digit"` ist, sind mögliche Werte `"numeric"` und `"2-digit"`, und `"numeric"` wird zu `"2-digit"` normalisiert; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `minutesDisplay`
      - : Ob Minuten immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `minutes` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` sonst.
    - `seconds`
      - : Der Stil der formatierten Sekunden.
        - Wenn `minutes` `"numeric"` oder `"2-digit"` ist, sind mögliche Werte `"numeric"` und `"2-digit"`, und `"numeric"` wird zu `"2-digit"` normalisiert; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `secondsDisplay`
      - : Ob Sekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `seconds` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` sonst.
    - `milliseconds`
      - : Der Stil der formatierten Millisekunden.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"` und `"numeric"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `millisecondsDisplay`
      - : Ob Millisekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"auto"`; der Standard ist nur `"auto"`, wenn `milliseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `milliseconds` nicht angegeben ist, und `"always"` sonst.
    - `microseconds`
      - : Der Stil der formatierten Mikrosekunden.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"` und `"numeric"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `microsecondsDisplay`
      - : Ob Mikrosekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standard ist nur `"auto"`, wenn `microseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `microseconds` nicht angegeben ist, und `"always"` sonst.
    - `nanoseconds`
      - : Der Stil der formatierten Nanosekunden.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"` und `"numeric"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` sonst.
    - `nanosecondsDisplay`
      - : Ob Nanosekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standard ist nur `"auto"`, wenn `nanoseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `nanoseconds` nicht angegeben ist, und `"always"` sonst.
    - `fractionalDigits`
      - : Anzahl der anzuzeigenden Bruchsekundenstellen im Ausgabeformat. Mögliche Werte sind von `0` bis `9`; der Standard ist `undefined` (so viele Bruchteile wie nötig anzeigen).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beschreibung

Für jedes Zeitsegment wird intern ein {{jsxref("Intl.NumberFormat")}} Objekt konstruiert. Es verwendet die folgenden Optionen (siehe {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}} für Details):

- `numberingSystem`: der Wert von `options.numberingSystem`

Wenn `milliseconds`, `microseconds` oder `nanoseconds` den `"numeric"` Stil verwenden, werden auch die folgenden Optionen verwendet:

- `minimumFractionDigits`: `0`, wenn `options.fractionalDigits` `undefined` ist, `options.fractionalDigits` sonst
- `maximumFractionDigits`: `9`, wenn `options.fractionalDigits` `undefined` ist, `options.fractionalDigits` sonst
- `roundingMode`: `"trunc"`

Wenn das Zeitsegment den `"2-digit"` Stil verwendet, werden auch die folgenden Optionen verwendet:

- `minimumIntegerDigits`: `2`

Wenn das Zeitsegment den `"long"`, `"short"` oder `"narrow"` Stil verwendet, werden auch die folgenden Optionen verwendet:

- `style`: `"unit"`, wenn `"long"`, `"short"` oder `"narrow"` angegeben ist, `undefined` sonst
- `unit`: die derzeit formattierte Einheit (`"years"`, `"days"`, `"nanoseconds"`, etc.)
- `unitDisplay`: der Wert des Zeitsegmentstils (`"long"`, `"short"` oder `"narrow"`)

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
