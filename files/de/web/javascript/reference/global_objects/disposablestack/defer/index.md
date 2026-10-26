---
title: DisposableStack.prototype.defer()
short-title: defer()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/defer
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`defer()`** von {{jsxref("DisposableStack")}}-Instanzen nimmt eine Callback-Funktion entgegen, die aufgerufen wird, wenn der Stack freigegeben wird.

## Syntax

```js-nolint
defer(onDispose)
```

### Parameter

- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack freigegeben wird. Die Funktion erhält keine Argumente.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits freigegeben wurde.

## Beschreibung

Der Hauptzweck von `defer()` besteht darin, einen Callback zur Bereinigung zu registrieren, der nicht an die Freigabe einer bestimmten Ressource gebunden ist. Wenn sich der Callback auf eine bestimmte Ressource bezieht, sollten Sie stattdessen {{jsxref("DisposableStack/use", "use()")}} oder {{jsxref("DisposableStack/adopt", "adopt()")}} verwenden. Sie können `defer` auch verwenden, wenn die Ressource nicht in Ihrem Code verwaltet wird:

```js
function consumeReader(reader) {
  using disposer = new DisposableStack();
  disposer.defer(() => reader.releaseLock());
  // Do something with reader
}
```

## Beispiele

### defer() verwenden

Diese Funktion setzt eine einfache Sperre, damit nicht mehrere asynchrone Operationen gleichzeitig ausgeführt werden. Die Sperre wird aufgehoben, wenn die Funktion abgeschlossen ist.

```js
let isLocked = false;

async function requestWithLock(url, options) {
  if (isLocked) {
    return undefined;
  }
  using disposer = new DisposableStack();
  isLocked = true;
  disposer.defer(() => (isLocked = false));
  const data = await fetch(url, options).then((res) => res.json());
  return data;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `DisposableStack.prototype.defer` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.adopt()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
