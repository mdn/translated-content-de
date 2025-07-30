---
title: AsyncDisposableStack.prototype.disposeAsync()
short-title: disposeAsync()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposeAsync
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`disposeAsync()`**-Methode von {{jsxref("AsyncDisposableStack")}}-Instanzen entsorgt diesen Stack, indem sie alle registrierten Disposer in umgekehrter Reihenfolge ihrer Registrierung aufruft und auf den Abschluss jedes Einzelnen wartet, bevor sie den nächsten aufruft. Wenn der Stack bereits entsorgt ist, macht diese Methode nichts.

Sie führt dieselbe Aktion aus wie `await using disposer = new AsyncDisposableStack()` beim Verlassen des Geltungsbereichs. Sie kann verwendet werden, wenn Sie an einem anderen Punkt als dem Geltungsbereichsende bereinigen müssen.

## Syntax

```js-nolint
disposeAsync()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, wenn alle registrierten Disposer der Reihe nach abgeschlossen sind.

### Ausnahmen

`disposeAsync()` wirft niemals synchron einen Fehler. Das zurückgegebene Promise kann mit einem der folgenden Fehler abgelehnt werden:

- {{jsxref("SuppressedError")}}
  - : Wird ausgelöst, wenn mehrere Disposer im Stack einen Fehler geworfen haben. Wenn nur ein Fehler auftritt, wird dieser direkt wieder geworfen. Andernfalls wird für jeden zusätzlichen Fehler ein neuer {{jsxref("SuppressedError")}} erstellt, wobei der ursprüngliche Fehler als `suppressed`-Eigenschaft und der neue Fehler als `error`-Eigenschaft angegeben wird.

## Beispiele

### Entsorgung eines Stacks

Hier fügen wir dem Stack drei Disposer hinzu, indem wir die Methoden {{jsxref("AsyncDisposableStack/use", "use()")}}, {{jsxref("AsyncDisposableStack/adopt", "adopt()")}} und {{jsxref("AsyncDisposableStack/defer", "defer()")}} verwenden. Wenn `disposeAsync()` aufgerufen wird, werden die Disposer in umgekehrter Reihenfolge ihrer Registrierung aufgerufen.

Beachten Sie, dass Sie `disposeAsync()` normalerweise nicht manuell aufrufen müssen. Deklarieren Sie den Stack mit {{jsxref("Statements/await_using", "await using")}}, und seine [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)-Methode wird automatisch aufgerufen, wenn der Stack den Geltungsbereich verlässt.

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

- [JavaScript-Quellenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
