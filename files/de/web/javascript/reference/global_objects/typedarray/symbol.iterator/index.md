---
title: TypedArray.prototype[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.iterator]()`** von {{jsxref("TypedArray")}}-Instanzen implementiert das [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols). Dadurch können Typed Arrays mit den meisten Syntaxformen verwendet werden, die iterierbare Objekte erwarten, etwa mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und in {{jsxref("Statements/for...of", "for...of")}}-Schleifen. Sie gibt ein [Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das den Wert jedes Index im Typed Array liefert.

Der Anfangswert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der Anfangswert der Eigenschaft {{jsxref("TypedArray.prototype.values")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype[Symbol.iterator]()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30]);
const iterator = uint8[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
}

// Expected output: 10
// Expected output: 20
// Expected output: 30
```

## Syntax

```js-nolint
typedArray[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Derselbe Rückgabewert wie bei {{jsxref("TypedArray.prototype.values()")}}: ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das den Wert jedes Index im Typed Array liefert.

## Beispiele

### Iteration mit einer for...of-Schleife

Beachten Sie, dass Sie diese Methode nur selten direkt aufrufen müssen. Durch die Methode `[Symbol.iterator]()` sind Typed Arrays [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Syntaxformen für die Iteration wie die `for...of`-Schleife rufen diese Methode automatisch auf, um den Iterator für die Schleife zu erhalten.

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
for (const n of arr) {
  console.log(n);
}
```

### Den Iterator manuell steuern

Sie können die Methode `next()` des zurückgegebenen Iterator-Objekts auch manuell aufrufen, um den Iterationsprozess möglichst genau zu steuern.

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

- [Polyfill für `TypedArray.prototype[Symbol.iterator]` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
