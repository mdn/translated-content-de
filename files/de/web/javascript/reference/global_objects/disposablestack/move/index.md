---
title: DisposableStack.prototype.move()
short-title: move()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/move
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`move()`** von {{jsxref("DisposableStack")}}-Instanzen erstellt eine neue `DisposableStack`-Instanz, die dieselben Bereinigungsfunktionen wie der aktuelle Stack enthält. Anschließend markiert sie den aktuellen Stack als bereinigt, ohne Bereinigungsfunktionen aufzurufen.

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
  - : Wird ausgelöst, wenn der Stack bereits bereinigt wurde.

## Beschreibung

Der Hauptzweck von `move()` besteht darin, die Verantwortung für die Bereinigung aus dem aktuellen Gültigkeitsbereich zu übertragen. Beispielsweise kann Ihre Funktion die Verantwortung für bestimmte Ressourcen übernehmen und sie bereinigen, falls ein Fehler auftritt. Wenn alles erfolgreich abgeschlossen wird, gibt sie diese Ressourcen zurück und überträgt die Verantwortung an den Aufrufer.

Wenn Sie mit `move()` die Verantwortung übertragen, sollte der Aufruf von `move()` der allerletzte Schritt im Kontrollfluss sein. Andernfalls gibt es zwischen der Abgabe der Verantwortung durch Ihren Code mittels `move()` und der Übernahme durch den Aufrufer über den Rückgabewert keinen Verantwortlichen für die Ressourcen.

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

Seien Sie auch bei folgendem Muster vorsichtig, obwohl die Verwendung des „guten“ Musters in vielen Fällen sehr umständlich sein kann:

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

`move()` kann auch für eine bedingte Bereinigung verwendet werden, wenn Sie die Ressourcen unter Umständen überhaupt nicht bereinigen möchten. Zum Beispiel:

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

### Verantwortung für einen Stack übernehmen

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

### Die Bereinigung von Ressourcen in zwei verschiedenen Codepfaden ermöglichen

Der wichtigste Anwendungsfall für `move()` liegt vor, wenn Sie eine oder mehrere Ressourcen entweder an dieser Stelle bereinigen oder für eine spätere Verwendung behalten möchten. In diesem Fall können Sie die Ressourcen in einen `DisposableStack` aufnehmen und `move()` aufrufen, wenn Sie die Ressourcen für eine spätere Verwendung behalten müssen.

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

- [Polyfill für `DisposableStack.prototype.move` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.dispose()")}}
