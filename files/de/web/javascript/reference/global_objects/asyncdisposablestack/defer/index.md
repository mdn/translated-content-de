---
title: AsyncDisposableStack.prototype.defer()
short-title: defer()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/defer
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`defer()`**-Methode von Instanzen des {{jsxref("AsyncDisposableStack")}} nimmt eine Rückruffunktion an, die aufgerufen und erwartet wird, wenn der Stack entsorgt wird.

Siehe {{jsxref("DisposableStack.prototype.defer()")}} für allgemeine Informationen über die `defer()`-Methode.

## Syntax

```js-nolint
defer(onDispose)
```

### Parameter

- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack entsorgt wird. Die Funktion erhält keine Argumente und kann ein Versprechen zurückgeben, das erwartet wird.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits entsorgt ist.

## Beispiele

### Verwendung von defer()

Ein Anwendungsfall von `defer()` ist das Ausführen einer Aktion, die nicht mit der Freigabe von Ressourcen zusammenhängt, beim Verlassen des Bereichs, wie z. B. das Protokollieren einer Nachricht.

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

- [JavaScript Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
