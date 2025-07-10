---
title: String.prototype.toLocaleLowerCase()
short-title: toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toLocaleLowerCase()`**-Methode von {{jsxref("String")}}-Werten gibt diesen String in Kleinbuchstaben zurück, wobei alle lokalen, spezifischen Groß-/Kleinschreibungsregeln berücksichtigt werden.

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
  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Gibt die zu verwendende Locale an, um den String gemäß lokalspezifischen Groß-/Kleinschreibungsregeln in Kleinbuchstaben umzuwandeln. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleLowerCase()` kein Locals-Matching. Daher verwendet `toLocaleLowerCase()` nach der Überprüfung der Gültigkeit des `locales`-Arguments immer die erste Locale in der Liste (oder die Standardlocale, wenn die Liste leer ist), auch wenn diese Locale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Kleinbuchstaben umgewandelt darstellt, unter Berücksichtigung lokalspezifischer Groß-/Kleinschreibungsregeln.

## Beschreibung

Die `toLocaleLowerCase()`-Methode gibt den Wert des Strings in Kleinbuchstaben gemäß lokalspezifischen Groß-/Kleinschreibungsregeln zurück. `toLocaleLowerCase()` beeinflusst nicht den Wert des Strings selbst. In den meisten Fällen wird dies das gleiche Ergebnis wie {{jsxref("String/toLowerCase", "toLowerCase()")}} liefern, aber in einigen Locales, wie z.B. dem Türkischen, deren Groß-/Kleinschreibungsregeln nicht den Standardregeln in Unicode folgen, kann es ein unterschiedliches Ergebnis geben.

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
