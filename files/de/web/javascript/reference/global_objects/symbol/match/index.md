---
title: Symbol.match
short-title: match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Dateneigenschaft **`Symbol.match`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.match`. Die Methode {{jsxref("String.prototype.match()")}} sucht in ihrem ersten Argument nach diesem Symbol, um die Methode zu finden, mit der eine Eingabezeichenfolge mit dem aktuellen Objekt abgeglichen wird. Dieses Symbol wird auch verwendet, um zu bestimmen, ob ein Objekt [als regulärer Ausdruck behandelt werden soll](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

Weitere Informationen finden Sie unter [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) und {{jsxref("String.prototype.match()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.match", "taller")}}

```js interactive-example
const regexp = /foo/;
// console.log('/foo/'.startsWith(regexp));
// Expected output (Chrome): Error: First argument to String.prototype.startsWith must not be a regular expression
// Expected output (Firefox): Error: Invalid type: first can't be a Regular Expression
// Expected output (Safari): Error: Argument to String.prototype.startsWith cannot be a RegExp

regexp[Symbol.match] = false;

console.log("/foo/".startsWith(regexp));
// Expected output: true

console.log("/baz/".endsWith(regexp));
// Expected output: false
```

## Wert

Das bekannte Symbol `Symbol.match`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Diese Funktion wird auch verwendet, um [Objekte mit dem Verhalten regulärer Ausdrücke zu erkennen](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Beispielsweise prüfen die Methoden {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} und {{jsxref("String.prototype.includes()")}}, ob ihr erstes Argument ein regulärer Ausdruck ist, und lösen in diesem Fall einen {{jsxref("TypeError")}} aus. Wenn das Symbol `match` auf `false` (oder einen {{Glossary("Falsy", "Falsy-Wert")}} außer `undefined`) gesetzt ist, zeigt dies an, dass das Objekt nicht als regulärer Ausdruck verwendet werden soll.

## Beispiele

### Ein RegExp als nicht regulären Ausdruck kennzeichnen

Der folgende Code löst einen {{jsxref("TypeError")}} aus:

```js
"/bar/".startsWith(/bar/);

// Throws TypeError, as /bar/ is a regular expression
// and Symbol.match is not modified.
```

Wenn Sie jedoch `Symbol.match` auf `false` setzen, wird das Objekt [nicht als regulärer Ausdruck betrachtet](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Die Methoden `startsWith` und `endsWith` lösen deshalb keinen `TypeError` aus.

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

- [Polyfill für `Symbol.match` in `core-js`](https://core-js.io/docs/features/ecmascript/symbol)
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
