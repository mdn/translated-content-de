---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`toLocaleUpperCase()`** Methode von {{jsxref("String")}} Werten gibt diesen String in Großbuchstaben zurück, entsprechend jeglicher lokalspezifischen Großbuchstabenabbildungen.

{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}

## Syntax

```js-nolint
toLocaleUpperCase()
toLocaleUpperCase(locales)
```

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Gibt das Gebietsschema an, das für die Umwandlung in Großbuchstaben gemäß lokalspezifischer Großbuchstabenabbildungen verwendet werden soll. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das `locales` Argument verwenden, erlaubt `toLocaleUpperCase()` kein Übereinstimmen von Gebietsschemas. Nachdem die Gültigkeit des `locales` Arguments überprüft wurde, verwendet `toLocaleUpperCase()` immer das erste Gebietsschema in der Liste (oder das Standardgebietsschema, wenn die Liste leer ist), auch wenn dieses Gebietsschema von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String darstellt, der gemäß jeglicher lokalspezifischen Großbuchstabenabbildungen in Großbuchstaben umgewandelt wurde.

## Beschreibung

Die `toLocaleUpperCase()` Methode gibt den Wert des Strings zurück, der gemäß jeglicher lokalspezifischen Großbuchstabenabbildungen in Großbuchstaben umgewandelt wurde. `toLocaleUpperCase()` beeinflusst den Wert des Strings selbst nicht. In den meisten Fällen wird dies das gleiche Ergebnis wie {{jsxref("String/toUpperCase", "toUpperCase()")}} produzieren, aber für einige Gebietsschemas, wie z.B. Türkisch, deren Großbuchstabenabbildungen nicht den Standard-Großbuchstabenabbildungen in Unicode folgen, kann es ein anderes Ergebnis geben.

Ebenso beachten Sie, dass die Umwandlung nicht unbedingt eine 1:1 Zeichenabbildung ist, da einige Zeichen zu zwei (oder sogar mehr) Zeichen führen können, wenn sie in Großbuchstaben umgewandelt werden. Daher kann die Länge des Ergebnis-Strings von der Eingabelänge abweichen. Dies impliziert auch, dass die Umwandlung nicht stabil ist, so dass z.B. das folgende `false` zurückgeben kann: `x.toLocaleLowerCase() === x.toLocaleUpperCase().toLocaleLowerCase()`

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
