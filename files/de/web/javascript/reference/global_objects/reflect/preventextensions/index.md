---
title: Reflect.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.preventExtensions()`** ist ähnlich wie {{jsxref("Object.preventExtensions()")}}. Sie verhindert, dass neue Eigenschaften jemals einem Objekt hinzugefügt werden können (d.h., sie verhindert zukünftige Erweiterungen des Objekts).

{{EmbedInteractiveExample("pages/js/reflect-preventextensions.html")}}

## Syntax

```js-nolint
Reflect.preventExtensions(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, bei dem Erweiterungen verhindert werden sollen.

### Rückgabewert

Ein {{jsxref("Boolean")}}, das angibt, ob das Zielobjekt erfolgreich zur Verhinderung von Erweiterungen eingestellt wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.preventExtensions()` bietet die reflektive Semantik, Erweiterungen eines Objekts zu verhindern. Die Unterschiede zu {{jsxref("Object.preventExtensions()")}} sind:

- `Reflect.preventExtensions()` wirft einen {{jsxref("TypeError")}}, wenn das Ziel kein Objekt ist, während `Object.preventExtensions()` nicht-objektartige Ziele unverändert zurückgibt.
- `Reflect.preventExtensions()` gibt einen {{jsxref("Boolean")}} zurück, der angibt, ob das Ziel erfolgreich zur Verhinderung von Erweiterungen eingestellt wurde, wohingegen `Object.preventExtensions()` das Zielobjekt zurückgibt.

`Reflect.preventExtensions()` ruft die `[[PreventExtensions]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) des `target` auf.

## Beispiele

### Verwendung von Reflect.preventExtensions()

Siehe auch {{jsxref("Object.preventExtensions()")}}.

```js
// Objekte sind standardmäßig erweiterbar.
const empty = {};
Reflect.isExtensible(empty); // true

// ...aber das kann geändert werden.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // false
```

### Unterschied zu Object.preventExtensions()

Wenn das `target`-Argument dieser Methode kein Objekt (eine Primitive) ist, wird ein {{jsxref("TypeError")}} ausgelöst. Bei {{jsxref("Object.preventExtensions()")}} wird ein nicht-objektartiges `target` unverändert und ohne Fehler zurückgegeben.

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
