---
title: Intl.RelativeTimeFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/supportedLocalesOf
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die statische Methode **`Intl.RelativeTimeFormat.supportedLocalesOf()`** gibt ein Array zurück, das diejenigen der bereitgestellten Locales enthält, die in der relativen Zeitformatierung unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückgreifen zu müssen.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-supportedlocalesof.html", "shorter")}}

## Syntax

```js-nolint
Intl.RelativeTimeFormat.supportedLocalesOf(locales)
Intl.RelativeTimeFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaft enthalten kann:
    - `localeMatcher`
      - : Der zu verwendende Locale-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe die {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der angegebenen Locale-Tags darstellt, die in der relativen Zeitformatierung unterstützt werden, ohne dass auf die Standard-Locale der Laufzeitumgebung zurückgegriffen werden muss.

## Beispiele

### Verwendung von supportedLocalesOf()

Unter der Annahme, dass eine Laufzeitumgebung Indonesisch und Deutsch unterstützt, jedoch nicht Balinesisch in der relativen Zeitformatierung, gibt `supportedLocalesOf` die indonesischen und deutschen Sprach-Tags unverändert zurück, auch wenn `pinyin`-Kollation weder relevant für die relative Zeitformatierung ist noch mit Indonesisch verwendet wird, und ein spezialisiertes Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie hier die Spezifikation des `"lookup"`-Algorithmus — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine angemessene Übereinstimmung für Balinesisch ist, da die meisten Balinesisch-Sprecher auch Indonesisch verstehen, und daher auch das balinesische Sprach-Tag zurückgeben.

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