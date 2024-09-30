---
title: Intl.DateTimeFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die statische Methode **`Intl.DateTimeFormat.supportedLocalesOf()`** gibt ein Array zurück, das die von den angegebenen Locales enthält, die bei der Datums- und Zeitformatierung unterstützt werden, ohne dass auf die Standardspracheinstellung der Laufzeitumgebung zurückgegriffen werden muss.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-supportedlocalesof.html", "shorter")}}

## Syntax

```js-nolint
Intl.DateTimeFormat.supportedLocalesOf(locales)
Intl.DateTimeFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprachtag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der zu verwendende Locale-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie auf der {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}-Seite.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der angegebenen Locale-Tags darstellt, die bei der Datums- und Zeitformatierung unterstützt werden, ohne dass auf die Standardspracheinstellung der Laufzeitumgebung zurückgegriffen werden muss.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch bei der Datums- und Zeitformatierung. `supportedLocalesOf` gibt die indonesischen und deutschen Sprachtags unverändert zurück, auch wenn `pinyin`-Kollation weder für die Datums- und Zeitformatierung relevant ist noch mit Indonesisch verwendet wird, und ein spezielles Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie hier die Angabe des `"lookup"`-Algorithmus — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine angemessene Übereinstimmung für Balinesisch ist, da die meisten Balinesischsprachigen auch Indonesisch verstehen, und daher auch das balinesische Sprach-Tag zurückgeben.

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
