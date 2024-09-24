---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`global`** Accessor-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `g`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-global.html")}}

## Beschreibung

`RegExp.prototype.global` hat den Wert `true`, wenn das `g`-Flag verwendet wurde; andernfalls `false`. Das `g`-Flag weist darauf hin, dass der reguläre Ausdruck gegen alle möglichen Übereinstimmungen in einem String getestet werden soll. Jeder Aufruf von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) wird seine [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) Eigenschaft aktualisieren, sodass der nächste Aufruf von `exec()` beim nächsten Zeichen beginnt.

Einige Methoden, wie zum Beispiel [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), überprüfen, ob der Parameter, falls es sich um ein Regex handelt, global ist. Die Methoden [`[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) des Regex (aufgerufen von [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) und [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)) würden ebenfalls ein anderes Verhalten zeigen, wenn das Regex global ist.

Der set Accessor von `global` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
