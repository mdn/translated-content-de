---
title: RegExp.prototype.global
short-title: global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Die **`global`**-Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt zurück, ob für diesen regulären Ausdruck das `g`-Flag verwendet wird.

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

`RegExp.prototype.global` hat den Wert `true`, wenn das `g`-Flag verwendet wurde, andernfalls `false`. Das `g`-Flag gibt an, dass der reguläre Ausdruck auf alle möglichen Übereinstimmungen in einer Zeichenfolge geprüft werden soll. Jeder Aufruf von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) aktualisiert die Eigenschaft [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex), sodass der nächste Aufruf von `exec()` beim nächsten Zeichen beginnt.

Einige Methoden, etwa [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) und [`String.prototype.replaceAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), prüfen, ob ein als Parameter übergebener regulärer Ausdruck global ist. Auch die Methoden [`[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) und [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) des regulären Ausdrucks (die von [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) beziehungsweise [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) aufgerufen werden) verhalten sich anders, wenn der reguläre Ausdruck global ist.

Der Set-Accessor von `global` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Aus Gründen der Abwärtskompatibilität gilt `RegExp.prototype.global === undefined`, obwohl `RegExp.prototype` keine `RegExp`-Instanz ist. (Eigentlich wäre zu erwarten, dass der Getter einen `TypeError` auslöst, wenn der `this`-Wert keine `RegExp`-Instanz ist.)

## Beispiele

### global verwenden

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
