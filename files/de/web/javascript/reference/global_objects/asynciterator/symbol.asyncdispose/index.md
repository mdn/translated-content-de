---
title: AsyncIterator.prototype[Symbol.asyncDispose]()
short-title: "[Symbol.asyncDispose]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose
l10n:
  sourceCommit: 99e4e41ce89ef69db3d08766296699f342c5a8ff
---

Die **`[Symbol.asyncDispose]()`** Methode von {{jsxref("AsyncIterator")}} Instanzen implementiert das _asynchrone Entsorgungsprotokoll_ und ermöglicht es, entsorgt zu werden, wenn es mit {{jsxref("Statements/await_using", "await using")}} verwendet wird. Sie ruft die `return()` Methode von `this` auf und wartet diese ab, falls sie existiert.

## Syntax

```js-nolint
asyncIterator[Symbol.asyncDispose]()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Deklaration eines asynchronen Iterators mit `await using`

Die Methode `Symbol.asyncDispose` soll automatisch in einer `await using`-Deklaration aufgerufen werden. Dies ist nützlich, wenn Sie einen asynchronen Iterator haben, den Sie manuell durch Aufruf seiner `next()` Methode iterieren; wenn Sie ihn mit {{jsxref("Statements/for-await...of", "for await...of")}} oder etwas Ähnlichem iterieren, dann werden Fehlerbehandlung und Aufräumarbeiten automatisch durchgeführt.

```js
async function* generateNumbers() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log("Cleaning up");
  }
}

async function doSomething() {
  await using numbers = generateNumbers();
  const res1 = await numbers.next();
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

- [Polyfill von `AsyncIterator.prototype[Symbol.asyncDispose]` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/await_using", "await using")}}
