---
title: DisposableStack.prototype.move()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/move
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`move()`** Methode von {{jsxref("DisposableStack")}}-Instanzen erstellt eine neue `DisposableStack`-Instanz, die dieselben Disposer wie dieser Stack enthält, und markiert diesen Stack dann als disposed, ohne Disposer aufzurufen.

## Syntax

```js-nolint
move()
```

### Parameter

Keine.

### Rückgabewert

Eine neue {{jsxref("DisposableStack")}}-Instanz.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits als disposed markiert ist.

## Beschreibung

Der Hauptzweck von `move()` ist es, die Verantwortung für die Entsorgung aus dem aktuellen Bereich zu übertragen. Zum Beispiel kann Ihre Funktion die Verantwortung für einige Ressourcen übernehmen und diese entsorgen, falls ein Fehler auftritt; wenn alles erfolgreich abgeschlossen wird, geben Sie diese Ressourcen zurück und übertragen die Verantwortung an den Aufrufer.

Beim Verwenden von `move()` zur Übertragung von Verantwortung sollte der Aufruf von `move()` der letzte Schritt in Ihrem Kontrollfluss sein, da es zwischen dem Ablegen der Verantwortung durch Ihren Code mit `move()` und dem Übernehmen der Verantwortung durch den Rückgabewert keinen Besitzer geben wird.

```js example-good
let resource1;

function init() {
  using disposer = new DisposableStack();
  resource1 = disposer.use(getResource1());
  // ...
  // Drop ownership immediately before returning
  return disposer.move();
}

// Pick up ownership immediately after returning
using disposer = init();
```

```js example-bad
let resource1;

function init() {
  using disposer = new DisposableStack();
  resource1 = disposer.use(getResource1());
  // ...
  const newDisposer = disposer.move();
  // If someone adds code in between these lines and an error occurs,
  // there would be no owner to free resource1
  return newDisposer;
}

using disposer = init();
```

Seien Sie auch vorsichtig mit folgendem Muster, obwohl das Verwenden des "guten" Musters in vielen Fällen sehr umständlich sein kann:

```js
function init() {
  using disposer = new DisposableStack();
  const resource1 = disposer.use(getResource1());
  // ...
  return { disposer: disposer.move(), resource1 };
}

const { resource1, ...rest } = init();
// If someone adds code in between these lines and an error occurs,
// there would be no owner to free resource1
using disposer = rest.disposer;
```

`move()` kann auch für die bedingte Entsorgung verwendet werden, falls Sie manchmal die Ressourcen überhaupt nicht entsorgen möchten. Beispielsweise:

```js
using disposer = new DisposableStack();
const server = disposer.use(makeServer());
await server.init();
if (server.ready) {
  // Successfully initialized server; it now should live through the rest
  // of the program. Drop its disposer and don't pick it up. It will no
  // longer be disposed at all.
  disposer.move();
}
// If we reach the end of the scope without running disposer.move(),
// then server isn't ready for any reason, and we dispose its resources
// by disposing the disposer.
```

## Beispiele

### Übernahme der Verantwortung für einen Stack

```js
function consumeStack(stack) {
  using newStack = stack.move(); // newStack now owns the disposers
  console.log(stack.disposed); // true
  console.log(newStack.disposed); // false
  // newStack is disposed here immediately before the function exits
}

const stack = new DisposableStack();
console.log(stack.disposed); // false
consumeStack(stack);
console.log(stack.disposed); // true
```

### Ermöglichen der Entsorgung von Ressourcen in zwei Code-Pfaden

Der Hauptanwendungsfall von `move()` ist, wenn Sie eine oder mehrere Ressourcen haben, die entweder direkt entsorgt oder für eine spätere Verwendung erhalten bleiben könnten. In diesem Fall können Sie die Ressourcen in einen `DisposableStack` legen und dann `move()` aufrufen, wenn Sie die Ressourcen für eine spätere Verwendung erhalten möchten.

```js
class PluginHost {
  #disposed = false;
  #disposables;
  #channel;
  #socket;

  constructor() {
    // Create a DisposableStack that is disposed when the constructor exits.
    // If construction succeeds, we move everything out of `disposer` and into
    // `#disposables` to be disposed later.
    using disposer = new DisposableStack();

    // Create an IPC adapter around process.send/process.on("message").
    // When disposed, it unsubscribes from process.on("message").
    this.#channel = disposer.use(new NodeProcessIpcChannelAdapter(process));

    // Create a pseudo-websocket that sends and receives messages over
    // a NodeJS IPC channel.
    this.#socket = disposer.use(new NodePluginHostIpcSocket(this.#channel));

    // If we made it here, then there were no errors during construction and
    // we can safely move the disposables out of `disposer` and into `#disposables`.
    this.#disposables = disposer.move();

    // If construction failed, then `disposer` would be disposed before reaching
    // the line above. Event handlers would be removed, allowing `#channel` and
    // `#socket` to be GC'd.
  }

  [Symbol.dispose]() {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    // Put `this.#disposables` into a `using` variable, so it is automatically
    // disposed when the function exits.
    using disposables = this.#disposables;

    // NOTE: we can free `#socket` and `#channel` here since they will be
    // disposed by the call to `disposables[Symbol.dispose]()`, below.
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
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.dispose()")}}
