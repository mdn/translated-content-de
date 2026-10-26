---
title: DisposableStack.prototype.dispose()
short-title: dispose()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/dispose
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`dispose()`** von {{jsxref("DisposableStack")}}-Instanzen gibt die Ressourcen dieses Stacks frei, indem sie alle für ihn registrierten Disposer in umgekehrter Reihenfolge ihrer Registrierung aufruft. Wenn die Ressourcen des Stacks bereits freigegeben wurden, bewirkt diese Methode nichts.

Sie führt dieselbe Aktion aus wie `using disposer = new DisposableStack()` beim Verlassen des Gültigkeitsbereichs. Sie können sie verwenden, wenn die Bereinigung zu einem anderen Zeitpunkt erfolgen soll.

## Syntax

```js-nolint
dispose()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("SuppressedError")}}
  - : Wird ausgelöst, wenn mehrere Disposer im Stack einen Fehler auslösen. Wird nur ein Fehler ausgelöst, wird dieser unverändert erneut ausgelöst. Andernfalls wird für jeden weiteren Fehler ein neuer {{jsxref("SuppressedError")}} erstellt, wobei der ursprüngliche Fehler in der Eigenschaft `suppressed` und der neue Fehler in der Eigenschaft `error` gespeichert wird.

## Beispiele

### Ressourcen eines Stacks freigeben

Hier fügen wir dem Stack mit den Methoden {{jsxref("DisposableStack/use", "use()")}}, {{jsxref("DisposableStack/adopt", "adopt()")}} und {{jsxref("DisposableStack/defer", "defer()")}} drei Disposer hinzu. Wenn `dispose()` aufgerufen wird, werden die Disposer in umgekehrter Reihenfolge ihrer Registrierung aufgerufen.

Beachten Sie, dass Sie `dispose()` normalerweise nicht manuell aufrufen müssen. Deklarieren Sie den Stack mit {{jsxref("Statements/using", "using")}}. Seine Methode [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose) wird dann automatisch aufgerufen, wenn der Stack seinen Gültigkeitsbereich verlässt.

```js
class Resource {
  dispose() {
    console.log("Resource disposed");
  }
  [Symbol.dispose]() {
    console.log("Resource disposed via Symbol.dispose");
  }
}

{
  const disposer = new DisposableStack();
  const resource = disposer.use(new Resource());
  const resource2 = disposer.adopt(new Resource(), (resource) =>
    resource.dispose(),
  );
  disposer.defer(() => console.log("Deferred disposer"));
  disposer.dispose();
  // Logs in order:
  // Deferred disposer
  // Resource disposed
  // Resource disposed via Symbol.dispose
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `DisposableStack.prototype.dispose` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.adopt()")}}
- {{jsxref("DisposableStack.prototype.defer()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
- [`DisposableStack.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
