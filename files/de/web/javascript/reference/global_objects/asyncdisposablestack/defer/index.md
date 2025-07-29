---
title: AsyncDisposableStack.prototype.defer()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/defer
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`defer()`**-Methode von {{jsxref("AsyncDisposableStack")}} Instanzen nimmt eine Callback-Funktion, die aufgerufen und erwartet wird, wenn der Stack aufgelöst wird.

Siehe {{jsxref("DisposableStack.prototype.defer()")}} für allgemeine Informationen über die `defer()`-Methode.

## Syntax

```js-nolint
defer(onDispose)
```

### Parameter

- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack aufgelöst wird. Die Funktion erhält keine Argumente und kann ein Promise zurückgeben, das erwartet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits aufgelöst ist.

## Beispiele

### Verwendung von defer()

Ein Anwendungsfall für `defer()` ist es, etwas zu tun, das nicht mit der Freigabe von Ressourcen zusammenhängt, während der Gültigkeitsbereich verlassen wird, wie zum Beispiel das Protokollieren einer Nachricht.

```js
async function doSomething() {
  await using disposer = new AsyncDisposableStack();
  disposer.defer(async () => {
    await fs.writeFile("log.txt", "All resources freed successfully");
  });
  // Other code that claims and frees more data
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
