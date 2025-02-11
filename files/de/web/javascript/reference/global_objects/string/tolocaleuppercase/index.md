---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toLocaleUpperCase()`**-Methode von {{jsxref("String")}}-Werten gibt diese Zeichenkette in Großbuchstaben umgewandelt zurück, basierend auf lokalspezifischen Zeichensatzregeln.

{{InteractiveExample("JavaScript Demo: String.toLocaleUpperCase()")}}

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

  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Gibt die Locale an, die verwendet werden soll, um Großbuchstaben entsprechend lokalspezifischen Zeichensatzregeln zu erzeugen. Weitere Informationen zur allgemeinen Form und Interpretation des `locales`-Arguments finden Sie in [der Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleUpperCase()` keine Locale-Anpassung. Daher verwendet `toLocaleUpperCase()` immer die erste Locale in der Liste (oder die Standard-Locale, wenn die Liste leer ist), nachdem die Gültigkeit des `locales`-Arguments überprüft wurde, selbst wenn diese Locale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der die aufrufende Zeichenkette in Großbuchstaben umgewandelt darstellt, basierend auf lokalspezifischen Zeichensatzregeln.

## Beschreibung

Die Methode `toLocaleUpperCase()` gibt den Wert der Zeichenkette zurück, umgewandelt in Großbuchstaben basierend auf lokalspezifischen Zeichensatzregeln.
`toLocaleUpperCase()` ändert den Wert der Zeichenkette selbst nicht. In den meisten Fällen wird dies das gleiche Ergebnis liefern wie {{jsxref("String/toUpperCase", "toUpperCase()")}}, aber für einige Locales, wie zum Beispiel Türkisch, deren Zeichensatzregeln nicht den Standard-Zeichensatzregeln in Unicode entsprechen, kann es ein anderes Ergebnis geben.

Beachten Sie außerdem, dass die Umwandlung nicht unbedingt eine 1:1-Zeichen-Mapping ist, da einige Zeichen möglicherweise zu zwei (oder sogar mehreren) Zeichen werden, wenn sie in Großbuchstaben umgewandelt werden. Daher kann die Länge des Ergebnis-Strings von der Eingabelänge abweichen. Dies impliziert auch, dass die Umwandlung nicht stabil ist, sodass zum Beispiel Folgendes `false` zurückgeben kann:
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
