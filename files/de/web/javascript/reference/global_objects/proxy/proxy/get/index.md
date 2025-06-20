---
title: handler.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`handler.get()`** ist eine Trap für die `[[Get]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie [Property-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.get()", "taller")}}

```js interactive-example
const monster1 = {
  secret: "easily scared",
  eyeCount: 4,
};

const handler1 = {
  get(target, prop, receiver) {
    if (prop === "secret") {
      return `${target.secret.substring(0, 4)} ... shhhh!`;
    }
    return Reflect.get(...arguments);
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(proxy1.eyeCount);
// Expected output: 4

console.log(proxy1.secret);
// Expected output: "easi ... shhhh!"
```

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
  - : Ein String oder ein {{jsxref("Symbol")}}, das den Property-Namen darstellt.
- `receiver`
  - : Der `this`-Wert für Getter; siehe {{jsxref("Reflect.get()")}}. Dies ist normalerweise entweder der Proxy selbst oder ein Objekt, das vom Proxy erbt.

### Rückgabewert

Die `get()`-Methode kann einen beliebigen Wert zurückgeben, der den Eigenschaftswert darstellt.

## Beschreibung

### Abfangaktionen

Diese Trap kann die folgenden Operationen abfangen:

- Property-Zugriff: `proxy[foo]` und `proxy.bar`
- {{jsxref("Reflect.get()")}}

Oder jede andere Operation, die die `[[Get]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Get]]`-interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Der für eine Eigenschaft gemeldete Wert muss identisch mit dem Wert der entsprechenden Zielobjekteigenschaft sein, wenn die Zielobjekteigenschaft eine nicht veränderbare, nicht konfigurierbare eigene Daten-Eigenschaft ist. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: false` für die Eigenschaft auf `target` zurückgibt, muss die Trap denselben Wert wie das `value`-Attribut im Eigenschafts-Deskriptor des `target` zurückgeben.
- Der für eine Eigenschaft gemeldete Wert muss `undefined` sein, wenn die entsprechende Zielobjekteigenschaft eine nicht konfigurierbare eigene Accessor-Eigenschaft ist, die einen undefinierten Getter hat. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, get: undefined` für die Eigenschaft auf `target` zurückgibt, muss die Trap `undefined` zurückgeben.

## Beispiele

### Trap zum Abrufen eines Eigenschaftswertes

Der folgende Code fängt den Abruf eines Eigenschaftswertes ab.

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
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.get()")}}
