---
title: arguments[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Functions/arguments/Symbol.iterator
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`[Symbol.iterator]()`** Methode von {{jsxref("Functions/arguments", "arguments")}} Objekten implementiert das [iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und erlaubt es `arguments` Objekten, durch die meisten Syntaxen verwendet zu werden, die Iterables erwarten, wie zum Beispiel die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen. Sie gibt ein [Array-Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das den Wert jedes Index im `arguments` Objekt liefert.

Der anfängliche Wert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der anfängliche Wert der {{jsxref("Array.prototype.values")}} Eigenschaft (und auch dasselbe wie [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)).

## Syntax

```js-nolint
arguments[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der gleiche Rückgabewert wie bei {{jsxref("Array.prototype.values()")}}: ein neues [iterierbares Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das den Wert jedes Index im `arguments` Objekt liefert.

## Beispiele

### Iteration mit der for...of Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der `[Symbol.iterator]()` Methode macht `arguments` Objekte [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of` Schleife rufen diese Methode automatisch auf, um den Iterator zum Durchlaufen zu erhalten.

```js
function f() {
  for (const letter of arguments) {
    console.log(letter);
  }
}
f("w", "y", "k", "o", "p");
```

### Manuelles Erstellen des Iterators

Sie können die `next()` Methode des zurückgegebenen Iteratorobjekts immer noch manuell aufrufen, um maximale Kontrolle über den Iterationsprozess zu erreichen.

```js
function f() {
  const argsIter = arguments[Symbol.iterator]();
  console.log(argsIter.next().value); // w
  console.log(argsIter.next().value); // y
  console.log(argsIter.next().value); // k
  console.log(argsIter.next().value); // o
  console.log(argsIter.next().value); // p
}
f("w", "y", "k", "o", "p");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
