---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Symbol.match`** statische Daten-Eigenschaft repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.match`. Die Methode {{jsxref("String.prototype.match()")}} ruft dieses Symbol im ersten Argument auf, um die Methode zu finden, die verwendet wird, um einen Eingabestring mit dem aktuellen Objekt abzugleichen. Dieses Symbol wird auch verwendet, um zu bestimmen, ob ein Objekt [als regulärer Ausdruck behandelt werden sollte](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

Für weitere Informationen siehe [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) und {{jsxref("String.prototype.match()")}}.

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

Das wohlbekannte Symbol `Symbol.match`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Diese Funktion wird ebenfalls verwendet, um [zu identifizieren, ob Objekte das Verhalten von regulären Ausdrücken haben](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Zum Beispiel überprüfen die Methoden {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} und {{jsxref("String.prototype.includes()")}}, ob ihr erstes Argument ein regulärer Ausdruck ist, und werfen einen {{jsxref("TypeError")}}, falls dies zutrifft. Wird das Symbol `match` jedoch auf `false` (oder einen {{Glossary("Falsy", "Falsy")}}-Wert außer `undefined`) gesetzt, zeigt dies an, dass das Objekt nicht als reguläres Ausdrucksobjekt verwendet werden soll.

## Beispiele

### Markieren eines RegExp als kein regulärer Ausdruck

Der folgende Code wird einen {{jsxref("TypeError")}} auslösen:

```js
"/bar/".startsWith(/bar/);

// Throws TypeError, as /bar/ is a regular expression
// and Symbol.match is not modified.
```

Wenn Sie jedoch `Symbol.match` auf `false` setzen, wird das Objekt als [kein reguläres Ausdrucksobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes) behandelt. Die Methoden `startsWith` und `endsWith` werden deshalb keinen `TypeError` werfen.

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
