---
title: Symbol.prototype.description
slug: Web/JavaScript/Reference/Global_Objects/Symbol/description
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`description`** Accessor-Eigenschaft von {{jsxref("Symbol")}}-Werten gibt eine Zeichenkette zurück, die die Beschreibung dieses Symbols enthält, oder `undefined`, wenn das Symbol keine Beschreibung hat.

{{EmbedInteractiveExample("pages/js/symbol-prototype-description.html")}}

## Beschreibung

{{jsxref("Symbol")}}-Objekte können mit einer optionalen Beschreibung erstellt werden, die zum Debuggen, jedoch nicht zum Zugriff auf das Symbol selbst verwendet werden kann. Die `Symbol.prototype.description`-Eigenschaft kann verwendet werden, um diese Beschreibung auszulesen. Sie unterscheidet sich von `Symbol.prototype.toString()`, da sie die umschließende Zeichenkette `"Symbol()"` nicht enthält. Siehe die Beispiele.

## Beispiele

### Verwendung von description

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
- {{jsxref("Symbol.prototype.toString()")}}
