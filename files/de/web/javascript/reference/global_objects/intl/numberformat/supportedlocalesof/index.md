---
title: Intl.NumberFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/supportedLocalesOf
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die **`Intl.NumberFormat.supportedLocalesOf()`**-statische Methode gibt ein Array zurück, das die der bereitgestellten Locale enthält, die in der Zahlformatierung unterstützt werden, ohne dass auf die Standard-Locale der Laufzeitumgebung zurückgegriffen werden muss.

{{EmbedInteractiveExample("pages/js/intl-numberformat-supportedlocalesof.html", "shorter")}}

## Syntax

```js-nolint
Intl.NumberFormat.supportedLocalesOf(locales)
Intl.NumberFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprachtag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen über diese Option siehe die {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}-Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der gegebenen Locale-Tags darstellt, die in der Zahlformatierung unterstützt werden, ohne dass auf die Standard-Locale der Laufzeitumgebung zurückgegriffen werden muss.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in der Zahlformatierung, gibt `supportedLocalesOf` die indonesischen und deutschen Sprachtags unverändert zurück, obwohl `pinyin`-Kollation weder für die Zahlformatierung relevant noch mit Indonesisch verwendet wird und ein spezielles Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Spezifikation des `lookup`-Algorithmus hier — ein `best fit`-Matcher könnte entscheiden, dass Indonesisch für Balinesisch ausreichend ist, da die meisten balinesischen Sprecher auch Indonesisch verstehen, und daher das balinesische Sprach-Tag ebenfalls zurückgeben.

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
