---
title: AsyncDisposableStack.prototype.disposeAsync()
short-title: disposeAsync()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposeAsync
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`disposeAsync()`** von {{jsxref("AsyncDisposableStack")}}-Instanzen gibt diesen Stack frei, indem sie alle darin registrierten Disposer in umgekehrter Reihenfolge ihrer Registrierung aufruft. Sie wartet jeweils auf den Abschluss eines Disposers, bevor sie den nächsten aufruft. Wenn der Stack bereits freigegeben wurde, bewirkt diese Methode nichts.

Sie führt dieselbe Aktion aus wie `await using disposer = new AsyncDisposableStack()` beim Verlassen des Gültigkeitsbereichs. Sie können sie verwenden, wenn die Bereinigung zu einem anderen Zeitpunkt erfolgen soll.

## Syntax

```js-nolint
disposeAsync()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, sobald alle registrierten Disposer nacheinander abgeschlossen wurden.

### Ausnahmen

`disposeAsync()` löst niemals synchron einen Fehler aus. Das zurückgegebene Promise kann mit einem der folgenden Fehler zurückgewiesen werden:

- {{jsxref("SuppressedError")}}
  - : Wird ausgelöst, wenn mehrere Disposer im Stack einen Fehler ausgelöst haben. Wenn nur ein Fehler ausgelöst wird, wird er unverändert weitergegeben. Andernfalls wird für jeden weiteren Fehler ein neuer {{jsxref("SuppressedError")}} erstellt, dessen `suppressed`-Eigenschaft den ursprünglichen Fehler und dessen `error`-Eigenschaft den neuen Fehler enthält.

## Beispiele

### Einen Stack freigeben

Hier fügen wir dem Stack mit den Methoden {{jsxref("AsyncDisposableStack/use", "use()")}}, {{jsxref("AsyncDisposableStack/adopt", "adopt()")}} und {{jsxref("AsyncDisposableStack/defer", "defer()")}} drei Disposer hinzu. Beim Aufruf von `disposeAsync()` werden die Disposer in umgekehrter Reihenfolge ihrer Registrierung aufgerufen.

Normalerweise müssen Sie `disposeAsync()` nicht manuell aufrufen. Deklarieren Sie den Stack mit {{jsxref("Statements/await_using", "await using")}}; seine Methode [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose) wird dann automatisch aufgerufen, wenn der Stack den Gültigkeitsbereich verlässt.

```js
class Resource {
  #doDisposal() {
    // Imagine more meaningful disposal logic here
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
  async dispose() {
    await this.#doDisposal();
    console.log("Resource disposed");
  }
  async [Symbol.asyncDispose]() {
    await this.#doDisposal();
    console.log("Resource disposed via Symbol.asyncDispose");
  }
}

async function doSomething() {
  const disposer = new AsyncDisposableStack();
  const resource = disposer.use(new Resource());
  const resource2 = disposer.adopt(new Resource(), (resource) =>
    resource.dispose(),
  );
  disposer.defer(() => console.log("Deferred disposer"));
  disposer.disposeAsync();
  // Logs in order:
  // Deferred disposer
  // Resource disposed
  // Resource disposed via Symbol.dispose
}

doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `AsyncDisposableStack.prototype.disposeAsync` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
