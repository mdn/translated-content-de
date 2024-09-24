---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`trimEnd()`**-Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen vom Ende dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu verändern. `trimRight()` ist ein Alias dieser Methode.

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

## Syntax

```js-nolint
trimEnd()

trimRight()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der `str` darstellt und um Leerzeichen von seinem Ende (rechte Seite) bereinigt ist. Leerzeichen werden als [weiße Zeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) plus [Zeilenbegrenzer](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) definiert.

Wenn das Ende von `str` keine Leerzeichen enthält, wird dennoch ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

### Aliasing

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert wurde, implementierten Engines auch die nicht standardisierte Methode `trimRight`. Um jedoch konsistent mit {{jsxref("String/padEnd", "padEnd()")}} zu bleiben, wurde der Name der Methode bei der Standardisierung als `trimEnd` gewählt. Aus Gründen der Web-Kompatibilität bleibt `trimRight` als Alias für `trimEnd` und sie beziehen sich auf dasselbe Funktionsobjekt. In einigen Engines bedeutet dies:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Beispiele

### Verwendung von trimEnd()

Das folgende Beispiel entfernt Leerzeichen vom Ende von `str`, jedoch nicht vom Anfang.

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
