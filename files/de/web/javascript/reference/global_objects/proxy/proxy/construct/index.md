---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`handler.construct()`**-Methode ist eine Trap für die `[[Construct]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie dem {{jsxref("Operators/new", "new")}}-Operator verwendet wird. Damit die `new`-Operation bei dem resultierenden Proxy-Objekt gültig ist, muss das für die Initialisierung des Proxy verwendete `target`-Objekt selbst ein gültiger Konstruktor sein.

{{InteractiveExample("JavaScript Demo: handler.construct()", "taller")}}

```js interactive-example
function monster1(disposition) {
  this.disposition = disposition;
}

const handler1 = {
  construct(target, args) {
    console.log(`Creating a ${target.name}`);
    // Expected output: "Creating a monster1"

    return new target(...args);
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(new proxy1("fierce").disposition);
// Expected output: "fierce"
```

## Syntax

```js-nolint
new Proxy(target, {
  construct(target, argumentsList, newTarget) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die `construct()`-Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Ziel-Konstruktor-Objekt.
- `argumentsList`
  - : Ein {{jsxref("Array")}}, das die an den Konstruktor übergebenen Argumente enthält.
- `newTarget`
  - : Der Konstruktor, der ursprünglich aufgerufen wurde.

### Rückgabewert

Die `construct()`-Methode muss ein Objekt zurückgeben, das das neu erstellte Objekt darstellt.

## Beschreibung

### Abfangbare Operationen

Diese Trap kann die folgenden Operationen abfangen:

- Den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator: `new myFunction(...args)`
- {{jsxref("Reflect.construct()")}}

Oder jede andere Operation, die die `[[Construct]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Construct]]`-interne Methode des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das `target` muss selbst ein Konstruktor sein.
- Das Ergebnis muss ein {{jsxref("Object")}} sein.

## Beispiele

### Abfangen des new-Operators

Der folgende Code fängt den {{jsxref("Operators/new", "new")}}-Operator ab.

```js
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    console.log(`called: ${argumentsList}`);
    return { value: argumentsList[0] * 10 };
  },
});

console.log(new p(1).value); // "called: 1"
// 10
```

Der folgende Code verletzt die Invariante.

```js example-bad
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    return 1;
  },
});

new p(); // TypeError is thrown
```

Der folgende Code initialisiert den Proxy auf fehlerhafte Weise. Das `target` in der Proxy-Initialisierung muss selbst ein gültiger Konstruktor für den {{jsxref("Operators/new", "new")}}-Operator sein.

```js example-bad
const p = new Proxy(
  {},
  {
    construct(target, argumentsList, newTarget) {
      return {};
    },
  },
);

new p(); // TypeError is thrown, "p" is not a constructor
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Reflect.construct()")}}
