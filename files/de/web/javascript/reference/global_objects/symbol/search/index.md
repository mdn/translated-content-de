---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`Symbol.search`** statische Dateneigenschaft repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.search`. Die {{jsxref("String.prototype.search()")}}-Methode prüft dieses Symbol bei ihrem ersten Argument auf die Methode, die den Index innerhalb eines Strings zurückgibt, der mit dem aktuellen Objekt übereinstimmt.

Für mehr Informationen, siehe [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) und {{jsxref("String.prototype.search()")}}.

{{EmbedInteractiveExample("pages/js/symbol-search.html")}}

## Wert

Das wohlbekannte Symbol `Symbol.search`.

{{js_property_attributes(0, 0, 0)}}

## Beispiele

### Benutzerdefinierte String-Suche

```js
class caseInsensitiveSearch {
  constructor(value) {
    this.value = value.toLowerCase();
  }
  [Symbol.search](string) {
    return string.toLowerCase().indexOf(this.value);
  }
}

console.log("foobar".search(new caseInsensitiveSearch("BaR"))); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol.search` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.search()")}}
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
