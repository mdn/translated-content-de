---
title: String.prototype.substr()
short-title: substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{Deprecated_Header}}

Die **`substr()`** Methode von {{jsxref("String")}} Werten gibt einen Teil dieses Strings zurück, beginnend bei dem angegebenen Index und in der Folge eine bestimmte Anzahl von Zeichen.

> [!NOTE]
> `substr()` ist nicht Teil der Haupt-ECMAScript-Spezifikation — es ist in [Anhang B: Zusätzliche ECMAScript-Funktionen für Web-Browser](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) definiert, der optional normativ für nicht-browserbasierte Laufzeiten ist. Deshalb wird empfohlen, stattdessen die Standardmethoden [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring) und [`String.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) zu verwenden, um den Code möglichst plattformübergreifend kompatibel zu machen. Die Seite zu [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr) bietet einige Vergleiche zwischen den drei Methoden.

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
  - : Der Index des ersten Zeichens, das in die zurückgegebene Teilzeichenkette aufgenommen werden soll.
- `length` {{optional_inline}}
  - : Die Anzahl der zu extrahierenden Zeichen.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

Die `substr()` Methode eines Strings extrahiert `length` Zeichen aus dem String, beginnend beim `start` Index.

- Wenn `start >= str.length`, wird ein leerer String zurückgegeben.
- Wenn `start < 0`, beginnt der Index von hinten im String zu zählen. Genauer gesagt, beginnt die Teilzeichenkette in diesem Fall bei `max(start + str.length, 0)`.
- Wenn `start` weggelassen wird oder {{jsxref("undefined")}} ist, wird es als `0` behandelt.
- Wenn `length` weggelassen wird oder {{jsxref("undefined")}} ist, oder wenn `start + length >= str.length`, extrahiert `substr()` Zeichen bis zum Ende des Strings.
- Wenn `length < 0`, wird ein leerer String zurückgegeben.
- Sowohl für `start` als auch für `length` wird {{jsxref("NaN")}} als `0` behandelt.

Obwohl empfohlen wird, `substr()` zu vermeiden, gibt es keinen trivialen Weg, `substr()` in alten Code auf `slice()` oder `substring()` zu migrieren, ohne im Wesentlichen ein Polyfill für `substr()` zu erstellen. Zum Beispiel haben `str.substr(a, l)`, `str.slice(a, a + l)`, und `str.substring(a, a + l)` alle unterschiedliche Ergebnisse, wenn `str = "01234", a = 1, l = -2` — `substr()` gibt einen leeren String zurück, `slice()` gibt `"123"` zurück, während `substring()` `"0"` zurückgibt. Der tatsächliche Refactoring-Pfad hängt vom Wissen über den Bereich von `a` und `l` ab.

## Beispiele

### Verwendung von substr()

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

- [Polyfill von `String.prototype.substr` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.substr`](https://www.npmjs.com/package/string.prototype.substr)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
