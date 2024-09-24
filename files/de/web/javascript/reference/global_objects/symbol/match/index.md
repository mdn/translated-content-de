---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`Symbol.match`** statische Dateneigenschaft repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.match`. Die Methode {{jsxref("String.prototype.match()")}} sucht dieses Symbol im ersten Argument für die Methode, die verwendet wird, um einen Eingabestring mit dem aktuellen Objekt abzugleichen. Dieses Symbol wird auch verwendet, um zu bestimmen, ob ein Objekt [als regulärer Ausdruck behandelt werden soll](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

Für weitere Informationen siehe [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) und {{jsxref("String.prototype.match()")}}.

{{EmbedInteractiveExample("pages/js/symbol-match.html", "taller")}}

## Wert

Das bekannte Symbol `Symbol.match`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Diese Funktion wird auch verwendet, um [zu identifizieren, ob Objekte das Verhalten von regulären Ausdrücken haben](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Beispielsweise überprüfen die Methoden {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} und {{jsxref("String.prototype.includes()")}}, ob ihr erstes Argument ein regulärer Ausdruck ist und werfen einen {{jsxref("TypeError")}}, wenn es so ist. Wenn das `match`-Symbol jedoch auf `false` (oder einen [Falsy](/de/docs/Glossary/Falsy) Wert, außer `undefined`) gesetzt ist, zeigt es an, dass das Objekt nicht als reguläres Ausdrucksobjekt verwendet werden soll.

## Beispiele

### Markieren eines RegExp als keinen regulären Ausdruck

Der folgende Code wird einen {{jsxref("TypeError")}} werfen:

```js
"/bar/".startsWith(/bar/);

// TypeError wird ausgelöst, da /bar/ ein regulärer Ausdruck ist
// und Symbol.match nicht verändert wurde.
```

Wenn Sie jedoch `Symbol.match` auf `false` setzen, wird das Objekt als [kein reguläres Ausdrucksobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes) betrachtet. Die Methoden `startsWith` und `endsWith` werden folglich keinen `TypeError` werfen.

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
