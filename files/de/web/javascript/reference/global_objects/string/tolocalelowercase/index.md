---
title: String.prototype.toLocaleLowerCase()
short-title: toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`toLocaleLowerCase()`**-Methode von {{jsxref("String")}}-Werten gibt diese Zeichenfolge in Kleinbuchstaben zurück, entsprechend den lokalespezifischen Groß- und Kleinschreibungszuordnungen.

{{InteractiveExample("JavaScript Demo: String.prototype.toLocaleLowerCase()")}}

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

  - : Ein String mit einem BCP 47-Sprachtag oder ein Array solcher Strings. Gibt die zu verwendende Locale an, um in Kleinbuchstaben zu konvertieren, entsprechend den lokalespezifischen Groß- und Kleinschreibungszuordnungen. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Anders als andere Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleLowerCase()` kein Locale-Matching. Daher verwendet `toLocaleLowerCase()` nach Überprüfung der Gültigkeit des `locales`-Arguments immer die erste Locale in der Liste (oder die Standard-Locale, wenn die Liste leer ist), selbst wenn diese Locale nicht durch die Implementierung unterstützt wird.

### Rückgabewert

Ein neuer String, der die aufrufende Zeichenfolge in Kleinbuchstaben konvertiert darstellt, entsprechend den lokalespezifischen Groß- und Kleinschreibungszuordnungen.

## Beschreibung

Die `toLocaleLowerCase()`-Methode gibt den Wert der Zeichenfolge zurück, der in Kleinbuchstaben konvertiert wurde, entsprechend den lokalespezifischen Groß- und Kleinschreibungszuordnungen.
`toLocaleLowerCase()` beeinflusst den Wert der Zeichenfolge selbst nicht. In den meisten Fällen wird dies dasselbe Ergebnis liefern wie {{jsxref("String/toLowerCase", "toLowerCase()")}}, aber für einige Locales, wie z.B. Türkisch, deren Groß- und Kleinschreibungszuordnungen nicht den Standard-Zuordnungen in Unicode folgen, kann es ein unterschiedliches Ergebnis geben.

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
