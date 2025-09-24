---
title: Intl.ListFormat.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die **`Intl.ListFormat.supportedLocalesOf()`** statische Methode gibt ein Array zurück, das diejenigen der bereitgestellten Locales enthält, die in der Listenformatierung unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückfallen zu müssen.

## Syntax

```js-nolint
Intl.ListFormat.supportedLocalesOf(locales)
Intl.ListFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie auf der {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der gegebenen Locale-Tags repräsentiert, die in der Listenformatierung unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in der Listenformatierung, so gibt `supportedLocalesOf` die indonesischen und deutschen Sprach-Tags unverändert zurück, obwohl `pinyin` Kollation weder relevant für die Listenformatierung noch bei Indonesisch verwendet wird, und ein spezialisiertes Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Angabe des `"lookup"` Algorithmus hier — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch ein angemessener Ersatz für Balinesisch ist, da die meisten balinesischen Sprecher auch Indonesisch verstehen, und daher das balinesische Sprach-Tag ebenfalls zurückgeben.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.ListFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
