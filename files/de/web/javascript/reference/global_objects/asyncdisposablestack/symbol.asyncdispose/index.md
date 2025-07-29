---
title: AsyncDisposableStack.prototype[Symbol.asyncDispose]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die Methode **`[Symbol.asyncDispose]()`** von {{jsxref("AsyncDisposableStack")}}-Instanzen implementiert das _asynchrone Entsorgungsprotokoll_ und ermöglicht es, dass sie in Verbindung mit {{jsxref("Statements/await_using", "await using")}} entsorgt werden. Es ist ein Alias für die {{jsxref("AsyncDisposableStack/disposeAsync", "disposeAsync()")}}-Methode.

## Syntax

```js-nolint
asyncDisposableStack[Symbol.asyncDispose]()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Deklarieren eines Stacks mit `await using`

Die `Symbol.asyncDispose`-Methode soll automatisch in einer `await using`-Deklaration aufgerufen werden.

```js
async function doSomething() {
  await using disposer = new AsyncDisposableStack();
  const resource = disposer.use(new Resource());
  resource.doSomething();
  // disposer is disposed here immediately before the function exits
  // which causes the resource to be disposed
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
