---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Object.defineProperties()`** definiert neue oder
modifiziert bestehende Eigenschaften direkt auf einem Objekt und gibt das Objekt zurück.

{{EmbedInteractiveExample("pages/js/object-defineproperties.html")}}

## Syntax

```js-nolint
Object.defineProperties(obj, props)
```

### Parameter

- `obj`
  - : Das Objekt, auf dem Eigenschaften definiert oder modifiziert werden sollen.
- `props`

  - : Ein Objekt, dessen Schlüssel die Namen der zu definierenden oder zu modifizierenden Eigenschaften darstellen und
    dessen Werte Objekte sind, die diese Eigenschaften beschreiben. Jeder Wert in `props`
    muss entweder ein Daten- oder ein Accessor-Deskriptor sein; es kann nicht beides sein (siehe
    {{jsxref("Object.defineProperty()")}} für weitere Details).

    Daten- und Accessor-Deskriptoren können optional die folgenden Schlüssel enthalten:

    - `configurable`
      - : `true`, wenn und nur wenn der Typ dieses Eigenschaftsdeskriptors geändert werden darf
        und wenn die Eigenschaft aus dem entsprechenden Objekt gelöscht werden kann.
        **Standard ist `false`.**
    - `enumerable`
      - : `true`, wenn und nur wenn diese Eigenschaft bei der Auflistung der
        Eigenschaften des entsprechenden Objekts angezeigt wird.
        **Standard ist `false`.**

    Ein Daten-Deskriptor enthält außerdem die folgenden optionalen Schlüssel:

    - `value`
      - : Der Wert, der der Eigenschaft zugeordnet ist. Kann jeder gültige JavaScript-Wert sein
        (Zahl, Objekt, Funktion, etc.).
        **Standard ist {{jsxref("undefined")}}.**
    - `writable`
      - : `true`, wenn und nur wenn der der Eigenschaft zugeordnete Wert mit einem
        {{jsxref("Operators", "Zuweisungsoperator", "assignment_operators", 1)}} geändert werden darf.
        **Standard ist `false`.**

    Ein Accessor-Deskriptor enthält außerdem die folgenden optionalen Schlüssel:

    - `get`
      - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}
        wenn es keinen Getter gibt. Der Rückgabewert der Funktion wird als Wert der
        Eigenschaft verwendet.
        **Standard ist {{jsxref("undefined")}}.**
    - `set`
      - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}
        wenn es keinen Setter gibt. Die Funktion erhält als einziges Argument den neuen
        zugewiesenen Wert der Eigenschaft.
        **Standard ist {{jsxref("undefined")}}.**

    Wenn ein Deskriptor weder `value`, `writable`,
    `get` noch `set` Schlüssel hat, wird er als Daten-Deskriptor behandelt. Wenn ein
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
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
