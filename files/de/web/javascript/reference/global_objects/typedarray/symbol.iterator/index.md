---
title: TypedArray.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.iterator]()`** Methode von {{jsxref("TypedArray")}} Instanzen implementiert das [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es, dass typisierte Arrays von den meisten Syntaxen, die Iterables erwarten, wie der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen, konsumiert werden. Sie gibt ein [Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das den Wert jedes Indexes im typisierten Array liefert.

Der anfängliche Wert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der anfängliche Wert der {{jsxref("TypedArray.prototype.values")}} Eigenschaft.

{{EmbedInteractiveExample("pages/js/typedarray-prototype-@@iterator.html")}}

## Syntax

```js-nolint
typedArray[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der gleiche Rückgabewert wie {{jsxref("TypedArray.prototype.values()")}}: ein neues [Iterable-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das den Wert jedes Indexes im typisierten Array liefert.

## Beispiele

### Iteration mit der for...of Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Das Vorhandensein der `[Symbol.iterator]()` Methode macht typisierte Arrays [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of` Schleife rufen diese Methode automatisch auf, um den Iterator zum Durchlaufen zu erhalten.

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
for (const n of arr) {
  console.log(n);
}
```

### Manuelles Erstellen des Iterators

Sie können dennoch manuell die `next()` Methode des zurückgegebenen Iterator-Objekts aufrufen, um maximale Kontrolle über den Iterationsprozess zu erreichen.

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // 10
console.log(arrIter.next().value); // 20
console.log(arrIter.next().value); // 30
console.log(arrIter.next().value); // 40
console.log(arrIter.next().value); // 50
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype[Symbol.iterator]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [Iterative Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
