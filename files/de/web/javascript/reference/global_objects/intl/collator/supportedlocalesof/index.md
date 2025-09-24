---
title: Intl.Collator.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die **`Intl.Collator.supportedLocalesOf()`** statische Methode gibt ein Array zurück, das die angegebenen Sprachumgebungen enthält, die bei Sortieroperationen unterstützt werden, ohne auf die standardmäßige Sprachumgebung der Laufzeitumgebung zurückzugreifen.

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
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zum Abgleichen der Sprachumgebung. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie auf der {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der angegebenen Sprach-Tag enthält, die bei Sortieroperationen unterstützt werden, ohne auf die standardmäßige Sprachumgebung der Laufzeitumgebung zurückzugreifen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch bei Sortieroperationen, `supportedLocalesOf` gibt die indonesischen und deutschen Sprach-Tags unverändert zurück, obwohl die `pinyin` Sortierung bei Indonesisch nicht verwendet wird und ein spezialisiertes Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Spezifikation des `"lookup"`-Algorithmus hier — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine geeignete Übereinstimmung für Balinesisch ist, da die meisten Balinesisch-Sprecher auch Indonesisch verstehen, und daher auch das balinesische Sprach-Tag zurückgeben.

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
