---
title: String.prototype.toLocaleUpperCase()
short-title: toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die Methode **`toLocaleUpperCase()`** von {{jsxref("String")}}-Werten gibt diesen String in Großbuchstaben zurück, entsprechend der lokalspezifischen Groß-/Kleinschreibung.

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

  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Gibt die Locale an, die zur Umwandlung in Großbuchstaben entsprechend lokalspezifischer Groß-/Kleinschreibung verwendet werden soll. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Anders als bei anderen Methoden, die das `locales`-Argument nutzen, erlaubt `toLocaleUpperCase()` kein Locale-Matching. Daher verwendet `toLocaleUpperCase()` nach der Überprüfung der Gültigkeit des `locales`-Arguments immer die erste Locale in der Liste (oder die Standardlocale, wenn die Liste leer ist), selbst wenn diese Locale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Großbuchstaben umgewandelt darstellt, gemäß jeder
lokalspezifischen Groß-/Kleinschreibung.

## Beschreibung

Die Methode `toLocaleUpperCase()` gibt den Wert des Strings zurück, der gemäß jeder lokalspezifischen Groß-/Kleinschreibung in Großbuchstaben umgewandelt ist.
`toLocaleUpperCase()` beeinflusst nicht den Wert des Strings selbst. In den meisten
Fällen wird dies das gleiche Ergebnis wie {{jsxref("String/toUpperCase", "toUpperCase()")}} liefern, aber für einige Locales, wie das Türkische, deren Groß-/Kleinschreibung nicht der Standard-Unicode-Groß-/Kleinschreibung folgt, kann es ein anderes Ergebnis geben.

Es ist auch zu beachten, dass die Umwandlung nicht unbedingt 1:1-Zeichenabbildung ist, da einige
Zeichen als Resultat zwei (oder sogar mehr) Zeichen ergeben können, wenn sie in Großbuchstaben umgewandelt werden.
Deshalb kann die Länge der Ergebniszeichenfolge von der Eingabelänge abweichen. Dies impliziert auch, dass die Umwandlung nicht stabil ist, sodass zum Beispiel Folgendes `false` zurückgeben kann:
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
