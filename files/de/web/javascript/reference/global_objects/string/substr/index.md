---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}} {{Deprecated_Header}}

Die **`substr()`**-Methode von {{jsxref("String")}}-Werten gibt einen Teil dieses Strings zurück, beginnend am angegebenen Index und erweitert um eine bestimmte Anzahl von Zeichen danach.

> **Note:** `substr()` ist kein Teil der Haupt-ECMAScript-Spezifikation — es ist definiert in [Anhang B: Zusätzliche ECMAScript-Features für Webbrowser](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html), welches normativ optional für Nicht-Browser-Laufzeiten ist. Daher wird empfohlen, die Standardmethoden [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring) und [`String.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) zu verwenden, um den Code maximal plattformunabhängig zu gestalten. Die [`String.prototype.substring()`-Seite](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr) bietet einige Vergleiche zwischen den drei Methoden.

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## Syntax

```js-nolint
substr(start)
substr(start, length)
```

### Parameter

- `start`
  - : Der Index des ersten Zeichens, das im zurückgegebenen Substring enthalten sein soll.
- `length` {{optional_inline}}
  - : Die Anzahl der Zeichen, die extrahiert werden sollen.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

Die `substr()`-Methode eines Strings extrahiert `length` Zeichen aus dem String, beginnend beim `start`-Index.

- Wenn `start >= str.length`, wird ein leerer String zurückgegeben.
- Wenn `start < 0`, beginnt der Index zu zählen vom Ende des Strings. Formaler beginnt in diesem Fall das Substring bei `max(start + str.length, 0)`.
- Wenn `start` weggelassen wird oder {{jsxref("undefined")}}, wird er als `0` behandelt.
- Wenn `length` weggelassen wird oder {{jsxref("undefined")}}, oder wenn `start + length >= str.length`, extrahiert `substr()` Zeichen bis zum Ende des Strings.
- Wenn `length < 0`, wird ein leerer String zurückgegeben.
- Sowohl für `start` als auch `length` wird {{jsxref("NaN")}} als `0` behandelt.

Obwohl Sie ermutigt werden, `substr()` zu vermeiden, gibt es keinen trivialen Weg, `substr()` in Altcode zu `slice()` oder `substring()` zu migrieren, ohne im Wesentlichen ein Polyfill für `substr()` zu schreiben. Zum Beispiel liefern `str.substr(a, l)`, `str.slice(a, a + l)` und `str.substring(a, a + l)` unterschiedliche Ergebnisse, wenn `str = "01234", a = 1, l = -2` — `substr()` gibt einen leeren String zurück, `slice()` gibt `"123"` zurück, während `substring()` `"0"` zurückgibt. Der eigentliche Refaktorisierungspfad hängt von der Kenntnis des Bereichs von `a` und `l` ab.

## Beispiele

### Verwendung von substr()

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
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
