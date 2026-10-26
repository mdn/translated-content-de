---
title: Object.defineProperties()
short-title: defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.defineProperties()`** definiert neue Eigenschaften direkt auf einem Objekt oder ändert vorhandene Eigenschaften und gibt das Objekt zurück.

{{InteractiveExample("JavaScript Demo: Object.defineProperties()")}}

```js interactive-example
const object = {};

Object.defineProperties(object, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object.property1);
// Expected output: 42
```

## Syntax

```js-nolint
Object.defineProperties(obj, props)
```

### Parameter

- `obj`
  - : Das Objekt, auf dem Eigenschaften definiert oder geändert werden sollen.
- `props`
  - : Ein Objekt, dessen Schlüssel die Namen der zu definierenden oder zu ändernden Eigenschaften sind und dessen Werte diese Eigenschaften beschreiben. Jeder Wert in `props` muss entweder ein Datendeskriptor oder ein Accessor-Deskriptor sein; beides zugleich ist nicht möglich (weitere Einzelheiten finden Sie unter {{jsxref("Object.defineProperty()")}}).

    Datendeskriptoren und Accessor-Deskriptoren können optional die folgenden Schlüssel enthalten:
    - `configurable`
      - : `true` genau dann, wenn der Typ dieses Eigenschaftsdeskriptors geändert und die Eigenschaft aus dem entsprechenden Objekt gelöscht werden darf.
        **Der Standardwert ist `false`.**
    - `enumerable`
      - : `true` genau dann, wenn diese Eigenschaft bei der Aufzählung der Eigenschaften des entsprechenden Objekts erscheint.
        **Der Standardwert ist `false`.**

    Ein Datendeskriptor kann außerdem die folgenden optionalen Schlüssel enthalten:
    - `value`
      - : Der mit der Eigenschaft verknüpfte Wert. Dies kann jeder gültige JavaScript-Wert sein (Zahl, Objekt, Funktion usw.).
        **Der Standardwert ist {{jsxref("undefined")}}.**
    - `writable`
      - : `true` genau dann, wenn der mit der Eigenschaft verknüpfte Wert mit einem {{jsxref("Operators", "assignment operator", "assignment_operators", 1)}} geändert werden darf.
        **Der Standardwert ist `false`.**

    Ein Accessor-Deskriptor kann außerdem die folgenden optionalen Schlüssel enthalten:
    - `get`
      - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Getter vorhanden ist. Der Rückgabewert der Funktion wird als Wert der Eigenschaft verwendet.
        **Der Standardwert ist {{jsxref("undefined")}}.**
    - `set`
      - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Setter vorhanden ist. Die Funktion erhält den neuen Wert, der der Eigenschaft zugewiesen wird, als einziges Argument.
        **Der Standardwert ist {{jsxref("undefined")}}.**

    Wenn ein Deskriptor keinen der Schlüssel `value`, `writable`, `get` und `set` enthält, wird er als Datendeskriptor behandelt. Wenn ein Deskriptor sowohl `value` oder `writable` als auch `get` oder `set` enthält, wird eine Ausnahme ausgelöst.

### Rückgabewert

Das Objekt, das an die Funktion übergeben wurde.

## Beispiele

### Object.defineProperties verwenden

```js
const obj = {};
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // etc. etc.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Object.defineProperties` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [Polyfill für `Object.defineProperties` von es-shims](https://www.npmjs.com/package/object.defineproperties)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
