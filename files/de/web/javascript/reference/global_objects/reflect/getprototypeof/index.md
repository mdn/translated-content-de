---
title: Reflect.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`Reflect.getPrototypeOf()`** statische Methode ist ähnlich wie {{jsxref("Object.getPrototypeOf()")}}. Sie gibt das Prototyp-Objekt des angegebenen Objekts zurück.

{{EmbedInteractiveExample("pages/js/reflect-getprototypeof.html")}}

## Syntax

```js-nolint
Reflect.getPrototypeOf(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, von dem das Prototyp-Objekt abgerufen werden soll.

### Rückgabewert

Das Prototyp-Objekt des angegebenen Objekts, das entweder ein Objekt oder `null` sein kann.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.getPrototypeOf()` bietet die reflektierende Semantik zum Abrufen des Prototyps eines Objekts. Der einzige Unterschied zu {{jsxref("Object.getPrototypeOf()")}} liegt darin, wie Nicht-Objekt-Ziele behandelt werden. `Reflect.getPrototypeOf()` wirft einen {{jsxref("TypeError")}}, wenn das Ziel kein Objekt ist, während `Object.getPrototypeOf()` es zu einem Objekt zwingt.

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
- {{jsxref("Reflect")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`handler.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf)
