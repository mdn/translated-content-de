---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die Methode **`toLocaleUpperCase()`** von {{jsxref("String")}}-Werten gibt diese Zeichenkette in Großbuchstaben konvertiert zurück, entsprechend lokalspezifischer Groß-/Kleinschreibungsregeln.

{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}

## Syntax

```js-nolint
toLocaleUpperCase()
toLocaleUpperCase(locales)
```

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachkennzeichner oder ein Array solcher Strings. Gibt die Locale an, die verwendet werden soll, um entsprechend lokalspezifischen Groß-/Kleinschreibungsregeln in Großbuchstaben zu konvertieren. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleUpperCase()` keine Locale-Übereinstimmung. Daher verwendet `toLocaleUpperCase()` nach der Überprüfung der Gültigkeit des `locales`-Arguments immer die erste Locale in der Liste (oder die Standard-Locale, wenn die Liste leer ist), auch wenn diese Locale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String darstellt, der entsprechend lokalspezifischen Groß-/Kleinschreibungsregeln in Großbuchstaben konvertiert wurde.

## Beschreibung

Die Methode `toLocaleUpperCase()` gibt den Wert der Zeichenkette zurück, der entsprechend lokalspezifischen Groß-/Kleinschreibungsregeln in Großbuchstaben konvertiert ist. `toLocaleUpperCase()` beeinflusst nicht den Wert der Zeichenkette selbst. In den meisten Fällen wird dies das gleiche Ergebnis wie {{jsxref("String/toUpperCase", "toUpperCase()")}} erzeugen, aber für einige Locales, wie z.B. Türkisch, deren Groß-/Kleinschreibungsregeln nicht den Standard-Groß-/Kleinschreibungsregeln in Unicode folgen, könnte es ein anderes Ergebnis geben.

Beachten Sie auch, dass die Konvertierung nicht unbedingt eine 1:1-Zeichenabbildung ist, da einige Zeichen in zwei (oder sogar mehr) Zeichen konvertiert werden könnten, wenn sie in Großbuchstaben umgewandelt werden. Daher kann die Länge des Ergebnis-Strings von der Eingabelänge abweichen. Dies impliziert auch, dass die Konvertierung nicht stabil ist, sodass z.B. folgendes `false` zurückgeben kann:
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
