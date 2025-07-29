---
title: Symbol.dispose
slug: Web/JavaScript/Reference/Global_Objects/Symbol/dispose
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`Symbol.dispose`** statische Dateneigenschaft repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.dispose`. Die {{jsxref("Statements/using", "using")}} Deklaration sucht dieses Symbol im Variableninitialisierer für die Methode, die aufgerufen werden soll, wenn die Variable aus dem Bereich fällt.

## Wert

Das wohlbekannte Symbol `Symbol.dispose`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Ein Objekt ist entsorgbar, wenn es die Methode `[Symbol.dispose]()` besitzt. Es wird erwartet, dass die Methode folgende Semantik hat:

- Der Aufruf dieser Methode benachrichtigt das entsorgbare Objekt darüber, dass der Aufrufer nicht beabsichtigt, dieses Objekt weiter zu verwenden. Diese Methode sollte jegliche notwendige Logik durchführen, um die Ressource explizit aufzuräumen, einschließlich, aber nicht beschränkt auf, Dateisystem-Handles, Streams, Host-Objekte usw.
- Wenn eine Ausnahme von dieser Methode geworfen wird, bedeutet das normalerweise, dass die Ressource nicht explizit freigegeben werden konnte.
- Wenn die Methode mehr als einmal auf demselben Objekt aufgerufen wird, sollte die Funktion keine Ausnahme werfen. Diese Anforderung wird jedoch nicht erzwungen.

Diese Methode sollte kein Versprechen zurückgeben, da Versprechen, die von `[Symbol.dispose]()` zurückgegeben werden, nicht von {{jsxref("Statements/await_using", "await using")}} erwartet werden. Um asynchrone Entsorgungen zu deklarieren, verwenden Sie {{jsxref("Symbol.asyncDispose")}}.

## Beispiele

### Benutzerdefinierte Entsorgbare

`[Symbol.dispose]` ermöglicht die Erstellung von benutzerdefinierten Entsorgbaren. Weitere Informationen finden Sie im {{jsxref("Statements/using", "using")}} Verweis.

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
- [JavaScript Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/using", "using")}}
- [`DisposableStack.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
- [`Iterator.prototype[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
