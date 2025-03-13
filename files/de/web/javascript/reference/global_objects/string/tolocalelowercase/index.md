---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toLocaleLowerCase()`** Methode der {{jsxref("String")}} Werte gibt diesen String in Kleinbuchstaben zurück, gemäß den sprachspezifischen Zeichensatzkonvertierungen.

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

  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Gibt die zu verwendende Locale an, um gemäß den sprachspezifischen Zeichensatzkonvertierungen in Kleinbuchstaben umzuwandeln. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das `locales` Argument verwenden, erlaubt `toLocaleLowerCase()` kein Locale-Matching. Daher verwendet `toLocaleLowerCase()` nach der Überprüfung der Gültigkeit des `locales` Arguments immer das erste Locale in der Liste (oder das Standard-Locale, wenn die Liste leer ist), auch wenn dieses Locale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Kleinbuchstaben konvertiert darstellt, gemäß den sprachspezifischen Zeichensatzkonvertierungen.

## Beschreibung

Die `toLocaleLowerCase()` Methode gibt den Wert des Strings zurück, der in Kleinbuchstaben konvertiert wurde, gemäß den sprachspezifischen Zeichensatzkonvertierungen. `toLocaleLowerCase()` beeinflusst nicht den Wert des Strings selbst. In den meisten Fällen wird dies dasselbe Ergebnis liefern wie {{jsxref("String/toLowerCase", "toLowerCase()")}}, aber für einige Locales, wie das Türkische, deren Zeichensatzkonvertierungen nicht den Standard-Zeichensatzkonvertierungen in Unicode folgen, kann es zu einem abweichenden Ergebnis kommen.

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
