---
title: Symbol.asyncDispose
short-title: asyncDispose
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Dateneigenschaft **`Symbol.asyncDispose`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.asyncDispose`. Die Deklaration {{jsxref("Statements/await_using", "await using")}} sucht im Initialisierungswert der Variablen nach diesem Symbol, um die Methode zu bestimmen, die aufgerufen wird, wenn die Variable ihren Gültigkeitsbereich verlässt.

## Wert

Das bekannte Symbol `Symbol.asyncDispose`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Ein Objekt kann asynchron freigegeben werden, wenn es über die Methode `[Symbol.asyncDispose]()` verfügt. Für diese Methode wird folgendes Verhalten erwartet:

- Ein Aufruf dieser Methode teilt dem AsyncDisposable-Objekt mit, dass der Aufrufer das Objekt nicht weiter verwenden möchte. Die Methode sollte alle erforderlichen Schritte ausführen, um die Ressource ausdrücklich freizugeben. Dazu gehören beispielsweise Dateisystem-Handles, Streams und Host-Objekte.
- Die Methode kann ein Promise zurückgeben, dessen Erfüllung abgewartet wird, bevor die Ausführung fortgesetzt wird.
- Wenn diese Methode eine Ausnahme auslöst, bedeutet dies in der Regel, dass die Ressource nicht ausdrücklich freigegeben werden konnte. Ein AsyncDisposable-Objekt gilt erst dann als „freigegeben“, wenn das zurückgegebene Promise erfüllt wurde.
- Bei mehrmaligem Aufruf für dasselbe Objekt sollte die Funktion keine Ausnahme auslösen. Diese Anforderung wird jedoch nicht erzwungen.

## Beispiele

### Benutzerdefinierte asynchron freigebbare Objekte

`[Symbol.asyncDispose]` ermöglicht es, benutzerdefinierte asynchron freigebbare Objekte zu erstellen. Weitere Informationen finden Sie in der Referenz zu `await using`.

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

- [Polyfill für `Symbol.asyncDispose` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [Ressourcenverwaltung in JavaScript](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/await_using", "await using")}}
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
- [`AsyncIterator.prototype[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose)
