---
title: Reflect.setPrototypeOf()
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.setPrototypeOf()`** ähnelt {{jsxref("Object.setPrototypeOf()")}}, gibt aber einen {{jsxref("Boolean")}}-Wert zurück. Sie setzt den Prototyp (d.h. die interne Eigenschaft `[[Prototype]]`) eines angegebenen Objekts.

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
  - : Das Zielobjekt, dessen Prototyp gesetzt werden soll.
- `prototype`
  - : Der neue Prototyp des Objekts (ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der angibt, ob der Prototyp erfolgreich gesetzt wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist oder `prototype` weder ein Objekt noch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist.

## Beschreibung

`Reflect.setPrototypeOf()` bietet eine reflektierende Semantik für das Setzen des Prototyps eines Objekts. Auf der untersten Ebene gibt das Setzen des Prototyps einen booleschen Wert zurück (wie auch beim [Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)). {{jsxref("Object.setPrototypeOf()")}} bietet nahezu dieselbe Semantik, löst aber einen {{jsxref("TypeError")}} aus, wenn der Status `false` ist (der Vorgang war nicht erfolgreich). `Reflect.setPrototypeOf()` gibt den Status dagegen direkt zurück.

`Reflect.setPrototypeOf()` ruft die [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[SetPrototypeOf]]` von `target` auf.

## Beispiele

### Reflect.setPrototypeOf() verwenden

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

- [Polyfill für `Reflect.setPrototypeOf` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`handler.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)
