---
title: AsyncDisposableStack.prototype.disposed
short-title: disposed
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die **`disposed`**-Accessor-Eigenschaft von {{jsxref("AsyncDisposableStack")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieser `AsyncDisposableStack` durch eine der folgenden Aktionen freigegeben oder verschoben wurde:

- Aufrufen seiner {{jsxref("AsyncDisposableStack/disposeAsync", "disposeAsync()")}}-Methode
- Aufrufen seiner {{jsxref("AsyncDisposableStack/move", "move()")}}-Methode
- Deklarieren mit {{jsxref("Statements/await_using", "await using")}} und Verlassen des Gültigkeitsbereichs durch die Variable, wodurch die Methode [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose) automatisch aufgerufen wird.

## Beispiele

### Prüfen, ob ein Stack freigegeben wurde

```js
const disposer = new AsyncDisposableStack();
console.log(disposer.disposed); // false
await disposer.disposeAsync();
console.log(disposer.disposed); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `AsyncDisposableStack.prototype.disposed` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
