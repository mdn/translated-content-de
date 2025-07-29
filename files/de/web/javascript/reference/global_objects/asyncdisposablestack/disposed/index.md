---
title: AsyncDisposableStack.prototype.disposed
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposed
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`disposed`** Zugriffseigenschaft von {{jsxref("AsyncDisposableStack")}} Instanzen gibt einen booleschen Wert zurück, der anzeigt, ob dieser `AsyncDisposableStack` entsorgt oder durch eine der folgenden Aktionen verschoben wurde:

- Aufrufen der {{jsxref("AsyncDisposableStack/disposeAsync", "disposeAsync()")}} Methode
- Aufrufen der {{jsxref("AsyncDisposableStack/move", "move()")}} Methode
- Deklaration mit {{jsxref("Statements/await_using", "await using")}} und das Variablenende des Bereichs erreichen, was automatisch die [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose) Methode aufruft.

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
