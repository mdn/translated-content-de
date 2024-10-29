---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{JSRef}} {{Deprecated_Header}}

Die **`substr()`** Methode von {{jsxref("String")}} Werten gibt einen Teil dieses Strings zurück, beginnend bei dem angegebenen Index und erstreckt sich über eine bestimmte Anzahl von Zeichen danach.

> **Hinweis:** `substr()` ist nicht Teil der Haupt-ECMAScript-Spezifikation — es ist definiert in [Anhang B: Zusätzliche ECMAScript-Funktionen für Webbrowser](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html), welches optional normativ für Nicht-Browser-Laufzeitumgebungen ist. Daher wird empfohlen, stattdessen die Standardmethoden [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring) und [`String.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) zu verwenden, um den Code möglichst plattformübergreifend freundlich zu gestalten. Die Seite von [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr) bietet einige Vergleiche zwischen den drei Methoden.

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

Die `substr()` Methode eines Strings extrahiert `length` Zeichen aus dem String, beginnend ab dem `start` Index.

- Wenn `start >= str.length`, wird ein leerer String zurückgegeben.
- Wenn `start < 0`, beginnt der Index vom Ende des Strings zu zählen. Formaler ausgedrückt beginnt der Substring in diesem Fall bei `max(start + str.length, 0)`.
- Wenn `start` weggelassen oder als {{jsxref("undefined")}} angegeben wird, wird er als `0` behandelt.
- Wenn `length` weggelassen oder als {{jsxref("undefined")}} angegeben wird, oder wenn `start + length >= str.length`, extrahiert `substr()` Zeichen bis zum Ende des Strings.
- Wenn `length < 0`, wird ein leerer String zurückgegeben.
- Sowohl für `start` als auch `length` wird {{jsxref("NaN")}} als `0` behandelt.

Obwohl es empfohlen wird, `substr()` nicht zu verwenden, gibt es keinen trivialen Weg, `substr()` in altem Code zu `slice()` oder `substring()` zu migrieren, ohne im Wesentlichen ein Polyfill für `substr()` zu schreiben. Zum Beispiel haben `str.substr(a, l)`, `str.slice(a, a + l)` und `str.substring(a, a + l)` alle unterschiedliche Ergebnisse, wenn `str = "01234", a = 1, l = -2` sind — `substr()` gibt einen leeren String zurück, `slice()` gibt `"123"` zurück, während `substring()` `"0"` zurückgibt. Der tatsächliche Refactoring-Pfad hängt von der Kenntnis des Bereichs von `a` und `l` ab.

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
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
