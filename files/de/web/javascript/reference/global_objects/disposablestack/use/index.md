---
title: DisposableStack.prototype.use()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/use
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`use()`**-Methode von {{jsxref("DisposableStack")}}-Instanzen registriert einen Wert, der das [disposable-Protokoll](/de/docs/Web/JavaScript/Guide/Resource_management) implementiert, auf dem Stapel.

## Syntax

```js-nolint
use(value)
```

### Parameter

- `value`
  - : Der Wert, der auf dem Stapel registriert werden soll. Muss entweder eine `[Symbol.dispose]()`-Methode enthalten oder `null` oder `undefined` sein.

### Rückgabewert

Der gleiche `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` weder `null` noch `undefined` ist und keine `[Symbol.dispose]()`-Methode enthält.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stapel bereits entsorgt ist.

## Beschreibung

Der Hauptzweck von `use()` besteht darin, einen Wert, der das disposable-Protokoll implementiert, auf dem Stapel zu registrieren, als Äquivalent der {{jsxref("Statements/using", "using")}}-Deklaration. Wenn der Wert das disposable-Protokoll nicht implementiert (er keine `[Symbol.dispose]()`-Methode hat), verwenden Sie stattdessen {{jsxref("DisposableStack/adopt", "adopt()")}}, indem Sie eine Rückruffunktion übergeben, die die Bereinigungsmethode der Ressource aufruft.

Sie sollten Ihre Ressource so schnell wie möglich nach deren Deklaration registrieren. Das bedeutet, dass Sie den Ausdruck zur Ressourcengewinnung immer in `use()` einschließen sollten, anstatt ihn auf eine separate Anweisung zu extrahieren.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

## Beispiele

### Verwendung von use()

Dieser Code konsumiert einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) über einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader). Der Reader wird automatisch geschlossen, wenn die Funktion abgeschlossen ist, vorausgesetzt, er implementiert eine `[Symbol.dispose]()`-Methode, die die Sperre des Streams synchron freigibt.

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

- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.adopt()")}}
- {{jsxref("DisposableStack.prototype.defer()")}}
