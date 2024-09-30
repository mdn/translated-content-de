---
title: Intl.DisplayNames.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf
l10n:
  sourceCommit: a859db2ce92b7ea38d5d2450e1826ac42e016e05
---

{{JSRef}}

Die statische Methode **`Intl.DisplayNames.supportedLocalesOf()`** gibt ein Array zurück, das diejenigen der bereitgestellten Gebietsschemas enthält, die in Anzeigennamen unterstützt werden, ohne auf das Standardsystem-Locale zurückgreifen zu müssen.

## Syntax

```js-nolint
Intl.DisplayNames.supportedLocalesOf(locales)
Intl.DisplayNames.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Zur allgemeinen Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Algorithmus für die Gebietsschema-Abstimmung. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen über diese Option finden Sie auf der {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der gegebenen Locale-Tags darstellt, die in Anzeigennamen unterstützt werden, ohne auf das Standardsystem-Locale zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in Anzeigennamen, gibt `supportedLocalesOf` die indonesischen und deutschen Sprach-Tags unverändert zurück, auch wenn `pinyin`-Kollation weder für Anzeigennamen relevant noch in Verbindung mit Indonesisch verwendet wird, und ein spezialisiertes Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Angabe des `"lookup"`-Algorithmus hier – ein `"best fit"` Matcher könnte entscheiden, dass Indonesisch eine ausreichende Übereinstimmung für Balinesisch ist, da die meisten Balinesen auch Indonesisch verstehen, und daher das balinesische Sprach-Tag ebenfalls zurückgeben.

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
