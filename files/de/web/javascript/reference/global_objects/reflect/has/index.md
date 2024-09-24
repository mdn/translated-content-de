---
title: Reflect.has()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/has
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`Reflect.has()`** statische Methode ist wie der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator, jedoch als Funktion.

{{EmbedInteractiveExample("pages/js/reflect-has.html")}}

## Syntax

```js-nolint
Reflect.has(target, propertyKey)
```

### Parameter

- `target`
  - : Das Zielobjekt, in dem nach der Eigenschaft gesucht werden soll.
- `propertyKey`
  - : Der Name der zu überprüfenden Eigenschaft.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das `target` die Eigenschaft hat oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.has()` bietet die reflexive Semantik zur Überprüfung, ob eine Eigenschaft in einem Objekt vorhanden ist. Das heißt, `Reflect.has(target, propertyKey)` ist semantisch gleichbedeutend mit:

```js
propertyKey in target;
```

`Reflect.has()` ruft die `[[HasProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.has()

```js
Reflect.has({ x: 0 }, "x"); // true
Reflect.has({ x: 0 }, "y"); // false

// gibt true für Eigenschaften in der Prototypkette zurück
Reflect.has({ x: 0 }, "toString");

// Proxy mit .has() Handler-Methode
obj = new Proxy(
  {},
  {
    has(t, k) {
      return k.startsWith("door");
    },
  },
);
Reflect.has(obj, "doorbell"); // true
Reflect.has(obj, "dormitory"); // false
```

`Reflect.has` gibt `true` für alle geerbten Eigenschaften zurück, wie der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator:

```js
const a = { foo: 123 };
const b = { __proto__: a };
const c = { __proto__: b };
// Die Prototypkette ist: c -> b -> a
Reflect.has(c, "foo"); // true
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.has` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)
- [`handler.has()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has)
