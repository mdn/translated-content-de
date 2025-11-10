---
title: Symbol.dispose
short-title: dispose
slug: Web/JavaScript/Reference/Global_Objects/Symbol/dispose
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

Die **`Symbol.dispose`** statische Dateneigenschaft repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.dispose`. Die {{jsxref("Statements/using", "using")}}-Deklaration sucht dieses Symbol im Variableninitialisierer, um die Methode aufzurufen, wenn die Variable aus dem Gültigkeitsbereich verschwindet.

## Wert

Das wohlbekannte Symbol `Symbol.dispose`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Ein Objekt ist entsorgbar, wenn es die Methode `[Symbol.dispose]()` hat. Die Methode sollte die folgenden Semantiken haben:

- Der Aufruf dieser Methode teilt dem Disposable-Objekt mit, dass der Anrufer nicht beabsichtigt, dieses Objekt weiterhin zu verwenden. Diese Methode sollte jede notwendige Logik ausführen, um die Ressource explizit zu bereinigen, einschließlich, aber nicht beschränkt auf Dateisystem-Handles, Streams, Hostobjekte usw.
- Wenn von dieser Methode eine Ausnahme ausgelöst wird, bedeutet dies typischerweise, dass die Ressource nicht explizit freigegeben werden konnte.
- Wenn die Methode mehrmals auf dasselbe Objekt aufgerufen wird, sollte die Funktion keine Ausnahme werfen. Diese Anforderung wird jedoch nicht erzwungen.

Diese Methode sollte kein Promise zurückgeben, da Promises, die von `[Symbol.dispose]()` zurückgegeben werden, nicht von {{jsxref("Statements/await_using", "await using")}} abgewartet werden. Um asynchrone Disposables zu deklarieren, verwenden Sie {{jsxref("Symbol.asyncDispose")}}.

## Beispiele

### Benutzerdefinierte Disposables

`[Symbol.dispose]` ermöglicht die Erstellung benutzerdefinierter Disposables. Weitere Informationen finden Sie in der {{jsxref("Statements/using", "using")}}-Referenz.

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

- [Polyfill von `Symbol.dispose` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/using", "using")}}
- [`DisposableStack.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
- [`Iterator.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
