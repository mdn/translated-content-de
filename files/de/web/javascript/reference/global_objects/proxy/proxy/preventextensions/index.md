---
title: handler.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`handler.preventExtensions()`** ist eine Trap für die `[[PreventExtensions]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.preventExtensions()")}} verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.preventExtensions()", "taller")}}

```js interactive-example
const monster1 = {
  canEvolve: true,
};

const handler1 = {
  preventExtensions(target) {
    target.canEvolve = false;
    Object.preventExtensions(target);
    return true;
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(monster1.canEvolve);
// Expected output: true

Object.preventExtensions(proxy1);

console.log(monster1.canEvolve);
// Expected output: false
```

## Syntax

```js-nolint
new Proxy(target, {
  preventExtensions(target) {
  }
})
```

### Parameter

Der folgende Parameter wird an die Methode `preventExtensions()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.

### Rückgabewert

Die Methode `preventExtensions()` muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob die Operation erfolgreich war oder nicht. Andere Werte werden [zu Booleans konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.preventExtensions()")}}, werfen eine {{jsxref("TypeError")}}, wenn die interne Methode `[[PreventExtensions]]` `false` zurückgibt.

## Beschreibung

### Abfangbare Operationen

Diese Trap kann folgende Operationen abfangen:

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.freeze()")}}

Oder jede andere Operation, die die interne Methode `[[PreventExtensions]]` [aufruft](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invarianten

Die interne Methode `[[PreventExtensions]]` des Proxys wirft eine {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das Ergebnis ist nur dann `true`, wenn {{jsxref("Reflect.isExtensible()")}} auf dem Zielobjekt nach dem Aufruf von `handler.preventExtensions()` `false` zurückgibt.

## Beispiele

### Abfangen von preventExtensions

Das folgende Beispiel fängt {{jsxref("Object.preventExtensions()")}} ab.

```js
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      console.log("called");
      Object.preventExtensions(target);
      return true;
    },
  },
);

console.log(Object.preventExtensions(p));
// "called"
// false
```

Das folgende Beispiel verletzt die Invariante.

```js example-bad
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      return true;
    },
  },
);

Object.preventExtensions(p); // TypeError is thrown
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
