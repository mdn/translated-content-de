---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`toLocaleLowerCase()`**-Methode von {{jsxref("String")}}-Werten gibt diese Zeichenfolge in Kleinbuchstaben umgewandelt zurück, entsprechend lokalspezifischer Fallunterscheidungen.

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## Syntax

```js-nolint
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Gibt die zu verwendende Locale an, um in Kleinbuchstaben gemäß lokalspezifischen Fallunterscheidungen zu konvertieren. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Anders als bei anderen Methoden, die das `locales` Argument verwenden, erlaubt `toLocaleLowerCase()` keinen Locale-Abgleich. Daher verwendet `toLocaleLowerCase()` nach Prüfung der Gültigkeit des `locales` Arguments immer die erste Locale in der Liste (oder die Standard-Locale, wenn die Liste leer ist), selbst wenn diese Locale von der Implementierung nicht unterstützt wird.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Kleinbuchstaben umgewandelt darstellt, gemäß lokalspezifischen Fallunterscheidungen.

## Beschreibung

Die `toLocaleLowerCase()`-Methode gibt den Wert der Zeichenfolge in Kleinbuchstaben umgewandelt zurück, entsprechend lokalspezifischen Fallunterscheidungen. `toLocaleLowerCase()` beeinflusst nicht den Wert der Zeichenfolge selbst. In den meisten Fällen wird dies dasselbe Ergebnis wie {{jsxref("String/toLowerCase", "toLowerCase()")}} liefern, aber für einige Locales, wie etwa Türkisch, deren Fallunterscheidungen nicht den Standard-Fallunterscheidungen in Unicode folgen, kann es ein anderes Ergebnis geben.

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
