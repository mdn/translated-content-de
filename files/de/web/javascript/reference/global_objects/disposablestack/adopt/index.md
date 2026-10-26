---
title: DisposableStack.prototype.adopt()
short-title: adopt()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/adopt
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`adopt()`** von {{jsxref("DisposableStack")}}-Instanzen registriert einen Wert, der das Disposable-Protokoll nicht implementiert, im Stack. Dazu wird eine benutzerdefinierte Bereinigungsfunktion bereitgestellt.

## Syntax

```js-nolint
adopt(value, onDispose)
```

### Parameter

- `value`
  - : Ein beliebiger Wert, der im Stack registriert werden soll.
- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack bereinigt wird. Die Funktion erhält `value` als einziges Argument.

### Rückgabewert

Derselbe `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits bereinigt wurde.

## Beschreibung

Der Hauptzweck von `adopt()` besteht darin, einen Wert im Stack zu registrieren, der das Disposable-Protokoll nicht implementiert. Wenn der Wert bereits disposable ist, können Sie stattdessen {{jsxref("DisposableStack/use", "use()")}} verwenden. Diese Methode verwendet automatisch die `[Symbol.dispose]()`-Methode des Werts zur Bereinigung.

`adopt(value, onDispose)` entspricht nahezu `defer(() => onDispose(value))`. Allerdings können Sie damit die Ressource deklarieren und in derselben Zeile registrieren. So ist die Wahrscheinlichkeit möglichst gering, dass zwischen dem Erstellen und dem Registrieren der Ressource ein Fehler auftritt, durch den die Ressource nicht freigegeben wird.

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

Damit eine Ressource möglichst unmittelbar nach ihrer Deklaration registriert wird, sollten Sie den Ausdruck zum Anfordern der Ressource stets in `adopt()` einschließen, statt ihn in eine separate Anweisung auszulagern.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.adopt(reader, (reader) => reader.close());
```

## Beispiele

### adopt() verwenden

Dieser Code verarbeitet einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) über einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader). Der Reader implementiert das Disposable-Protokoll nicht. Daher verwenden wir `adopt()`, um ihn im Stack zu registrieren.

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

- [Polyfill für `DisposableStack.prototype.adopt` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.defer()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
