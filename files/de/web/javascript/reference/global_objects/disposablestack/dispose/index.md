---
title: DisposableStack.prototype.dispose()
short-title: dispose()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/dispose
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

Die **`dispose()`**-Methode von {{jsxref("DisposableStack")}}-Instanzen entsorgt diesen Stapel, indem sie alle bei ihm registrierten Disposer in umgekehrter Reihenfolge der Registrierung aufruft. Wenn der Stapel bereits entsorgt ist, tut diese Methode nichts.

Sie führt dieselbe Aktion aus wie `using disposer = new DisposableStack()` beim Verlassen des Gültigkeitsbereichs. Sie kann verwendet werden, wenn Sie die Bereinigung zu einem anderen Zeitpunkt als beim Verlassen des Gültigkeitsbereichs vornehmen müssen.

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
  - : Wird ausgelöst, wenn mehrere Disposer im Stapel einen Fehler verursachen. Wenn nur ein Fehler ausgelöst wird, wird er unverändert erneut ausgelöst. Andernfalls wird für jeden zusätzlichen Fehler ein neuer {{jsxref("SuppressedError")}} erstellt, wobei der ursprüngliche Fehler als `suppressed`-Eigenschaft und der neue Fehler als `error`-Eigenschaft dient.

## Beispiele

### Einen Stapel entsorgen

Hier fügen wir dem Stapel drei Disposer hinzu, indem wir die Methoden {{jsxref("DisposableStack/use", "use()")}}, {{jsxref("DisposableStack/adopt", "adopt()")}} und {{jsxref("DisposableStack/defer", "defer()")}} verwenden. Wenn `dispose()` aufgerufen wird, werden die Disposer in umgekehrter Reihenfolge der Registrierung aufgerufen.

Beachten Sie, dass es normalerweise nicht erforderlich ist, `dispose()` manuell aufzurufen. Deklarieren Sie den Stapel mit {{jsxref("Statements/using", "using")}}, und die Methode [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose) wird automatisch aufgerufen, wenn der Stapel den Gültigkeitsbereich verlässt.

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

- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.adopt()")}}
- {{jsxref("DisposableStack.prototype.defer()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
- [`DisposableStack.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
