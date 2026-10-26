---
title: AsyncDisposableStack.prototype[Symbol.asyncDispose]()
short-title: "[Symbol.asyncDispose]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.asyncDispose]()`** von {{jsxref("AsyncDisposableStack")}}-Instanzen implementiert das _Protokoll zur asynchronen Freigabe_ und ermöglicht die Freigabe einer Instanz, wenn sie mit {{jsxref("Statements/await_using", "await using")}} verwendet wird. Sie ist ein Alias für die Methode {{jsxref("AsyncDisposableStack/disposeAsync", "disposeAsync()")}}.

## Syntax

```js-nolint
asyncDisposableStack[Symbol.asyncDispose]()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Stack mit `await using` deklarieren

Die Methode `Symbol.asyncDispose` wird bei einer `await using`-Deklaration automatisch aufgerufen.

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

- [Polyfill für `AsyncDisposableStack.prototype[Symbol.asyncDispose]` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
