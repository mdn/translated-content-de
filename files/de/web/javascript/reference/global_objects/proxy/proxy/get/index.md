---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`handler.get()`**-Methode ist eine Trap für die `[[Get]]`-[interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie [Eigenschafts-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.get()", "taller")}}

```js interactive-example
const monster1 = {
  secret: "easily scared",
  eyeCount: 4,
};

const handler1 = {
  get: function (target, prop, receiver) {
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

Die folgenden Parameter werden an die Methode `get()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder ein {{jsxref("Symbol")}}, das den Eigenschaftsnamen repräsentiert.
- `receiver`
  - : Der `this`-Wert für Getter; siehe {{jsxref("Reflect.get()")}}. Dies ist normalerweise entweder der Proxy selbst oder ein Objekt, das vom Proxy erbt.

### Rückgabewert

Die Methode `get()` kann jeden Wert zurückgeben, der den Eigenschaftswert repräsentiert.

## Beschreibung

### Interzeptierungen

Diese Trap kann die folgenden Operationen abfangen:

- Eigenschaftszugriff: `proxy[foo]` und `proxy.bar`
- {{jsxref("Reflect.get()")}}

Oder jede andere Operation, die die `[[Get]]`-[interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Get]]`-Interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Definition des Handlers gegen eine der folgenden Invarianten verstößt:

- Der für eine Eigenschaft gemeldete Wert muss mit dem Wert der entsprechenden Eigenschaft des Zielobjekts übereinstimmen, wenn die Eigenschaft des Zielobjekts eine nicht beschreibbare, nicht konfigurierbare eigene Daten-Eigenschaft ist. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: false` für die Eigenschaft auf dem `target` zurückgibt, muss die Trap denselben Wert wie das `value` Attribut in der Eigenschaftsbeschreibung des `target` zurückgeben.
- Der für eine Eigenschaft gemeldete Wert muss `undefined` sein, wenn die entsprechende Eigenschaft des Zielobjekts eine nicht konfigurierbare eigene Accessor-Eigenschaft ist, deren Getter undefiniert ist. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, get: undefined` für die Eigenschaft auf dem `target` zurückgibt, muss die Trap `undefined` zurückgeben.

## Beispiele

### Trap für das Abrufen eines Eigenschaftswerts

Der folgende Code fängt das Abrufen eines Eigenschaftswerts ab.

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

Der folgende Code verstößt gegen eine Invariante.

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
