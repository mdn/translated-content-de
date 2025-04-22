---
title: Reflect.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
l10n:
  sourceCommit: 65a07c3ce119894af6dc191454a75496e438ef7e
---

{{JSRef}}

Die statische Methode **`Reflect.deleteProperty()`** ist wie der {{jsxref("Operators/delete", "delete")}} Operator, aber als Funktion. Sie löscht eine Eigenschaft aus einem Objekt.

{{InteractiveExample("JavaScript Demo: Reflect.deleteProperty()", "taller")}}

```js interactive-example
const object1 = {
  property1: 42,
};

Reflect.deleteProperty(object1, "property1");

console.log(object1.property1);
// Expected output: undefined

const array1 = [1, 2, 3, 4, 5];
Reflect.deleteProperty(array1, "3");

console.log(array1);
// Expected output: Array [1, 2, 3, <1 empty slot>, 5]
```

## Syntax

```js-nolint
Reflect.deleteProperty(target, propertyKey)
```

### Parameter

- `target`
  - : Das Zielobjekt, bei dem die Eigenschaft gelöscht werden soll.
- `propertyKey`
  - : Der Name der zu löschenden Eigenschaft.

### Rückgabewert

Ein Boolean, der angibt, ob die Eigenschaft erfolgreich gelöscht wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.deleteProperty()` bietet die reflektive Semantik des [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operators. Das heißt, `Reflect.deleteProperty(target, propertyKey)` ist semantisch äquivalent zu:

```js
delete target.propertyKey;
```

Auf sehr niedriger Ebene gibt das Löschen einer Eigenschaft einen Boolean zurück (wie es auch beim [Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) der Fall ist). `Reflect.deleteProperty()` gibt direkt den Status zurück, während `delete` in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) einen {{jsxref("TypeError")}} auslöst, wenn der Status `false` ist. Im Nicht-strict mode haben `delete` und `Reflect.deleteProperty()` dasselbe Verhalten.

`Reflect.deleteProperty()` ruft die `[[Delete]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.deleteProperty()

```js
const obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
console.log(obj); // { y: 2 }

const arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3"); // true
console.log(arr); // [1, 2, 3, <1 empty slot>, 5]

// Returns true if no such property exists
Reflect.deleteProperty({}, "foo"); // true

// Returns false if a property is unconfigurable
Reflect.deleteProperty(Object.freeze({ foo: 1 }), "foo"); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.deleteProperty` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- [`handler.deleteProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)
