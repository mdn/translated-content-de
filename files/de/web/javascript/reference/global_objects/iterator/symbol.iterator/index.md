---
title: Iterator.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.iterator]()`**-Methode von {{jsxref("Iterator")}}-Instanzen implementiert das [iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es eingebauten Iteratoren, von den meisten Syntaxen, die Iterables erwarten, konsumiert zu werden, wie z.B. die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}}-Schleifen. Sie gibt den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zurück, welcher das Iterator-Objekt selbst ist.

## Syntax

```js-nolint
iterator[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), welcher das Iterator-Objekt selbst ist.

## Beispiele

### Iteration mit der for...of-Schleife

Beachten Sie, dass es selten notwendig ist, diese Methode direkt aufzurufen. Die Existenz der `[Symbol.iterator]()`-Methode macht eingebaute Iteratoren [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of`-Schleife rufen diese Methode automatisch auf, um den Iterator zum Durchlaufen zu erhalten.

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
