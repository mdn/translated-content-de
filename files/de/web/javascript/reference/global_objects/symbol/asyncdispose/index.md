---
title: Symbol.asyncDispose
short-title: asyncDispose
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

Die statische Dateneigenschaft **`Symbol.asyncDispose`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.asyncDispose`. Die {{jsxref("Statements/await_using", "await using")}}-Deklaration sucht dieses Symbol im Variablen-Initializer für die Methode, die aufgerufen werden soll, wenn die Variable außer Reichweite gerät.

## Wert

Das wohlbekannte Symbol `Symbol.asyncDispose`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Ein Objekt ist asynchron disposable, wenn es die Methode `[Symbol.asyncDispose]()` hat. Diese Methode sollte die folgenden Semantiken besitzen:

- Der Aufruf dieser Methode benachrichtigt das AsyncDisposable-Objekt, dass der Aufrufer nicht die Absicht hat, das Objekt weiter zu verwenden. Diese Methode sollte alle notwendigen Logiken ausführen, um die Ressource explizit zu bereinigen, einschließlich, aber nicht beschränkt auf Dateisystem-Handles, Streams, Host-Objekte etc.
- Diese Methode kann ein Promise zurückgeben, das vor dem Fortfahren abgewartet wird.
- Wenn eine Ausnahme von dieser Methode ausgelöst wird, bedeutet das typischerweise, dass die Ressource nicht explizit freigegeben werden konnte. Ein AsyncDisposable-Objekt wird nicht als "disposed" betrachtet, bis das resultierende Promise erfüllt worden ist.
- Wenn die Funktion mehr als einmal auf dasselbe Objekt aufgerufen wird, sollte keine Ausnahme ausgelöst werden. Diese Anforderung wird jedoch nicht erzwungen.

## Beispiele

### Benutzerdefinierte asynchrone Disposables

`[Symbol.asyncDispose]` ermöglicht die Erstellung von benutzerdefinierten asynchronen Disposables. Siehe die Referenz zu `await using` für weitere Informationen.

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
