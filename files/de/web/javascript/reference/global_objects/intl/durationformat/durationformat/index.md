---
title: Intl.DurationFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
l10n:
  sourceCommit: 1574e4728b2d31b8898f84843a9832253790c516
---

{{JSRef}}

Der **`Intl.DurationFormat()`** Konstruktor erstellt {{jsxref("Intl.DurationFormat")}} Objekte.

## Syntax

```js-nolint
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

> **Note:** `Intl.DurationFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Wenn versucht wird, es ohne `new` aufzurufen, wird ein {{jsxref("TypeError")}} ausgelöst.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale des Laufzeitsystems wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` gesetzt werden (wie unten aufgeführt). Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `localeMatcher`
      - : Der Locale-Abgleichsalgorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Lokalisierung und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das Zahlensystem, das für die Zahlenformatierung verwendet werden soll, z.B. `"arab"`, `"hans"`, `"mathsans"`, usw. Für eine Liste der unterstützten Typen von Zahlensystemen siehe [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `style`
      - : Der Stil der formatierten Dauer. Dieser Wert wird als Standard für alle anderen Einheitsoptionen verwendet und entspricht auch der `style` Option von {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}, wenn die Liste der Dauereinheiten zusammengefügt wird. Mögliche Werte sind:
        - `"long"`
          - : Z.B. 1 Stunde und 50 Minuten
        - `"short"` (Standard)
          - : Z.B. 1 Std, 50 Min
        - `"narrow"`
          - : Z.B. 1h 50m
        - `"digital"`
          - : Z.B. 1:50:00
    - `years`
      - : Der Stil der formatierten Jahre. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standardwert ist `options.style`, falls es nicht `"digital"` ist, und `"short"` andernfalls.
    - `yearsDisplay`
      - : Ob Jahre immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, falls `years` nicht angegeben ist, und `"always"` andernfalls.
    - `months`
      - : Der Stil der formatierten Monate. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standardwert ist `options.style`, falls es nicht `"digital"` ist, und `"short"` andernfalls.
    - `monthsDisplay`
      - : Ob Monate immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, falls `months` nicht angegeben ist, und `"always"` andernfalls.
    - `weeks`
      - : Der Stil der formatierten Wochen. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standardwert ist `options.style`, falls es nicht `"digital"` ist, und `"short"` andernfalls.
    - `weeksDisplay`
      - : Ob Wochen immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, falls `weeks` nicht angegeben ist, und `"always"` andernfalls.
    - `days`
      - : Der Stil der formatierten Tage. Mögliche Werte sind `"long"`, `"short"`, und `"narrow"`; der Standardwert ist `options.style`, falls es nicht `"digital"` ist, und `"short"` andernfalls.
    - `daysDisplay`
      - : Ob Tage immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, falls `days` nicht angegeben ist, und `"always"` andernfalls.
    - `hours`
      - : Der Stil der formatierten Stunden. Mögliche Werte sind `"long"`, `"short"`, `"narrow"`, `"numeric"`, und `"2-digit"`; der Standardwert ist `options.style`, falls es nicht `"digital"` ist, und `"numeric"` andernfalls.
    - `hoursDisplay`
      - : Ob Stunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, falls `hours` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` andernfalls.
    - `minutes`
      - : Der Stil der formatierten Minuten.
        - Wenn `hours` `"numeric"` oder `"2-digit"` ist, sind mögliche Werte `"numeric"` und `"2-digit"`, und `"numeric"` wird zu `"2-digit"` normalisiert; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, `"numeric"`, und `"2-digit"`; der Standardwert ist `options.style`, falls es nicht `"digital"` ist, und `"numeric"` andernfalls.
    - `minutesDisplay`
      - : Ob Minuten immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, falls `minutes` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` andernfalls.
    - `seconds`
      - : Der Stil der formatierten Sekunden.
        - Wenn `minutes` `"numeric"` oder `"2-digit"` ist, sind mögliche Werte `"numeric"` und `"2-digit"`, und `"numeric"` wird zu `"2-digit"` normalisiert; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, `"numeric"`, und `"2-digit"`; der Standardwert ist `options.style`, falls es nicht `"digital"` ist, und `"numeric"` andernfalls.
    - `secondsDisplay`
      - : Ob Sekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, falls `seconds` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` andernfalls.
    - `milliseconds`
      - : Der Stil der formatierten Millisekunden.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, und `"numeric"`; der Standardwert ist `options.style`, falls es nicht `"digital"` ist, und `"numeric"` andernfalls.
    - `millisecondsDisplay`
      - : Ob Millisekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"auto"`; der Standardwert ist nur `"auto"`, wenn `milliseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standardwert ist `"auto"`, falls `milliseconds` nicht angegeben ist, und `"always"` andernfalls.
    - `microseconds`
      - : Der Stil der formatierten Mikrosekunden.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, und `"numeric"`; der Standardwert ist `options.style`, falls es nicht `"digital"` ist, und `"numeric"` andernfalls.
    - `microsecondsDisplay`
      - : Ob Mikrosekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standardwert ist nur `"auto"`, wenn `microseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standardwert ist `"auto"`, falls `microseconds` nicht angegeben ist, und `"always"` andernfalls.
    - `nanoseconds`
      - : Der Stil der formatierten Nanosekunden.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind mögliche Werte `"long"`, `"short"`, `"narrow"`, und `"numeric"`; der Standardwert ist `options.style`, falls es nicht `"digital"` ist, und `"numeric"` andernfalls.
    - `nanosecondsDisplay`
      - : Ob Nanosekunden immer angezeigt werden sollen oder nur, wenn sie ungleich null sind.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standardwert ist nur `"auto"`, wenn `nanoseconds` nicht angegeben ist.
        - Andernfalls sind mögliche Werte `"always"` und `"auto"`; der Standardwert ist `"auto"`, falls `nanoseconds` nicht angegeben ist, und `"always"` andernfalls.
    - `fractionalDigits`
      - : Anzahl der Nachkommastellen, die in der Ausgabe angezeigt werden. Mögliche Werte reichen von `0` bis `9`; der Standardwert ist `undefined` (so viele Bruchteile anzeigen wie nötig).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beschreibung

Für jedes Zeitsegment wird im Hintergrund ein {{jsxref("Intl.NumberFormat")}} Objekt konstruiert. Es verwendet die folgenden Optionen (siehe {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}} für Details):

- `numberingSystem`: der Wert von `options.numberingSystem`

Wenn `milliseconds`, `microseconds`, oder `nanoseconds` den `"numeric"` Stil verwenden, werden die folgenden Optionen ebenfalls verwendet:

- `minimumFractionDigits`: `0` wenn `options.fractionalDigits` `undefined` ist, `options.fractionalDigits` andernfalls
- `maximumFractionDigits`: `9` wenn `options.fractionalDigits` `undefined` ist, `options.fractionalDigits` andernfalls
- `roundingMode`: `"trunc"`

Wenn das Zeitsegment den `"2-digit"` Stil verwendet, werden die folgenden Optionen ebenfalls verwendet:

- `minimumIntegerDigits`: `2`

Wenn das Zeitsegment den `"long"`, `"short"`, oder `"narrow"` Stil verwendet, werden die folgenden Optionen ebenfalls verwendet:

- `style`: `"unit"` wenn `"long"`, `"short"`, oder `"narrow"` angegeben ist, `undefined` andernfalls
- `unit`: die aktuell formatierte Einheit (`"years"`, `"days"`, `"nanoseconds"`, etc.)
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
