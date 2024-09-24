---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`toLocaleLowerCase()`** Methode von {{jsxref("String")}}-Werten gibt diese Zeichenkette in Kleinbuchstaben zurück, basierend auf jeglichen lokalspezifischen Groß-/Kleinschreibungszuordnungen.

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## Syntax

```js-nolint
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### Parameter

- `locales` {{optional_inline}}

  - : Eine Zeichenkette mit einem BCP 47-Sprach-Tag oder ein Array solcher Zeichenketten. Gibt die zu verwendende Locale an, um basierend auf jeglichen lokalspezifischen Groß-/Kleinschreibungszuordnungen in Kleinbuchstaben umzuwandeln. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleLowerCase()` kein Locale-Matching. Daher verwendet `toLocaleLowerCase()` nach der Überprüfung der Gültigkeit des `locales`-Arguments immer die erste Locale in der Liste (oder die Standardlocale, wenn die Liste leer ist), selbst wenn diese Locale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Eine neue Zeichenkette, die die aufrufende Zeichenkette darstellt, die basierend auf jeglichen
lokalspezifischen Groß-/Kleinschreibungszuordnungen in Kleinbuchstaben umgewandelt wurde.

## Beschreibung

Die Methode `toLocaleLowerCase()` gibt den Wert der Zeichenkette zurück, der basierend auf jeglichen lokalspezifischen Groß-/Kleinschreibungszuordnungen in Kleinbuchstaben umgewandelt wurde. `toLocaleLowerCase()` beeinflusst nicht den Wert der Zeichenkette selbst. In den meisten Fällen wird dies dasselbe Ergebnis wie {{jsxref("String/toLowerCase", "toLowerCase()")}} liefern, aber für einige Locale wie Türkisch, deren Groß-/Kleinschreibungszuordnungen nicht den Standardzuordnungen in Unicode folgen, kann es ein anderes Ergebnis geben.

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
