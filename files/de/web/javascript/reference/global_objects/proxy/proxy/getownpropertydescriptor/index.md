---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die Methode **`handler.getOwnPropertyDescriptor()`** ist eine Falle für die `[[GetOwnProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.getOwnPropertyDescriptor()")}} verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-getownpropertydescriptor.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  getOwnPropertyDescriptor(target, property) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die Methode `getOwnPropertyDescriptor()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder ein {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.

### Rückgabewert

Die Methode `getOwnPropertyDescriptor()` muss ein Objekt oder `undefined` zurückgeben, das den Eigenschaftsdescriptor darstellt. Fehlende Attribute werden in derselben Weise normalisiert wie in {{jsxref("Object.defineProperty()")}}.

## Beschreibung

### Abfangen

Diese Falle kann folgende Operationen abfangen:

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

Oder jede andere Operation, die die `[[GetOwnProperty]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[GetOwnProperty]]`-Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das Ergebnis muss entweder ein {{jsxref("Object")}} oder `undefined` sein.
- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als nicht konfigurierbare eigene Eigenschaft des Zielobjekts existiert. Das bedeutet, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false` zurückgibt, darf die Falle nicht `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als eigene Eigenschaft eines nicht erweiterbaren Zielobjekts existiert. Das bedeutet, wenn {{jsxref("Reflect.isExtensible()")}} für das Zielobjekt `false` zurückgibt, darf die Falle nicht `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als existent gemeldet werden, wenn sie nicht als eigene Eigenschaft des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das bedeutet, wenn {{jsxref("Reflect.isExtensible()")}} für das Zielobjekt `false` zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `undefined` zurückgibt, muss die Falle `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als nicht konfigurierbar gemeldet werden, es sei denn, sie existiert als nicht konfigurierbare eigene Eigenschaft des Zielobjekts. Das bedeutet, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `undefined` oder `configurable: true` zurückgibt, darf die Falle nicht `configurable: false` zurückgeben.
- Eine Eigenschaft kann nicht als sowohl nicht konfigurierbar als auch nicht beschreibbar gemeldet werden, es sei denn, sie existiert als nicht konfigurierbare, nicht beschreibbare eigene Eigenschaft des Zielobjekts. Das bedeutet, zusätzlich zur vorherigen Invariante, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, writable: true` zurückgibt, darf die Falle nicht `configurable: false, writable: false` zurückgeben.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft auf dem Zielobjekt hat, muss der Descriptor der Zielobjekteigenschaft mit `descriptor` kompatibel sein. Das bedeutet, dass das Pretendieren von `target` ein gewöhnliches Objekt ist, dann {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, resultObject)")}} keinen Fehler werfen darf. Der `Object.defineProperty()`-Referenz enthält mehr Informationen, aber zusammengefasst, wenn die Zieleigenschaft nicht konfigurierbar ist, muss folgendes gelten:
  - `configurable`, `enumerable`, `get` und `set` müssen dieselben wie das Original sein. `writable` muss ebenfalls das Original sein, aufgrund der vorherigen Invariante.
  - die Eigenschaft muss als Daten- oder Zugriffseigenschaft verbleiben
  - das `value`-Attribut kann nur geändert werden, wenn `writable` `true` ist

## Beispiele

### Abfangen von getOwnPropertyDescriptor

Der folgende Code fängt {{jsxref("Object.getOwnPropertyDescriptor()")}} ab.

```js
const p = new Proxy(
  { a: 20 },
  {
    getOwnPropertyDescriptor(target, prop) {
      console.log(`called: ${prop}`);
      return { configurable: true, enumerable: true, value: 10 };
    },
  },
);

console.log(Object.getOwnPropertyDescriptor(p, "a").value);
// "called: a"
// 10
```

Der folgende Code verletzt eine Invariante.

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);
const p = new Proxy(obj, {
  getOwnPropertyDescriptor(target, prop) {
    return undefined;
  },
});

Object.getOwnPropertyDescriptor(p, "a"); // TypeError is thrown
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
