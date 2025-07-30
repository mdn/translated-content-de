---
title: AsyncDisposableStack.prototype.move()
short-title: move()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/move
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`move()`**-Methode von {{jsxref("AsyncDisposableStack")}}-Instanzen erstellt eine neue `AsyncDisposableStack`-Instanz, die dieselben Disposer wie dieser Stack enthält, und markiert dann diesen Stack als disposed, ohne dabei Disposer aufzurufen.

## Syntax

```js-nolint
move()
```

### Parameter

Keine.

### Rückgabewert

Eine neue {{jsxref("AsyncDisposableStack")}}-Instanz.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits als disposed markiert ist.

## Beispiele

### Beanspruchung der Inhaberschaft eines Stacks

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

### Ermöglichen der Freigabe von Ressourcen in zwei Codepfaden

Der Hauptanwendungsfall von `move()` tritt auf, wenn Sie eine oder mehrere Ressourcen haben, die entweder direkt hier freigegeben werden oder für eine spätere Verwendung aufbewahrt werden könnten. In diesem Fall können Sie die Ressourcen in einem `AsyncDisposableStack` sammeln und dann `move()` aufrufen, wenn Sie die Ressourcen für eine spätere Nutzung aufbewahren müssen.

```js
class PluginHost {
  #disposed = false;
  #disposables;
  #channel;
  #socket;

  static async init() {
    // Create a AsyncDisposableStack that is disposed when init exits.
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

  [Symbol.asyncDispose]() {
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

- [Ressourcenverwaltung in JavaScript](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("AsyncDisposableStack")}}
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
