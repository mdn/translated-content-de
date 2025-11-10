---
title: Intl.PluralRules() Konstruktor
short-title: Intl.PluralRules()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Der **`Intl.PluralRules()`** Konstruktor erstellt {{jsxref("Intl.PluralRules")}} Objekte.

## Syntax

```js-nolint
new Intl.PluralRules()
new Intl.PluralRules(locales)
new Intl.PluralRules(locales, options)
```

> [!NOTE]
> `Intl.PluralRules()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, ihn ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Kennungen. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keine der angegebenen Locale-Kennungen unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle optional):
    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifikation und -Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : Der zu verwendende Typ. Mögliche Werte sind:
        - `"cardinal"` (Standard)
          - : Für Kardinalzahlen (bezieht sich auf die Menge der Dinge).
        - `"ordinal"`
          - : Für Ordinalzahlen (bezieht sich auf die Reihenfolge oder Rangfolge von Dingen, z. B. "1st", "2nd", "3rd" im Englischen).

    `Intl.PluralRules` unterstützt auch die [Zahlenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options) von `Intl.NumberFormat()` (siehe `Intl.NumberFormat()` für Details):
    - `minimumIntegerDigits`
    - `minimumFractionDigits`
    - `maximumFractionDigits`
    - `minimumSignificantDigits`
    - `maximumSignificantDigits`
    - `roundingPriority`
    - `roundingIncrement`
    - `roundingMode`

    Diese Optionen werden interpretiert, als ob die `notation`-Option von `Intl.NumberFormat` `"standard"` und `style` `"decimal"` ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe einer Locale wird ein formatierter String in der Standard-Locale und mit Standardoptionen zurückgegeben. Dies ist nützlich, um zwischen Singular- und Pluralformen zu unterscheiden, z. B. "Hund" und "Hunde".

```js
const pr = new Intl.PluralRules();

pr.select(0); // 'other' if in US English locale

pr.select(1); // 'one' if in US English locale

pr.select(2); // 'other' if in US English locale
```

### Verwendung von Optionen

Die Ergebnisse können mithilfe des `options` Arguments angepasst werden, das eine Eigenschaft namens `type` hat, die Sie auf `ordinal` setzen können. Dies ist nützlich, um den Ordnungsindikator herauszufinden, z. B. "1st", "2nd", "3rd", "4th", "42nd" usw.

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
