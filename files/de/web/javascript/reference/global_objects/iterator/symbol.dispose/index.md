---
title: Iterator.prototype[Symbol.dispose]()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`[Symbol.dispose]()`** Methode von {{jsxref("Iterator")}} Instanzen implementiert das _disposable protocol_ und ermöglicht es, bei Verwendung mit {{jsxref("Statements/using", "using")}} entsorgt zu werden. Sie ruft die `return()` Methode von `this` auf, falls diese existiert.

## Syntax

```js-nolint
iterator[Symbol.dispose]()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Deklaration eines Iterators mit `using`

Die `Symbol.dispose` Methode soll automatisch in einer `using` Deklaration aufgerufen werden. Dies ist nützlich, wenn Sie einen Iterator haben, über den Sie manuell iterieren, indem Sie seine `next()` Methode aufrufen; wenn Sie ihn mit {{jsxref("Statements/for...of", "for...of")}} oder etwas Ähnlichem iterieren, erfolgt die Fehlerbehandlung und Bereinigung automatisch.

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
