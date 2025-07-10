---
title: String.prototype.toLocaleUpperCase()
short-title: toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toLocaleUpperCase()`** Methode von {{jsxref("String")}}-Werten gibt diese Zeichenkette in Großbuchstaben zurück, entsprechend den länderspezifischen Großschreiberegeln.

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
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Gibt das Locale an, das verwendet werden soll, um in Großbuchstaben zu konvertieren, gemäß länderspezifischen Großschreiberegeln. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das `locales` Argument verwenden, erlaubt `toLocaleUpperCase()` kein Locale-Matching. Daher verwendet `toLocaleUpperCase()`, nachdem die Gültigkeit des `locales` Arguments überprüft wurde, immer das erste Locale in der Liste (oder das Standard-Locale, wenn die Liste leer ist), selbst wenn dieses Locale nicht von der Implementierung unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String darstellt, umgewandelt in Großbuchstaben gemäß den länderspezifischen Großschreiberegeln.

## Beschreibung

Die `toLocaleUpperCase()` Methode gibt den Wert der Zeichenkette zurück, umgewandelt in Großbuchstaben gemäß den länderspezifischen Großschreiberegeln.
`toLocaleUpperCase()` beeinflusst nicht den Wert der Zeichenkette selbst. In den meisten Fällen führt dies zu demselben Ergebnis wie {{jsxref("String/toUpperCase", "toUpperCase()")}}, aber für einige Lokalitäten, wie etwa Türkisch, deren Großschreiberegeln nicht den Standard-Großschreiberegeln in Unicode folgen, kann es ein unterschiedliches Ergebnis geben.

Beachten Sie auch, dass die Konvertierung nicht unbedingt eine 1:1 Zeichenzuordnung ist, da einige Zeichen zu zwei (oder sogar mehr) Zeichen umgewandelt werden können, wenn sie in Großbuchstaben umgewandelt werden. Daher kann die Länge des Ergebnis-Strings von der Eingabelänge abweichen. Dies impliziert auch, dass die Konvertierung nicht stabil ist, sodass zum Beispiel folgendes `false` zurückgeben kann:
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
