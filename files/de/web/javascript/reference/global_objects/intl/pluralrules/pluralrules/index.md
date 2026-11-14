---
title: Intl.PluralRules()-Konstruktor
short-title: Intl.PluralRules()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Der **`Intl.PluralRules()`**-Konstruktor erstellt {{jsxref("Intl.PluralRules")}}-Objekte.

## Syntax

```js-nolint
new Intl.PluralRules()
new Intl.PluralRules(locales)
new Intl.PluralRules(locales, options)
```

> [!NOTE]
> `Intl.PluralRules()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}
  - : Eine Zeichenfolge mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}, eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Gebietsschemabezeichner. Wenn `undefined` übergeben wird oder keiner der angegebenen Gebietsschemabezeichner unterstützt wird, verwendet die Laufzeitumgebung ihr Standardgebietsschema. Allgemeine Informationen zu Form und Interpretation des Arguments `locales` finden Sie in der [Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zum Abgleichen von Gebietsschemata. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Identifizierung und Aushandlung von Gebietsschemata](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : Der zu verwendende Typ. Mögliche Werte sind:
        - `"cardinal"` (Standardwert)
          - : Für Kardinalzahlen (die sich auf die Anzahl von Dingen beziehen).
        - `"ordinal"`
          - : Für Ordinalzahlen (die sich auf die Reihenfolge oder Rangfolge von Dingen beziehen, z. B. „1st“, „2nd“, „3rd“ im Englischen).

    `Intl.PluralRules` unterstützt außerdem die [Ziffernoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options) von `Intl.NumberFormat()` (Einzelheiten finden Sie unter `Intl.NumberFormat()`):
    - `minimumIntegerDigits`
    - `minimumFractionDigits`
    - `maximumFractionDigits`
    - `minimumSignificantDigits`
    - `maximumSignificantDigits`
    - `roundingPriority`
    - `roundingIncrement`
    - `roundingMode`
    - `trailingZeroDisplay`

    Diese Optionen werden so interpretiert, als wäre die Option `notation` von `Intl.NumberFormat` auf `"standard"` und `style` auf `"decimal"` gesetzt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `roundingIncrement` nicht `1` ist und mit einer Rundung nach signifikanten Stellen oder einem anderen Wert für `roundingPriority` als `"auto"` kombiniert wird.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe eines Gebietsschemas gibt `select()` eine Pluralkategorie für das Standardgebietsschema und mit den Standardoptionen zurück.
Damit lassen sich Singular- und Pluralformen unterscheiden, beispielsweise „dog“ und „dogs“.

```js
const pr = new Intl.PluralRules();

pr.select(0); // 'other' if in US English locale

pr.select(1); // 'one' if in US English locale

pr.select(2); // 'other' if in US English locale
```

### Optionen verwenden

Die Ergebnisse lassen sich über das Argument `options` anpassen. Dessen Eigenschaft `type` können Sie auf `ordinal` setzen. Damit lässt sich das Ordinalzahlsuffix bestimmen, beispielsweise für „1st“, „2nd“, „3rd“, „4th“, „42nd“ und so weiter.

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
