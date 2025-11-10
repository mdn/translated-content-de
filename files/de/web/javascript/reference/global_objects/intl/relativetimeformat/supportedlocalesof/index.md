---
title: Intl.RelativeTimeFormat.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die statische Methode **`Intl.RelativeTimeFormat.supportedLocalesOf()`** gibt ein Array zurück, das die bereitgestellten und in der relativen Zeitformatierung unterstützten Lokalisierungen enthält, ohne auf die Standardlokalisierung der Laufzeitumgebung zurückgreifen zu müssen.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };

console.log(Intl.RelativeTimeFormat.supportedLocalesOf(locales, options));
// Expected output: Array ["id-u-co-pinyin", "de-ID"]
// (Note: the exact output may be browser-dependent)
```

## Syntax

```js-nolint
Intl.RelativeTimeFormat.supportedLocalesOf(locales)
Intl.RelativeTimeFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein Zeichenfolgen mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder ein Array solcher Zeichenfolgen. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zur Lokalisierungssuche. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen über diese Option siehe die Seite {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}.

### Rückgabewert

Ein Array von Zeichenfolgen, das eine Teilmenge der angegebenen Lokalisierungs-Tags darstellt, die in der relativen Zeitformatierung unterstützt werden, ohne auf die Standardlokalisierung der Laufzeitumgebung zurückzugreifen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in der relativen Zeitformatierung, gibt `supportedLocalesOf` die Sprach-Tags für Indonesisch und Deutsch unverändert zurück, obwohl die `pinyin`-Sortierung weder relevant für die relative Zeitformatierung ist noch mit Indonesisch verwendet wird, und ein spezialisiertes Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Angabe des `"lookup"`-Algorithmus hier – ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine angemessene Übereinstimmung für Balinesisch ist, da die meisten Balinesischsprecher auch Indonesisch verstehen, und daher das balinesische Sprach-Tag ebenfalls zurückgeben.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.RelativeTimeFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.RelativeTimeFormat")}}
