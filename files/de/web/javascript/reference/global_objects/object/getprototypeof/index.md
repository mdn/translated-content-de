---
title: Object.getPrototypeOf()
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Object.getPrototypeOf()`** gibt das Prototyp-Objekt
(zum Beispiel den Wert der internen `[[Prototype]]`-Eigenschaft) des angegebenen
Objekts zurück.

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

Der Prototyp des angegebenen Objekts, der möglicherweise [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist.

## Beispiele

### Verwendung von getPrototypeOf

```js
const proto = {};
const obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

### Nicht-Objekt-Zwangsumwandlung

In ES5 wird ein {{jsxref("TypeError")}}-Ausnahme ausgelöst, wenn der Parameter `obj`
kein Objekt ist. In ES2015 wird der Parameter in ein
{{jsxref("Object")}} umgewandelt.

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
- [es-shims Polyfill von `Object.getPrototypeOf`](https://www.npmjs.com/package/object.getprototypeof)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Reflect.getPrototypeOf()")}}
- [Object.getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/) von John Resig (2008)
