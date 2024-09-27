---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`global`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `g`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-global.html")}}

## Beschreibung

`RegExp.prototype.global` hat den Wert `true`, wenn das `g`-Flag verwendet wurde; andernfalls `false`. Das `g`-Flag gibt an, dass der reguläre Ausdruck auf alle möglichen Übereinstimmungen in einem String getestet werden soll. Jeder Aufruf von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) wird die `lastIndex` Eigenschaft aktualisieren, damit der nächste Aufruf von `exec()` beim nächsten Zeichen beginnt.

Einige Methoden, wie [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), werden überprüfen, ob, falls der Parameter ein Regex ist, er global ist. Die Methoden des Regex [`[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) (aufgerufen von [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) und [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)) würden ebenfalls ein unterschiedliches Verhalten aufweisen, wenn der Regex global ist.

Der Set-Accessor von `global` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von global

```js
const regex = /foo/g;
console.log(regex.global); // true

const str = "fooexamplefoo";
const str1 = str.replace(regex, "");
console.log(str1); // example

const regex1 = /foo/;
const str2 = str.replace(regex1, "");
console.log(str2); // examplefoo
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
