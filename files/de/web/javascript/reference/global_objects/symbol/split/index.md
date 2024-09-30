---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
l10n:
  sourceCommit: e2dd7ae35f27c814d6017b79dac87e23c7996837
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.split`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.split`. Die Methode {{jsxref("String.prototype.split()")}} sucht in ihrem ersten Argument nach diesem Symbol für die Methode, die einen String an den Indizes aufteilt, die mit dem aktuellen Objekt übereinstimmen.

Für weitere Informationen siehe [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) und {{jsxref("String.prototype.split()")}}.

{{EmbedInteractiveExample("pages/js/symbol-split.html", "taller")}}

## Wert

Das wohlbekannte Symbol `Symbol.split`.

{{js_property_attributes(0, 0, 0)}}

## Beispiele

### Benutzerdefiniertes umgekehrtes Split

```js
class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(" ");
    return array.reverse();
  }
}

console.log("Another one bites the dust".split(new ReverseSplit()));
// [ "dust", "the", "bites", "one", "Another" ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol.split` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("String.prototype.split()")}}
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
