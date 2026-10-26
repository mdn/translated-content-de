---
title: DisposableStack.prototype.disposed
short-title: disposed
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/disposed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die **`disposed`**-Accessor-Property von {{jsxref("DisposableStack")}}-Instanzen gibt einen booleschen Wert zurück. Er zeigt an, ob dieser `DisposableStack` durch einen der folgenden Vorgänge freigegeben oder verschoben wurde:

- Aufruf seiner {{jsxref("DisposableStack/dispose", "dispose()")}}-Methode
- Aufruf seiner {{jsxref("DisposableStack/move", "move()")}}-Methode
- Deklaration mit {{jsxref("Statements/using", "using")}} und Verlassen des Gültigkeitsbereichs durch die Variable, wodurch die Methode [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose) automatisch aufgerufen wird.

## Beispiele

### Prüfen, ob ein Stack freigegeben wurde

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

- [Polyfill für `DisposableStack.prototype.disposed` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
