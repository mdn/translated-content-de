---
title: DisposableStack.prototype[Symbol.dispose]()
short-title: "[Symbol.dispose]()"
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.dispose]()`** von {{jsxref("DisposableStack")}}-Instanzen implementiert das _Disposable-Protokoll_ und ermöglicht es, eine Instanz bei der Verwendung mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} zu entsorgen. Sie ist ein Alias für die Methode {{jsxref("DisposableStack/dispose", "dispose()")}}.

## Syntax

```js-nolint
disposableStack[Symbol.dispose]()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Stack mit `using` deklarieren

Die Methode `Symbol.dispose` ist dafür vorgesehen, bei einer `using`-Deklaration automatisch aufgerufen zu werden.

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

- [Polyfill für `DisposableStack.prototype[Symbol.dispose]` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.dispose()")}}
