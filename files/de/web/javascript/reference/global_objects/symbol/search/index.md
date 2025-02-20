---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Symbol.search`** statische Dateneigenschaft repräsentiert das [well-known symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.search`. Die Methode {{jsxref("String.prototype.search()")}} sucht in ihrem ersten Argument nach diesem Symbol für die Methode, die den Index innerhalb eines Strings zurückgibt, der mit dem aktuellen Objekt übereinstimmt.

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

Das well-known symbol `Symbol.search`.

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
