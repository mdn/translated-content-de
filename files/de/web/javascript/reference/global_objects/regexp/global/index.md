---
title: RegExp.prototype.global
short-title: global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`global`** Zugriffs-Property von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `g`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.global")}}

```js interactive-example
const regex1 = /foo/g;

console.log(regex1.global);
// Expected output: true

const regex2 = /bar/i;

console.log(regex2.global);
// Expected output: false
```

## Beschreibung

`RegExp.prototype.global` hat den Wert `true`, wenn das `g`-Flag verwendet wurde; andernfalls `false`. Das `g`-Flag zeigt an, dass der reguläre Ausdruck auf alle möglichen Übereinstimmungen in einem String getestet werden soll. Jeder Aufruf von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) wird die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft aktualisieren, sodass der nächste Aufruf von `exec()` beim nächsten Zeichen beginnt.

Einige Methoden, wie z. B. [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), werden validieren, dass, wenn der Parameter ein Regex ist, es global ist. Die Methoden [`[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) des Regex (aufgerufen durch [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) und [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)) würden ebenfalls unterschiedliche Verhaltensweisen zeigen, wenn das Regex global ist.

Der Set-Zugriff von `global` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von global

```js
const globalRegex = /foo/g;

const str = "fooexamplefoo";
console.log(str.replace(globalRegex, "")); // example

const nonGlobalRegex = /foo/;
console.log(str.replace(nonGlobalRegex, "")); // examplefoo
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
