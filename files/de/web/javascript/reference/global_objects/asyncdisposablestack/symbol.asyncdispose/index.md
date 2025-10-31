---
title: AsyncDisposableStack.prototype[Symbol.asyncDispose]()
short-title: "[Symbol.asyncDispose]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die Methode **`[Symbol.asyncDispose]()`** von {{jsxref("AsyncDisposableStack")}} Instanzen implementiert das _asynchrone Entsorgungsprotokoll_ und ermöglicht es, diese Instanzen zu entsorgen, wenn sie mit {{jsxref("Statements/await_using", "await using")}} verwendet werden. Es ist ein Alias für die Methode {{jsxref("AsyncDisposableStack/disposeAsync", "disposeAsync()")}}.

## Syntax

```js-nolint
asyncDisposableStack[Symbol.asyncDispose]()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

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

- [JavaScript Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
