---
title: Symbol.asyncDispose
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`Symbol.asyncDispose`** statische Daten-Eigenschaft repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.asyncDispose`. Die Deklaration {{jsxref("Statements/await_using", "await using")}} sucht dieses Symbol im Variablen-Initializer, um die Methode aufzurufen, wenn die Variable aus dem Gültigkeitsbereich tritt.

## Wert

Das wohlbekannte Symbol `Symbol.asyncDispose`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Ein Objekt ist asynchron entsorgbar, wenn es die Methode `[Symbol.asyncDispose]()` besitzt. Die Methode sollte die folgenden Semantiken haben:

- Das Aufrufen dieser Methode benachrichtigt das AsyncDisposable-Objekt, dass der Aufrufer nicht beabsichtigt, dieses Objekt weiterhin zu verwenden. Diese Methode sollte jede notwendige Logik zum expliziten Aufräumen der Ressource ausführen, einschließlich, aber nicht beschränkt auf Dateisystem-Handles, Streams, Host-Objekte usw.
- Diese Methode kann ein Promise zurückgeben, das abgewartet wird, bevor fortgefahren wird.
- Wenn von dieser Methode eine Ausnahme geworfen wird, bedeutet dies typischerweise, dass die Ressource nicht explizit freigegeben werden konnte. Ein AsyncDisposable-Objekt gilt erst als "entsorgt", wenn das resultierende Promise erfüllt wurde.
- Wenn auf dasselbe Objekt mehrmals aufgerufen wird, sollte die Funktion keine Ausnahme werfen. Diese Anforderung wird jedoch nicht erzwungen.

## Beispiele

### Benutzerdefinierte asynchrone Entsorgungen

`[Symbol.asyncDispose]` ermöglicht die Erstellung von benutzerdefinierten asynchronen Entsorgungen. Weitere Informationen finden Sie im `await using` Verweis.

```js
class Disposable {
  #fileHandle;
  #disposed;

  constructor(handle) {
    this.#disposed = false;
    this.#fileHandle = handle;
  }

  async [Symbol.asyncDispose]() {
    await this.#fileHandle.close();
    this.disposed = true;
  }

  get isDisposed() {
    return this.disposed;
  }
}

const resource = new Disposable(await fs.open("my-file.txt", "r"));
{
  await using resourceUsed = resource;
  console.log(resource.isDisposed); // false
}
console.log(resource.isDisposed); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol.asyncDispose` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript-Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/await_using", "await using")}}
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
- [`AsyncIterator.prototype[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose)
