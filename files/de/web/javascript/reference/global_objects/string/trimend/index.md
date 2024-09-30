---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die Methode **`trimEnd()`** von {{jsxref("String")}}-Werten entfernt Leerzeichen vom Ende des Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu verändern. `trimRight()` ist ein Alias für diese Methode.

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

## Syntax

```js-nolint
trimEnd()

trimRight()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der `str` darstellt und von Leerzeichen an seinem Ende (rechte Seite) befreit ist. Leerzeichen sind als [Leerraumzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) plus [Zeilenbegrenzungen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) definiert.

Wenn das Ende von `str` keine Leerzeichen enthält, wird trotzdem ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

### Aliasing

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert wurde, implementierten Engines auch die nicht standardisierte Methode `trimRight`. Jedoch wurde, um Konsistenz mit {{jsxref("String/padEnd", "padEnd()")}} zu gewährleisten, bei der Standardisierung dieser Methode der Name `trimEnd` gewählt. Aus Gründen der Web-Kompatibilität bleibt `trimRight` als Alias für `trimEnd` erhalten, und sie beziehen sich auf dasselbe Funktionsobjekt. In einigen Engines bedeutet dies:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Beispiele

### Verwendung von trimEnd()

Im folgenden Beispiel werden Leerzeichen vom Ende von `str` entfernt, aber nicht vom Anfang.

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.trimEnd` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
