---
title: Intl.ListFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf
l10n:
  sourceCommit: a859db2ce92b7ea38d5d2450e1826ac42e016e05
---

{{JSRef}}

Die statische Methode **`Intl.ListFormat.supportedLocalesOf()`** gibt ein Array zurück, das diejenigen der angegebenen Sprachräume enthält, die in der Listenformatierung unterstützt werden, ohne auf die Standardsprache des Laufzeitsystems zurückgreifen zu müssen.

## Syntax

```js-nolint
Intl.ListFormat.supportedLocalesOf(locales)
Intl.ListFormat.supportedLocalesOf(locales, options)
```

### Parameter

- `locales`
  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft haben kann:
    - `localeMatcher`
      - : Der Algorithmus zur Sprachauswahl, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe die {{jsxref("Intl", "Intl", "#locale_identification_and_negotiation", 1)}}-Seite.

### Rückgabewert

Ein Array von Strings, die eine Teilmenge der gegebenen Sprachraum-Tags darstellen, die in der Listenformatierung unterstützt werden, ohne auf die Standardsprache des Laufzeitsystems zurückgreifen zu müssen.

## Beispiele

### Verwendung von supportedLocalesOf()

Angenommen, eine Laufzeitumgebung unterstützt Indonesisch und Deutsch, aber nicht Balinesisch in der Listenformatierung, gibt `supportedLocalesOf` die indonesischen und deutschen Sprachraum-Tags unverändert zurück, obwohl die `pinyin`-Sortierung weder für die Listenformatierung relevant ist noch mit Indonesisch verwendet wird, und ein spezielles Deutsch für Indonesien wahrscheinlich nicht unterstützt wird. Beachten Sie die Angabe des `"lookup"`-Algorithmus hier — ein `"best fit"`-Matcher könnte entscheiden, dass Indonesisch eine angemessene Entsprechung für Balinesisch ist, da die meisten Balinesischsprechenden auch Indonesisch verstehen, und somit das balinesische Sprachraum-Tag ebenfalls zurückgeben.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.ListFormat.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
