---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Object.getPrototypeOf()`** statische Methode gibt das Prototyp-Objekt zurück (d. h. den Wert der internen `[[Prototype]]`-Eigenschaft) des angegebenen Objekts.

{{InteractiveExample("JavaScript Demo: Object.getPrototypeOf()", "shorter")}}

```js interactive-example
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// Expected output: true
```

## Syntax

```js-nolint
Object.getPrototypeOf(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen Prototyp zurückgegeben werden soll.

### Rückgabewert

Der Prototyp des angegebenen Objekts, der auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein kann.

## Beispiele

### Verwendung von getPrototypeOf

```js
const proto = {};
const obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

### Nicht-Objekt Typumwandlung

In ES5 wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst, wenn der Parameter `obj` kein Objekt ist. In ES2015 wird der Parameter in ein {{jsxref("Object")}} umgewandelt.

```js
Object.getPrototypeOf("foo");
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf("foo");
// String.prototype                  (ES2015 code)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.getPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Reflect.getPrototypeOf()")}}
- [Object.getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/) von John Resig (2008)
