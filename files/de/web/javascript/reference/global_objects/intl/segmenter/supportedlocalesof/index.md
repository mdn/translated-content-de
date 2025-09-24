---
title: Intl.Segmenter.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die statische Methode **`Intl.Segmenter.supportedLocalesOf()`** gibt ein Array zurück, das jene der bereitgestellten Sprachen enthält, die in der Segmentierung unterstützt werden, ohne auf die Standardsprache des Laufzeitsystems zurückgreifen zu müssen.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup", granularity: "string" };

console.log(Intl.Segmenter.supportedLocalesOf(locales, options));
// Expected output: Array ["id-u-co-pinyin", "de-ID"]
// (Note: the exact output may be browser-dependent)
```

## Syntax

```js-nolint
Intl.Segmenter.supportedLocalesOf(locales)
Intl.Segmenter.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments sehen Sie die [Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Sprachabgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie auf der {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Strings, das eine Untermenge der angegebenen Sprach-Tags darstellt, die in der Segmentierung unterstützt werden, ohne auf die Standardsprache des Laufzeitsystems zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Unter der Annahme, dass ein Laufzeitsystem Indonesisch und Deutsch, aber nicht Balinesisch in der Segmentierung unterstützt, gibt `supportedLocalesOf` die indonesischen und deutschen Sprach-Tags unverändert zurück, obwohl die `pinyin`-Kollation weder für die Segmentierung relevant ist noch mit Indonesisch verwendet wird und ein spezielles Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Angabe des `"lookup"`-Algorithmus hier — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine ausreichende Übereinstimmung für Balinesisch ist, da die meisten balinesischen Sprecher auch Indonesisch verstehen, und daher auch das balinesische Sprach-Tag zurückgeben.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.Segmenter.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Segmenter")}}
