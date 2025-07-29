---
title: DisposableStack.prototype.dispose()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/dispose
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`dispose()`** Methode von {{jsxref("DisposableStack")}} Instanzen gibt diesen Stack frei, indem sie alle bei ihm registrierten Disposers in umgekehrter Reihenfolge der Registrierung aufruft. Wenn der Stack bereits freigegeben ist, macht diese Methode nichts.

Sie führt die gleiche Aktion aus wie `using disposer = new isposableStack()` beim scope exit. Sie kann verwendet werden, wenn Sie an einem anderen Punkt als beim scope exit eine Bereinigung durchführen müssen.

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
  - : Wird geworfen, wenn mehrere Disposers im Stack einen Fehler ausgelöst haben. Wenn nur ein Fehler ausgelöst wird, wird er unverändert erneut geworfen. Andernfalls wird für jeden zusätzlichen Fehler ein neuer {{jsxref("SuppressedError")}} erstellt, mit dem ursprünglichen Fehler als `suppressed`-Eigenschaft und dem neuen Fehler als `error`-Eigenschaft.

## Beispiele

### Einen Stack freigeben

Hier fügen wir dem Stack drei Disposers hinzu, indem wir die Methoden {{jsxref("DisposableStack/use", "use()")}}, {{jsxref("DisposableStack/adopt", "adopt()")}} und {{jsxref("DisposableStack/defer", "defer()")}} verwenden. Wenn `dispose()` aufgerufen wird, werden die Disposers in umgekehrter Reihenfolge der Registrierung aufgerufen.

Beachten Sie, dass Sie `dispose()` normalerweise nicht manuell aufrufen müssen. Deklarieren Sie den Stack mit {{jsxref("Statements/using", "using")}}, und seine [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)-Methode wird automatisch aufgerufen, wenn der Stack außer Sicht geht.

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
