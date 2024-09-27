---
title: Intl.NumberFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/supportedLocalesOf
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die statische Methode **`Intl.NumberFormat.supportedLocalesOf()`** gibt ein Array zurück, das die von den bereitgestellten Locales enthält, die in der Zahlenformatierung unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückzugreifen.

{{EmbedInteractiveExample("pages/js/intl-numberformat-supportedlocalesof.html", "shorter")}}

## Syntax

```js-nolint
Intl.NumberFormat.supportedLocalesOf(locales)
Intl.NumberFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Locale-Abstimmungsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen über diese Option siehe die {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der angegebenen Locale-Tags darstellt, die in der Zahlenformatierung unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückzugreifen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in der Zahlenformatierung, dann gibt `supportedLocalesOf` die indonesischen und deutschen Sprach-Tags unverändert zurück, selbst wenn die `pinyin`-Sortierung weder relevant für die Zahlenformatierung noch mit Indonesisch verwendet wird, und ein spezielles Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie hier die Spezifikation des `"lookup"`-Algorithmus — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch ein angemessener Ersatz für Balinesisch ist, da die meisten Balinesisch-Sprecher auch Indonesisch verstehen, und daher den balinesischen Sprach-Tag ebenfalls zurückgeben.

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
