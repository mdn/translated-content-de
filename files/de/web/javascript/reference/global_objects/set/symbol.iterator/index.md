---
title: Set.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.iterator]()`** Methode von {{jsxref("Set")}} Instanzen implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es, `Set` Objekte mit den meisten Syntaxen, die Iterables erwarten, zu verwenden, wie z.B. die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen. Sie gibt ein [Set-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Werte des Sets in der Einfügereihenfolge liefert.

Der anfängliche Wert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der anfängliche Wert der {{jsxref("Set.prototype.values")}} Eigenschaft.

{{EmbedInteractiveExample("pages/js/set-prototype-@@iterator.html")}}

## Syntax

```js-nolint
set[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der gleiche Rückgabewert wie {{jsxref("Set.prototype.values()")}}: ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Werte des Sets liefert.

## Beispiele

### Iteration mit einer for...of Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der `[Symbol.iterator]()` Methode macht `Set` Objekte [iterabel](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und Iterations-Syntaxen wie die `for...of` Schleife rufen diese Methode automatisch auf, um den Iterator für die Schleife zu erhalten.

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

for (const v of mySet) {
  console.log(v);
}
```

### Manuelles Überrollen des Iterators

Sie können dennoch die `next()` Methode des zurückgegebenen Iterator-Objekts manuell aufrufen, um maximale Kontrolle über den Iterationsprozess zu erhalten.

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
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
