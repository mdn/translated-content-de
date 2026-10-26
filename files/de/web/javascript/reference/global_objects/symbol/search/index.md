---
title: Symbol.search
short-title: search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Dateneigenschaft **`Symbol.search`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.search`. Die Methode {{jsxref("String.prototype.search()")}} sucht auf ihrem ersten Argument nach diesem Symbol, um die Methode zu finden, die den Index innerhalb eines Strings zurückgibt, an dem eine Übereinstimmung mit dem aktuellen Objekt vorliegt.

Weitere Informationen finden Sie unter [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) und {{jsxref("String.prototype.search()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.search")}}

```js interactive-example
class Search1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}

console.log("foobar".search(new Search1("bar")));
// Expected output: 3
```

## Wert

Das bekannte Symbol `Symbol.search`.

{{js_property_attributes(0, 0, 0)}}

## Beispiele

### Benutzerdefinierte String-Suche

```js
class CaseInsensitiveSearch {
  constructor(value) {
    this.value = value.toLowerCase();
  }
  [Symbol.search](string) {
    return string.toLowerCase().indexOf(this.value);
  }
}

console.log("foobar".search(new CaseInsensitiveSearch("BaR"))); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Symbol.search` in `core-js`](https://core-js.io/docs/features/ecmascript/symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.search()")}}
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
