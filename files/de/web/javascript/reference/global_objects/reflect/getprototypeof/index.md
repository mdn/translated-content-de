---
title: Reflect.getPrototypeOf()
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Reflect.getPrototypeOf()`** statische Methode ist ähnlich wie {{jsxref("Object.getPrototypeOf()")}}. Sie gibt das Prototyp des angegebenen Objekts zurück.

{{InteractiveExample("JavaScript Demo: Reflect.getPrototypeOf()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

const proto1 = Reflect.getPrototypeOf(object1);

console.log(proto1);
// Expected output: Object {  }

console.log(Reflect.getPrototypeOf(proto1));
// Expected output: null
```

## Syntax

```js-nolint
Reflect.getPrototypeOf(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, dessen Prototyp ermittelt werden soll.

### Rückgabewert

Der Prototyp des gegebenen Objekts, der entweder ein Objekt oder `null` sein kann.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.getPrototypeOf()` bietet die reflexive Semantik zur Rückgabe des Prototyps eines Objekts. Der einzige Unterschied zu {{jsxref("Object.getPrototypeOf()")}} besteht darin, wie nicht-objektartige Ziele behandelt werden. `Reflect.getPrototypeOf()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.getPrototypeOf()` es in ein Objekt umwandelt.

`Reflect.getPrototypeOf()` ruft die `[[GetPrototypeOf]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) des `target` auf.

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
