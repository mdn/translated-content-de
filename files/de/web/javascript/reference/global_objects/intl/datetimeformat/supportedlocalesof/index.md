---
title: Intl.DateTimeFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die statische Methode **`Intl.DateTimeFormat.supportedLocalesOf()`** gibt ein Array zurück, das diejenigen der bereitgestellten `locales` enthält, die bei der Datums- und Uhrzeitformatierung unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückgreifen zu müssen.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-supportedlocalesof.html", "shorter")}}

## Syntax

```js-nolint
Intl.DateTimeFormat.supportedLocalesOf(locales)
Intl.DateTimeFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments, siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der Lokalisierungsabgleich-Algorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Für Informationen zu dieser Option siehe die Seite {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}.

### Rückgabewert

Ein Array von Strings, das eine Teilmenge der gegebenen Locale-Tags darstellt, die in der Datums- und Zeitformatierung unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeit unterstützt Indonesisch und Deutsch, aber nicht Balinesisch bei der Datums- und Uhrzeitformatierung, gibt `supportedLocalesOf` die Sprach-Tags für Indonesisch und Deutsch unverändert zurück, obwohl die `pinyin`-Kollation weder relevant für die Datums- und Uhrzeitformatierung ist noch mit Indonesisch verwendet wird, und ein spezialisiertes Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie hier die Spezifikation des `"lookup"`-Algorithmus — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch ausreichend für Balinesisch ist, da die meisten balinesischen Sprecher auch Indonesisch verstehen, und daher auch das balinesische Sprach-Tag zurückgeben.

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
