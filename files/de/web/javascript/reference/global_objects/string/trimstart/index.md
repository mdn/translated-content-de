---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`trimStart()`**-Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen vom Anfang dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu verändern. `trimLeft()` ist ein Alias für diese Methode.

{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## Syntax

```js-nolint
trimStart()

trimLeft()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der `str` darstellt, von dem die Leerzeichen am Anfang (linke Seite) entfernt wurden. Leerzeichen sind definiert als [Weißraum](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen plus [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Wenn der Anfang von `str` keine Leerzeichen hat, wird dennoch ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

### Aliasing

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert wurde, implementierten Engines auch die nicht standardisierte Methode `trimLeft`. Um jedoch konsistent mit {{jsxref("String/padStart", "padStart()")}} zu sein, wurde bei der Standardisierung der Name `trimStart` gewählt. Aus Gründen der Web-Kompatibilität bleibt `trimLeft` ein Alias für `trimStart`, und sie beziehen sich auf dasselbe Funktionsobjekt. In einigen Engines bedeutet dies:

```js
String.prototype.trimLeft.name === "trimStart";
```

## Beispiele

### Verwendung von trimStart()

Im folgenden Beispiel werden Leerzeichen vom Anfang von `str` entfernt, jedoch nicht vom Ende.

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

- [Polyfill von `String.prototype.trimStart` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
