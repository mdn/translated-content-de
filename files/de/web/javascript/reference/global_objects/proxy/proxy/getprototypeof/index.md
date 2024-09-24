---
title: handler.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.getPrototypeOf()`** Methode ist eine Trap für die interne Methode `[[GetPrototypeOf]]` eines [Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.getPrototypeOf()")}} verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-getprototypeof.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  getPrototypeOf(target) {
  }
})
```

### Parameter

Der folgende Parameter wird an die Methode `getPrototypeOf()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.

### Rückgabewert

Die Methode `getPrototypeOf()` muss ein Objekt oder `null` zurückgeben, das das Prototype des Zielobjekts darstellt.

## Beschreibung

### Abfangbare Operationen

Diese Trap kann folgende Operationen abfangen:

- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
- [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Operators/instanceof", "instanceof")}}

Oder jede andere Operation, die die interne Methode `[[GetPrototypeOf]]` [aufruft](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invarianten

Die interne Methode `[[GetPrototypeOf]]` des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Handlerdefinition eine der folgenden Invarianten verletzt:

- Das Ergebnis muss entweder ein {{jsxref("Object")}} oder `null` sein.
- Wenn das Zielobjekt nicht erweiterbar ist (das heißt, {{jsxref("Reflect.isExtensible()")}} gibt `false` für `target` zurück), muss das Ergebnis dasselbe wie das Ergebnis von `Reflect.getPrototypeOf(target)` sein.

## Beispiele

### Grundlegende Nutzung

```js
const obj = {};
const proto = {};
const handler = {
  getPrototypeOf(target) {
    console.log(target === obj); // true
    console.log(this === handler); // true
    return proto;
  },
};

const p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto); // true
```

### Fünf Möglichkeiten, die getPrototypeOf Trap auszulösen

```js
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return Array.prototype;
  },
});
console.log(
  Object.getPrototypeOf(p) === Array.prototype, // true
  Reflect.getPrototypeOf(p) === Array.prototype, // true
  p.__proto__ === Array.prototype, // true
  Array.prototype.isPrototypeOf(p), // true
  p instanceof Array, // true
);
```

### Zwei Arten von Ausnahmen

```js example-bad
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return "foo";
  },
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

const obj2 = Object.preventExtensions({});
const p2 = new Proxy(obj2, {
  getPrototypeOf(target) {
    return {};
  },
});
Object.getPrototypeOf(p2); // TypeError: expected same prototype value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
