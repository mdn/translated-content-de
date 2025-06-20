---
title: Intl.DurationFormat() Konstruktor
short-title: Intl.DurationFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Der **`Intl.DurationFormat()`** Konstruktor erstellt {{jsxref("Intl.DurationFormat")}} Objekte.

## Syntax

```js-nolint
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

> **Hinweis:** `Intl.DurationFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Identifikatoren unterstützt wird. Weitere Informationen zur allgemeinen Form und Interpretation des `locales` Arguments finden Sie in [der Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist zulässig:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichungsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Identifikation und Verhandlung von Locales](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das zu verwendende Nummernsystem für die Nummernformatierung, wie z.B. `"arab"`, `"hans"`, `"mathsans"`, usw. Eine Liste unterstützter Nummernsystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch durch den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide vorhanden sind, hat diese `options`-Eigenschaft Vorrang.
    - `style`
      - : Der Stil der formatierten Dauer. Dieser Wert wird als Standard für alle anderen Einheitoptionen verwendet und entspricht auch der `style`-Option von {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}} bei der Verkettung der Liste der Dauereinheiten. Mögliche Werte sind:
        - `"long"`
          - : Z.B., 1 hour and 50 minutes
        - `"short"` (Standard)
          - : Z.B., 1 hr, 50 min
        - `"narrow"`
          - : Z.B., 1h 50m
        - `"digital"`
          - : Z.B., 1:50:00
    - `years`
      - : Der Stil der formatierten Jahre. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` ansonsten.
    - `yearsDisplay`
      - : Ob die Jahre immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `years` nicht angegeben ist, und `"always"` ansonsten.
    - `months`
      - : Der Stil der formatierten Monate. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` ansonsten.
    - `monthsDisplay`
      - : Ob die Monate immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `months` nicht angegeben ist, und `"always"` ansonsten.
    - `weeks`
      - : Der Stil der formatierten Wochen. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` ansonsten.
    - `weeksDisplay`
      - : Ob die Wochen immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `weeks` nicht angegeben ist, und `"always"` ansonsten.
    - `days`
      - : Der Stil der formatierten Tage. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"short"` ansonsten.
    - `daysDisplay`
      - : Ob die Tage immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `days` nicht angegeben ist, und `"always"` ansonsten.
    - `hours`
      - : Der Stil der formatierten Stunden. Mögliche Werte sind `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` ansonsten.
    - `hoursDisplay`
      - : Ob die Stunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `hours` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` ansonsten.
    - `minutes`
      - : Der Stil der formatierten Minuten.
        - Wenn `hours` `"numeric"` oder `"2-digit"` ist, sind mögliche Werte `"numeric"` und `"2-digit"`, und `"numeric"` wird zu `"2-digit"` normalisiert; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` ansonsten.
    - `minutesDisplay`
      - : Ob die Minuten immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `minutes` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` ansonsten.
    - `seconds`
      - : Der Stil der formatierten Sekunden.
        - Wenn `minutes` `"numeric"` oder `"2-digit"` ist, sind mögliche Werte `"numeric"` und `"2-digit"`, und `"numeric"` wird zu `"2-digit"` normalisiert; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` ansonsten.
    - `secondsDisplay`
      - : Ob die Sekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `seconds` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` ansonsten.
    - `milliseconds`
      - : Der Stil der formatierten Millisekunden.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"` und `"numeric"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` ansonsten.
    - `millisecondsDisplay`
      - : Ob die Millisekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"auto"`; der Standardwert ist nur `"auto"`, wenn `milliseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `milliseconds` nicht angegeben ist, und `"always"` ansonsten.
    - `microseconds`
      - : Der Stil der formatierten Mikrosekunden.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"` und `"numeric"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` ansonsten.
    - `microsecondsDisplay`
      - : Ob die Mikrosekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standardwert ist nur `"auto"`, wenn `microseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `microseconds` nicht angegeben ist, und `"always"` ansonsten.
    - `nanoseconds`
      - : Der Stil der formatierten Nanosekunden.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"` und `"numeric"`; der Standardwert ist `options.style`, wenn es nicht `"digital"` ist, und `"numeric"` ansonsten.
    - `nanosecondsDisplay`
      - : Ob die Nanosekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standardwert ist nur `"auto"`, wenn `nanoseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `nanoseconds` nicht angegeben ist, und `"always"` ansonsten.
    - `fractionalDigits`
      - : Anzahl der zu zeigenden Bruchteilen von Sekundenziffern in der Ausgabe. Mögliche Werte sind von `0` bis `9`; der Standardwert ist `undefined` (so viele Bruchteilstellen einbeziehen, wie notwendig).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beschreibung

Für jedes Zeitsegment wird im Hintergrund ein {{jsxref("Intl.NumberFormat")}} Objekt konstruiert. Es verwendet die folgenden Optionen (siehe {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}} für Details):

- `numberingSystem`: der Wert von `options.numberingSystem`

Wenn `milliseconds`, `microseconds` oder `nanoseconds` den `"numeric"` Stil verwenden, werden auch die folgenden Optionen verwendet:

- `minimumFractionDigits`: `0`, wenn `options.fractionalDigits` `undefined` ist, sonst `options.fractionalDigits`
- `maximumFractionDigits`: `9`, wenn `options.fractionalDigits` `undefined` ist, sonst `options.fractionalDigits`
- `roundingMode`: `"trunc"`

Wenn das Zeitsegment den `"2-digit"` Stil verwendet, werden auch die folgenden Optionen verwendet:

- `minimumIntegerDigits`: `2`

Wenn das Zeitsegment den `"long"`, `"short"`, oder `"narrow"` Stil verwendet, werden auch die folgenden Optionen verwendet:

- `style`: `"unit"`, wenn `"long"`, `"short"`, oder `"narrow"` angegeben ist, sonst `undefined`
- `unit`: die aktuell formatierte Einheit (`"years"`, `"days"`, `"nanoseconds"`, usw.)
- `unitDisplay`: der Wert des Zeitsegmentstils (`"long"`, `"short"`, oder `"narrow"`)

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
