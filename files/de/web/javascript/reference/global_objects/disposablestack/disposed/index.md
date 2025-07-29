---
title: DisposableStack.prototype.disposed
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/disposed
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`disposed`** Accessor-Eigenschaft von {{jsxref("DisposableStack")}} Instanzen gibt einen Boolean zurück, der anzeigt, ob dieser `DisposableStack` durch eine der folgenden Aktionen aufgelöst oder verschoben wurde:

- Aufrufen der Methode {{jsxref("DisposableStack/dispose", "dispose()")}}
- Aufrufen der Methode {{jsxref("DisposableStack/move", "move()")}}
- Deklarieren mit {{jsxref("Statements/using", "using")}} und das Variablen außer Reichweite gehen lassen, was automatisch die Methode [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose) aufruft.

## Beispiele

### Überprüfen, ob ein Stack aufgelöst wurde

```js
const disposer = new DisposableStack();
console.log(disposer.disposed); // false
disposer.dispose();
console.log(disposer.disposed); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
