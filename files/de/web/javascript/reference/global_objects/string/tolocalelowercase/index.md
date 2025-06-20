---
title: String.prototype.toLocaleLowerCase()
short-title: toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toLocaleLowerCase()`** Methode von {{jsxref("String")}}-Werten gibt diesen String in Kleinbuchstaben zurück, gemäß sämtlichen lokalespezifischen Fallunterscheidungen.

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

  - : Ein String mit einem BCP 47-Sprachtag oder ein Array solcher Strings. Gibt die zu verwendende Lokale an, um gemäß allen lokalespezifischen Fallunterscheidungen in Kleinbuchstaben umgewandelt zu werden. Für die allgemeine Form und Interpretation des `locales`-Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Im Gegensatz zu anderen Methoden, die das `locales`-Argument verwenden, erlaubt `toLocaleLowerCase()` kein Lokale-Matching. Daher wird nach Überprüfung der Gültigkeit des `locales`-Arguments von `toLocaleLowerCase()` immer die erste Lokale in der Liste verwendet (oder die Standard-Lokale, wenn die Liste leer ist), selbst wenn diese Lokale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String darstellt, umgewandelt in Kleinbuchstaben gemäß sämtlichen lokalespezifischen Fallunterscheidungen.

## Beschreibung

Die `toLocaleLowerCase()`-Methode gibt den Wert des Strings zurück, umgewandelt in Kleinbuchstaben gemäß allen lokalespezifischen Fallunterscheidungen.
`toLocaleLowerCase()` beeinflusst nicht den Wert des Strings selbst. In den meisten Fällen wird dies das gleiche Ergebnis wie {{jsxref("String/toLowerCase", "toLowerCase()")}} liefern, aber für einige Lokales, wie die türkische, deren Fallunterscheidungen nicht den Standard-Fallunterscheidungen in Unicode folgen, kann es ein unterschiedliches Ergebnis geben.

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
