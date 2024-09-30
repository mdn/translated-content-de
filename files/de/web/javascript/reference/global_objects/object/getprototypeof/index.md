---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`Object.getPrototypeOf()`** statische Methode gibt das Prototyp-Objekt
(z. B. den Wert der internen `[[Prototype]]`-Eigenschaft) des angegebenen Objekts zurück.

{{EmbedInteractiveExample("pages/js/object-getprototypeof.html", "shorter")}}

## Syntax

```js-nolint
Object.getPrototypeOf(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen Prototyp zurückgegeben werden soll.

### Rückgabewert

Der Prototyp des angegebenen Objekts, der [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein kann.

## Beispiele

### Verwendung von getPrototypeOf

```js
const proto = {};
const obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

### Erzwingen nicht-Objekt-Typen

In ES5 wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst, wenn der `obj`-Parameter kein Objekt ist. In ES2015 wird der Parameter zu einem {{jsxref("Object")}} umgewandelt.

```js
Object.getPrototypeOf("foo");
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf("foo");
// String.prototype                  (ES2015 code)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.getPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Reflect.getPrototypeOf()")}}
- [Object.getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/) von John Resig (2008)
