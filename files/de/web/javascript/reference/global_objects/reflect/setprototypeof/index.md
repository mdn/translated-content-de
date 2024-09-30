---
title: Reflect.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.setPrototypeOf()`** ist ähnlich wie {{jsxref("Object.setPrototypeOf()")}}, gibt jedoch einen {{jsxref("Boolean")}} zurück. Sie setzt das Prototyp (d. h. die interne `[[Prototype]]`-Eigenschaft) eines angegebenen Objekts.

{{EmbedInteractiveExample("pages/js/reflect-setprototypeof.html")}}

## Syntax

```js-nolint
Reflect.setPrototypeOf(target, prototype)
```

### Parameter

- `target`
  - : Das Zielobjekt, dessen Prototyp eingestellt werden soll.
- `prototype`
  - : Der neue Prototyp des Objekts (ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob der Prototyp erfolgreich gesetzt wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist oder wenn `prototype` weder ein Objekt noch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist.

## Beschreibung

`Reflect.setPrototypeOf()` bietet die reflektierende Semantik zum Setzen des Prototyps eines Objekts. Auf sehr niedrigem Niveau gibt das Setzen des Prototyps einen booleschen Wert zurück (wie es auch beim [Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf) der Fall ist). {{jsxref("Object.setPrototypeOf()")}} bietet nahezu dieselbe Semantik, löst jedoch einen {{jsxref("TypeError")}} aus, wenn der Status `false` ist (die Operation war nicht erfolgreich), während `Reflect.setPrototypeOf()` den Status direkt zurückgibt.

`Reflect.setPrototypeOf()` ruft die `[[SetPrototypeOf]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.setPrototypeOf()

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// It can change an object's [[Prototype]] to null.
Reflect.setPrototypeOf({}, null); // true

// Returns false if target is not extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Returns false if it cause a prototype chain cycle.
const target = {};
const proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.setPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`handler.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)
