---
title: Intl.NumberFormat.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/supportedLocalesOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`Intl.NumberFormat.supportedLocalesOf()`** gibt ein Array zurück, das die der bereitgestellten Gebietsschemas enthält, die bei der Nummernformatierung unterstützt werden, ohne auf das Standard-Gebietsschema der Laufzeit zurückzugreifen.

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
  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments lesen Sie die [Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zum Abgleichen der Gebietsschemas. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie auf der Seite {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der gegebenen Gebietsschema-Tags repräsentiert, die bei der Nummernformatierung unterstützt werden, ohne auf das Standard-Gebietsschema der Laufzeit zurückzugreifen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeit unterstützt Indonesisch und Deutsch, aber nicht Balinesisch bei der Nummernformatierung. `supportedLocalesOf` gibt die indonesischen und deutschen Sprach-Tags unverändert zurück, obwohl `pinyin`-Kollation weder für Nummernformatierung relevant noch mit Indonesisch verwendet wird, und ein spezialisiertes Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie hier die Spezifikation des `"lookup"`-Algorithmus — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine ausreichende Übereinstimmung für Balinesisch ist, da die meisten balinesischen Sprecher auch Indonesisch verstehen, und daher auch das balinesische Sprach-Tag zurückgeben.

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
