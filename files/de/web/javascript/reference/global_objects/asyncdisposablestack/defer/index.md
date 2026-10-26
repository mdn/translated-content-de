---
title: AsyncDisposableStack.prototype.defer()
short-title: defer()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/defer
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`defer()`** von {{jsxref("AsyncDisposableStack")}}-Instanzen nimmt eine Callback-Funktion entgegen, die aufgerufen und auf deren Ergebnis gewartet wird, wenn der Stack freigegeben wird.

Allgemeine Informationen zur Methode `defer()` finden Sie unter {{jsxref("DisposableStack.prototype.defer()")}}.

## Syntax

```js-nolint
defer(onDispose)
```

### Parameter

- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack freigegeben wird. Sie erhält keine Argumente und kann ein Promise zurückgeben, auf dessen Erfüllung gewartet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits freigegeben wurde.

## Beispiele

### defer() verwenden

Ein Anwendungsfall für `defer()` besteht darin, beim Verlassen eines Gültigkeitsbereichs etwas zu tun, das nicht mit der Freigabe von Ressourcen zusammenhängt, beispielsweise eine Nachricht zu protokollieren.

```js
async function doSomething() {
  await using disposer = new AsyncDisposableStack();
  disposer.defer(async () => {
    await fs.writeFile("log.txt", "All resources freed successfully");
  });
  // Other code that claims and frees more data
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `AsyncDisposableStack.prototype.defer` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
