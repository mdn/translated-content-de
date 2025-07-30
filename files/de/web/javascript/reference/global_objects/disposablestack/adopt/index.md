---
title: DisposableStack.prototype.adopt()
short-title: adopt()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/adopt
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`adopt()`** Methode von {{jsxref("DisposableStack")}} Instanzen registriert einen Wert, der das disposable Protokoll nicht implementiert, auf dem Stack, indem eine benutzerdefinierte Dispose-Funktion bereitgestellt wird.

## Syntax

```js-nolint
adopt(value, onDispose)
```

### Parameter

- `value`
  - : Beliebiger Wert, der auf dem Stack registriert werden soll.
- `onDispose`
  - : Eine Funktion, die aufgerufen wird, wenn der Stack entsorgt wird. Die Funktion erhält `value` als einziges Argument.

### Rückgabewert

Der gleiche `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `onDispose` keine Funktion ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits entsorgt ist.

## Beschreibung

Der Hauptzweck von `adopt()` ist es, einen Wert zu registrieren, der das disposable Protokoll nicht implementiert. Wenn der Wert bereits disposable ist, können Sie stattdessen {{jsxref("DisposableStack/use", "use()")}} verwenden, welches automatisch die `[Symbol.dispose]()` Methode des Wertes als Disposer nutzt.

`adopt(value, onDispose)` ist fast das gleiche wie `defer(() => onDispose(value))`, aber es ermöglicht Ihnen, die Ressource zu deklarieren und auf derselben Zeile zu registrieren. Auf diese Weise gibt es minimalen Spielraum für Fehler zwischen der Erstellung und Registrierung der Ressource, was dazu führen könnte, dass die Ressource verloren geht.

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

Im gleichen Sinne des "Registrieren Sie Ihre Ressource, sobald sie deklariert ist", sollten Sie immer Ihren Ressourcenerwerbsausdruck in `adopt()` einwickeln, anstatt ihn in eine separate Anweisung auszulagern.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.adopt(reader, (reader) => reader.close());
```

## Beispiele

### Nutzung von adopt()

Dieses Codebeispiel konsumiert einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) über einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader). Der Reader implementiert das disposable Protokoll nicht, daher nutzen wir `adopt()`, um ihn auf dem Stack zu registrieren.

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

- [JavaScript Ressourcensverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.defer()")}}
- {{jsxref("DisposableStack.prototype.use()")}}
