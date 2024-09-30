---
title: arguments[Symbol.iterator]()
slug: Web/JavaScript/Reference/Functions/arguments/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jsSidebar("Functions")}}

Die **`[Symbol.iterator]()`**-Methode von {{jsxref("Functions/arguments", "arguments")}}-Objekten implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es `arguments`-Objekten, von den meisten Syntaxen, die Iterables erwarten, konsumiert zu werden, wie etwa der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}}-Schleifen. Sie gibt ein [Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das den Wert jedes Index im `arguments`-Objekt liefert.

Der Anfangswert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der Anfangswert der {{jsxref("Array.prototype.values")}}-Eigenschaft (und auch dasselbe wie [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)).

## Syntax

```js-nolint
arguments[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Derselbe Rückgabewert wie {{jsxref("Array.prototype.values()")}}: ein neues [iterables Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das den Wert jedes Index im `arguments`-Objekt liefert.

## Beispiele

### Iteration mittels for...of-Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der `[Symbol.iterator]()`-Methode macht `arguments`-Objekte [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of`-Schleife rufen diese Methode automatisch auf, um den Iterator zum Durchlaufen zu erhalten.

```js
function f() {
  for (const letter of arguments) {
    console.log(letter);
  }
}
f("w", "y", "k", "o", "p");
```

### Manuelles Durchgehen des Iterators

Sie können immer noch die `next()`-Methode des zurückgegebenen Iterator-Objekts manuell aufrufen, um maximale Kontrolle über den Iterationsprozess zu erhalten.

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
