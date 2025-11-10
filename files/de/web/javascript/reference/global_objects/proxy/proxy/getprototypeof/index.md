---
title: handler.getPrototypeOf()
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.getPrototypeOf()`** Methode ist eine Falle für die `[[GetPrototypeOf]]` [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.getPrototypeOf()")}} verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.getPrototypeOf()", "taller")}}

```js interactive-example
const monster = {
  eyeCount: 4,
};

const monsterPrototype = {
  eyeCount: 2,
};

const handler = {
  getPrototypeOf(target) {
    return monsterPrototype;
  },
};

const proxy = new Proxy(monster, handler);

console.log(Object.getPrototypeOf(proxy) === monsterPrototype);
// Expected output: true

console.log(Object.getPrototypeOf(proxy).eyeCount);
// Expected output: 2
```

## Syntax

```js-nolint
new Proxy(target, {
  getPrototypeOf(target) {
  }
})
```

### Parameter

Der folgende Parameter wird an die `getPrototypeOf()` Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.

### Rückgabewert

Die `getPrototypeOf()` Methode muss ein Objekt oder `null` zurückgeben, das das Prototyp des Zielobjekts darstellt.

## Beschreibung

### Abfangvorgänge

Diese Falle kann folgende Operationen abfangen:

- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
- [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Operators/instanceof", "instanceof")}}

Oder jede andere Operation, die die `[[GetPrototypeOf]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[GetPrototypeOf]]` interne Methode des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Handlerdefinition eine der folgenden Invarianten verletzt:

- Das Ergebnis muss entweder ein {{jsxref("Object")}} oder `null` sein.
- Wenn das Zielobjekt nicht erweiterbar ist (das heißt, {{jsxref("Reflect.isExtensible()")}} gibt `false` für `target` zurück), muss das Ergebnis das gleiche sein wie das Ergebnis von `Reflect.getPrototypeOf(target)`.

## Beispiele

### Grundlegende Verwendung

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

### Fünf Möglichkeiten, die getPrototypeOf-Falle auszulösen

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
