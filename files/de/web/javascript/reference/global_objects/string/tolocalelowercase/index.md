---
title: String.prototype.toLocaleLowerCase()
short-title: toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
l10n:
  sourceCommit: 5ed8a617221499f2255e55634ce2122c942eb610
---

Die Methode **`toLocaleLowerCase()`** von {{jsxref("String")}}-Werten gibt diesen String in Kleinbuchstaben umgewandelt zurück. Dabei werden gebietsschemaspezifische Regeln zur Groß- und Kleinschreibung berücksichtigt.

{{InteractiveExample("JavaScript Demo: String.prototype.toLocaleLowerCase()")}}

```js interactive-example
const dotted = "İstanbul";

console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);
// Expected output: "EN-US: i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase("tr")}`);
// Expected output: "TR: istanbul"
```

## Syntax

```js-nolint
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}} oder ein Array solcher Strings. Gibt das Gebietsschema an, das bei der Umwandlung in Kleinbuchstaben gemäß gebietsschemaspezifischen Regeln zur Groß- und Kleinschreibung verwendet werden soll. Allgemeine Informationen zur Form und Interpretation des Arguments `locales` finden Sie in der [Beschreibung des Parameters auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Anders als andere Methoden, die das Argument `locales` verwenden, führt `toLocaleLowerCase()` keinen Abgleich mit unterstützten Gebietsschemas durch. Nach der Prüfung der Gültigkeit des Arguments `locales` verwendet `toLocaleLowerCase()` daher immer das erste Gebietsschema in der Liste (oder das Standardgebietsschema, wenn die Liste leer ist) – auch wenn die Implementierung dieses Gebietsschema nicht unterstützt.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Kleinbuchstaben umgewandelt darstellt. Dabei werden gebietsschemaspezifische Regeln zur Groß- und Kleinschreibung berücksichtigt.

## Beschreibung

Die Methode `toLocaleLowerCase()` gibt den Wert des Strings in Kleinbuchstaben umgewandelt zurück und berücksichtigt dabei gebietsschemaspezifische Regeln zur Groß- und Kleinschreibung. `toLocaleLowerCase()` verändert den Wert des Strings selbst nicht. In den meisten Fällen ist das Ergebnis dasselbe wie bei {{jsxref("String/toLowerCase", "toLowerCase()")}}. Für einige Gebietsschemas, etwa Türkisch, deren Regeln zur Groß- und Kleinschreibung von den Standardregeln in Unicode abweichen, kann das Ergebnis jedoch anders ausfallen.

## Beispiele

### Verwendung von toLocaleLowerCase()

```js
"ALPHABET".toLocaleLowerCase(); // 'alphabet'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
"\u0130".toLocaleLowerCase(locales) === "i"; // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
