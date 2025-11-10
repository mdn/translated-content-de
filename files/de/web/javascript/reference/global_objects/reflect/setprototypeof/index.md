---
title: Reflect.setPrototypeOf()
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Reflect.setPrototypeOf()`** ist ähnlich wie {{jsxref("Object.setPrototypeOf()")}}, gibt jedoch einen {{jsxref("Boolean")}} zurück. Sie setzt das Prototype (d.h. die interne `[[Prototype]]`-Eigenschaft) eines angegebenen Objekts.

{{InteractiveExample("JavaScript Demo: Reflect.setPrototypeOf()")}}

```js interactive-example
const object1 = {};

console.log(Reflect.setPrototypeOf(object1, Object.prototype));
// Expected output: true

console.log(Reflect.setPrototypeOf(object1, null));
// Expected output: true

const object2 = {};

console.log(Reflect.setPrototypeOf(Object.freeze(object2), null));
// Expected output: false
```

## Syntax

```js-nolint
Reflect.setPrototypeOf(target, prototype)
```

### Parameter

- `target`
  - : Das Zielobjekt, dessen Prototype gesetzt werden soll.
- `prototype`
  - : Das neue Prototype des Objekts (ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das Prototype erfolgreich gesetzt wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `target` kein Objekt ist oder `prototype` weder ein Objekt noch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist.

## Beschreibung

`Reflect.setPrototypeOf()` bietet die reflektive Semantik, um das Prototype eines Objekts zu setzen. Auf sehr niedrigem Niveau gibt das Setzen des Prototypes einen Boolean zurück (wie im Fall des [Proxy-Handlers](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)). {{jsxref("Object.setPrototypeOf()")}} bietet eine nahezu gleiche Semantik, wirft jedoch einen {{jsxref("TypeError")}}, wenn der Status `false` ist (die Operation war erfolglos), während `Reflect.setPrototypeOf()` den Status direkt zurückgibt.

`Reflect.setPrototypeOf()` ruft die `[[SetPrototypeOf]]` [interne Objektsmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.setPrototypeOf()

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// It can change an object's [[Prototype]] to null.
Reflect.setPrototypeOf({}, null); // true

// Returns false if target is not extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Returns false if it cause a prototype chain cycle.
const target = {};
const proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.setPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`handler.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)
