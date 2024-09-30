---
title: Intl.Segmenter.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die statische Methode **`Intl.Segmenter.supportedLocalesOf()`** gibt ein Array zurück, das die von den angegebenen Locales enthält, die in der Segmentierung unterstützt werden, ohne auf die Standardlocale der Laufzeitumgebung zurückgreifen zu müssen.

{{EmbedInteractiveExample("pages/js/intl-segmenter-supportedlocalesof.html", "shorter")}}

## Syntax

```js-nolint
Intl.Segmenter.supportedLocalesOf(locales)
Intl.Segmenter.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Eine Zeichenfolge mit einem BCP 47-Sprachtag oder ein Array solcher Zeichenfolgen. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zur Lokalisierungssuche. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe die {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Zeichenfolgen, das eine Teilmenge der angegebenen Locale-Tags darstellt, die in der Segmentierung unterstützt werden, ohne auf die Standardlocale der Laufzeitumgebung zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in der Segmentierung, gibt `supportedLocalesOf` die indonesischen und deutschen Sprachtags unverändert zurück, obwohl die `pinyin`-Kollation weder für Segmentierung relevant noch für Indonesisch verwendet wird, und ein spezialisiertes Deutsch für Indonesien vermutlich nicht unterstützt wird. Beachten Sie hier die Angabe des `"lookup"`-Algorithmus – ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine ausreichende Übereinstimmung für Balinesisch ist, da die meisten balinesischen Sprecher auch Indonesisch verstehen, und daher auch das balinesische Sprachtag zurückgeben.

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
