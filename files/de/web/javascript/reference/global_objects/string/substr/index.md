---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}} {{Deprecated_Header}}

Die **`substr()`** Methode von {{jsxref("String")}}-Werten gibt einen Teil dieses Strings zurück, beginnend beim angegebenen Index und erstreckt sich über eine angegebene Anzahl von Zeichen danach.

> **Hinweis:** `substr()` ist nicht Teil der Haupt-ECMAScript-Spezifikation — es ist definiert in [Anhang B: Zusätzliche ECMAScript-Funktionen für Webbrowser](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html), welcher normativ optional für Nicht-Browser-Laufzeiten ist. Daher wird empfohlen, stattdessen die standardmäßigen Methoden [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring) und [`String.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) zu verwenden, um den Code maximal plattformfreundlich zu gestalten. Die Seite zu [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr) enthält einige Vergleiche zwischen den drei Methoden.

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
  - : Der Index des ersten Zeichens, das im zurückgegebenen Substring enthalten sein soll.
- `length` {{optional_inline}}
  - : Die Anzahl der auszuziehenden Zeichen.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

Die `substr()`-Methode eines Strings extrahiert `length` Zeichen vom String, beginnend beim `start`-Index.

- Wenn `start >= str.length`, wird ein leerer String zurückgegeben.
- Wenn `start < 0`, beginnt der Index ab dem Ende des Strings. Formaler gesagt beginnt in diesem Fall der Substring bei `max(start + str.length, 0)`.
- Wenn `start` weggelassen oder als {{jsxref("undefined")}} angegeben wird, wird es als `0` behandelt.
- Wenn `length` weggelassen oder als {{jsxref("undefined")}} angegeben wird, oder wenn `start + length >= str.length`, extrahiert `substr()` Zeichen bis zum Ende des Strings.
- Wenn `length < 0`, wird ein leerer String zurückgegeben.
- Sowohl für `start` als auch `length` wird {{jsxref("NaN")}} als `0` behandelt.

Obwohl es empfohlen wird, `substr()` zu vermeiden, gibt es keinen trivialen Weg, `substr()` in bestehendem Code auf `slice()` oder `substring()` umzustellen, ohne im Wesentlichen ein Polyfill für `substr()` zu schreiben. Zum Beispiel geben `str.substr(a, l)`, `str.slice(a, a + l)` und `str.substring(a, a + l)` unterschiedliche Ergebnisse, wenn `str = "01234", a = 1, l = -2` — `substr()` gibt einen leeren String zurück, `slice()` gibt `"123"` zurück, während `substring()` `"0"` ergibt. Der tatsächliche Refactoring-Weg hängt vom Wissen über den Bereich von `a` und `l` ab.

## Beispiele

### Verwendung von substr()

<!-- cSpell:ignore ozilla -->

```js
const aString = "Mozilla";

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.substr` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.substr`](https://www.npmjs.com/package/string.prototype.substr)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
