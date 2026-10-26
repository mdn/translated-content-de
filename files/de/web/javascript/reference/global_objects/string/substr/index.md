---
title: String.prototype.substr()
short-title: substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`substr()`** von {{jsxref("String")}}-Werten gibt einen Teil der Zeichenfolge zurück. Dieser beginnt am angegebenen Index und umfasst die angegebene Anzahl von Zeichen.

> [!NOTE]
> `substr()` ist nicht Teil der ECMAScript-Hauptspezifikation. Die Methode ist in [Annex B: Additional ECMAScript Features for Web Browsers](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) definiert; für Laufzeitumgebungen außerhalb von Browsern ist ihre Implementierung optional. Verwenden Sie daher stattdessen die standardisierten Methoden [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring) und [`String.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice), damit Ihr Code möglichst plattformübergreifend funktioniert. Auf der [Seite zu `String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr) werden die drei Methoden verglichen.

{{InteractiveExample("JavaScript Demo: String.prototype.substr()")}}

```js interactive-example
const str = "Mozilla";

console.log(str.substr(1, 2));
// Expected output: "oz"

console.log(str.substr(2));
// Expected output: "zilla"
```

## Syntax

```js-nolint
substr(start)
substr(start, length)
```

### Parameter

- `start`
  - : Der Index des ersten Zeichens, das in der zurückgegebenen Teilzeichenfolge enthalten sein soll.
- `length` {{optional_inline}}
  - : Die Anzahl der zu extrahierenden Zeichen.

### Rückgabewert

Eine neue Zeichenfolge, die den angegebenen Teil der ursprünglichen Zeichenfolge enthält.

## Beschreibung

Die Methode `substr()` einer Zeichenfolge extrahiert `length` Zeichen ab dem Index `start`.

- Wenn `start >= str.length` gilt, wird eine leere Zeichenfolge zurückgegeben.
- Wenn `start < 0` gilt, wird der Index vom Ende der Zeichenfolge aus gezählt. Genauer gesagt beginnt die Teilzeichenfolge in diesem Fall bei `max(start + str.length, 0)`.
- Wenn `start` weggelassen wird oder {{jsxref("undefined")}} ist, wird der Wert als `0` behandelt.
- Wenn `length` weggelassen wird oder {{jsxref("undefined")}} ist oder wenn `start + length >= str.length` gilt, extrahiert `substr()` die Zeichen bis zum Ende der Zeichenfolge.
- Wenn `length < 0` gilt, wird eine leere Zeichenfolge zurückgegeben.
- Sowohl für `start` als auch für `length` wird {{jsxref("NaN")}} als `0` behandelt.

Obwohl Sie `substr()` möglichst nicht verwenden sollten, gibt es keine einfache Möglichkeit, die Verwendung von `substr()` in bestehendem Code durch `slice()` oder `substring()` zu ersetzen, ohne im Wesentlichen einen Polyfill für `substr()` zu schreiben. Beispielsweise liefern `str.substr(a, l)`, `str.slice(a, a + l)` und `str.substring(a, a + l)` bei `str = "01234", a = 1, l = -2` unterschiedliche Ergebnisse: `substr()` gibt eine leere Zeichenfolge zurück, `slice()` gibt `"123"` zurück und `substring()` gibt `"0"` zurück. Wie der Code tatsächlich umgestellt werden kann, hängt vom möglichen Wertebereich von `a` und `l` ab.

## Beispiele

### substr() verwenden

<!-- cSpell:ignore ozilla -->

```js
const string = "Mozilla";

console.log(string.substr(0, 1)); // 'M'
console.log(string.substr(1, 0)); // ''
console.log(string.substr(-1, 1)); // 'a'
console.log(string.substr(1, -1)); // ''
console.log(string.substr(-3)); // 'lla'
console.log(string.substr(1)); // 'ozilla'
console.log(string.substr(-20, 2)); // 'Mo'
console.log(string.substr(20, 2)); // ''
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.substr` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.substr` von es-shims](https://www.npmjs.com/package/string.prototype.substr)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
