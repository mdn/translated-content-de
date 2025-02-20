---
title: Intl.DateTimeFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **statische Methode `Intl.DateTimeFormat.supportedLocalesOf()`** gibt ein Array zurück, das jene der bereitgestellten Locales enthält, die bei der Formatierung von Datum und Uhrzeit unterstützt werden, ohne auf die Standardspracheinstellung der Laufzeitumgebung zurückzugreifen.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.supportedLocalesOf", "shorter")}}

```js interactive-example
const locales1 = ["ban", "id-u-co-pinyin", "de-ID"];
const options1 = { localeMatcher: "lookup" };

console.log(Intl.DateTimeFormat.supportedLocalesOf(locales1, options1));
// Expected output: Array ["id-u-co-pinyin", "de-ID"]
// (Note: the exact output may be browser-dependent)
```

## Syntax

```js-nolint
Intl.DateTimeFormat.supportedLocalesOf(locales)
Intl.DateTimeFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zum Abgleichen von Locales. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für weitere Informationen zu dieser Option siehe die Seite {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der gegebenen Locale-Tags darstellt, die bei der Formatierung von Datum und Uhrzeit unterstützt werden, ohne auf die Standardspracheinstellung der Laufzeitumgebung zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch bei der Formatierung von Datum und Uhrzeit. In diesem Fall gibt `supportedLocalesOf` die Sprachcodes für Indonesisch und Deutsch unverändert zurück, auch wenn die `pinyin`-Sortierung weder für die Datum- und Zeitformatierung relevant noch für Indonesisch verwendet wird und ein spezialisierter deutscher Locale für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie hier die Spezifikation des `"lookup"`-Algorithmus — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch als ausreichender Ersatz für Balinesisch angesehen werden kann, da die meisten Balinesisch-Sprecher auch Indonesisch verstehen, und daher zusätzlich das Balinesische Sprach-Tag zurückgeben.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.DateTimeFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
