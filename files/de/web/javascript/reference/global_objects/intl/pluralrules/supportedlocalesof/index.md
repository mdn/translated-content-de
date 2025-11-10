---
title: Intl.PluralRules.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die statische Methode **`Intl.PluralRules.supportedLocalesOf()`** gibt ein Array mit denjenigen der angegebenen lokalen Sprachumgebungen zurück, die in Pluralregeln unterstützt werden, ohne auf die Standardsprachumgebung des Laufzeitsystems zurückgreifen zu müssen.

{{InteractiveExample("JavaScript Demo: Intl.PluralRules.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["en-US", "ban", "ar-OM", "de-DE"];
const options = { localeMatcher: "lookup" };

console.log(Intl.PluralRules.supportedLocalesOf(locales, options));
// Expected output: Array ["en-US", "ar-OM", "de-DE"]
```

## Syntax

```js-nolint
Intl.PluralRules.supportedLocalesOf(locales)
Intl.PluralRules.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Sprachabgleich-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie auf der {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}-Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der gegebenen Sprach-Tag enthält, die in Pluralregeln unterstützt wird, ohne auf die Standardsprachumgebung des Laufzeitsystems zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, ein Laufzeitsystem unterstützt in den Pluralregeln Indonesisch und Deutsch, aber nicht Balinesisch, gibt `supportedLocalesOf` die Indonesische und Deutsche Sprach-Tags unverändert zurück, obwohl die `pinyin`-Sortierfolge für Pluralregeln weder relevant ist noch mit Indonesisch verwendet wird, und ein spezialisiertes Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Spezifikation des `"lookup"`-Algorithmus hier — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch ein ausreichender Ersatz für Balinesisch ist, da die meisten Balinesisch-Sprecher auch Indonesisch verstehen, und daher auch den Balinesischen Sprach-Tag zurückgeben.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.PluralRules.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.PluralRules")}}
