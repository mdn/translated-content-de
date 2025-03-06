---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die statische Methode **`Object.defineProperties()`** definiert neue oder
modifiziert vorhandene Eigenschaften direkt auf einem Objekt und gibt das Objekt zurück.

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

  - : Ein Objekt, dessen Schlüssel die Namen der zu definierenden oder zu modifizierenden Eigenschaften darstellen,
    und dessen Werte Objekte sind, die diese Eigenschaften beschreiben. Jeder Wert in `props`
    muss entweder ein Datendeskriptor oder ein Zugriffsbeschreiber sein; es kann nicht beides sein (siehe
    {{jsxref("Object.defineProperty()")}} für mehr Details).

    Daten- und Zugriffsbeschreiber können optional folgende Schlüssel enthalten:

    - `configurable`
      - : `true`, wenn und nur wenn der Typ des Eigenschaftsbeschreibers geändert werden darf
        und wenn die Eigenschaft aus dem entsprechenden Objekt gelöscht werden darf.
        **Standardmäßig `false`.**
    - `enumerable`
      - : `true`, wenn und nur wenn diese Eigenschaft bei der Aufzählung der
        Eigenschaften des entsprechenden Objekts angezeigt wird.
        **Standardmäßig `false`.**

    Ein Datendeskriptor hat außerdem folgende optionale Schlüssel:

    - `value`
      - : Der Wert, der mit der Eigenschaft verknüpft ist. Kann jeder gültige JavaScript-Wert
        sein (Zahl, Objekt, Funktion usw.).
        **Standardmäßig {{jsxref("undefined")}}.**
    - `writable`
      - : `true`, wenn und nur wenn der mit der Eigenschaft verknüpfte Wert
        mit einem {{jsxref("Operators", "Zuweisungsoperator", "assignment_operators", 1)}} geändert werden darf.
        **Standardmäßig `false`.**

    Ein Zugriffsbeschreiber hat außerdem folgende optionale Schlüssel:

    - `get`
      - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}
        wenn kein Getter vorhanden ist. Der Rückgabewert der Funktion wird als Wert der
        Eigenschaft verwendet.
        **Standardmäßig {{jsxref("undefined")}}.**
    - `set`
      - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}
        wenn kein Setter vorhanden ist. Die Funktion erhält als einzigen Parameter den neuen
        Wert, der der Eigenschaft zugewiesen wird.
        **Standardmäßig {{jsxref("undefined")}}.**

    Wenn ein Deskriptor weder `value`, `writable`,
    `get` noch `set` Schlüssel hat, wird er als Datendeskriptor behandelt. Wenn ein
    Deskriptor sowohl `value` oder `writable` als auch `get`
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
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
