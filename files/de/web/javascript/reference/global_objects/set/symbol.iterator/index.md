---
title: Set.prototype[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`[Symbol.iterator]()`** Methode der {{jsxref("Set")}} Instanzen implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es `Set` Objekten, von den meisten Syntaxen, die Iterables erwarten, wie z.B. dem [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen, verwendet zu werden. Sie gibt ein [Set-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Werte des Sets in der Einfügereihenfolge liefert.

Der anfängliche Wert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der anfängliche Wert der {{jsxref("Set.prototype.values")}} Eigenschaft.

{{InteractiveExample("JavaScript Demo: Set.prototype[Symbol.iterator]()")}}

```js interactive-example
const set = new Set();

set.add(42);
set.add("forty two");

const iterator = set[Symbol.iterator]();

console.log(iterator.next().value);
// Expected output: 42

console.log(iterator.next().value);
// Expected output: "forty two"
```

## Syntax

```js-nolint
set[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der gleiche Rückgabewert wie {{jsxref("Set.prototype.values()")}}: ein neues [iterables Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Werte des Sets liefert.

## Beispiele

### Iteration mit der for...of Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der `[Symbol.iterator]()` Methode macht `Set` Objekte [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of` Schleife rufen diese Methode automatisch auf, um den Iterator zum Durchlaufen zu erhalten.

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

for (const v of mySet) {
  console.log(v);
}
```

### Manuelles Erstellen des Iterators

Sie können dennoch manuell die `next()` Methode des zurückgegebenen Iterator-Objekts aufrufen, um maximale Kontrolle über den Iterationsprozess zu erreichen.

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

const setIter = mySet[Symbol.iterator]();

console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // {}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [Iterationen Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
