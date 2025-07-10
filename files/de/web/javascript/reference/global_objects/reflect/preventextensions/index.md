---
title: Reflect.preventExtensions()
short-title: preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Reflect.preventExtensions()`** ist wie {{jsxref("Object.preventExtensions()")}}. Sie verhindert, dass neue Eigenschaften jemals zu einem Objekt hinzugefügt werden (d.h. sie verhindert zukünftige Erweiterungen des Objekts).

{{InteractiveExample("JavaScript Demo: Reflect.preventExtensions()")}}

```js interactive-example
const object1 = {};

console.log(Reflect.isExtensible(object1));
// Expected output: true

Reflect.preventExtensions(object1);

console.log(Reflect.isExtensible(object1));
// Expected output: false
```

## Syntax

```js-nolint
Reflect.preventExtensions(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, bei dem Erweiterungen verhindert werden sollen.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das Ziel erfolgreich so eingestellt wurde, dass Erweiterungen verhindert werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.preventExtensions()` bietet die reflektierende Semantik, um Erweiterungen eines Objekts zu verhindern. Die Unterschiede zu {{jsxref("Object.preventExtensions()")}} sind:

- `Reflect.preventExtensions()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.preventExtensions()` nicht-Objekt-Ziele immer unverändert zurückgibt.
- `Reflect.preventExtensions()` gibt ein {{jsxref("Boolean")}} zurück, das angibt, ob das Ziel erfolgreich so eingestellt wurde, dass Erweiterungen verhindert werden, während `Object.preventExtensions()` das Zielobjekt zurückgibt.

`Reflect.preventExtensions()` ruft die `[[PreventExtensions]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.preventExtensions()

Siehe auch {{jsxref("Object.preventExtensions()")}}.

```js
// Objects are extensible by default.
const empty = {};
Reflect.isExtensible(empty); // true

// … but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // false
```

### Unterschied zu Object.preventExtensions()

Wenn das `target`-Argument dieser Methode kein Objekt ist (ein primitiver Wert), führt dies zu einem {{jsxref("TypeError")}}. Bei {{jsxref("Object.preventExtensions()")}} wird ein nicht-Objekt-`target` ohne Fehler unverändert zurückgegeben.

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
