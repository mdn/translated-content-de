---
title: Reflect.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.isExtensible()`** ähnelt {{jsxref("Object.isExtensible()")}}. Sie bestimmt, ob ein Objekt erweiterbar ist (ob ihm neue Eigenschaften hinzugefügt werden können).

{{EmbedInteractiveExample("pages/js/reflect-isextensible.html", "taller")}}

## Syntax

```js-nolint
Reflect.isExtensible(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, das überprüft werden soll, ob es erweiterbar ist.

### Rückgabewert

Ein {{jsxref("Boolean")}}, das angibt, ob das Ziel erweiterbar ist oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.isExtensible()` bietet die reflektive Semantik zur Überprüfung, ob ein Objekt erweiterbar ist. Der einzige Unterschied zu {{jsxref("Object.isExtensible()")}} ist, wie nicht-objekthafte Ziele behandelt werden. `Reflect.isExtensible()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.isExtensible()` für nicht-objekthafte Ziele immer `false` zurückgibt.

`Reflect.isExtensible()` ruft die `[[IsExtensible]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.isExtensible()

Siehe auch {{jsxref("Object.isExtensible()")}}.

```js
// New objects are extensible.
const empty = {};
Reflect.isExtensible(empty); // true

// ...but that can be changed.
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

Wenn das `target`-Argument dieser Methode kein Objekt ist (ein Primitive), verursacht es einen {{jsxref("TypeError")}}. Mit {{jsxref("Object.isExtensible()")}} wird bei einem nicht-objekthaften `target` ein `false` ohne Fehler zurückgegeben.

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
