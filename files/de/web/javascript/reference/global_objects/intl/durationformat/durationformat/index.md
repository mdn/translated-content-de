---
title: Intl.DurationFormat()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

Der **`Intl.DurationFormat()`**-Konstruktor erstellt {{jsxref("Intl.DurationFormat")}}-Objekte.

## Syntax

```js-nolint
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

> **Note:** `Intl.DurationFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` zu verwenden, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Sprachkennzeichnungen. Die Standardlokalisierung der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Bezeichner unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist zulässig:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) festgelegt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `localeMatcher`
      - : Der zu verwendende Suchalgorithmus für die Locale. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Weitere Informationen hierzu finden Sie unter [Locale-Erkennung und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das Nummerierungssystem, das für die Zahlformatierung verwendet werden soll, z. B. `"arab"`, `"hans"`, `"mathsans"`, usw. Eine Liste unterstützter Arten von Nummerierungssystemen finden Sie unter [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den Unicode-Erweiterungsschlüssel `nu` festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `style`
      - : Der Stil der formatierten Dauer. Mögliche Werte sind:
        - `"long"`
          - : Z. B., 1 hour and 50 minutes
        - `"short"` (Standard)
          - : Z. B., 1 hr, 50 min
        - `"narrow"`
          - : Z. B., 1h 50m
        - `"digital"`
          - : Z. B., 1:50:00
    - `years`
      - : Der Stil der formatierten Jahre. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, andernfalls `"short"`.
    - `yearsDisplay`
      - : Ob Jahre immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `years` nicht angegeben ist, andernfalls `"always"`.
    - `months`
      - : Der Stil der formatierten Monate. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, andernfalls `"short"`.
    - `monthsDisplay`
      - : Ob Monate immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `months` nicht angegeben ist, andernfalls `"always"`.
    - `weeks`
      - : Der Stil der formatierten Wochen. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, andernfalls `"short"`.
    - `weeksDisplay`
      - : Ob Wochen immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `weeks` nicht angegeben ist, andernfalls `"always"`.
    - `days`
      - : Der Stil der formatierten Tage. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, andernfalls `"short"`.
    - `daysDisplay`
      - : Ob Tage immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `days` nicht angegeben ist, andernfalls `"always"`.
    - `hours`
      - : Der Stil der formatierten Stunden. Mögliche Werte sind `"long"`, `"short"`, `"narrow"`, `"numeric"`, und `"2-digit"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, andernfalls `"numeric"`.
    - `hoursDisplay`
      - : Ob Stunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `hours` nicht angegeben ist und `options.style` nicht `"digital"` ist, andernfalls `"always"`.
    - `minutes`
      - : Der Stil der formatierten Minuten.
        - Wenn `hours` `"numeric"` oder `"2-digit"` ist, sind mögliche Werte `"numeric"` und `"2-digit"`, und `"numeric"` wird zu `"2-digit"` normalisiert; der Standard ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, `"numeric"`, und `"2-digit"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, andernfalls `"numeric"`.
    - `minutesDisplay`
      - : Ob Minuten immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `minutes` nicht angegeben ist und `options.style` nicht `"digital"` ist, andernfalls `"always"`.
    - `seconds`
      - : Der Stil der formatierten Sekunden.
        - Wenn `minutes` `"numeric"` oder `"2-digit"` ist, sind mögliche Werte `"numeric"` und `"2-digit"`, und `"numeric"` wird zu `"2-digit"` normalisiert; der Standard ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, `"numeric"`, und `"2-digit"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, andernfalls `"numeric"`.
    - `secondsDisplay`
      - : Ob Sekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `seconds` nicht angegeben ist und `options.style` nicht `"digital"` ist, andernfalls `"always"`.
    - `milliseconds`
      - : Der Stil der formatierten Millisekunden.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"numeric"`; der Standard ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, und `"numeric"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, andernfalls `"numeric"`.
    - `millisecondsDisplay`
      - : Ob Millisekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"auto"`; der Standard ist nur `"auto"`, wenn `milliseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `milliseconds` nicht angegeben ist, andernfalls `"always"`.
    - `microseconds`
      - : Der Stil der formatierten Mikrosekunden.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standard ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, und `"numeric"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, andernfalls `"numeric"`.
    - `microsecondsDisplay`
      - : Ob Mikrosekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standard ist nur `"auto"`, wenn `microseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `microseconds` nicht angegeben ist, andernfalls `"always"`.
    - `nanoseconds`
      - : Der Stil der formatierten Nanosekunden.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standard ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, und `"numeric"`; der Standard ist `options.style`, wenn es nicht `"digital"` ist, andernfalls `"numeric"`.
    - `nanosecondsDisplay`
      - : Ob Nanosekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standard ist nur `"auto"`, wenn `nanoseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standard ist `"auto"`, wenn `nanoseconds` nicht angegeben ist, andernfalls `"always"`.
    - `fractionalDigits`
      - : Anzahl der anzuzeigenden Bruchteilstellen der Sekundenziffern im Ergebnis. Mögliche Werte reichen von `0` bis `9`; der Standard ist `undefined` (es werden so viele Bruchteile angezeigt, wie nötig sind).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beschreibung

Für jedes Zeitsegment wird im Hintergrund ein {{jsxref("Intl.NumberFormat")}}-Objekt erstellt. Es verwendet die folgenden Optionen (siehe {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}} für Details):

- `numberingSystem`: der Wert von `options.numberingSystem`

Wenn `milliseconds`, `microseconds` oder `nanoseconds` den Stil `"numeric"` verwenden, werden auch die folgenden Optionen verwendet:

- `minimumFractionDigits`: `0` wenn `options.fractionalDigits` `undefined` ist, andernfalls `options.fractionalDigits`
- `maximumFractionDigits`: `9` wenn `options.fractionalDigits` `undefined` ist, andernfalls `options.fractionalDigits`
- `roundingMode`: `"trunc"`

Wenn das Zeitsegment den Stil `"2-digit"` verwendet, werden auch die folgenden Optionen verwendet:

- `minimumIntegerDigits`: `2`

Wenn das Zeitsegment den Stil `"long"`, `"short"`, oder `"narrow"` verwendet, werden auch die folgenden Optionen verwendet:

- `style`: `"unit"` wenn `"long"`, `"short"`, oder `"narrow"` angegeben ist, andernfalls `undefined`
- `unit`: die aktuell formatierte Einheit (`"years"`, `"days"`, `"nanoseconds"`, etc.)
- `unitDisplay`: der Wert des Zeitsegmentstils (`"long"`, `"short"`, oder `"narrow"`)

## Beispiele

### Verwendung des Intl.DurationFormat()-Konstruktors

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
