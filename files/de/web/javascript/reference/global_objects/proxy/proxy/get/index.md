---
title: handler.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.get()`** Methode ist eine Falle für die `[[Get]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie [Eigenschaftszugriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.get()", "taller")}}

```js interactive-example
const monster = {
  secret: "easily scared",
  eyeCount: 4,
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "secret") {
      return `${target.secret.substring(0, 4)} ... shhhh!`;
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(monster, handler);

console.log(proxy.eyeCount);
// Expected output: 4

console.log(proxy.secret);
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
  - : Ein String oder ein {{jsxref("Symbol")}}, das den Eigenschaftsnamen darstellt.
- `receiver`
  - : Der `this`-Wert für Getter; siehe {{jsxref("Reflect.get()")}}. Dies ist üblicherweise entweder der Proxy selbst oder ein Objekt, das vom Proxy erbt.

### Rückgabewert

Die `get()`-Methode kann jeden Wert zurückgeben, der den Eigenschaftswert darstellt.

## Beschreibung

### Abfangvorgänge

Diese Falle kann folgende Operationen abfangen:

- Eigenschaftszugriff: `proxy[foo]` und `proxy.bar`
- {{jsxref("Reflect.get()")}}

Oder jede andere Operation, die die `[[Get]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Get]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handlerdefinition eine der folgenden Invarianten verletzt:

- Der gemeldete Wert für eine Eigenschaft muss derselbe sein wie der Wert der entsprechenden Zielobjekteigenschaft, wenn die Zielobjekteigenschaft eine nicht-beschreibbare, nicht-konfigurierbare eigene Dateneigenschaft ist. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, writable: false` zurückgibt, dann muss die Falle denselben Wert wie das `value`-Attribut im Eigenschaftsbeschreiber von `target` zurückgeben.
- Der gemeldete Wert für eine Eigenschaft muss `undefined` sein, wenn die entsprechende Zielobjekteigenschaft eine nicht-konfigurierbare eigene Accessor-Eigenschaft ist, die einen undefinierten Getter hat. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, get: undefined` zurückgibt, dann muss die Falle `undefined` zurückgeben.

## Beispiele

### Falle für das Abrufen eines Eigenschaftswerts

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
