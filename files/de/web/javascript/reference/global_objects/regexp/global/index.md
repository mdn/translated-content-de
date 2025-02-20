---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`global`** Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt zurück, ob das `g`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.global")}}

```js interactive-example
const regex1 = new RegExp("foo", "g");

console.log(regex1.global);
// Expected output: true

const regex2 = new RegExp("bar", "i");

console.log(regex2.global);
// Expected output: false
```

## Beschreibung

`RegExp.prototype.global` hat den Wert `true`, wenn das `g`-Flag verwendet wurde; andernfalls `false`. Das `g`-Flag gibt an, dass der reguläre Ausdruck auf alle möglichen Übereinstimmungen in einem String geprüft werden soll. Jeder Aufruf von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft, sodass der nächste Aufruf von `exec()` beim nächsten Zeichen beginnt.

Einige Methoden, wie [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), überprüfen, ob der Parameter, falls es sich um einen regulären Ausdruck handelt, global ist. Die Methoden [`[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) des regulären Ausdrucks (aufgerufen von [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) und [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)) zeigen ebenfalls ein unterschiedliches Verhalten, wenn der reguläre Ausdruck global ist.

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
