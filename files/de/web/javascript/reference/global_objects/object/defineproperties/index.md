---
title: Object.defineProperties()
short-title: defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`Object.defineProperties()`** statische Methode definiert neue oder modifiziert bestehende Eigenschaften direkt an einem Objekt und gibt das Objekt zurück.

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
  - : Das Objekt, an dem Eigenschaften definiert oder modifiziert werden sollen.
- `props`
  - : Ein Objekt, dessen Schlüssel die Namen der Eigenschaften repräsentieren, die definiert oder modifiziert werden sollen, und dessen Werte Objekte sind, die diese Eigenschaften beschreiben. Jeder Wert in `props` muss entweder ein Daten- oder ein Zugriffsbeschreiber sein; es kann nicht beides sein (siehe
    {{jsxref("Object.defineProperty()")}} für mehr Details).

    Daten- und Zugriffsbeschreiber können optional die folgenden Schlüssel enthalten:
    - `configurable`
      - : `true`, wenn und nur wenn der Typ dieses Eigenschaftsbeschreibers geändert werden darf und wenn die Eigenschaft aus dem entsprechenden Objekt gelöscht werden darf.
        **Standard ist `false`.**
    - `enumerable`
      - : `true`, wenn und nur wenn diese Eigenschaft während der Enumeration der Eigenschaften des entsprechenden Objekts angezeigt wird.
        **Standard ist `false`.**

    Ein Datenbeschreiber hat außerdem die folgenden optionalen Schlüssel:
    - `value`
      - : Der Wert, der mit der Eigenschaft verbunden ist. Kann ein beliebiger gültiger JavaScript-Wert sein (Zahl, Objekt, Funktion, etc.).
        **Standard ist {{jsxref("undefined")}}.**
    - `writable`
      - : `true`, wenn und nur wenn der mit der Eigenschaft verbundene Wert mit einem {{jsxref("Operators", "assignment operator", "assignment_operators", 1)}} geändert werden kann.
        **Standard ist `false`.**

    Ein Zugriffsbeschreiber hat ebenfalls die folgenden optionalen Schlüssel:
    - `get`
      - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Getter gibt. Der Rückgabewert der Funktion wird als Wert der Eigenschaft verwendet.
        **Standard ist {{jsxref("undefined")}}.**
    - `set`
      - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Setter gibt. Die Funktion erhält als einzigen Parameter den neuen Wert, der der Eigenschaft zugewiesen wird.
        **Standard ist {{jsxref("undefined")}}.**

    Wenn ein Beschreiber weder `value`, `writable`, `get` noch `set` Schlüssel hat, wird er als Datenbeschreiber behandelt. Wenn ein Beschreiber sowohl `value` oder `writable` als auch `get` oder `set` Schlüssel hat, wird eine Ausnahme ausgelöst.

### Rückgabewert

Das Objekt, das der Funktion übergeben wurde.

## Beispiele

### Verwendung von Object.defineProperties

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

- [Polyfill von `Object.defineProperties` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims Polyfill von `Object.defineProperties`](https://www.npmjs.com/package/object.defineproperties)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [Enumerierbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
