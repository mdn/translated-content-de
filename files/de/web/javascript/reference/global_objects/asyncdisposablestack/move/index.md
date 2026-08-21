---
title: AsyncDisposableStack.prototype.move()
short-title: move()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/move
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die **`move()`** Methode von {{jsxref("AsyncDisposableStack")}} Instanzen erstellt eine neue `AsyncDisposableStack` Instanz, die dieselben Entsorger wie dieser Stack enthält, und markiert dann diesen Stack als entsorgt, ohne irgendwelche Entsorger aufzurufen.

## Syntax

```js-nolint
move()
```

### Parameter

Keine.

### Rückgabewert

Eine neue {{jsxref("AsyncDisposableStack")}} Instanz.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits entsorgt ist.

## Beispiele

### Anspruch auf Eigentum eines Stacks

```js
async function consumeStack(stack) {
  await using newStack = stack.move(); // newStack now owns the disposers
  console.log(stack.disposed); // true
  console.log(newStack.disposed); // false
  // newStack is disposed here immediately before the function exits
}

const stack = new AsyncDisposableStack();
console.log(stack.disposed); // false
await consumeStack(stack);
console.log(stack.disposed); // true
```

### Ressourcen innerhalb zweier Codepfade entsorgen lassen

Der Hauptanwendungsfall von `move()` ist, wenn Sie eine oder mehrere Ressourcen haben, die entweder direkt hier entsorgt oder für die spätere Verwendung gespeichert werden könnten. In diesem Fall können Sie die Ressourcen in einen `AsyncDisposableStack` setzen und dann `move()` aufrufen, wenn Sie die Ressourcen für die spätere Nutzung speichern müssen.

```js
class PluginHost {
  #disposed = false;
  #disposables;
  #channel;
  #socket;

  static async init() {
    // Create an AsyncDisposableStack that is disposed when init exits.
    // If construction succeeds, we move everything out of `stack` and into
    // `#disposables` to be disposed later.
    await using stack = new AsyncDisposableStack();

    const channel = stack.use(await getChannel());

    const socket = stack.use(await getSocket());

    // If we made it here, then there were no errors during construction and
    // we can safely move the disposables out of `stack`.
    return new PluginHost(channel, socket, stack.move());

    // If construction failed, then `stack` would be disposed before reaching
    // the line above, which would dispose `channel` and `socket` in turn.
  }

  constructor(channel, socket, disposables) {
    this.#channel = channel;
    this.#socket = socket;
    this.#disposables = disposables;
  }

  async [Symbol.asyncDispose]() {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    // Put `this.#disposables` into a `using` variable, so it is automatically
    // disposed when the function exits.
    await using disposables = this.#disposables;

    // NOTE: we can free `#socket` and `#channel` here since they will be
    // disposed by the call to `disposables[Symbol.asyncDispose]()`, below.
    // This isn't strictly a requirement for every disposable, but is
    // good housekeeping since these objects will no longer be useable.
    this.#socket = undefined;
    this.#channel = undefined;
    this.#disposables = undefined;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
