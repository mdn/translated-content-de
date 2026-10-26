---
title: DisposableStack.prototype.use()
short-title: use()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/use
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`use()`** von {{jsxref("DisposableStack")}}-Instanzen registriert einen Wert im Stack, der das [Disposable-Protokoll](/de/docs/Web/JavaScript/Guide/Resource_management) implementiert.

## Syntax

```js-nolint
use(value)
```

### Parameter

- `value`
  - : Der Wert, der im Stack registriert werden soll. Er muss entweder eine `[Symbol.dispose]()`-Methode enthalten oder `null` beziehungsweise `undefined` sein.

### Rückgabewert

Derselbe `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` weder `null` noch `undefined` ist und keine `[Symbol.dispose]()`-Methode enthält.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits bereinigt wurde.

## Beschreibung

Der Hauptzweck von `use()` besteht darin, einen Wert im Stack zu registrieren, der das Disposable-Protokoll implementiert – entsprechend der {{jsxref("Statements/using", "using")}}-Deklaration. Wenn der Wert das Disposable-Protokoll nicht implementiert (also keine `[Symbol.dispose]()`-Methode hat), verwenden Sie stattdessen {{jsxref("DisposableStack/adopt", "adopt()")}} und übergeben Sie einen Callback, der die Bereinigungsmethode der Ressource aufruft.

Sie sollten Ihre Ressource unmittelbar nach ihrer Deklaration registrieren. Umschließen Sie daher den Ausdruck zum Abrufen der Ressource immer mit `use()`, statt ihn in eine separate Anweisung auszulagern.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

## Beispiele

### use() verwenden

Dieser Code liest einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) mithilfe eines [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader). Der Reader wird automatisch geschlossen, wenn die Funktion abgeschlossen ist – vorausgesetzt, er implementiert eine `[Symbol.dispose]()`-Methode, die die Sperre für den Stream synchron freigibt.

```js
{
  using disposer = new DisposableStack();
  const reader = disposer.use(stream.getReader());
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

- [Polyfill für `DisposableStack.prototype.use` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.adopt()")}}
- {{jsxref("DisposableStack.prototype.defer()")}}
