---
title: DisposableStack.prototype[Symbol.dispose]()
short-title: "[Symbol.dispose]()"
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`[Symbol.dispose]()`** Methode von {{jsxref("DisposableStack")}} Instanzen implementiert das _disposable protocol_ und ermöglicht es, diese zu entsorgen, wenn sie mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} verwendet werden. Sie ist ein Alias für die {{jsxref("DisposableStack/dispose", "dispose()")}} Methode.

## Syntax

```js-nolint
disposableStack[Symbol.dispose]()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Deklarieren eines Stacks mit `using`

Die `Symbol.dispose` Methode soll automatisch in einer `using` Deklaration aufgerufen werden.

```js
{
  using disposer = new DisposableStack();
  const resource = disposer.use(new Resource());
  resource.doSomething();
  // stack is disposed here immediately before the function exits
  // which causes the resource to be disposed
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.dispose()")}}
