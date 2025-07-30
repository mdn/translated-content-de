---
title: DisposableStack.prototype.dispose()
short-title: dispose()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/dispose
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`dispose()`** Methode von {{jsxref("DisposableStack")}} Instanzen entsorgt diesen Stack, indem sie alle ihm registrierten Disposer in umgekehrter Registrierungsreihenfolge aufruft. Wenn der Stack bereits entsorgt wurde, tut diese Methode nichts.

Sie führt die gleiche Aktion wie `using disposer = new disposableStack()` beim Verlassen des Gültigkeitsbereichs aus. Sie kann verwendet werden, wenn Sie einen Aufräumvorgang an einem anderen Punkt als beim Verlassen des Gültigkeitsbereichs benötigen.

## Syntax

```js-nolint
dispose()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("SuppressedError")}}
  - : Wird ausgelöst, wenn mehrere Disposer im Stack einen Fehler geworfen haben. Wenn nur ein Fehler geworfen wird, wird er unverändert erneut geworfen. Andernfalls wird für jeden zusätzlichen Fehler ein neuer {{jsxref("SuppressedError")}} erstellt, wobei der ursprüngliche Fehler als `suppressed`-Eigenschaft und der neue Fehler als `error`-Eigenschaft fungiert.

## Beispiele

### Einen Stack entsorgen

Hier fügen wir drei Disposer zum Stack hinzu, indem wir die Methoden {{jsxref("DisposableStack/use", "use()")}}, {{jsxref("DisposableStack/adopt", "adopt()")}} und {{jsxref("DisposableStack/defer", "defer()")}} verwenden. Wenn `dispose()` aufgerufen wird, werden die Disposer in umgekehrter Registrierungsreihenfolge aufgerufen.

Beachten Sie, dass Sie normalerweise `dispose()` nicht manuell aufrufen müssen. Deklarieren Sie den Stack mit {{jsxref("Statements/using", "using")}}, und seine [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose) Methode wird automatisch aufgerufen, wenn der Stack den Gültigkeitsbereich verlässt.

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

- [JavaScript Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.adopt()")}}
- {{jsxref("DisposableStack.prototype.defer()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
- [`DisposableStack.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
