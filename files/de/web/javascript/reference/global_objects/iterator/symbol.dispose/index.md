---
title: Iterator.prototype[Symbol.dispose]()
short-title: "[Symbol.dispose]()"
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose
l10n:
  sourceCommit: 99e4e41ce89ef69db3d08766296699f342c5a8ff
---

Die **`[Symbol.dispose]()`**-Methode von {{jsxref("Iterator")}}-Instanzen implementiert das _disposable protocol_ und ermöglicht es, den Iterator zu entsorgen, wenn er mit {{jsxref("Statements/using", "using")}} verwendet wird. Sie ruft die `return()`-Methode von `this` auf, falls diese existiert.

## Syntax

```js-nolint
iterator[Symbol.dispose]()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Deklarieren eines Iterators mit `using`

Die `Symbol.dispose`-Methode soll in einer `using`-Deklaration automatisch aufgerufen werden. Dies ist nützlich, wenn Sie einen Iterator haben, den Sie manuell durch Aufrufen seiner `next()`-Methode durchlaufen; wenn Sie ihn mit {{jsxref("Statements/for...of", "for...of")}} oder etwas Ähnlichem durchlaufen, werden Fehlerbehandlung und Bereinigung automatisch durchgeführt.

```js
function* generateNumbers() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log("Cleaning up");
  }
}

function doSomething() {
  using numbers = generateNumbers();
  const res1 = numbers.next();
  // Not iterating the rest of the numbers
  // Before the function exits, the async iterator is disposed
  // Logs "Cleaning up"
}

doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype[Symbol.dispose]` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/using", "using")}}
