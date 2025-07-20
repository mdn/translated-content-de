---
title: Reflect.getPrototypeOf()
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`Reflect.getPrototypeOf()`** ist ähnlich wie {{jsxref("Object.getPrototypeOf()")}}. Sie gibt das Prototyp-Objekt des angegebenen Objekts zurück.

{{InteractiveExample("JavaScript Demo: Reflect.getPrototypeOf()")}}

```js interactive-example
const object = {
  foo: 42,
};

const proto = Reflect.getPrototypeOf(object);

console.log(proto);
// Expected output: Object {  }

console.log(Reflect.getPrototypeOf(proto));
// Expected output: null
```

## Syntax

```js-nolint
Reflect.getPrototypeOf(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, dessen Prototyp abgerufen werden soll.

### Rückgabewert

Das Prototyp-Objekt des angegebenen Objekts, das entweder ein Objekt oder `null` sein kann.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.getPrototypeOf()` bietet die reflektierende Semantik zum Abrufen des Prototyps eines Objekts. Der einzige Unterschied zu {{jsxref("Object.getPrototypeOf()")}} besteht darin, wie nicht-objektartige Ziele behandelt werden. `Reflect.getPrototypeOf()` wirft einen {{jsxref("TypeError")}}, wenn das Ziel kein Objekt ist, während `Object.getPrototypeOf()` es zu einem Objekt konvertiert.

`Reflect.getPrototypeOf()` ruft die `[[GetPrototypeOf]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.getPrototypeOf()

```js
Reflect.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf(Object.prototype); // null
Reflect.getPrototypeOf(Object.create(null)); // null
```

### Unterschied zu Object.getPrototypeOf()

```js
// Same result for Objects
Object.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf({}); // Object.prototype

// Both throw in ES5 for non-Objects
Object.getPrototypeOf("foo"); // Throws TypeError
Reflect.getPrototypeOf("foo"); // Throws TypeError

// In ES2015 only Reflect throws, Object coerces non-Objects
Object.getPrototypeOf("foo"); // String.prototype
Reflect.getPrototypeOf("foo"); // Throws TypeError

// To mimic the Object ES2015 behavior you need to coerce
Reflect.getPrototypeOf(Object("foo")); // String.prototype
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.getPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- [es-shims Polyfill von `Reflect.getPrototypeOf`](https://www.npmjs.com/package/reflect.getprototypeof)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`handler.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf)
