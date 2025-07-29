---
title: DisposableStack.prototype.adopt()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/adopt
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`adopt()`**-Methode von {{jsxref("DisposableStack")}}-Instanzen registriert einen Wert, der das Disposable-Protokoll nicht implementiert, im Stack, indem eine benutzerdefinierte "Disposer"-Funktion bereitgestellt wird.

## Syntax

```js-nolint
adopt(value, onDispose)
```

### Parameter

- `value`
  - : Jeder Wert, der im Stack registriert werden soll.
- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack disposed wird. Die Funktion erhält `value` als ihr einziges Argument.

### Rückgabewert

Der gleiche `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits disposed wurde.

## Beschreibung

Der Hauptzweck von `adopt()` besteht darin, einen Wert, der das Disposable-Protokoll nicht implementiert, im Stack zu registrieren. Wenn der Wert bereits disposable ist, können Sie stattdessen {{jsxref("DisposableStack/use", "use()")}} verwenden, welches automatisch die Methode `[Symbol.dispose]()` des Werts als Disposer verwendet.

`adopt(value, onDispose)` ist fast dasselbe wie `defer(() => onDispose(value))`, ermöglicht Ihnen jedoch, die Ressource zu deklarieren und im selben Schritt zu registrieren. Auf diese Weise besteht ein minimales Risiko, dass zwischen der Ressourcenerstellung und der Registrierung ein Fehler auftritt, der die Ressource durchsickern lässt.

```js example-good
using disposer = new DisposableStack();
const reader = disposer.adopt(stream.getReader(), (reader) =>
  reader.releaseLock(),
);
```

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
// If someone adds code in between these lines and an error occurs,
// the stream will be locked forever.
disposer.defer(() => reader.close());
```

Im selben Geiste von "registrieren Sie Ihre Ressource, sobald sie deklariert wurde", sollten Sie immer Ihre Ressourcenakquisitionsausdrücke in `adopt()` einwickeln, anstatt sie auf eine separate Anweisung auszulagern.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.adopt(reader, (reader) => reader.close());
```

## Beispiele

### Verwendung von adopt()

Dieser Code verbraucht einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) über einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader). Der Reader implementiert das Disposable-Protokoll nicht, daher verwenden wir `adopt()`, um ihn im Stack zu registrieren.

```js
{
  using disposer = new DisposableStack();
  const reader = disposer.adopt(stream.getReader(), (reader) =>
    reader.releaseLock(),
  );
  const { value, done } = reader.read();
  if (!done) {
    // Process the value
  }
  // The reader.releaseLock() method is called here before exiting
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.defer()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
