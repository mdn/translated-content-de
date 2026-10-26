---
title: String.prototype.trimStart()
short-title: trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`trimStart()`** von {{jsxref("String")}}-Werten entfernt Leerraumzeichen vom Anfang dieser Zeichenfolge und gibt eine neue Zeichenfolge zurück, ohne die ursprüngliche Zeichenfolge zu verändern. `trimLeft()` ist ein Alias für diese Methode.

{{InteractiveExample("JavaScript Demo: String.prototype.trimStart()")}}

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
```

## Syntax

```js-nolint
trimStart()

trimLeft()
```

### Parameter

Keine.

### Rückgabewert

Eine neue Zeichenfolge, die `str` ohne Leerraumzeichen am Anfang (auf der linken Seite) darstellt. Als Leerraumzeichen gelten [Leerraumzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) und [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Auch wenn `str` am Anfang keine Leerraumzeichen enthält, wird eine neue Zeichenfolge zurückgegeben (im Wesentlichen eine Kopie von `str`).

### Alias

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert worden war, implementierten Engines auch die nicht standardisierte Methode `trimLeft`. Als die Methode standardisiert wurde, wählte man jedoch aus Gründen der Konsistenz mit {{jsxref("String/padStart", "padStart()")}} den Namen `trimStart`. Aus Gründen der Webkompatibilität bleibt `trimLeft` ein Alias für `trimStart`; beide verweisen auf dasselbe Funktionsobjekt. In manchen Engines bedeutet das:

```js
String.prototype.trimLeft.name === "trimStart";
```

## Beispiele

### Verwendung von trimStart()

Das folgende Beispiel entfernt Leerraumzeichen am Anfang von `str`, nicht aber am Ende.

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.trimStart` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [es-shims-Polyfill für `String.prototype.trimStart`](https://www.npmjs.com/package/string.prototype.trimstart)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
