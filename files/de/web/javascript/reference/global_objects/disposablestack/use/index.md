---
title: DisposableStack.prototype.use()
short-title: use()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/use
l10n:
  sourceCommit: 7a5b580a28a0b1a33e42e9fb81c8234994ec0e36
---

Die **`use()`**-Methode von {{jsxref("DisposableStack")}}-Instanzen registriert einen Wert, der das [disposable-Protokoll](/de/docs/Web/JavaScript/Guide/Resource_management) zur Stack instanziiert.

## Syntax

```js-nolint
use(value)
```

### Parameter

- `value`
  - : Der Wert, der auf dem Stack registriert werden soll. Muss entweder eine `[Symbol.dispose]()`-Methode enthalten oder `null` oder `undefined` sein.

### Rückgabewert

Der gleiche `value`, der übergeben wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` nicht `null` oder `undefined` ist und keine `[Symbol.dispose]()`-Methode enthält.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn der Stack bereits entsorgt ist.

## Beschreibung

Der Hauptzweck von `use()` ist es, einen Wert zu registrieren, der das disposable-Protokoll auf dem Stack als Äquivalent der {{jsxref("Statements/using", "using")}}-Deklaration instanziiert. Wenn der Wert das disposable-Protokoll nicht implementiert (es hat keine `[Symbol.dispose]()`-Methode), verwenden Sie stattdessen {{jsxref("DisposableStack/adopt", "adopt()")}}, indem Sie einen Rückruf übergeben, der die Aufräummethode der Ressource aufruft.

Sie sollten Ihre Ressource registrieren, sobald sie deklariert wird. Das bedeutet, dass Sie immer Ihre Ressourcenanforderungsausdrücke in `use()` einwickeln sollten, anstatt sie in eine separate Anweisung zu extrahieren.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

## Beispiele

### Verwenden von use()

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
