---
title: Symbol.match
short-title: match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **statische** Daten-Eigenschaft **`Symbol.match`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.match`. Die Methode {{jsxref("String.prototype.match()")}} verwendet dieses Symbol beim ersten Argument, um die Methode zu bestimmen, die verwendet wird, um eine Eingabe-Zeichenfolge mit dem aktuellen Objekt abzugleichen. Dieses Symbol wird auch verwendet, um festzustellen, ob ein Objekt [als Regex behandelt werden sollte](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

Für weitere Informationen siehe [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) und {{jsxref("String.prototype.match()")}}.

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

Diese Funktion wird auch verwendet, um festzustellen, [ob Objekte das Verhalten von regulären Ausdrücken haben](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Beispielsweise prüfen die Methoden {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} und {{jsxref("String.prototype.includes()")}}, ob ihr erstes Argument ein regulärer Ausdruck ist, und werfen einen {{jsxref("TypeError")}}, wenn dies der Fall ist. Wenn jedoch das `match`-Symbol auf `false` (oder einen {{Glossary("Falsy", "falschen")}} Wert außer `undefined`) gesetzt ist, zeigt es an, dass das Objekt nicht als reguläres Ausdrucksobjekt verwendet werden soll.

## Beispiele

### Markieren eines RegExp als kein Regex

Der folgende Code wird einen {{jsxref("TypeError")}} werfen:

```js
"/bar/".startsWith(/bar/);

// Throws TypeError, as /bar/ is a regular expression
// and Symbol.match is not modified.
```

Wenn Sie jedoch `Symbol.match` auf `false` setzen, wird das Objekt als [kein reguläres Ausdrucksobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes) betrachtet. Die Methoden `startsWith` und `endsWith` werden infolgedessen keinen `TypeError` werfen.

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
