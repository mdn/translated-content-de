---
title: Intl.DurationFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/supportedLocalesOf
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

Die statische Methode **`Intl.DurationFormat.supportedLocalesOf()`** gibt ein Array zurück, das die von den bereitgestellten Locales enthält, die im Dauerformatierungsprozess unterstützt werden, ohne auf die Standard-Locales der Laufzeitumgebung zurückgreifen zu müssen.

## Syntax

```js-nolint
Intl.DurationFormat.supportedLocalesOf(locales)
Intl.DurationFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Lokalisierungsabgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie auf der {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}} Seite.

### Rückgabewert

Ein Array von Strings, die eine Teilmenge der angegebenen Locale-Tags darstellen, die im Dauerformatierungsprozess unterstützt werden, ohne auf die Standard-Locales der Laufzeitumgebung zurückgreifen zu müssen.

## Beispiele

### Nutzung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in der Dauerformatierung, dann gibt `supportedLocalesOf` die indonesischen und deutschen Sprach-Tags unverändert zurück, auch wenn die `pinyin` Kollation weder für die Dauerformatierung relevant noch mit Indonesisch verwendet wird, und ein spezialisiertes Deutsch für Indonesien unwahrscheinlich unterstützt wird. Beachten Sie die Angabe des `"lookup"` Algorithmus hier — ein `"best fit"` Matcher könnte entscheiden, dass Indonesisch eine angemessene Übereinstimmung für Balinesisch darstellt, da die meisten balinesischen Sprecher auch Indonesisch verstehen, und daher auch das balinesische Sprach-Tag zurückgeben.

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
