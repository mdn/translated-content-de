---
title: Iterator.prototype[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`[Symbol.iterator]()`** Methode von {{jsxref("Iterator")}} Instanzen implementiert das [iterable protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es, dass eingebaute Iteratoren von den meisten Syntaxen, die Iterables erwarten, konsumiert werden können, wie z.B. die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen. Sie gibt den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zurück, welches das Iterator-Objekt selbst ist.

## Syntax

```js-nolint
iterator[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), welches das Iterator-Objekt selbst ist.

## Beispiele

### Iteration mit der for...of Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der `[Symbol.iterator]()` Methode macht eingebaute Iteratoren zu [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of` Schleife rufen automatisch diese Methode auf, um den Iterator zum Durchlaufen zu erhalten.

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
- [Iteration Protocols](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
