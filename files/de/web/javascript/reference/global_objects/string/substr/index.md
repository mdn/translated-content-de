---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}} {{Deprecated_Header}}

Die **`substr()`**-Methode von {{jsxref("String")}}-Werten gibt einen Teil dieses Strings zurück, beginnend beim angegebenen Index und verlaufend für eine bestimmte Anzahl von Zeichen.

> **Hinweis:** `substr()` ist kein Teil der Haupt-ECMAScript-Spezifikation — es ist in [Anhang B: Zusätzliche ECMAScript-Features für Webbrowser](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) definiert, welches normativ optional für Nicht-Browser-Laufzeiten ist. Daher wird empfohlen, stattdessen die standardisierten Methoden [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring) und [`String.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) zu verwenden, um den Code möglichst plattformübergreifend kompatibel zu machen. Die Seite [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr) enthält einige Vergleiche zwischen den drei Methoden.

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
  - : Die Anzahl der zu extrahierenden Zeichen.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

Die `substr()`-Methode eines Strings extrahiert `length` Zeichen aus dem String, beginnend beim `start`-Index.

- Wenn `start >= str.length`, wird ein leerer String zurückgegeben.
- Wenn `start < 0` ist, beginnt der Index vom Ende des Strings zu zählen. Formaler ausgedrückt beginnt in diesem Fall der Substring bei `max(start + str.length, 0)`.
- Wenn `start` weggelassen wird oder {{jsxref("undefined")}}, wird es als `0` behandelt.
- Wenn `length` weggelassen wird oder {{jsxref("undefined")}}, oder wenn `start + length >= str.length`, extrahiert `substr()` Zeichen bis zum Ende des Strings.
- Wenn `length < 0` ist, wird ein leerer String zurückgegeben.
- Sowohl für `start` als auch für `length` wird {{jsxref("NaN")}} als `0` behandelt.

Obwohl davon abgeraten wird, `substr()` zu verwenden, gibt es keine einfache Möglichkeit, `substr()` in Altem Code durch `slice()` oder `substring()` zu ersetzen, ohne im Wesentlichen ein Polyfill für `substr()` zu schreiben. Zum Beispiel liefern `str.substr(a, l)`, `str.slice(a, a + l)` und `str.substring(a, a + l)` unterschiedliche Ergebnisse, wenn `str = "01234", a = 1, l = -2` — `substr()` gibt einen leeren String zurück, `slice()` liefert `"123"`, während `substring()` `"0"` zurückgibt. Der tatsächliche Pfad zur Umstrukturierung hängt vom Wissen über den Bereich von `a` und `l` ab.

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
