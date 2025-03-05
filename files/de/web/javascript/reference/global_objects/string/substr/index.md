---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}} {{Deprecated_Header}}

Die Methode **`substr()`** von {{jsxref("String")}}-Werten gibt einen Teil dieses Strings zurück, beginnend am angegebenen Index und fortgesetzt für eine bestimmte Anzahl von Zeichen danach.

> **Hinweis:** `substr()` ist nicht Teil der Hauptspezifikation von ECMAScript — es ist in [Anhang B: Zusätzliche ECMAScript-Funktionen für Webbrowser](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) definiert, welches normativ optional für Nicht-Browser-Ausführungsumgebungen ist. Daher wird empfohlen, stattdessen die Standardmethoden [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring) und [`String.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) zu verwenden, um den Code maximal plattformfreundlich zu gestalten. Die Seite zu [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr) enthält einige Vergleiche zwischen den drei Methoden.

{{InteractiveExample("JavaScript Demo: String.substr()")}}

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
  - : Der Index des ersten Zeichens, das in die zurückgegebene Teilzeichenkette eingeschlossen werden soll.
- `length` {{optional_inline}}
  - : Die Anzahl der zu extrahierenden Zeichen.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

Die `substr()`-Methode eines Strings extrahiert `length` Zeichen aus dem String, ausgehend vom `start`-Index.

- Wenn `start >= str.length`, wird ein leerer String zurückgegeben.
- Wenn `start < 0`, beginnt der Index vom Ende des Strings zu zählen. Formal beginnt die Teilzeichenkette in diesem Fall bei `max(start + str.length, 0)`.
- Wenn `start` ausgelassen oder {{jsxref("undefined")}} ist, wird es als `0` behandelt.
- Wenn `length` ausgelassen oder {{jsxref("undefined")}} ist oder wenn `start + length >= str.length`, extrahiert `substr()` Zeichen bis zum Ende des Strings.
- Wenn `length < 0`, wird ein leerer String zurückgegeben.
- Für sowohl `start` als auch `length` wird {{jsxref("NaN")}} als `0` behandelt.

Obwohl empfohlen wird, `substr()` zu vermeiden, gibt es keinen trivialen Weg, `substr()` in Legacy-Code ohne im Wesentlichen Schreiben eines Polyfills für `substr()` auf `slice()` oder `substring()` zu migrieren. Zum Beispiel haben `str.substr(a, l)`, `str.slice(a, a + l)`, und `str.substring(a, a + l)` alle unterschiedliche Ergebnisse, wenn `str = "01234", a = 1, l = -2` — `substr()` gibt einen leeren String zurück, `slice()` gibt `"123"` zurück, während `substring()` `"0"` zurückgibt. Der eigentliche Refaktorierungsweg hängt vom Wissen über den Bereich von `a` und `l` ab.

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
