---
title: Reflect.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.deleteProperty()`** ähnelt dem {{jsxref("Operators/delete", "delete")}} Operator, jedoch als Funktion. Sie löscht eine Eigenschaft aus einem Objekt.

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

Ein Boolean, der angibt, ob die Eigenschaft erfolgreich gelöscht wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.deleteProperty()` bietet die reflektive Semantik des [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operators. Das heißt, `Reflect.deleteProperty(target, propertyKey)` ist semantisch gleichbedeutend mit:

```js
delete target.propertyKey;
```

Auf sehr niedriger Ebene gibt das Löschen einer Eigenschaft ein Boolean zurück (wie im Fall des [Proxy-Handlers](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)). `Reflect.deleteProperty()` gibt direkt den Status zurück, während `delete` in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) einen {{jsxref("TypeError")}} auslösen würde, wenn der Status `false` ist. Im Nicht-strict mode haben `delete` und `Reflect.deleteProperty()` dasselbe Verhalten.

`Reflect.deleteProperty()` ruft die `[[Delete]]` [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Nutzung von Reflect.deleteProperty()

```js
const obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
console.log(obj); // { y: 2 }

const arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3"); // true
console.log(arr); // [1, 2, 3, undefined, 5]

// Gibt true zurück, wenn keine solche Eigenschaft existiert
Reflect.deleteProperty({}, "foo"); // true

// Gibt false zurück, wenn eine Eigenschaft nicht konfigurierbar ist
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
