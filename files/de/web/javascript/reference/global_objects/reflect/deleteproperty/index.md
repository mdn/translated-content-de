---
title: Reflect.deleteProperty()
short-title: deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.deleteProperty()`** ähnelt dem Operator {{jsxref("delete")}}, ist jedoch eine Funktion. Sie löscht eine Eigenschaft aus einem Objekt.

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
  - : Das Zielobjekt, aus dem die Eigenschaft gelöscht werden soll.
- `propertyKey`
  - : Der Name der zu löschenden Eigenschaft.

### Rückgabewert

Ein boolescher Wert, der angibt, ob die Eigenschaft erfolgreich gelöscht wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.deleteProperty()` stellt die reflektive Semantik des Operators [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) bereit. Das heißt, `Reflect.deleteProperty(target, propertyKey)` ist semantisch äquivalent zu:

```js
delete target.propertyKey;
```

Auf der untersten Ebene gibt das Löschen einer Eigenschaft einen booleschen Wert zurück (wie auch beim [Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)). `Reflect.deleteProperty()` gibt diesen Wert direkt zurück, während `delete` im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) einen {{jsxref("TypeError")}} auslöst, wenn der Wert `false` ist. Außerhalb des Strict Mode verhalten sich `delete` und `Reflect.deleteProperty()` gleich.

`Reflect.deleteProperty()` ruft die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[Delete]]` von `target` auf.

## Beispiele

### Reflect.deleteProperty() verwenden

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

- [Polyfill für `Reflect.deleteProperty` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- {{jsxref("Reflect")}}
- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- [`handler.deleteProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)
