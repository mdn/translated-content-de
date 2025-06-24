---
title: Object.defineProperties()
short-title: defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die statische Methode **`Object.defineProperties()`** definiert neue oder
modifiziert bestehende Eigenschaften direkt auf einem Objekt und gibt das Objekt zurück.

{{InteractiveExample("JavaScript Demo: Object.defineProperties()")}}

```js interactive-example
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// Expected output: 42
```

## Syntax

```js-nolint
Object.defineProperties(obj, props)
```

### Parameter

- `obj`
  - : Das Objekt, auf dem Eigenschaften definiert oder modifiziert werden sollen.
- `props`

  - : Ein Objekt, dessen Schlüssel die Namen der Eigenschaften repräsentieren, die definiert oder modifiziert werden sollen, und dessen Werte Objekte sind, die diese Eigenschaften beschreiben. Jeder Wert in `props` muss entweder ein Datendeskriptor oder ein Zugriffsbeschreiber sein; es kann nicht beides sein (siehe
    {{jsxref("Object.defineProperty()")}} für weitere Details).

    Daten- und Zugriffsbeschreiber können optional die folgenden Schlüssel enthalten:

    - `configurable`
      - : `true`, wenn und nur wenn der Typ dieses Eigenschaftsbeschreibers geändert werden kann und wenn die Eigenschaft vom entsprechenden Objekt gelöscht werden kann.
        **Standardwert ist `false`.**
    - `enumerable`
      - : `true`, wenn und nur wenn diese Eigenschaft während der Aufzählung der Eigenschaften auf dem entsprechenden Objekt angezeigt wird.
        **Standardwert ist `false`.**

    Ein Datendeskriptor hat außerdem die folgenden optionalen Schlüssel:

    - `value`
      - : Der Wert, der mit der Eigenschaft verknüpft ist. Kann jeder gültige JavaScript-Wert sein (Zahl, Objekt, Funktion, etc.).
        **Standardwert ist {{jsxref("undefined")}}.**
    - `writable`
      - : `true`, wenn und nur wenn der mit der Eigenschaft verknüpfte Wert durch einen {{jsxref("Operators", "Zuweisungsoperator", "assignment_operators", 1)}} geändert werden kann.
        **Standardwert ist `false`.**

    Ein Zugriffsbeschreiber hat außerdem die folgenden optionalen Schlüssel:

    - `get`
      - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Getter gibt. Der Rückgabewert der Funktion wird als Wert der Eigenschaft verwendet.
        **Standardwert ist {{jsxref("undefined")}}.**
    - `set`
      - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Setter gibt. Die Funktion erhält als einziges Argument den neuen Wert, der der Eigenschaft zugewiesen wird.
        **Standardwert ist {{jsxref("undefined")}}.**

    Wenn ein Deskriptor weder über `value` noch `writable`, `get` und `set` Schlüssel verfügt, wird er als Datendeskriptor behandelt. Wenn ein Deskriptor sowohl `value` oder `writable` als auch `get` oder `set` Schlüssel besitzt, wird eine Ausnahme ausgelöst.

### Rückgabewert

Das an die Funktion übergebene Objekt.

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
