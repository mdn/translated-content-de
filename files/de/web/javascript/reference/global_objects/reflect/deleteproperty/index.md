---
title: Reflect.deleteProperty()
short-title: deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Reflect.deleteProperty()`** ist wie der {{jsxref("Operators/delete", "delete")}}-Operator, jedoch als Funktion. Sie löscht eine Eigenschaft aus einem Objekt.

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
  - : Das Zielobjekt, von dem die Eigenschaft gelöscht werden soll.
- `propertyKey`
  - : Der Name der Eigenschaft, die gelöscht werden soll.

### Rückgabewert

Ein boolescher Wert, der angibt, ob die Eigenschaft erfolgreich gelöscht wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.deleteProperty()` bietet die reflektierende Semantik des [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operators. Das bedeutet, `Reflect.deleteProperty(target, propertyKey)` ist semantisch äquivalent zu:

```js
delete target.propertyKey;
```

Auf der sehr niedrigen Ebene gibt das Löschen einer Eigenschaft einen booleschen Wert zurück (wie im Falle des [Proxy-Handlers](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)). `Reflect.deleteProperty()` gibt den Status direkt zurück, während `delete` im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) eine {{jsxref("TypeError")}} auslösen würde, wenn der Status `false` ist. Im nicht-strikten Modus haben `delete` und `Reflect.deleteProperty()` dasselbe Verhalten.

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
