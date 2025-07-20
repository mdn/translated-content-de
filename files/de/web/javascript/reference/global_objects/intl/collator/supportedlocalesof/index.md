---
title: Intl.Collator.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/supportedLocalesOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`Intl.Collator.supportedLocalesOf()`** gibt ein Array zurück, das diejenigen der bereitgestellten Lokalitäten enthält, die in der Sortierung unterstützt werden, ohne auf die Standardlokalität der Laufzeit zurückgreifen zu müssen.

{{InteractiveExample("JavaScript Demo: Intl.Collator.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };

console.log(Intl.Collator.supportedLocalesOf(locales, options));
// Expected output: Array ["id-u-co-pinyin", "de-ID"]
// (Note: the exact output may be browser-dependent)
```

## Syntax

```js-nolint
Intl.Collator.supportedLocalesOf(locales)
Intl.Collator.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Bedeutung des `locales`-Arguments sehen Sie [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zum Abgleichen der Lokalität. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie auf der {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}-Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der gegebenen Lokalitätentags darstellt, die in der Sortierung unterstützt werden, ohne auf die Standardlokalität der Laufzeit zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeit unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in der Sortierung, gibt `supportedLocalesOf` die indonesischen und deutschen Sprach-Tags unverändert zurück, obwohl `pinyin`-Sortierung nicht mit Indonesisch verwendet wird und ein spezialisiertes Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Spezifikation des `"lookup"`-Algorithmus hier — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine angemessene Übereinstimmung für Balinesisch ist, da die meisten Balinesisch-Sprecher auch Indonesisch verstehen, und daher das balinesische Sprach-Tag ebenfalls zurückgeben.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.Collator.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
