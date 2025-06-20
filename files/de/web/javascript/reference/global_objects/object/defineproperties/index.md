---
title: Object.defineProperties()
short-title: defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Object.defineProperties()`** definiert neue oder ändert bestehende Eigenschaften direkt an einem Objekt und gibt das Objekt zurück.

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
  - : Das Objekt, an dem Eigenschaften definiert oder geändert werden sollen.
- `props`

  - : Ein Objekt, dessen Schlüssel die Namen der zu definierenden oder zu ändernden Eigenschaften repräsentieren, und dessen Werte Objekte sind, die diese Eigenschaften beschreiben. Jedes Wertobjekt in `props` muss entweder ein Daten-Deskriptor oder ein Accessor-Deskriptor sein; es kann nicht beides gleichzeitig sein (siehe {{jsxref("Object.defineProperty()")}} für mehr Details).

    Daten-Deskriptoren und Accessor-Deskriptoren können optional die folgenden Schlüssel enthalten:

    - `configurable`
      - : `true`, wenn und nur wenn der Typ dieses Eigenschaftsdeskriptors geändert werden kann und ob die Eigenschaft aus dem entsprechenden Objekt gelöscht werden kann.
        **Standardmäßig `false`.**
    - `enumerable`
      - : `true`, wenn und nur wenn diese Eigenschaft während der Aufzählung der Eigenschaften auf dem entsprechenden Objekt angezeigt wird.
        **Standardmäßig `false`.**

    Ein Daten-Deskriptor hat auch die folgenden optionalen Schlüssel:

    - `value`
      - : Der Wert, der mit der Eigenschaft verknüpft ist. Kann jeder gültige JavaScript-Wert sein (Zahl, Objekt, Funktion usw.).
        **Standardmäßig {{jsxref("undefined")}}.**
    - `writable`
      - : `true`, wenn und nur wenn der Wert, der mit der Eigenschaft verknüpft ist, mit einem {{jsxref("Operators", "Zuordnungsoperator", "assignment_operators", 1)}} geändert werden kann.
        **Standardmäßig `false`.**

    Ein Accessor-Deskriptor hat auch die folgenden optionalen Schlüssel:

    - `get`
      - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Getter vorhanden ist. Der Rückgabewert der Funktion wird als Wert der Eigenschaft verwendet.
        **Standardmäßig {{jsxref("undefined")}}.**
    - `set`
      - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Setter vorhanden ist. Die Funktion erhält als einziges Argument den neuen Wert, der der Eigenschaft zugewiesen wird.
        **Standardmäßig {{jsxref("undefined")}}.**

    Wenn ein Deskriptor weder `value`, `writable`, `get` noch `set` Schlüssel hat, wird er als Daten-Deskriptor behandelt. Wenn ein Deskriptor sowohl `value` oder `writable` als auch `get` oder `set` Schlüssel hat, wird eine Ausnahme ausgelöst.

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
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
