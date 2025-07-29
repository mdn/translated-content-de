---
title: AsyncIterator.prototype[Symbol.asyncDispose]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die Methode **`[Symbol.asyncDispose]()`** von {{jsxref("AsyncIterator")}}-Instanzen implementiert das _asynchrone Disposal-Protokoll_ und ermöglicht es, sie zu entsorgen, wenn sie mit {{jsxref("Statements/await_using", "await using")}} verwendet werden. Sie ruft die `return()`-Methode von `this` auf und wartet darauf, falls sie existiert.

## Syntax

```js-nolint
asyncIterator[Symbol.asyncDispose]()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Deklarieren eines asynchronen Iterators mit `await using`

Die Methode `Symbol.asyncDispose` soll in einer `await using`-Deklaration automatisch aufgerufen werden. Dies ist nützlich, wenn Sie einen asynchronen Iterator haben, den Sie manuell durch Aufrufen seiner `next()`-Methode durchlaufen; wenn Sie ihn mit {{jsxref("Statements/for-await...of", "for await...of")}} oder etwas Ähnlichem durchlaufen, werden Fehlerbehandlung und Bereinigung automatisch durchgeführt.

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
