---
title: Intl.DurationFormat()-Konstruktor
short-title: Intl.DurationFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Der **`Intl.DurationFormat()`**-Konstruktor erstellt {{jsxref("Intl.DurationFormat")}}-Objekte.

## Syntax

```js-nolint
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

> [!NOTE]
> `Intl.DurationFormat()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}, eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Bezeichner. Wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Bezeichner unterstützt wird, wird die Standard-Locale der Laufzeitumgebung verwendet. Informationen zur allgemeinen Form und Interpretation des Arguments `locales` finden Sie in der [Parameterbeschreibung auf der Hauptseite zu `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist zulässig:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch über `options` gesetzt werden (siehe unten). Wenn beide gesetzt sind, hat die Eigenschaft in `options` Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Algorithmus für den Locale-Abgleich. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Locale-Erkennung und -Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : Das für die Zahlenformatierung zu verwendende Zahlensystem, beispielsweise `"arab"`, `"hanidec"` oder `"mathsans"`. Eine Liste der unterstützten Zahlensystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standardwert hängt von der Locale ab. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `nu` gesetzt werden. Wenn beide angegeben sind, hat diese Eigenschaft in `options` Vorrang.
    - `style`
      - : Der Stil der formatierten Dauer. Dieser Wert dient als Standardwert für alle anderen Optionen für Zeiteinheiten und entspricht beim Verknüpfen der Liste von Zeiteinheiten außerdem der Option `style` von {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}. Mögliche Werte sind:
        - `"long"`
          - : Z. B. 1 Stunde und 50 Minuten
        - `"short"` (Standardwert)
          - : Z. B. 1 Std., 50 Min.
        - `"narrow"`
          - : Z. B. 1h 50m
        - `"digital"`
          - : Z. B. 1:50:00
    - `years`
      - : Der Stil der formatierten Jahre. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, sofern dieser nicht `"digital"` ist, andernfalls `"short"`.
    - `yearsDisplay`
      - : Ob Jahre immer oder nur dann angezeigt werden, wenn sie nicht null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `years` nicht angegeben ist, andernfalls `"always"`.
    - `months`
      - : Der Stil der formatierten Monate. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, sofern dieser nicht `"digital"` ist, andernfalls `"short"`.
    - `monthsDisplay`
      - : Ob Monate immer oder nur dann angezeigt werden, wenn sie nicht null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `months` nicht angegeben ist, andernfalls `"always"`.
    - `weeks`
      - : Der Stil der formatierten Wochen. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, sofern dieser nicht `"digital"` ist, andernfalls `"short"`.
    - `weeksDisplay`
      - : Ob Wochen immer oder nur dann angezeigt werden, wenn sie nicht null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `weeks` nicht angegeben ist, andernfalls `"always"`.
    - `days`
      - : Der Stil der formatierten Tage. Mögliche Werte sind `"long"`, `"short"` und `"narrow"`; der Standardwert ist `options.style`, sofern dieser nicht `"digital"` ist, andernfalls `"short"`.
    - `daysDisplay`
      - : Ob Tage immer oder nur dann angezeigt werden, wenn sie nicht null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `days` nicht angegeben ist, andernfalls `"always"`.
    - `hours`
      - : Der Stil der formatierten Stunden. Mögliche Werte sind `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"`; der Standardwert ist `options.style`, sofern dieser nicht `"digital"` ist, andernfalls `"numeric"`.
    - `hoursDisplay`
      - : Ob Stunden immer oder nur dann angezeigt werden, wenn sie nicht null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `hours` nicht angegeben ist und `options.style` nicht `"digital"` ist, andernfalls `"always"`.
    - `minutes`
      - : Der Stil der formatierten Minuten.
        - Wenn `hours` den Wert `"numeric"` oder `"2-digit"` hat, sind `"numeric"` und `"2-digit"` möglich; `"numeric"` wird zu `"2-digit"` normalisiert. Der Standardwert ist `"numeric"`.
        - Andernfalls sind `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"` möglich; der Standardwert ist `options.style`, sofern dieser nicht `"digital"` ist, andernfalls `"numeric"`.
    - `minutesDisplay`
      - : Ob Minuten immer oder nur dann angezeigt werden, wenn sie nicht null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `minutes` nicht angegeben ist und `options.style` nicht `"digital"` ist, andernfalls `"always"`.
    - `seconds`
      - : Der Stil der formatierten Sekunden.
        - Wenn `minutes` den Wert `"numeric"` oder `"2-digit"` hat, sind `"numeric"` und `"2-digit"` möglich; `"numeric"` wird zu `"2-digit"` normalisiert. Der Standardwert ist `"numeric"`.
        - Andernfalls sind `"long"`, `"short"`, `"narrow"`, `"numeric"` und `"2-digit"` möglich; der Standardwert ist `options.style`, sofern dieser nicht `"digital"` ist, andernfalls `"numeric"`.
    - `secondsDisplay`
      - : Ob Sekunden immer oder nur dann angezeigt werden, wenn sie nicht null sind. Mögliche Werte sind `"always"` und `"auto"`; der Standardwert ist `"auto"`, wenn `seconds` nicht angegeben ist und `options.style` nicht `"digital"` ist, andernfalls `"always"`.
    - `milliseconds`
      - : Der Stil der formatierten Millisekunden.
        - Wenn `seconds` den Wert `"numeric"` oder `"2-digit"` hat, ist nur `"numeric"` möglich; der Standardwert ist `"numeric"`.
        - Andernfalls sind `"long"`, `"short"`, `"narrow"` und `"numeric"` möglich; der Standardwert ist `options.style`, sofern dieser nicht `"digital"` ist, andernfalls `"numeric"`.
    - `millisecondsDisplay`
      - : Ob Millisekunden immer oder nur dann angezeigt werden, wenn sie nicht null sind.
        - Wenn `seconds` den Wert `"numeric"` oder `"2-digit"` hat, ist nur `"auto"` möglich; dies ist nur dann der Standardwert, wenn `milliseconds` nicht angegeben ist.
        - Andernfalls sind `"always"` und `"auto"` möglich; der Standardwert ist `"auto"`, wenn `milliseconds` nicht angegeben ist, andernfalls `"always"`.
    - `microseconds`
      - : Der Stil der formatierten Mikrosekunden.
        - Wenn `milliseconds` den Wert `"numeric"` hat, ist nur `"numeric"` möglich; der Standardwert ist `"numeric"`.
        - Andernfalls sind `"long"`, `"short"`, `"narrow"` und `"numeric"` möglich; der Standardwert ist `options.style`, sofern dieser nicht `"digital"` ist, andernfalls `"numeric"`.
    - `microsecondsDisplay`
      - : Ob Mikrosekunden immer oder nur dann angezeigt werden, wenn sie nicht null sind.
        - Wenn `milliseconds` den Wert `"numeric"` hat, ist nur `"auto"` möglich; dies ist nur dann der Standardwert, wenn `microseconds` nicht angegeben ist.
        - Andernfalls sind `"always"` und `"auto"` möglich; der Standardwert ist `"auto"`, wenn `microseconds` nicht angegeben ist, andernfalls `"always"`.
    - `nanoseconds`
      - : Der Stil der formatierten Nanosekunden.
        - Wenn `microseconds` den Wert `"numeric"` hat, ist nur `"numeric"` möglich; der Standardwert ist `"numeric"`.
        - Andernfalls sind `"long"`, `"short"`, `"narrow"` und `"numeric"` möglich; der Standardwert ist `options.style`, sofern dieser nicht `"digital"` ist, andernfalls `"numeric"`.
    - `nanosecondsDisplay`
      - : Ob Nanosekunden immer oder nur dann angezeigt werden, wenn sie nicht null sind.
        - Wenn `microseconds` den Wert `"numeric"` hat, ist nur `"auto"` möglich; dies ist nur dann der Standardwert, wenn `nanoseconds` nicht angegeben ist.
        - Andernfalls sind `"always"` und `"auto"` möglich; der Standardwert ist `"auto"`, wenn `nanoseconds` nicht angegeben ist, andernfalls `"always"`.
    - `fractionalDigits`
      - : Die Anzahl der Nachkommastellen für Sekunden, die in der Ausgabe angezeigt werden. Mögliche Werte liegen zwischen `0` und `9`; der Standardwert ist `undefined` (es werden so viele Nachkommastellen wie nötig ausgegeben).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beschreibung

Für jeden Zeitabschnitt wird intern ein {{jsxref("Intl.NumberFormat")}}-Objekt erstellt. Dabei werden die folgenden Optionen verwendet (Einzelheiten finden Sie unter {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}):

- `numberingSystem`: der Wert von `options.numberingSystem`

Wenn `milliseconds`, `microseconds` oder `nanoseconds` den Stil `"numeric"` verwendet, werden außerdem die folgenden Optionen verwendet:

- `minimumFractionDigits`: `0`, wenn `options.fractionalDigits` den Wert `undefined` hat, andernfalls `options.fractionalDigits`
- `maximumFractionDigits`: `9`, wenn `options.fractionalDigits` den Wert `undefined` hat, andernfalls `options.fractionalDigits`
- `roundingMode`: `"trunc"`

Wenn der Zeitabschnitt den Stil `"2-digit"` verwendet, wird außerdem die folgende Option verwendet:

- `minimumIntegerDigits`: `2`

Wenn der Zeitabschnitt den Stil `"long"`, `"short"` oder `"narrow"` verwendet, werden außerdem die folgenden Optionen verwendet:

- `style`: `"unit"`, wenn `"long"`, `"short"` oder `"narrow"` angegeben ist, andernfalls `undefined`
- `unit`: die aktuell formatierte Einheit (`"year"`, `"day"`, `"nanosecond"` usw.)
- `unitDisplay`: der Wert des Stils des Zeitabschnitts (`"long"`, `"short"` oder `"narrow"`)

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
