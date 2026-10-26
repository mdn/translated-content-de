---
title: Object.getPrototypeOf()
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.getPrototypeOf()`** gibt den Prototyp (d.h. den Wert der internen Eigenschaft `[[Prototype]]`) des angegebenen Objekts zurück.

{{InteractiveExample("JavaScript Demo: Object.getPrototypeOf()", "shorter")}}

```js interactive-example
const prototype = {};
const object = Object.create(prototype);

console.log(Object.getPrototypeOf(object) === prototype);
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

### getPrototypeOf verwenden

```js
const proto = {};
const obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

### Umwandlung von Nicht-Objekten

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

- [Polyfill für `Object.getPrototypeOf` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [Polyfill für `Object.getPrototypeOf` von es-shims](https://www.npmjs.com/package/object.getprototypeof)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Reflect.getPrototypeOf()")}}
- [Object.getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/) von John Resig (2008)
