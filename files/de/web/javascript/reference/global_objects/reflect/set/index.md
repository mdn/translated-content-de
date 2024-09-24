---
title: Reflect.set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`Reflect.set()`** statische Methode funktioniert ähnlich wie die [Property-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) und [Zuweisungs](/de/docs/Web/JavaScript/Reference/Operators/Assignment) Syntax, jedoch als Funktion.

{{EmbedInteractiveExample("pages/js/reflect-set.html")}}

## Syntax

```js-nolint
Reflect.set(target, propertyKey, value)
Reflect.set(target, propertyKey, value, receiver)
```

### Parameter

- `target`
  - : Das Zielobjekt, auf dem die Eigenschaft gesetzt werden soll.
- `propertyKey`
  - : Der Name der Eigenschaft, die gesetzt werden soll.
- `value`
  - : Der zu setzende Wert.
- `receiver` {{optional_inline}}
  - : Der Wert von `this`, der für den Aufruf des Setters für `propertyKey` auf `target` bereitgestellt wird. Wenn vorhanden und `target` keinen Setter für `propertyKey` hat, wird die Eigenschaft stattdessen auf `receiver` gesetzt.

### Rückgabewert

Ein {{jsxref("Boolean")}}, das angibt, ob das Setzen der Eigenschaft erfolgreich war oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.set()` bietet die reflektierende Semantik eines [Property-Zugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das heißt, `Reflect.set(target, propertyKey, value, receiver)` ist semantisch äquivalent zu:

```js
target[propertyKey] = value;
```

Beachten Sie, dass bei einem normalen Property-Zugriff `target` und `receiver` ein und dasselbe Objekt wären.

`Reflect.set()` ruft die `[[Set]]` [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.set()

```js
// Objekt
const obj = {};
Reflect.set(obj, "prop", "value"); // true
obj.prop; // "value"

// Array
const arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose"); // true
arr[2]; // "goose"

// Es kann ein Array kürzen.
Reflect.set(arr, "length", 1); // true
arr; // ["duck"]

// Mit nur einem Argument sind propertyKey und value "undefined".
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, "undefined");
// { value: undefined, writable: true, enumerable: true, configurable: true }
```

### Unterschiedliches Target und Receiver

Wenn `target` und `receiver` unterschiedlich sind, verwendet `Reflect.set` die Eigenschaftsbeschreibung von `target` (um den Setter zu finden oder festzustellen, ob die Eigenschaft beschreibbar ist), setzt aber die Eigenschaft auf `receiver`.

```js
const target = {};
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target ist {}; receiver ist { a: 2 }

const target = { a: 1 };
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target ist { a: 1 }; receiver ist { a: 2 }

const target = {
  set a(v) {
    this.b = v;
  },
};
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target ist { a: [Setter] }; receiver ist { b: 2 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.set` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [Property-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)
