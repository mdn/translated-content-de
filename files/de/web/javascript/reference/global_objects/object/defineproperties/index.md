---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`Object.defineProperties()`** statische Methode definiert neue oder
verändert bestehende Eigenschaften direkt auf einem Objekt und gibt das Objekt zurück.

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
  - : Das Objekt, auf dem Eigenschaften definiert oder verändert werden sollen.
- `props`

  - : Ein Objekt, dessen Schlüssel die Namen der zu definierenden oder zu verändernden Eigenschaften darstellen und
    dessen Werte Objekte sind, die diese Eigenschaften beschreiben. Jeder Wert in `props`
    muss entweder ein Daten- oder Zugriffsbeschreiber sein; er kann nicht beides gleichzeitig sein (siehe
    {{jsxref("Object.defineProperty()")}} für weitere Details).

    Daten- und Zugriffsbeschreiber können optional die folgenden Schlüssel enthalten:

    - `configurable`
      - : `true` wenn und nur wenn der Typ dieses Eigenschaftsbeschreibers
        geändert werden kann und die Eigenschaft vom entsprechenden Objekt gelöscht werden kann.
        **Standardmäßig `false`.**
    - `enumerable`
      - : `true` wenn und nur wenn diese Eigenschaft während der Aufzählung der
        Eigenschaften auf dem entsprechenden Objekt sichtbar wird.
        **Standardmäßig `false`.**

    Ein Datenbeschreiber hat auch die folgenden optionalen Schlüssel:

    - `value`
      - : Der Wert, der mit der Eigenschaft verbunden ist. Kann jeder gültige JavaScript-Wert
        sein (Zahl, Objekt, Funktion, etc.).
        **Standardmäßig {{jsxref("undefined")}}.**
    - `writable`
      - : `true` wenn und nur wenn der Wert, der mit der Eigenschaft verbunden ist,
        mit einem {{jsxref("Operators", "Zuweisungsoperator", "assignment_operators", 1)}} geändert werden kann.
        **Standardmäßig `false`.**

    Ein Zugriffsbeschreiber hat auch die folgenden optionalen Schlüssel:

    - `get`
      - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}
        wenn es keinen Getter gibt. Der Rückgabewert der Funktion wird als Wert der
        Eigenschaft verwendet.
        **Standardmäßig {{jsxref("undefined")}}.**
    - `set`
      - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}
        wenn es keinen Setter gibt. Die Funktion erhält als einziges Argument den neuen
        Wert, der der Eigenschaft zugewiesen wird.
        **Standardmäßig {{jsxref("undefined")}}.**

    Wenn ein Beschreiber weder `value`, `writable`,
    `get` noch `set` Schlüssel hat, wird er als Datenbeschreiber behandelt. Wenn ein
    Beschreiber sowohl `value` oder `writable` als auch `get`
    oder `set` Schlüssel hat, wird eine Ausnahme ausgelöst.

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
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
