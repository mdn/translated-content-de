---
title: Intl.NumberFormat.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die statische Methode **`Intl.NumberFormat.supportedLocalesOf()`** gibt ein Array zurück, das die von den angegebenen Gebietsschemata enthält, die ohne Rückgriff auf das Standardgebietsschema der Laufzeit bei der Zahlenformatierung unterstützt werden.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };

console.log(Intl.NumberFormat.supportedLocalesOf(locales, options));
// Expected output: Array ["id-u-co-pinyin", "de-ID"]
// (Note: the exact output may be browser-dependent)
```

## Syntax

```js-nolint
Intl.NumberFormat.supportedLocalesOf(locales)
Intl.NumberFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}} oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zur Übereinstimmung von Gebietsschemata. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe die Seite {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der angegebenen Gebietsschematags darstellt, die in der Zahlenformatierung unterstützt werden, ohne auf das Standardgebietsschema der Laufzeit zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeit unterstützt Indonesisch und Deutsch, nicht aber Balinesisch in der Zahlenformatierung. `supportedLocalesOf` gibt die Indonesischen und Deutschen Sprach-Tags unverändert zurück, obwohl `pinyin`-Kollation weder relevant für die Zahlenformatierung ist noch mit Indonesisch verwendet wird und ein spezielles Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie hier die Spezifikation des `"lookup"`-Algorithmus – ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine angemessene Übereinstimmung für Balinesisch ist, da die meisten Balinesisch-Sprecher auch Indonesisch verstehen, und daher das Balinesische Sprach-Tag ebenfalls zurückgeben.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.NumberFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
