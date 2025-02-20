---
title: handler.has()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`handler.has()`**-Methode ist eine Falle für die `[[HasProperty]]`-[interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie dem {{jsxref("Operators/in", "in")}}-Operator verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.has()", "taller")}}

```js interactive-example
const handler1 = {
  has(target, key) {
    if (key[0] === "_") {
      return false;
    }
    return key in target;
  },
};

const monster1 = {
  _secret: "easily scared",
  eyeCount: 4,
};

const proxy1 = new Proxy(monster1, handler1);
console.log("eyeCount" in proxy1);
// Expected output: true

console.log("_secret" in proxy1);
// Expected output: false

console.log("_secret" in monster1);
// Expected output: true
```

## Syntax

```js-nolint
new Proxy(target, {
  has(target, property) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die Methode `has()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder ein {{jsxref("Symbol")}}, der den Namen der Eigenschaft darstellt.

### Rückgabewert

Die `has()`-Methode muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob die Eigenschaft existiert oder nicht. Andere Werte werden [in Booleans umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

## Beschreibung

### Abfangbare Operationen

Diese Falle kann folgende Operationen abfangen:

- Der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator: `foo in proxy`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Überprüfung: `with(proxy) { (foo); }`
- {{jsxref("Reflect.has()")}}

Oder jede andere Operation, die die `[[HasProperty]]`-[interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[HasProperty]]`-interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als nicht-konfigurierbare eigene Eigenschaft des Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false` für die Eigenschaft auf `target` zurückgibt, muss die Falle `true` zurückgeben.
- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als eigene Eigenschaft des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt, und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} eine Eigenschaftsbeschreibung für die Eigenschaft auf `target` liefert, muss die Falle `true` zurückgeben.

## Beispiele

### Abfangen des in-Operators

Der folgende Code fängt den {{jsxref("Operators/in", "in")}}-Operator ab.

```js
const p = new Proxy(
  {},
  {
    has(target, prop) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

console.log("a" in p);
// "called: a"
// true
```

Der folgende Code verletzt eine Invariante.

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);

const p = new Proxy(obj, {
  has(target, prop) {
    return false;
  },
});

"a" in p; // TypeError is thrown
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Reflect.has()")}}
