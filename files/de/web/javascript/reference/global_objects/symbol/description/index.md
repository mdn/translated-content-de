---
title: Symbol.prototype.description
short-title: description
slug: Web/JavaScript/Reference/Global_Objects/Symbol/description
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`description`**-Zugriffs-Eigenschaft von {{jsxref("Symbol")}}-Werten gibt eine Zeichenfolge zurück, die die Beschreibung dieses Symbols enthält, oder `undefined`, wenn das Symbol keine Beschreibung hat.

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

{{jsxref("Symbol")}}-Objekte können mit einer optionalen Beschreibung erstellt werden, die zum Debuggen verwendet werden kann, aber nicht, um auf das Symbol selbst zuzugreifen. Die Eigenschaft `Symbol.prototype.description` kann verwendet werden, um diese Beschreibung zu lesen. Sie unterscheidet sich von `Symbol.prototype.toString()`, da sie nicht die umschließende Zeichenfolge `"Symbol()"` enthält. Siehe die Beispiele.

## Beispiele

### Nutzung der description

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

- [Polyfill von `Symbol.prototype.description` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [es-shims Polyfill von `Symbol.prototype.description`](https://www.npmjs.com/package/symbol.prototype.description)
- {{jsxref("Symbol.prototype.toString()")}}
