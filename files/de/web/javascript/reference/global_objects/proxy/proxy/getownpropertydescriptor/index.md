---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.getOwnPropertyDescriptor()`** Methode ist eine Falle für die `[[GetOwnProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.getOwnPropertyDescriptor()")}} verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-getownpropertydescriptor.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  getOwnPropertyDescriptor(target, property) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die `getOwnPropertyDescriptor()` Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder ein {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.

### Rückgabewert

Die `getOwnPropertyDescriptor()` Methode muss ein Objekt oder `undefined` zurückgeben, das den Eigenschaftsdescriptor darstellt. Fehlende Attribute werden in der gleichen Weise wie bei {{jsxref("Object.defineProperty()")}} normalisiert.

## Beschreibung

### Abfangvorgänge

Diese Falle kann folgende Operationen abfangen:

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

Oder jede andere Operation, die die `[[GetOwnProperty]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[GetOwnProperty]]` Interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handlervorschrift eine der folgenden Invarianten verletzt:

- Das Ergebnis muss entweder ein {{jsxref("Object")}} oder `undefined` sein.
- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als nicht konfigurierbare eigene Eigenschaft des Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false` für die Eigenschaft am `target` zurückgibt, darf die Falle nicht `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als eigene Eigenschaft eines nicht erweiterbaren Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` für das Zielobjekt zurückgibt, darf die Falle nicht `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als existent gemeldet werden, wenn sie nicht als eigene Eigenschaft des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` für das Zielobjekt zurückgibt, und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` für die Eigenschaft am `target` zurückgibt, muss die Falle `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als nicht konfigurierbar gemeldet werden, es sei denn, sie existiert als nicht konfigurierbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` oder `configurable: true` für die Eigenschaft am `target` zurückgibt, darf die Falle nicht `configurable: false` zurückgeben.
- Eine Eigenschaft kann nicht sowohl als nicht konfigurierbar als auch nicht beschreibbar gemeldet werden, es sei denn, sie existiert als nicht konfigurierbare, nicht beschreibbare eigene Eigenschaft des Zielobjekts. Das heißt, zusätzlich zur vorherigen Invariante, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: true` für die Eigenschaft am `target` zurückgibt, darf die Falle nicht `configurable: false, writable: false` zurückgeben.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft am Zielobjekt hat, muss der Descriptor der Zielobjekteigenschaft mit `descriptor` kompatibel sein. Das heißt, angenommen `target` ist ein gewöhnliches Objekt, dann darf {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, resultObject)")}} keinen Fehler werfen. Der Verweis auf `Object.defineProperty()` enthält weitere Informationen, aber zusammengefasst muss, wenn die Zieleigenschaft nicht konfigurierbar ist, folgendes gelten:
  - `configurable`, `enumerable`, `get` und `set` müssen wie das Original sein. `writable` muss aufgrund der vorherigen Invariante ebenfalls das Original sein.
  - die Eigenschaft muss als Daten- oder Accessor-Eigenschaft beibehalten werden
  - das `value` Attribut kann nur geändert werden, wenn `writable` `true` ist

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

Object.getOwnPropertyDescriptor(p, "a"); // TypeError wird ausgelöst
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
