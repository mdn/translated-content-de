---
title: AsyncDisposableStack.prototype.disposed
short-title: disposed
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposed
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`disposed`** Zugriffs-Eigenschaft von Instanzen des {{jsxref("AsyncDisposableStack")}} gibt einen booleschen Wert zurück, der anzeigt, ob dieser `AsyncDisposableStack` entsorgt oder verschoben wurde, indem eine der folgenden Aktionen ausgeführt wurde:

- Aufrufen der {{jsxref("AsyncDisposableStack/disposeAsync", "disposeAsync()")}} Methode
- Aufrufen der {{jsxref("AsyncDisposableStack/move", "move()")}} Methode
- Deklarieren mit {{jsxref("Statements/await_using", "await using")}} und das Variablen aus dem Gültigkeitsbereich entlassen, was automatisch die Methode [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose) aufruft.

## Beispiele

### Überprüfen, ob ein Stack entsorgt wurde

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

- [JavaScript Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
