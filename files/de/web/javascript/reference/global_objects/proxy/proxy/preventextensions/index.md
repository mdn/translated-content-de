---
title: handler.preventExtensions()
short-title: preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.preventExtensions()`**-Methode ist ein Trap für die `[[PreventExtensions]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.preventExtensions()")}} verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.preventExtensions()", "taller")}}

```js interactive-example
const monster = {
  canEvolve: true,
};

const handler = {
  preventExtensions(target) {
    target.canEvolve = false;
    Object.preventExtensions(target);
    return true;
  },
};

const proxy = new Proxy(monster, handler);

console.log(monster.canEvolve);
// Expected output: true

Object.preventExtensions(proxy);

console.log(monster.canEvolve);
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

Der folgende Parameter wird an die `preventExtensions()`-Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.

### Rückgabewert

Die `preventExtensions()`-Methode muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob die Operation erfolgreich war oder nicht. Andere Werte werden zu Boolean-Werten [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.preventExtensions()")}}, werfen einen {{jsxref("TypeError")}}, wenn die interne Methode `[[PreventExtensions]]` `false` zurückgibt.

## Beschreibung

### Abfangvorgänge

Dieser Trap kann folgende Operationen abfangen:

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.freeze()")}}

Oder jede andere Operation, die die `[[PreventExtensions]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[PreventExtensions]]`-interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das Ergebnis ist nur dann `true`, wenn {{jsxref("Reflect.isExtensible()")}} am Zielobjekt `false` zurückgibt, nachdem `handler.preventExtensions()` aufgerufen wurde.

## Beispiele

### Abfangen von preventExtensions

Der folgende Code fängt {{jsxref("Object.preventExtensions()")}} ab.

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

Der folgende Code verletzt die Invariante.

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
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
