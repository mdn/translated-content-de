---
title: handler.isExtensible()
short-title: isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`handler.isExtensible()`** ist eine Trap für die `[[IsExtensible]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.isExtensible()")}} verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.isExtensible()", "taller")}}

```js interactive-example
const monster1 = {
  canEvolve: true,
};

const handler1 = {
  isExtensible(target) {
    return Reflect.isExtensible(target);
  },
  preventExtensions(target) {
    target.canEvolve = false;
    return Reflect.preventExtensions(target);
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(Object.isExtensible(proxy1));
// Expected output: true

console.log(monster1.canEvolve);
// Expected output: true

Object.preventExtensions(proxy1);

console.log(Object.isExtensible(proxy1));
// Expected output: false

console.log(monster1.canEvolve);
// Expected output: false
```

## Syntax

```js-nolint
new Proxy(target, {
  isExtensible(target) {
  }
})
```

### Parameter

Der folgende Parameter wird an die Methode `isExtensible()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.

### Rückgabewert

Die Methode `isExtensible()` muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob das Zielobjekt erweiterbar ist oder nicht. Andere Werte werden [in Boolean-Objekte umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

## Beschreibung

### Abfangmöglichkeiten

Diese Trap kann diese Operationen abfangen:

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

Oder jede andere Operation, die die `[[IsExtensible]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[IsExtensible]]`-Methode des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das Ergebnis muss dasselbe sein wie bei {{jsxref("Reflect.isExtensible()")}} auf dem Zielobjekt.

## Beispiele

### Abfangen von isExtensible

Der folgende Code fängt {{jsxref("Object.isExtensible()")}} ab.

```js
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      console.log("called");
      return true;
    },
  },
);

console.log(Object.isExtensible(p));
// "called"
// true
```

Der folgende Code verletzt die Invariante.

```js example-bad
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      return false;
    },
  },
);

Object.isExtensible(p); // TypeError is thrown
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
- {{jsxref("Reflect.preventExtensions()")}}
