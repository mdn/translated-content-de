---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.defineProperties()`** definiert neue oder ändert bestehende Eigenschaften direkt auf einem Objekt und gibt das Objekt zurück.

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
  - : Das Objekt, auf dem die Eigenschaften definiert oder geändert werden sollen.
- `props`

  - : Ein Objekt, dessen Schlüssel die Namen der zu definierenden oder zu ändernden Eigenschaften darstellen und dessen Werte Objekte sind, die diese Eigenschaften beschreiben. Jeder Wert in `props` muss entweder ein Daten-Deskriptor oder ein Zugriff-Deskriptor sein; es kann nicht beides sein (siehe {{jsxref("Object.defineProperty()")}} für weitere Details).

    Daten-Deskriptoren und Zugriff-Deskriptoren können optional die folgenden Schlüssel enthalten:

    - `configurable`
      - : `true`, wenn und nur wenn dieser Eigenschafts-Deskriptor geändert werden kann und die Eigenschaft vom entsprechenden Objekt gelöscht werden darf.
        **Standardmäßig `false`.**
    - `enumerable`
      - : `true`, wenn und nur wenn diese Eigenschaft bei der Enumeration der Eigenschaften auf dem entsprechenden Objekt angezeigt wird.
        **Standardmäßig `false`.**

    Ein Daten-Deskriptor hat außerdem die folgenden optionalen Schlüssel:

    - `value`
      - : Der mit der Eigenschaft verknüpfte Wert. Kann jeden gültigen JavaScript-Wert enthalten (Nummer, Objekt, Funktion, etc.).
        **Standardmäßig {{jsxref("undefined")}}.**
    - `writable`
      - : `true`, wenn und nur wenn der mit der Eigenschaft verknüpfte Wert mit einem {{jsxref("Operators", "Zuweisungsoperator", "assignment_operators", 1)}} geändert werden darf.
        **Standardmäßig `false`.**

    Ein Zugriff-Deskriptor hat außerdem die folgenden optionalen Schlüssel:

    - `get`
      - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Getter vorhanden ist. Der Rückgabewert der Funktion wird als Wert der Eigenschaft verwendet.
        **Standardmäßig {{jsxref("undefined")}}.**
    - `set`
      - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Setter vorhanden ist. Die Funktion erhält als einzigen Parameter den neuen Wert, der der Eigenschaft zugewiesen wird.
        **Standardmäßig {{jsxref("undefined")}}.**

    Wenn ein Deskriptor weder `value`, `writable`, `get` noch `set` enthält, wird er als Daten-Deskriptor behandelt. Wenn ein Deskriptor sowohl die Schlüssel `value` oder `writable` als auch `get` oder `set` enthält, wird eine Ausnahme ausgelöst.

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
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [Enumerierbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
