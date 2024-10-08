---
title: Reflect.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.deleteProperty()`** ist wie der {{jsxref("Operators/delete", "delete")}} Operator, jedoch als Funktion. Sie löscht eine Eigenschaft aus einem Objekt.

{{EmbedInteractiveExample("pages/js/reflect-deleteproperty.html", "taller")}}

## Syntax

```js-nolint
Reflect.deleteProperty(target, propertyKey)
```

### Parameter

- `target`
  - : Das Zielobjekt, von dem die Eigenschaft gelöscht werden soll.
- `propertyKey`
  - : Der Name der zu löschenden Eigenschaft.

### Rückgabewert

Ein boolean-Wert, der angibt, ob die Eigenschaft erfolgreich gelöscht wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.deleteProperty()` bietet die reflektive Semantik des [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operators. Das heißt, `Reflect.deleteProperty(target, propertyKey)` ist semantisch gleichwertig mit:

```js
delete target.propertyKey;
```

Auf sehr niedriger Ebene gibt das Löschen einer Eigenschaft ein boolean zurück (wie es bei [dem Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) der Fall ist). `Reflect.deleteProperty()` gibt direkt den Status zurück, während `delete` einen {{jsxref("TypeError")}} in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) werfen würde, wenn der Status `false` ist. Im Nicht-strict mode verhalten sich `delete` und `Reflect.deleteProperty()` gleich.

`Reflect.deleteProperty()` ruft die `[[Delete]]` [interne Objekte-Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.deleteProperty()

```js
const obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
console.log(obj); // { y: 2 }

const arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3"); // true
console.log(arr); // [1, 2, 3, undefined, 5]

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
