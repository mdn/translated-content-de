---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`toLocaleUpperCase()`**-Methode von {{jsxref("String")}}-Werten gibt diesen String in Großbuchstaben konvertiert zurück, entsprechend der länderspezifischen Zeichensatzkonvertierungen.

{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}

## Syntax

```js-nolint
toLocaleUpperCase()
toLocaleUpperCase(locales)
```

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Gibt das zu verwendende Gebietsschema an, um in Großbuchstaben zu konvertieren, entsprechend der länderspezifischen Zeichensatzkonvertierungen. Für die allgemeine Form und Interpretation des `locales`-Arguments, siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleUpperCase()` kein Locale-Matching. Daher verwendet `toLocaleUpperCase()` nach der Überprüfung der Gültigkeit des `locales`-Arguments immer das erste Locale in der Liste (oder das Standard-Locale, wenn die Liste leer ist), selbst wenn dieses Locale nicht von der Implementierung unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String darstellt, konvertiert in Großbuchstaben entsprechend der länderspezifischen Zeichensatzkonvertierungen.

## Beschreibung

Die `toLocaleUpperCase()`-Methode gibt den Wert des Strings zurück, der in Großbuchstaben konvertiert ist, entsprechend der länderspezifischen Zeichensatzkonvertierungen.
`toLocaleUpperCase()` beeinflusst nicht den Wert des Strings selbst. In den meisten
Fällen wird dies das gleiche Ergebnis wie {{jsxref("String/toUpperCase", "toUpperCase()")}} erzeugen, aber für einige Gebiete wie Türkisch, deren Zeichensatzkonvertierungen nicht den Standard-Zeichensatzkonvertierungen in Unicode folgen, kann es ein anderes Ergebnis geben.

Beachten Sie auch, dass die Konvertierung nicht notwendigerweise eine 1:1-Zeichenabbildung ist, da einige
Zeichen bei der Umwandlung in Großbuchstaben zu zwei (oder sogar mehr) Zeichen führen können.
Daher kann sich die Länge des Ergebnis-Strings von der Eingabelänge unterscheiden. Dies impliziert auch, dass die Konvertierung nicht stabil ist, sodass z.B. folgendes `false` zurückgeben kann:
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
