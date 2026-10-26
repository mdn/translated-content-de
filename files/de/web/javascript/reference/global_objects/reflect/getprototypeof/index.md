---
title: Reflect.getPrototypeOf()
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.getPrototypeOf()`** ähnelt {{jsxref("Object.getPrototypeOf()")}}. Sie gibt den Prototyp des angegebenen Objekts zurück.

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
  - : Das Zielobjekt, dessen Prototyp ermittelt werden soll.

### Rückgabewert

Der Prototyp des angegebenen Objekts. Dies kann ein Objekt oder `null` sein.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.getPrototypeOf()` bietet die reflektierende Semantik zum Abrufen des Prototyps eines Objekts. Der einzige Unterschied zu {{jsxref("Object.getPrototypeOf()")}} besteht im Umgang mit Zielwerten, die keine Objekte sind: `Reflect.getPrototypeOf()` löst einen {{jsxref("TypeError")}} aus, wenn der Zielwert kein Objekt ist, während `Object.getPrototypeOf()` ihn in ein Objekt umwandelt.

`Reflect.getPrototypeOf()` ruft die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[GetPrototypeOf]]` von `target` auf.

## Beispiele

### Reflect.getPrototypeOf() verwenden

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

- [Polyfill für `Reflect.getPrototypeOf` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- [Polyfill für `Reflect.getPrototypeOf` von es-shims](https://www.npmjs.com/package/reflect.getprototypeof)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`handler.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf)
