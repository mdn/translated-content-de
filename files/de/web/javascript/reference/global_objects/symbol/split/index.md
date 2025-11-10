---
title: Symbol.split
short-title: split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Dateneigenschaft **`Symbol.split`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.split`. Die Methode {{jsxref("String.prototype.split()")}} sucht dieses Symbol im ersten Argument für die Methode, die einen String an den Indizes aufteilt, die mit dem aktuellen Objekt übereinstimmen.

Für mehr Informationen siehe [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) und {{jsxref("String.prototype.split()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.split", "taller")}}

```js interactive-example
class Split1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    const index = string.indexOf(this.value);
    return `${this.value}${string.substring(0, index)}/${string.substring(
      index + this.value.length,
    )}`;
  }
}

console.log("foobar".split(new Split1("foo")));
// Expected output: "foo/bar"
```

## Wert

Das bekannte Symbol `Symbol.split`.

{{js_property_attributes(0, 0, 0)}}

## Beispiele

### Benutzerdefiniertes Rückwärts-Split

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
