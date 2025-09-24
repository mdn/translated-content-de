---
title: Intl.DateTimeFormat.supportedLocalesOf()
short-title: supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die statische Methode **`Intl.DateTimeFormat.supportedLocalesOf()`** gibt ein Array zurück, das diejenigen der bereitgestellten Gebietsschemas enthält, die in der Datums- und Zeitformatierung unterstützt werden, ohne dass auf das Standard-Gebietsschema der Laufzeitumgebung zurückgegriffen werden muss.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.supportedLocalesOf()", "shorter")}}

```js interactive-example
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };

console.log(Intl.DateTimeFormat.supportedLocalesOf(locales, options));
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
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zum Abgleichen von Gebietsschemas. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie auf der {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Strings, die eine Teilmenge der angegebenen Gebietsschema-Tags darstellen, die in der Datums- und Zeitformatierung unterstützt werden, ohne dass auf das Standard-Gebietsschema der Laufzeitumgebung zurückgegriffen werden muss.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in der Datums- und Zeitformatierung, gibt `supportedLocalesOf` die Indonesischen und Deutschen Sprach-Tags unverändert zurück, auch wenn die `pinyin`-Sortierung weder relevant für die Datums- und Zeitformatierung noch für Indonesisch verwendet wird und eine spezialisierte deutsche Version für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Angabe des `"lookup"` Algorithmus hier — ein `"best fit"` Abgleich könnte entscheiden, dass Indonesisch eine angemessene Übereinstimmung für Balinesisch ist, da die meisten Balinesisch-Sprecher auch Indonesisch verstehen, und daher könnte es auch das balinesische Sprach-Tag zurückgeben.

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
