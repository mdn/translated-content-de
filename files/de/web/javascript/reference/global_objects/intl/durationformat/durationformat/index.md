---
title: Intl.DurationFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

Der **`Intl.DurationFormat()`** Konstruktor erstellt {{jsxref("Intl.DurationFormat")}} Objekte.

## Syntax

```js-nolint
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

> **Note:** `Intl.DurationFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Sprach-Identifikatoren. Die Standardeinstellung für die Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Sprach-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist zulässig:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) festgelegt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften in der Reihenfolge des Abrufs enthält (alle sind optional):

    - `localeMatcher`
      - : Der zu verwendende Sprach-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Lokalidentifikation und -verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das zu verwendende Nummerierungssystem für die Zahlendarstellung, z. B. `"arab"`, `"hans"`, `"mathsans"` usw. Eine Liste der unterstützten Nummerierungssystemtypen finden Sie unter [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `style`
      - : Der Stil der formatierten Dauer. Mögliche Werte sind:
        - `"long"`
          - : Z.B. 1 Stunde und 50 Minuten
        - `"short"` (Standard)
          - : Z.B. 1 Std, 50 Min
        - `"narrow"`
          - : Z.B. 1h 50m
        - `"digital"`
          - : Z.B. 1:50:00
    - `years`
      - : Der Stil der formatierten Jahre. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn dieser nicht `"digital"` ist, und `"short"` sonst.
    - `yearsDisplay`
      - : Ob Jahre immer angezeigt werden oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `years` nicht angegeben ist, und `"always"` sonst.
    - `months`
      - : Der Stil der formatierten Monate. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn dieser nicht `"digital"` ist, und `"short"` sonst.
    - `monthsDisplay`
      - : Ob Monate immer angezeigt werden oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `months` nicht angegeben ist, und `"always"` sonst.
    - `weeks`
      - : Der Stil der formatierten Wochen. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn dieser nicht `"digital"` ist, und `"short"` sonst.
    - `weeksDisplay`
      - : Ob Wochen immer angezeigt werden oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `weeks` nicht angegeben ist, und `"always"` sonst.
    - `days`
      - : Der Stil der formatierten Tage. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, wenn dieser nicht `"digital"` ist, und `"short"` sonst.
    - `daysDisplay`
      - : Ob Tage immer angezeigt werden oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `days` nicht angegeben ist, und `"always"` sonst.
    - `hours`
      - : Der Stil der formatierten Stunden. Mögliche Werte sind `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"`; der Standardwert ist `options.style`, wenn dieser nicht `"digital"` ist, und `"numeric"` sonst.
    - `hoursDisplay`
      - : Ob Stunden immer angezeigt werden oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `hours` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` sonst.
    - `minutes`
      - : Der Stil der formatierten Minuten.
        - Wenn `hours` `"numeric"` oder `"2-digit"` ist, sind die möglichen Werte `"numeric"` und `"2-digit"` und `"numeric"` wird zu `"2-digit"` normalisiert; der Standardwert ist `"numeric"`.
        - Andernfalls sind die möglichen Werte `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"`; der Standardwert ist `options.style`, wenn dieser nicht `"digital"` ist, und `"numeric"` sonst.
    - `minutesDisplay`
      - : Ob Minuten immer angezeigt werden oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `minutes` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` sonst.
    - `seconds`
      - : Der Stil der formatierten Sekunden.
        - Wenn `minutes` `"numeric"` oder `"2-digit"` ist, sind die möglichen Werte `"numeric"` und `"2-digit"` und `"numeric"` wird zu `"2-digit"` normalisiert; der Standardwert ist `"numeric"`.
        - Andernfalls sind die möglichen Werte `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"`; der Standardwert ist `options.style`, wenn dieser nicht `"digital"` ist, und `"numeric"` sonst.
    - `secondsDisplay`
      - : Ob Sekunden immer angezeigt werden oder nur, wenn sie ungleich null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `seconds` nicht angegeben ist und `options.style` nicht `"digital"` ist, und `"always"` sonst.
    - `milliseconds`
      - : Der Stil der formatierten Millisekunden.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind die möglichen Werte `"long"`, `"short"`, `"narrow"` und `"numeric"`; der Standardwert ist `options.style`, wenn dieser nicht `"digital"` ist, und `"numeric"` sonst.
    - `millisecondsDisplay`
      - : Ob Millisekunden immer angezeigt werden oder nur, wenn sie ungleich null sind.
        - Wenn `seconds` `"numeric"` oder `"2-digit"` ist, ist der einzige mögliche Wert `"auto"`; der Standardwert ist nur `"auto"`, wenn `milliseconds` nicht angegeben ist.
        - Andernfalls sind die möglichen Werte `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `milliseconds` nicht angegeben ist, und `"always"` sonst.
    - `microseconds`
      - : Der Stil der formatierten Mikrosekunden.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind die möglichen Werte `"long"`, `"short"`, `"narrow"` und `"numeric"`; der Standardwert ist `options.style`, wenn dieser nicht `"digital"` ist, und `"numeric"` sonst.
    - `microsecondsDisplay`
      - : Ob Mikrosekunden immer angezeigt werden oder nur, wenn sie ungleich null sind.
        - Wenn `milliseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standardwert ist nur `"auto"`, wenn `microseconds` nicht angegeben ist.
        - Andernfalls sind die möglichen Werte `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `microseconds` nicht angegeben ist, und `"always"` sonst.
    - `nanoseconds`
      - : Der Stil der formatierten Nanosekunden.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"numeric"`; der Standardwert ist `"numeric"`.
        - Andernfalls sind die möglichen Werte `"long"`, `"short"`, `"narrow"` und `"numeric"`; der Standardwert ist `options.style`, wenn dieser nicht `"digital"` ist, und `"numeric"` sonst.
    - `nanosecondsDisplay`
      - : Ob Nanosekunden immer angezeigt werden oder nur, wenn sie ungleich null sind.
        - Wenn `microseconds` `"numeric"` ist, ist der einzige mögliche Wert `"auto"`; der Standardwert ist nur `"auto"`, wenn `nanoseconds` nicht angegeben ist.
        - Andernfalls sind die möglichen Werte `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `nanoseconds` nicht angegeben ist, und `"always"` sonst.
    - `fractionalDigits`
      - : Anzahl der wie viele Bruchteile von Sekunden in der Ausgabe angezeigt werden sollen. Mögliche Werte sind von `0` bis `9`; der Standardwert ist `undefined` (so viele Nachkommazahlen anzeigen, wie nötig).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beschreibung

Für jedes Zeitsegment wird unter der Haube ein {{jsxref("Intl.NumberFormat")}} Objekt erstellt. Es werden die folgenden Optionen verwendet (siehe {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}} für Details):

- `numberingSystem`: der Wert von `options.numberingSystem`

Wenn `milliseconds`, `microseconds` oder `nanoseconds` den Stil `"numeric"` verwenden, werden die folgenden Optionen ebenfalls verwendet:

- `minimumFractionDigits`: `0` wenn `options.fractionalDigits` `undefined` ist, sonst `options.fractionalDigits`
- `maximumFractionDigits`: `9` wenn `options.fractionalDigits` `undefined` ist, sonst `options.fractionalDigits`
- `roundingMode`: `"trunc"`

Wenn das Zeitsegment den Stil `"2-digit"` verwendet, werden die folgenden Optionen ebenfalls verwendet:

- `minimumIntegerDigits`: `2`

Wenn das Zeitsegment den Stil `"long"`, `"short"` oder `"narrow"` verwendet, werden die folgenden Optionen ebenfalls verwendet:

- `style`: `"unit"`, wenn `"long"`, `"short"` oder `"narrow"` angegeben ist, sonst `undefined`
- `unit`: die derzeit formatierte Einheit (`"years"`, `"days"`, `"nanoseconds"` usw.)
- `unitDisplay`: der Wert des Zeitsegmentstils (`"long"`, `"short"` oder `"narrow"`)

## Beispiele

### Verwenden des Intl.DurationFormat() Konstruktors

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
