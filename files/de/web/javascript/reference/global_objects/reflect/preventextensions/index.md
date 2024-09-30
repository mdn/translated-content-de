---
title: Reflect.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.preventExtensions()`** ist vergleichbar mit {{jsxref("Object.preventExtensions()")}}. Sie verhindert, dass neue Eigenschaften jemals zu einem Objekt hinzugefügt werden (d. h., sie verhindert zukünftige Erweiterungen des Objekts).

{{EmbedInteractiveExample("pages/js/reflect-preventextensions.html")}}

## Syntax

```js-nolint
Reflect.preventExtensions(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, an dem Erweiterungen verhindert werden sollen.

### Rückgabewert

Ein {{jsxref("Boolean")}}, das angibt, ob das Ziel erfolgreich auf die Verhinderung von Erweiterungen gesetzt wurde oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.preventExtensions()` bietet die reflexive Semantik der Verhinderung von Erweiterungen eines Objekts. Die Unterschiede zu {{jsxref("Object.preventExtensions()")}} sind:

- `Reflect.preventExtensions()` wirft einen {{jsxref("TypeError")}}, wenn das Ziel kein Objekt ist, während `Object.preventExtensions()` immer nicht-objektartige Ziele unverändert zurückgibt.
- `Reflect.preventExtensions()` gibt ein {{jsxref("Boolean")}} zurück, das angibt, ob das Ziel erfolgreich auf die Verhinderung von Erweiterungen gesetzt wurde, während `Object.preventExtensions()` das Zielobjekt zurückgibt.

`Reflect.preventExtensions()` ruft die `[[PreventExtensions]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.preventExtensions()

Siehe auch {{jsxref("Object.preventExtensions()")}}.

```js
// Objects are extensible by default.
const empty = {};
Reflect.isExtensible(empty); // true

// ...but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // false
```

### Unterschied zu Object.preventExtensions()

Wenn das `target`-Argument dieser Methode kein Objekt (ein Primitive) ist, wird es einen {{jsxref("TypeError")}} verursachen. Bei {{jsxref("Object.preventExtensions()")}} wird ein nicht-objektartiges `target` ohne Fehler unverändert zurückgegeben.

```js
Reflect.preventExtensions(1);
// TypeError: 1 is not an object

Object.preventExtensions(1);
// 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.preventExtensions` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.preventExtensions()")}}
- [`handler.preventExtensions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions)
