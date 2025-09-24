---
title: String.prototype.toLocaleUpperCase()
short-title: toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die **`toLocaleUpperCase()`**-Methode von {{jsxref("String")}}-Werten gibt diese Zeichenkette in Großbuchstaben zurück, gemäß jeglichen lokalspezifischen Groß-/Kleinschreibungsmapping.

{{InteractiveExample("JavaScript Demo: String.prototype.toLocaleUpperCase()")}}

```js interactive-example
const city = "istanbul";

console.log(city.toLocaleUpperCase("en-US"));
// Expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase("TR"));
// Expected output: "İSTANBUL"
```

## Syntax

```js-nolint
toLocaleUpperCase()
toLocaleUpperCase(locales)
```

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}} oder ein Array solcher Strings. Gibt die Lokalisation an, die für die Umwandlung in Großbuchstaben gemäß jeglichen lokalspezifischen Groß-/Kleinschreibungsmapping verwendet werden soll. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleUpperCase()` kein Lokalisierungs-Matching. Daher verwendet `toLocaleUpperCase()` nach Überprüfung der Gültigkeit des `locales`-Arguments immer die erste Lokalisierung in der Liste (oder die Standardlokalisierung, falls die Liste leer ist), selbst wenn diese Lokalisierung von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Großbuchstaben konvertiert darstellt, gemäß jeglichen lokalspezifischen Groß-/Kleinschreibungsmapping.

## Beschreibung

Die Methode `toLocaleUpperCase()` gibt den Wert der Zeichenkette zurück, die gemäß jeglichen lokalspezifischen Groß-/Kleinschreibungsmapping in Großbuchstaben konvertiert wurde.
`toLocaleUpperCase()` beeinflusst nicht den Wert der Zeichenkette selbst. In den meisten Fällen wird dies dasselbe Ergebnis wie {{jsxref("String/toUpperCase", "toUpperCase()")}} liefern, aber für einige Lokalisierungen, wie zum Beispiel Türkisch, deren Groß-/Kleinschreibungsmapping nicht den Standard-Unicode-Zuordnungen folgt, kann es ein unterschiedliches Ergebnis geben.

Es sei auch darauf hingewiesen, dass die Konvertierung nicht unbedingt eine 1:1-Zeichen-Mapping ist, da einige Zeichen bei der Umwandlung in Großbuchstaben zu zwei (oder noch mehr) Zeichen führen können. Daher kann sich die Länge der Ergebniszeichenkette von der Eingabelänge unterscheiden. Dies bedeutet auch, dass die Konvertierung nicht stabil ist, sodass beispielsweise folgendes `false` zurückgeben kann:
`x.toLocaleLowerCase() === x.toLocaleUpperCase().toLocaleLowerCase()`

## Beispiele

### Verwendung von toLocaleUpperCase()

```js
"alphabet".toLocaleUpperCase(); // 'ALPHABET'

"Gesäß".toLocaleUpperCase(); // 'GESÄSS'

"i\u0307".toLocaleUpperCase("lt-LT"); // 'I'

const locales = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
"i\u0307".toLocaleUpperCase(locales); // 'I'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
