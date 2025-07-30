---
title: AsyncDisposableStack.prototype[Symbol.asyncDispose]()
short-title: "[Symbol.asyncDispose]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`[Symbol.asyncDispose]()`** Methode von {{jsxref("AsyncDisposableStack")}}-Instanzen implementiert das _asynchrone Protokoll zur Entsorgung_ und ermöglicht es, dass sie entsorgt wird, wenn sie mit {{jsxref("Statements/await_using", "await using")}} verwendet wird. Es ist ein Alias für die {{jsxref("AsyncDisposableStack/disposeAsync", "disposeAsync()")}}-Methode.

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

Die `Symbol.asyncDispose` Methode soll automatisch in einer `await using` Deklaration aufgerufen werden.

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

- [JavaScript-Resource-Management](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
