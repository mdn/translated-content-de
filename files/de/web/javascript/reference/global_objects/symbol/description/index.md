---
title: Symbol.prototype.description
short-title: description
slug: Web/JavaScript/Reference/Global_Objects/Symbol/description
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Accessor-Eigenschaft **`description`** von {{jsxref("Symbol")}}-Werten gibt einen String zurück, der die Beschreibung dieses Symbols enthält, oder `undefined`, wenn das Symbol keine Beschreibung hat.

{{InteractiveExample("JavaScript Demo: Symbol.prototype.description")}}

```js interactive-example
console.log(Symbol("desc").description);
// Expected output: "desc"

console.log(Symbol.iterator.description);
// Expected output: "Symbol.iterator"

console.log(Symbol.for("foo").description);
// Expected output: "foo"

console.log(`${Symbol("foo").description}bar`);
// Expected output: "foobar"
```

## Beschreibung

{{jsxref("Symbol")}}-Objekte können mit einer optionalen Beschreibung erstellt werden. Diese kann beim Debuggen helfen, dient aber nicht dazu, auf das Symbol selbst zuzugreifen. Mit der Eigenschaft `Symbol.prototype.description` können Sie diese Beschreibung auslesen. Anders als `Symbol.prototype.toString()` enthält sie nicht den umschließenden String `"Symbol()"`. Siehe die Beispiele.

## Beispiele

### description verwenden

```js
Symbol("desc").toString(); // "Symbol(desc)"
Symbol("desc").description; // "desc"
Symbol("").description; // ""
Symbol().description; // undefined

// well-known symbols
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"
Symbol.iterator.description; // "Symbol.iterator"

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
Symbol.for("foo").description; // "foo"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Symbol.prototype.description` in `core-js`](https://core-js.io/docs/features/ecmascript/symbol)
- [es-shims-Polyfill für `Symbol.prototype.description`](https://www.npmjs.com/package/symbol.prototype.description)
- {{jsxref("Symbol.prototype.toString()")}}
