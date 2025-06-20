---
title: Symbol.match
short-title: match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.match`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.match`. Die Methode {{jsxref("String.prototype.match()")}} sucht dieses Symbol im ersten Argument, um die Methode zu finden, die eine Eingabestring gegen das aktuelle Objekt vergleicht. Dieses Symbol wird auch verwendet, um zu bestimmen, ob ein Objekt [als RegExp behandelt werden soll](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

Weitere Informationen finden Sie unter [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) und {{jsxref("String.prototype.match()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.match", "taller")}}

```js interactive-example
const regexp1 = /foo/;
// console.log('/foo/'.startsWith(regexp1));
// Expected output (Chrome): Error: First argument to String.prototype.startsWith must not be a regular expression
// Expected output (Firefox): Error: Invalid type: first can't be a Regular Expression
// Expected output (Safari): Error: Argument to String.prototype.startsWith cannot be a RegExp

regexp1[Symbol.match] = false;

console.log("/foo/".startsWith(regexp1));
// Expected output: true

console.log("/baz/".endsWith(regexp1));
// Expected output: false
```

## Wert

Das bekannte Symbol `Symbol.match`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Diese Funktion wird auch verwendet, um [zu identifizieren, ob Objekte das Verhalten von regulären Ausdrücken aufweisen](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Beispielsweise überprüfen die Methoden {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} und {{jsxref("String.prototype.includes()")}}, ob ihr erstes Argument ein regulärer Ausdruck ist, und werfen einen {{jsxref("TypeError")}}, wenn sie es sind. Wenn das `match`-Symbol auf `false` (oder einen {{Glossary("Falsy", "Falsy")}}-Wert außer `undefined`) gesetzt ist, zeigt es an, dass das Objekt nicht als reguläres Ausdrucksobjekt verwendet werden soll.

## Beispiele

### Ein RegExp als kein Regex kennzeichnen

Der folgende Code wird einen {{jsxref("TypeError")}} werfen:

```js
"/bar/".startsWith(/bar/);

// Throws TypeError, as /bar/ is a regular expression
// and Symbol.match is not modified.
```

Wenn Sie jedoch `Symbol.match` auf `false` setzen, wird das Objekt als [kein reguläres Ausdrucksobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes) betrachtet. Die Methoden `startsWith` und `endsWith` werfen infolgedessen keinen `TypeError`.

```js
const re = /foo/;
re[Symbol.match] = false;
"/foo/".startsWith(re); // true
"/baz/".endsWith(re); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol.match` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
