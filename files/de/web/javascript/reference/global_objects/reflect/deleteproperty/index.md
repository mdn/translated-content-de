---
title: Reflect.deleteProperty()
short-title: deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`Reflect.deleteProperty()`** statische Methode ist wie der {{jsxref("Operators/delete", "delete")}} Operator, aber als Funktion. Sie löscht eine Eigenschaft aus einem Objekt.

{{InteractiveExample("JavaScript Demo: Reflect.deleteProperty()", "taller")}}

```js interactive-example
const object = {
  foo: 42,
};

Reflect.deleteProperty(object, "foo");

console.log(object.foo);
// Expected output: undefined

const array = [1, 2, 3, 4, 5];
Reflect.deleteProperty(array, "3");

console.log(array);
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

Ein boolescher Wert, der angibt, ob die Eigenschaft erfolgreich gelöscht wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.deleteProperty()` bietet die reflektierte Semantik des [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operators. Das heißt, `Reflect.deleteProperty(target, propertyKey)` ist semantisch äquivalent zu:

```js
delete target.propertyKey;
```

Auf sehr niedrigem Niveau gibt das Löschen einer Eigenschaft einen booleschen Wert zurück (wie es bei [dem Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) der Fall ist). `Reflect.deleteProperty()` gibt direkt den Status zurück, während `delete` in [strengem Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) einen {{jsxref("TypeError")}} auslösen würde, wenn der Status `false` ist. Im nicht strengen Modus haben `delete` und `Reflect.deleteProperty()` dasselbe Verhalten.

`Reflect.deleteProperty()` ruft die `[[Delete]]` [interne Methode eines Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

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
