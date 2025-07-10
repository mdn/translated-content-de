---
title: Object.defineProperties()
short-title: defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Object.defineProperties()`** definiert neue oder
ändert bestehende Eigenschaften direkt auf einem Objekt und gibt das Objekt zurück.

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
  - : Das Objekt, auf dem Eigenschaften definiert oder geändert werden sollen.
- `props`
  - : Ein Objekt, dessen Schlüssel die Namen der zu definierenden oder zu ändernden Eigenschaften repräsentieren und
    dessen Werte Objekte sind, die diese Eigenschaften beschreiben. Jeder Wert in `props`
    muss entweder ein Daten-Deskriptor oder ein Accessor-Deskriptor sein; es kann nicht beides sein (siehe
    {{jsxref("Object.defineProperty()")}} für weitere Details).

    Daten-Deskriptoren und Accessor-Deskriptoren können optional die folgenden Schlüssel enthalten:
    - `configurable`
      - : `true`, wenn und nur wenn der Typ dieses Eigenschaftsdeskriptors geändert werden kann
        und ob die Eigenschaft vom entsprechenden Objekt gelöscht werden kann.
        **Standardwert ist `false`.**
    - `enumerable`
      - : `true`, wenn und nur wenn diese Eigenschaft bei der Enumeration der
        Eigenschaften des entsprechenden Objekts angezeigt wird.
        **Standardwert ist `false`.**

    Ein Daten-Deskriptor hat außerdem die folgenden optionalen Schlüssel:
    - `value`
      - : Der der Eigenschaft zugeordnete Wert. Kann jeder gültige JavaScript-Wert sein
        (Zahl, Objekt, Funktion, etc.).
        **Standardwert ist {{jsxref("undefined")}}.**
    - `writable`
      - : `true`, wenn und nur wenn der der Eigenschaft zugeordnete Wert mit einem
        {{jsxref("Operators", "Zuweisungsoperator", "assignment_operators", 1)}} geändert werden kann.
        **Standardwert ist `false`.**

    Ein Accessor-Deskriptor hat zudem die folgenden optionalen Schlüssel:
    - `get`
      - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}},
        wenn es keinen Getter gibt. Der Rückgabewert der Funktion wird als Wert der
        Eigenschaft verwendet.
        **Standardwert ist {{jsxref("undefined")}}.**
    - `set`
      - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}},
        wenn es keinen Setter gibt. Die Funktion erhält als einziges Argument den neuen
        Wert, der der Eigenschaft zugewiesen wird.
        **Standardwert ist {{jsxref("undefined")}}.**

    Wenn ein Deskriptor weder `value`, `writable`,
    `get` noch `set` Schlüssel hat, wird er als Daten-Deskriptor behandelt. Wenn ein
    Deskriptor sowohl `value` oder `writable` als auch `get`
    oder `set` Schlüssel hat, wird eine Ausnahme ausgelöst.

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
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
