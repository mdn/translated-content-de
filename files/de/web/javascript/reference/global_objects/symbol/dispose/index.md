---
title: Symbol.dispose
short-title: dispose
slug: Web/JavaScript/Reference/Global_Objects/Symbol/dispose
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Dateneigenschaft **`Symbol.dispose`** steht für das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.dispose`. Die {{jsxref("Statements/using", "using")}}-Deklaration sucht im Initialisierungswert der Variablen nach diesem Symbol, um die Methode zu ermitteln, die aufgerufen werden soll, wenn die Variable ihren Gültigkeitsbereich verlässt.

## Wert

Das bekannte Symbol `Symbol.dispose`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Ein Objekt kann explizit freigegeben werden, wenn es über die Methode `[Symbol.dispose]()` verfügt. Für diese Methode wird das folgende Verhalten erwartet:

- Der Aufruf dieser Methode teilt dem freizugebenden Objekt mit, dass der Aufrufer es nicht weiter verwenden möchte. Die Methode sollte alle erforderlichen Schritte ausführen, um die Ressource explizit freizugeben. Dazu gehören unter anderem Dateisystem-Handles, Streams und Host-Objekte.
- Wenn diese Methode eine Ausnahme auslöst, bedeutet dies in der Regel, dass die Ressource nicht explizit freigegeben werden konnte.
- Wird die Methode mehrmals für dasselbe Objekt aufgerufen, sollte sie keine Ausnahme auslösen. Diese Anforderung wird jedoch nicht erzwungen.

Diese Methode sollte kein Promise zurückgeben, da von `[Symbol.dispose]()` zurückgegebene Promises durch {{jsxref("Statements/await_using", "await using")}} nicht abgewartet werden. Verwenden Sie {{jsxref("Symbol.asyncDispose")}}, um asynchron freizugebende Objekte zu definieren.

## Beispiele

### Benutzerdefinierte freizugebende Objekte

`[Symbol.dispose]` ermöglicht es, eigene freizugebende Objekte zu erstellen. Weitere Informationen finden Sie in der Referenz zu {{jsxref("Statements/using", "using")}}.

```js
class Disposable {
  constructor() {
    this.disposed = false;
  }

  [Symbol.dispose]() {
    this.disposed = true;
  }

  get isDisposed() {
    return this.disposed;
  }
}

const resource = new Disposable();
{
  using resourceUsed = resource;
  console.log(resource.isDisposed); // false
}
console.log(resource.isDisposed); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Symbol.dispose` in `core-js`](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/using", "using")}}
- [`DisposableStack.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
- [`Iterator.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
