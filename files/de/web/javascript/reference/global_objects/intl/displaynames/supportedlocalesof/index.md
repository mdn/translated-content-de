---
title: Intl.DisplayNames.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die statische Methode **`Intl.DisplayNames.supportedLocalesOf()`** gibt ein Array zurück, das jene der angegebenen Locale enthält, die in Anzeigennamen unterstützt werden, ohne auf die Standard-Locale der Laufzeit zurückgreifen zu müssen.

## Syntax

```js-nolint
Intl.DisplayNames.supportedLocalesOf(locales)
Intl.DisplayNames.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}}, oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe die {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der angegebenen Locale-Tags darstellt, die in Anzeigennamen unterstützt werden, ohne auf die Standard-Locale der Laufzeit zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeit unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in Anzeigennamen, dann gibt `supportedLocalesOf` die indonesischen und deutschen Sprach-Tags unverändert zurück, obwohl die `pinyin`-Kollation weder für Anzeigennamen relevant ist noch mit Indonesisch verwendet wird, und ein spezialisiertes Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Spezifikation des `"lookup"`-Algorithmus hier — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine angemessene Übereinstimmung für Balinesisch ist, da die meisten Balinesisch-Sprecher auch Indonesisch verstehen, und daher auch das balinesische Sprach-Tag zurückgeben.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.DisplayNames.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DisplayNames")}}
