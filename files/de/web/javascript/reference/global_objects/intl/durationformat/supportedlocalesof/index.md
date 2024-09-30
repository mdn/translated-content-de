---
title: Intl.DurationFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/supportedLocalesOf
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

Die statische Methode **`Intl.DurationFormat.supportedLocalesOf()`** gibt ein Array zurück, das diejenigen der bereitgestellten lokalen Bezeichnungen enthält, die in der Dauerformatierung ohne Rückgriff auf die Standard-Lokalisierung der Laufzeitumgebung unterstützt werden.

## Syntax

```js-nolint
Intl.DurationFormat.supportedLocalesOf(locales)
Intl.DurationFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprachkennzeichen oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthalten kann:
    - `localeMatcher`
      - : Der zu verwendende Lokalisierungsmatch-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe die {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der angegebenen Lokalisierungskennzeichen darstellt, die in der Dauerformatierung unterstützt werden, ohne auf die Standard-Lokalisierung der Laufzeitumgebung zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in der Dauerformatierung, gibt `supportedLocalesOf` die indonesischen und deutschen Sprachkennzeichen unverändert zurück, obwohl `pinyin`-Kollation weder für die Dauerformatierung relevant noch für Indonesisch verwendet wird, und ein speziell für Indonesien angepasstes Deutsch wahrscheinlich nicht unterstützt wird. Beachten Sie hier die Spezifikation des `"lookup"`-Algorithmus — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine geeignete Übereinstimmung für Balinesisch ist, da die meisten Balinesischen Sprecher auch Indonesisch verstehen und daher auch das Balinesische Sprachkennzeichen zurückgegeben werden könnte.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.DurationFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DurationFormat")}}
