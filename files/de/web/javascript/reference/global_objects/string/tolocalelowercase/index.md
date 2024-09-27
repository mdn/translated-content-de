---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die Methode **`toLocaleLowerCase()`** von {{jsxref("String")}}-Werten gibt diesen String in Kleinbuchstaben zurück, gemäß lokalspezifischen Groß- und Kleinschreibungsregeln.

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## Syntax

```js-nolint
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Gibt die Locale an, die verwendet werden soll, um gemäß lokalspezifischen Groß- und Kleinschreibungsregeln in Kleinbuchstaben umzuwandeln. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Anders als andere Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleLowerCase()` kein Locale-Matching. Daher verwendet `toLocaleLowerCase()` nach der Überprüfung der Gültigkeit des `locales`-Arguments immer die erste Locale in der Liste (oder die Standard-Locale, wenn die Liste leer ist), auch wenn diese Locale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Kleinbuchstaben umgewandelt darstellt, gemäß lokalspezifischen Groß- und Kleinschreibungsregeln.

## Beschreibung

Die Methode `toLocaleLowerCase()` gibt den Wert des Strings zurück, der gemäß lokalspezifischen Groß- und Kleinschreibungsregeln in Kleinbuchstaben umgewandelt wurde. `toLocaleLowerCase()` beeinflusst nicht den Wert des Strings selbst. In den meisten Fällen wird das gleiche Ergebnis wie bei {{jsxref("String/toLowerCase", "toLowerCase()")}} geliefert, aber für einige Locales, wie Türkisch, deren Groß- und Kleinschreibungsregeln nicht den Standardregeln in Unicode folgen, kann es ein anderes Ergebnis geben.

## Beispiele

### Verwendung von toLocaleLowerCase()

```js
"ALPHABET".toLocaleLowerCase(); // 'alphabet'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
"\u0130".toLocaleLowerCase(locales) === "i"; // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
