---
title: Intl.PluralRules() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules
l10n:
  sourceCommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{JSRef}}

Der **`Intl.PluralRules()`**-Konstruktor erstellt {{jsxref("Intl.PluralRules")}}-Objekte.

## Syntax

```js-nolint
new Intl.PluralRules()
new Intl.PluralRules(locales)
new Intl.PluralRules(locales, options)
```

> **Note:** `Intl.PluralRules()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprachcode oder eine {{jsxref("Intl.Locale")}}-Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Erkennung und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : Der zu verwendende Typ. Mögliche Werte sind:
        - `"cardinal"` (Standard)
          - : Für Kardinalzahlen (die Menge von Dingen betreffend).
        - `"ordinal"`
          - : Für Ordinalzahlen (die Ordnung oder Rangfolge von Dingen betreffend, z.B. "1st", "2nd", "3rd" im Englischen).

    `Intl.PluralRules` unterstützt auch die [Zahlenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options) von `Intl.NumberFormat()` (siehe `Intl.NumberFormat()` für Details):

    - `minimumIntegerDigits`
    - `minimumFractionDigits`
    - `maximumFractionDigits`
    - `minimumSignificantDigits`
    - `maximumSignificantDigits`
    - `roundingPriority`
    - `roundingIncrement`
    - `roundingMode`

    Diese Optionen werden so interpretiert, als ob die `notation`-Option von `Intl.NumberFormat` `"standard"` und der `style` `"decimal"` ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung

Bei grundlegender Verwendung ohne Angabe einer Locale wird ein formatierter String in der Standard-Locale und mit Standardoptionen zurückgegeben. Dies ist nützlich, um zwischen Singular- und Pluralformen zu unterscheiden, z.B. "dog" und "dogs".

```js
const pr = new Intl.PluralRules();

pr.select(0); // 'other' if in US English locale

pr.select(1); // 'one' if in US English locale

pr.select(2); // 'other' if in US English locale
```

### Verwendung von Optionen

Die Ergebnisse können mit dem `options`-Argument angepasst werden, das eine Eigenschaft namens `type` hat, die auf `ordinal` gesetzt werden kann. Dies ist nützlich, um den Ordinalindikator herauszufinden, z.B. "1st", "2nd", "3rd", "4th", "42nd" und so weiter.

```js
const pr = new Intl.PluralRules("en-US", { type: "ordinal" });

const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);
const formatOrdinals = (n) => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

formatOrdinals(0); // '0th'
formatOrdinals(1); // '1st'
formatOrdinals(2); // '2nd'
formatOrdinals(3); // '3rd'
formatOrdinals(4); // '4th'
formatOrdinals(11); // '11th'
formatOrdinals(21); // '21st'
formatOrdinals(42); // '42nd'
formatOrdinals(103); // '103rd'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Intl")}}
