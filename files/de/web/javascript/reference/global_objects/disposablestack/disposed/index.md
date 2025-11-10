---
title: DisposableStack.prototype.disposed
short-title: disposed
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/disposed
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`disposed`** Accessor-Eigenschaft von {{jsxref("DisposableStack")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob dieser `DisposableStack` durch eine der folgenden Aktionen aufgelöst oder verschoben wurde:

- Aufrufen seiner {{jsxref("DisposableStack/dispose", "dispose()")}}-Methode
- Aufrufen seiner {{jsxref("DisposableStack/move", "move()")}}-Methode
- Deklaration mit {{jsxref("Statements/using", "using")}} und lassen der Variablen aus dem Gültigkeitsbereich laufen, wodurch automatisch die Methode [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose) aufgerufen wird.

## Beispiele

### Überprüfung, ob ein Stack aufgelöst wurde

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
