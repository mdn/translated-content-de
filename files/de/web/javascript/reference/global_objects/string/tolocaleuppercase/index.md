---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{JSRef}}

Die **`toLocaleUpperCase()`**-Methode von {{jsxref("String")}}-Werten gibt diesen String in Großbuchstaben umgewandelt zurück, entsprechend den lokalspezifischen Großbuchstabenabbildungen.

{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}

## Syntax

```js-nolint
toLocaleUpperCase()
toLocaleUpperCase(locales)
```

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Gibt die zu verwendende Lokale an, um in Großbuchstaben umzuwandeln, entsprechend lokalspezifischer Großbuchstabenabbildungen. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleUpperCase()` kein Lokale-Matching. Daher verwendet `toLocaleUpperCase()`, nachdem die Gültigkeit des `locales`-Arguments überprüft wurde, immer die erste Lokale in der Liste (oder die Standardlokale, wenn die Liste leer ist), selbst wenn diese Lokale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String darstellt, der gemäß lokalspezifischen Großbuchstabenabbildungen in Großbuchstaben umgewandelt wurde.

## Beschreibung

Die `toLocaleUpperCase()`-Methode gibt den Wert des Strings zurück, umgewandelt in Großbuchstaben gemäß lokalspezifischer Großbuchstabenabbildungen. `toLocaleUpperCase()` beeinflusst nicht den Wert des Strings selbst. In den meisten Fällen wird dies das gleiche Ergebnis wie {{jsxref("String/toUpperCase", "toUpperCase()")}} produzieren, aber für einige Lokale, wie etwa Türkisch, deren Großbuchstabenabbildungen nicht den Standardabbildungen in Unicode folgen, kann es ein anderes Ergebnis geben.

Beachten Sie auch, dass die Umwandlung nicht unbedingt eine 1:1-Zeichenabbildung ist, da einige Zeichen bei der Umwandlung in Großbuchstaben zu zwei (oder sogar mehr) Zeichen führen können. Daher kann sich die Länge des Ergebnisstrings von der Eingabelänge unterscheiden. Dies impliziert auch, dass die Umwandlung nicht stabil ist, sodass zum Beispiel das folgende `false` zurückgeben kann:
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
