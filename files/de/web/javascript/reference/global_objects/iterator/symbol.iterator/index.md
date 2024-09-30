---
title: Iterator.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die Methode **`[Symbol.iterator]()`** von {{jsxref("Iterator")}} Instanzen implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es, dass eingebaute Iteratoren durch die meisten Syntaxen, die Iterables erwarten, wie der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen, konsumiert werden. Sie gibt den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zurück, welches das Iterator-Objekt selbst ist.

## Syntax

```js-nolint
iterator[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), welches das Iterator-Objekt selbst ist.

## Beispiele

### Iteration mit for...of Schleife

Beachten Sie, dass diese Methode selten direkt aufgerufen werden muss. Die Existenz der `[Symbol.iterator]()`-Methode macht eingebaute Iteratoren [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of` Schleife rufen diese Methode automatisch auf, um den Iterator zu erhalten, über den iteriert werden soll.

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// Logs: 1, 2, 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Iterator")}}
- {{jsxref("Symbol.iterator")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
