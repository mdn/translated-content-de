---
title: Intl.PluralRules.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/supportedLocalesOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Intl.PluralRules.supportedLocalesOf()`** statische Methode gibt ein Array zurück, das diejenigen der bereitgestellten Locales enthält, die in Pluralregeln unterstützt werden, ohne auf die Standard-Locales der Laufzeitumgebung zurückgreifen zu müssen.

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
  - : Ein String mit einem BCP 47-Sprachtag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments, siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Algorithmen zum Abgleichen von Locales. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen über diese Option, siehe die {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der gegebenen Locale-Tags darstellt, die in Pluralregeln unterstützt werden, ohne dass auf die Standard-Locales der Laufzeitumgebung zurückgegriffen werden muss.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in Pluralregeln, dann gibt `supportedLocalesOf` die indonesischen und deutschen Sprachtags unverändert zurück, selbst wenn die `pinyin`-Sortierung weder für Pluralregeln relevant noch mit Indonesisch verwendet wird, und ein spezialisierter deutscher Tag für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Angabe des `"lookup"`-Algorithmus hier - ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine angemessene Entsprechung für Balinesisch ist, da die meisten Balinesisch-Sprecher auch Indonesisch verstehen, und daher das Balinesische Sprachtag ebenfalls zurückgeben.

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
