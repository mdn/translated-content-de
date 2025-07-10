---
title: Reflect.isExtensible()
short-title: isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Reflect.isExtensible()`** ähnelt {{jsxref("Object.isExtensible()")}}. Sie bestimmt, ob ein Objekt erweiterbar ist (ob ihm neue Eigenschaften hinzugefügt werden können).

{{InteractiveExample("JavaScript Demo: Reflect.isExtensible()", "taller")}}

```js interactive-example
const object1 = {};

console.log(Reflect.isExtensible(object1));
// Expected output: true

Reflect.preventExtensions(object1);

console.log(Reflect.isExtensible(object1));
// Expected output: false

const object2 = Object.seal({});

console.log(Reflect.isExtensible(object2));
// Expected output: false
```

## Syntax

```js-nolint
Reflect.isExtensible(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, dessen Erweiterbarkeit geprüft werden soll.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das Ziel erweiterbar ist oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.isExtensible()` bietet die reflektierende Semantik zur Überprüfung, ob ein Objekt erweiterbar ist. Der einzige Unterschied zu {{jsxref("Object.isExtensible()")}} besteht darin, wie nicht-objekthafte Ziele behandelt werden. `Reflect.isExtensible()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.isExtensible()` immer `false` für nicht-objekthafte Ziele zurückgibt.

`Reflect.isExtensible()` ruft die `[[IsExtensible]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) des `target` auf.

## Beispiele

### Verwendung von Reflect.isExtensible()

Siehe auch {{jsxref("Object.isExtensible()")}}.

```js
// New objects are extensible.
const empty = {};
Reflect.isExtensible(empty); // true

// … but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // false

// Sealed objects are by definition non-extensible.
const sealed = Object.seal({});
Reflect.isExtensible(sealed); // false

// Frozen objects are also by definition non-extensible.
const frozen = Object.freeze({});
Reflect.isExtensible(frozen); // false
```

### Unterschied zu Object.isExtensible()

Wenn das `target` Argument dieser Methode kein Objekt ist (ein primitives), wird dies einen {{jsxref("TypeError")}} verursachen. Mit {{jsxref("Object.isExtensible()")}} wird ein nicht-objekthaftes `target` ohne Fehler false zurückgeben.

```js
Reflect.isExtensible(1);
// TypeError: 1 is not an object

Object.isExtensible(1);
// false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.isExtensible` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.isExtensible()")}}
- [`handler.isExtensible()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible)
