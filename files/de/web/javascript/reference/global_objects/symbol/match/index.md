---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`Symbol.match`** statische Daten-Eigenschaft repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.match`. Die Methode {{jsxref("String.prototype.match()")}} sucht dieses Symbol in ihrem ersten Argument, um die Methode zu finden, die verwendet wird, um eine Eingabestring gegen das aktuelle Objekt abzugleichen. Dieses Symbol wird auch verwendet, um zu bestimmen, ob ein Objekt [als Regex behandelt werden sollte](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

Für weitere Informationen siehe [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) und {{jsxref("String.prototype.match()")}}.

{{EmbedInteractiveExample("pages/js/symbol-match.html", "taller")}}

## Wert

Das wohlbekannte Symbol `Symbol.match`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Diese Funktion wird auch verwendet, um zu identifizieren, [ob Objekte das Verhalten von regulären Ausdrücken haben](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Zum Beispiel prüfen die Methoden {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} und {{jsxref("String.prototype.includes()")}}, ob ihr erstes Argument ein regulärer Ausdruck ist und werfen einen {{jsxref("TypeError")}}, wenn dies der Fall ist. Wenn das `match`-Symbol auf `false` gesetzt ist (oder auf einen [falsy](/de/docs/Glossary/Falsy) Wert außer `undefined`), zeigt dies an, dass das Objekt nicht als reguläres Ausdruck-Objekt verwendet werden soll.

## Beispiele

### Ein RegExp als kein Regex markieren

Der folgende Code wirft einen {{jsxref("TypeError")}}:

```js
"/bar/".startsWith(/bar/);

// Throws TypeError, as /bar/ is a regular expression
// and Symbol.match is not modified.
```

Wenn Sie jedoch `Symbol.match` auf `false` setzen, wird das Objekt als [kein reguläres Ausdruck-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes) betrachtet. Die Methoden `startsWith` und `endsWith` werden dadurch keinen `TypeError` werfen.

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
