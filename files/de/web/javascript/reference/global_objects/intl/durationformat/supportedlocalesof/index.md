---
title: Intl.DurationFormat.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die **`Intl.DurationFormat.supportedLocalesOf()`** statische Methode gibt ein Array zurück, das diejenigen der angegebenen Locales enthält, die in der Dauerformatierung unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückgreifen zu müssen.

## Syntax

```js-nolint
Intl.DurationFormat.supportedLocalesOf(locales)
Intl.DurationFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; die Standardeinstellung ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie auf der Seite {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der angegebenen Locale-Tags darstellt, die in der Dauerformatierung unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückzugreifen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in der Dauerformatierung, gibt `supportedLocalesOf` die indonesischen und deutschen Sprach-Tags unverändert zurück, auch wenn `pinyin`-Kollation weder für die Dauerformatierung relevant noch mit Indonesisch verwendet wird, und ein spezielles Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Angabe des `"lookup"`-Algorithmus hier – ein `"best fit"` Matcher könnte entscheiden, dass Indonesisch als ausreichende Übereinstimmung für Balinesisch angesehen wird, da die meisten Balinesisch-Sprecher auch Indonesisch verstehen und daher das Balinesisch-Sprach-Tag ebenfalls zurückgeben.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.DurationFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DurationFormat")}}
