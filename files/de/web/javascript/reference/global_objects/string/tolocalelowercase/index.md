---
title: String.prototype.toLocaleLowerCase()
short-title: toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die Methode **`toLocaleLowerCase()`** von {{jsxref("String")}}-Werten gibt diesen String in Kleinbuchstaben konvertiert zurück, basierend auf lokalen, spezifischen Kassenkonvertierungen.

{{InteractiveExample("JavaScript Demo: String.prototype.toLocaleLowerCase()")}}

```js interactive-example
const dotted = "İstanbul";

console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase("tr")}`);
// Expected output: "istanbul"
```

## Syntax

```js-nolint
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Gibt an, welches Gebietsschema verwendet werden soll, um in Kleinbuchstaben zu konvertieren, basierend auf lokalen, spezifischen Kassenkonvertierungen. Für die allgemeine Form und Interpretation des Arguments `locales`, siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das Argument `locales` verwenden, erlaubt `toLocaleLowerCase()` kein Übereinstimmen von Gebietsschemas. Daher verwendet `toLocaleLowerCase()` nach der Überprüfung der Gültigkeit des Arguments `locales` immer das erste Gebietsschema in der Liste (oder das Standardgebietsschema, wenn die Liste leer ist), auch wenn dieses Gebietsschema von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String darstellt, der in Kleinbuchstaben konvertiert wurde, basierend auf lokalen, spezifischen Kassenkonvertierungen.

## Beschreibung

Die Methode `toLocaleLowerCase()` gibt den Wert des Strings zurück, der gemäß lokalen, spezifischen Kassenkonvertierungen in Kleinbuchstaben konvertiert wurde.
`toLocaleLowerCase()` beeinflusst nicht den Wert des Strings selbst. In den meisten
Fällen wird dies das gleiche Ergebnis wie {{jsxref("String/toLowerCase", "toLowerCase()")}} erzeugen, aber in einigen Gebietsschemas wie dem Türkischen, dessen Kassenkonvertierungen nicht den Standard-Kassenkonvertierungen in Unicode folgen, kann es ein anderes Ergebnis geben.

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
