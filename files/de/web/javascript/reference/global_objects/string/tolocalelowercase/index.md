---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`toLocaleLowerCase()`** von {{jsxref("String")}}-Werten gibt diesen String in Kleinbuchstaben zurück, entsprechend lokalspezifischen Groß-/Kleinschreibungszuordnungen.

{{InteractiveExample("JavaScript Demo: String.toLocaleLowerCase()")}}

```js interactive-example
const dotted = "İstanbul";

console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase("tr")}`);
// Expected output: "istanbul"
```

## Syntax

```js-nolint
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Kennzeichnet die zu verwendende Locale, um den String entsprechend lokalspezifischer Groß-/Kleinschreibungszuordnungen in Kleinbuchstaben umzuwandeln. Für die allgemeine Form und Interpretation des `locales` Parameters lesen Sie [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die den `locales` Parameter verwenden, ermöglicht `toLocaleLowerCase()` kein Locale-Matching. Nach Überprüfung der Gültigkeit des `locales` Parameters verwendet `toLocaleLowerCase()` stets das erste Locale in der Liste (oder das Standard-Locale, falls die Liste leer ist), selbst wenn dieses Locale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Kleinbuchstaben darstellt, entsprechend lokalspezifischen Groß-/Kleinschreibungszuordnungen.

## Beschreibung

Die Methode `toLocaleLowerCase()` gibt den Wert des Strings zurück, konvertiert in Kleinbuchstaben, entsprechend lokalspezifischen Groß-/Kleinschreibungszuordnungen. `toLocaleLowerCase()` beeinflusst den Wert des Strings selbst nicht. In den meisten Fällen wird dies das gleiche Ergebnis liefern wie {{jsxref("String/toLowerCase", "toLowerCase()")}}, aber für einige Locales, wie etwa Türkisch, deren Groß-/Kleinschreibungszuordnung nicht den Standardzuordnungen in Unicode folgt, kann es zu einem anderen Ergebnis kommen.

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
