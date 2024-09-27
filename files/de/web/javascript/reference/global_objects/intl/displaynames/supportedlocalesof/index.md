---
title: Intl.DisplayNames.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf
l10n:
  sourceCommit: a859db2ce92b7ea38d5d2450e1826ac42e016e05
---

{{JSRef}}

Die statische Methode **`Intl.DisplayNames.supportedLocalesOf()`** gibt ein Array zurück, das die unterstützten der bereitgestellten Sprachvarianten enthält, ohne auf die Standard-Sprachvariante der Laufzeitumgebung zurückgreifen zu müssen.

## Syntax

```js-nolint
Intl.DisplayNames.supportedLocalesOf(locales)
Intl.DisplayNames.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des Arguments `locales` lesen Sie [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zur Sprachvariantenanpassung. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe die {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}-Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der gegebenen Sprachvarietätentags darstellt, welche in Anzeigenamen unterstützt werden, ohne auf die Standard-Sprachvarietät der Laufzeitumgebung zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in Anzeigenamen, dann gibt `supportedLocalesOf` die Indonesischen und Deutschen Sprachcodes unverändert zurück, obwohl `pinyin`-Kollation weder für Anzeigenamen relevant ist noch mit Indonesisch verwendet wird und ein spezialisiertes Deutsch für Indonesien vermutlich nicht unterstützt wird. Beachten Sie die Spezifikation des `"lookup"`-Algorithmus hier — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch ein ausreichender Ersatz für Balinesisch ist, da die meisten Balinesisch sprechenden Personen auch Indonesisch verstehen, und daher auch das Balinesische Sprachvarietätentag zurückgeben.

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
