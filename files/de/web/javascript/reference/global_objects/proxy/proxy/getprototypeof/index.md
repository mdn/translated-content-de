---
title: handler.getPrototypeOf()
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`handler.getPrototypeOf()`**-Methode ist eine Trap für die `[[GetPrototypeOf]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.getPrototypeOf()")}} verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.getPrototypeOf()", "taller")}}

```js interactive-example
const monster1 = {
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

const proxy1 = new Proxy(monster1, handler);

console.log(Object.getPrototypeOf(proxy1) === monsterPrototype);
// Expected output: true

console.log(Object.getPrototypeOf(proxy1).eyeCount);
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

Der folgende Parameter wird an die `getPrototypeOf()`-Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.

### Rückgabewert

Die `getPrototypeOf()`-Methode muss ein Objekt oder `null` zurückgeben, das das Prototyp des Zielobjekts darstellt.

## Beschreibung

### Abfangoperationen

Diese Trap kann folgende Operationen abfangen:

- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
- [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Operators/instanceof", "instanceof")}}

Oder jede andere Operation, die die `[[GetPrototypeOf]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[GetPrototypeOf]]`-interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition gegen eine der folgenden Invarianten verstößt:

- Das Ergebnis muss entweder ein {{jsxref("Object")}} oder `null` sein.
- Wenn das Zielobjekt nicht erweiterbar ist (das heißt, {{jsxref("Reflect.isExtensible()")}} gibt `false` für `target` zurück), muss das Ergebnis dasselbe wie das Ergebnis von `Reflect.getPrototypeOf(target)` sein.

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

### Fünf Möglichkeiten, die getPrototypeOf-Trap auszulösen

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
