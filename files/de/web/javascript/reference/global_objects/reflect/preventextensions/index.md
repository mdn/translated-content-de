---
title: Reflect.preventExtensions()
short-title: preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`Reflect.preventExtensions()`** ähnelt {{jsxref("Object.preventExtensions()")}}. Sie verhindert, dass jemals neue Eigenschaften zu einem Objekt hinzugefügt werden (d.h. sie verhindert zukünftige Erweiterungen des Objekts).

{{InteractiveExample("JavaScript Demo: Reflect.preventExtensions()")}}

```js interactive-example
const object = {};

console.log(Reflect.isExtensible(object));
// Expected output: true

Reflect.preventExtensions(object);

console.log(Reflect.isExtensible(object));
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

`Reflect.preventExtensions()` bietet die reflektive Semantik, um Erweiterungen eines Objekts zu verhindern. Die Unterschiede zu {{jsxref("Object.preventExtensions()")}} sind:

- `Reflect.preventExtensions()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.preventExtensions()` immer nicht-objektbezogene Ziele unverändert zurückgibt.
- `Reflect.preventExtensions()` gibt einen {{jsxref("Boolean")}} zurück, der anzeigt, ob das Ziel erfolgreich so eingestellt wurde, dass Erweiterungen verhindert werden, während `Object.preventExtensions()` das Zielobjekt zurückgibt.

`Reflect.preventExtensions()` ruft die `[[PreventExtensions]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) des `targets` auf.

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

Wenn das `target`-Argument dieser Methode kein Objekt ist (ein primitiver Wert), wird ein {{jsxref("TypeError")}} verursacht. Mit {{jsxref("Object.preventExtensions()")}} wird ein nicht-objektbezogenes `target` unverändert zurückgegeben, ohne Fehlermeldung.

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
