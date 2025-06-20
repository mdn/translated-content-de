---
title: String.prototype.toLocaleUpperCase()
short-title: toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toLocaleUpperCase()`** Methode von {{jsxref("String")}}-Werten gibt diesen String in Großbuchstaben zurück, entsprechend lokalspezifischer Groß-/Kleinschreibungs-Mappings.

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

  - : Ein String mit einem BCP 47-Sprachtag oder ein Array solcher Strings. Gibt die zu verwendende Lokale an, um Großbuchstaben entsprechend lokalspezifischer Mappings zu konvertieren. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Anders als bei anderen Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleUpperCase()` kein Lokale-Matching. Daher verwendet `toLocaleUpperCase()` nach Überprüfung der Gültigkeit des `locales`-Arguments immer die erste Locale in der Liste (oder die Standard-Locale, wenn die Liste leer ist), selbst wenn diese Locale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String darstellt, konvertiert in Großbuchstaben entsprechend lokalspezifischer Mappings.

## Beschreibung

Die `toLocaleUpperCase()`-Methode gibt den Wert des Strings zurück, konvertiert in Großbuchstaben entsprechend lokalspezifischer Mappings. `toLocaleUpperCase()` beeinflusst den Wert des Strings selbst nicht. In den meisten Fällen wird dies das gleiche Ergebnis wie {{jsxref("String/toUpperCase", "toUpperCase()")}} produzieren, aber für einige Lokalisierungen, wie z.B. Türkisch, deren Groß-/Kleinschreibungs-Mappings nicht den Standards in Unicode folgen, kann es ein anderes Ergebnis geben.

Beachten Sie auch, dass die Konvertierung nicht zwingend eine 1:1-Zeichenabbildung ist, da einige Zeichen in zwei (oder sogar mehr) Zeichen umgewandelt werden können, wenn sie in Großbuchstaben umgewandelt werden. Daher kann die Länge des Ergebnis-Strings von der Eingabelänge abweichen. Dies impliziert auch, dass die Konvertierung nicht stabil ist, sodass beispielsweise folgendes `false` zurückgeben kann:
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
