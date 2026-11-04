---
title: Symbol.asyncDispose
short-title: asyncDispose
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose
l10n:
  sourceCommit: 46bc51a679f027efc49508a449f7539ee1adca22
---

Die statische Dateneigenschaft **`Symbol.asyncDispose`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.asyncDispose`. Die Deklaration {{jsxref("Statements/await_using", "await using")}} sucht dieses Symbol im Initialisierungswert der Variablen, um die Methode zu ermitteln, die aufgerufen wird, wenn die Variable ihren Gültigkeitsbereich verlässt.

## Wert

Das wohlbekannte Symbol `Symbol.asyncDispose`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Ein Objekt kann asynchron freigegeben werden, wenn es über die Methode `[Symbol.asyncDispose]()` verfügt. Von dieser Methode wird folgendes Verhalten erwartet:

- Ein Aufruf dieser Methode teilt dem AsyncDisposable-Objekt mit, dass der Aufrufer das Objekt nicht weiter verwenden möchte. Die Methode sollte alle erforderlichen Schritte ausführen, um die Ressource explizit freizugeben. Dazu gehören unter anderem Dateisystem-Handles, Streams und Host-Objekte.
- Die Methode kann ein Promise zurückgeben, dessen Erfüllung abgewartet wird, bevor die Ausführung fortgesetzt wird.
- Wenn diese Methode eine Ausnahme auslöst, bedeutet das in der Regel, dass die Ressource nicht explizit freigegeben werden konnte. Ein AsyncDisposable-Objekt gilt erst dann als „freigegeben“, wenn das resultierende Promise erfüllt wurde.
- Wird die Methode für dasselbe Objekt mehr als einmal aufgerufen, sollte sie keine Ausnahme auslösen. Diese Anforderung wird jedoch nicht erzwungen.

## Beispiele

### Benutzerdefinierte asynchron freigebbare Objekte

`[Symbol.asyncDispose]` ermöglicht die Erstellung benutzerdefinierter asynchron freigebbarer Objekte. Weitere Informationen finden Sie in der Referenz zu `await using`.

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
    this.#disposed = true;
  }

  get isDisposed() {
    return this.#disposed;
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
