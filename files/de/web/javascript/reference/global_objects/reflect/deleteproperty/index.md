---
title: Reflect.deleteProperty()
short-title: deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die **`Reflect.deleteProperty()`** statische Methode ist wie der {{jsxref("delete")}} Operator, aber als Funktion. Sie löscht eine Eigenschaft aus einem Objekt.

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

Ein Boolean, der anzeigt, ob die Eigenschaft erfolgreich gelöscht wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.deleteProperty()` bietet die reflektive Semantik des [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operators. Das heißt, `Reflect.deleteProperty(target, propertyKey)` ist semantisch äquivalent zu:

```js
delete target.propertyKey;
```

Auf sehr niedrigem Niveau liefert das Löschen einer Eigenschaft einen Boolean zurück (wie im Fall mit [dem Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)). `Reflect.deleteProperty()` gibt direkt den Status zurück, während `delete` einen {{jsxref("TypeError")}} im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) auslösen würde, wenn der Status `false` ist. Im nicht-strikten Modus verhalten sich `delete` und `Reflect.deleteProperty()` gleich.

`Reflect.deleteProperty()` ruft die `[[Delete]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) des `target` auf.

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
