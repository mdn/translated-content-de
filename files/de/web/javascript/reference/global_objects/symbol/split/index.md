---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Symbol.split`** statische Dateneigenschaft repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.split`. Die Methode {{jsxref("String.prototype.split()")}} sucht dieses Symbol im ersten Argument, um die Methode zu finden, die einen String an den Indizes aufteilt, die mit dem aktuellen Objekt übereinstimmen.

Weitere Informationen finden Sie unter [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) und {{jsxref("String.prototype.split()")}}.

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

### Benutzerdefiniertes reverses Split

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
