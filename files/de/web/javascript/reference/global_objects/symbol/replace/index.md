---
title: Symbol.replace
slug: Web/JavaScript/Reference/Global_Objects/Symbol/replace
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.replace`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.replace`. Die Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}} suchen dieses Symbol im ersten Argument nach der Methode, die durch das aktuelle Objekt übereinstimmende Unterstrings ersetzt.

Für weitere Informationen siehe [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), {{jsxref("String.prototype.replace()")}}, und {{jsxref("String.prototype.replaceAll()")}}.

{{EmbedInteractiveExample("pages/js/symbol-replace.html")}}

## Wert

Das wohlbekannte Symbol `Symbol.replace`.

{{js_property_attributes(0, 0, 0)}}

## Beispiele

### Verwendung von Symbol.replace

```js
class CustomReplacer {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return string.replace(this.value, "#!@?");
  }
}

console.log("football".replace(new CustomReplacer("foo"))); // "#!@?tball"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol.replace` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.replaceAll()")}}
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
