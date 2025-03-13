---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toLocaleUpperCase()`**-Methode von {{jsxref("String")}}-Werten gibt diese Zeichenfolge in Großbuchstaben konvertiert zurück, entsprechend jeglicher lokalisierungsspezifischer Groß-/Kleinschreibungsmuster.

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

  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Gibt das Gebietsschema an, das zur Umwandlung in Großbuchstaben verwendet werden soll entsprechend jeglicher lokalisierungsspezifischer Groß-/Kleinschreibungsmuster. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Anders als bei anderen Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleUpperCase()` kein Lokalisierungs-Matching. Nachdem die Gültigkeit des `locales`-Arguments überprüft wurde, verwendet `toLocaleUpperCase()` immer das erste Gebietsschema in der Liste (oder das Standardgebietsschema, wenn die Liste leer ist), auch wenn dieses Gebietsschema von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der die aufrufende Zeichenfolge in Großbuchstaben konvertiert darstellt, entsprechend jeglicher lokalisierungsspezifischer Groß-/Kleinschreibungsmuster.

## Beschreibung

Die `toLocaleUpperCase()`-Methode gibt den Wert der Zeichenfolge in Großbuchstaben konvertiert zurück, entsprechend jeglicher lokalisierungsspezifischer Groß-/Kleinschreibungsmuster. `toLocaleUpperCase()` beeinflusst nicht den Wert der Zeichenfolge selbst. In den meisten Fällen wird dies das gleiche Ergebnis wie {{jsxref("String/toUpperCase", "toUpperCase()")}} liefern, aber für einige Gebietsschemata, wie das Türkische, deren Groß-/Kleinschreibungsmuster nicht den Standard-Groß-/Kleinschreibungsmustern in Unicode folgen, kann es ein unterschiedliches Ergebnis geben.

Beachten Sie auch, dass die Umwandlung nicht unbedingt eine 1:1-Zeichenabbildung ist, da einige Zeichen in zwei (oder sogar mehr) Zeichen umgewandelt werden können, wenn sie in Großbuchstaben konvertiert werden. Daher kann sich die Länge der Ergebniszeichenfolge von der Eingabelänge unterscheiden. Dies impliziert auch, dass die Umwandlung nicht stabil ist, sodass beispielsweise das Folgende `false` zurückgeben kann:
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
