---
title: AsyncIterator.prototype[Symbol.asyncDispose]()
short-title: "[Symbol.asyncDispose]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.asyncDispose]()`** von {{jsxref("AsyncIterator")}}-Instanzen implementiert das _Protokoll zur asynchronen Ressourcenfreigabe_. Dadurch kann eine Instanz bei der Verwendung mit {{jsxref("Statements/await_using", "await using")}} freigegeben werden. Die Methode ruft die `return()`-Methode von `this` auf und wartet auf deren Abschluss, sofern sie vorhanden ist.

## Syntax

```js-nolint
asyncIterator[Symbol.asyncDispose]()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen asynchronen Iterator mit `await using` deklarieren

Die Methode `Symbol.asyncDispose` ist dafür vorgesehen, bei einer `await using`-Deklaration automatisch aufgerufen zu werden. Das ist nützlich, wenn Sie einen asynchronen Iterator manuell durch Aufrufe seiner `next()`-Methode durchlaufen. Wenn Sie ihn mit {{jsxref("Statements/for-await...of", "for await...of")}} oder auf ähnliche Weise durchlaufen, erfolgen Fehlerbehandlung und Bereinigung automatisch.

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

- [Polyfill für `AsyncIterator.prototype[Symbol.asyncDispose]` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/await_using", "await using")}}
