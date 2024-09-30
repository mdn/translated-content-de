---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.get()`**-Methode ist eine Falle für die `[[Get]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie [Eigenschaftszugriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-get.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  get(target, property, receiver) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die `get()`-Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder ein {{jsxref("Symbol")}}, das den Eigenschaftsnamen darstellt.
- `receiver`
  - : Der `this`-Wert für Getter; siehe {{jsxref("Reflect.get()")}}. Dies ist normalerweise entweder der Proxy selbst oder ein Objekt, das vom Proxy erbt.

### Rückgabewert

Die `get()`-Methode kann jeden Wert zurückgeben, der den Eigenschaftswert darstellt.

## Beschreibung

### Abfangvorgänge

Diese Falle kann folgende Operationen abfangen:

- Eigenschaftszugriff: `proxy[foo]` und `proxy.bar`
- {{jsxref("Reflect.get()")}}

Oder jede andere Operation, die die `[[Get]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Get]]` interne Methode des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Der angegebene Wert für eine Eigenschaft muss mit dem Wert der entsprechenden Zielobjekteigenschaft übereinstimmen, wenn die Zielobjekteigenschaft eine nicht beschreibbare, nicht konfigurierbare eigene Dateneigenschaft ist. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: false` für die Eigenschaft auf `target` zurückgibt, dann muss die Falle denselben Wert wie das `value`-Attribut im Property Descriptor von `target` zurückgeben.
- Der gemeldete Wert für eine Eigenschaft muss `undefined` sein, wenn die entsprechende Zielobjekteigenschaft eine nicht konfigurierbare eigene Accessor-Eigenschaft ist, die einen undefinierten Getter besitzt. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, get: undefined` für die Eigenschaft auf `target` zurückgibt, dann muss die Falle `undefined` zurückgeben.

## Beispiele

### Falle für den Abruf eines Eigenschaftswerts

Der folgende Code fängt den Abruf eines Eigenschaftswerts ab.

```js
const p = new Proxy(
  {},
  {
    get(target, property, receiver) {
      console.log(`called: ${property}`);
      return 10;
    },
  },
);

console.log(p.a);
// "called: a"
// 10
```

Der folgende Code verletzt eine Invariante.

```js
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false,
});

const p = new Proxy(obj, {
  get(target, property) {
    return 20;
  },
});

p.a; // TypeError is thrown
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.get()")}}
