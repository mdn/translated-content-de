---
title: Reflect.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.isExtensible()`** ist ähnlich wie {{jsxref("Object.isExtensible()")}}. Sie bestimmt, ob ein Objekt erweiterbar ist (ob diesem neue Eigenschaften hinzugefügt werden können).

{{EmbedInteractiveExample("pages/js/reflect-isextensible.html", "taller")}}

## Syntax

```js-nolint
Reflect.isExtensible(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, bei dem überprüft werden soll, ob es erweiterbar ist.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das Ziel erweiterbar ist oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.isExtensible()` bietet die reflektierende Semantik zur Überprüfung, ob ein Objekt erweiterbar ist. Der einzige Unterschied zu {{jsxref("Object.isExtensible()")}} besteht darin, wie nicht-Objekt-Ziele behandelt werden. `Reflect.isExtensible()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.isExtensible()` für nicht-Objekt-Ziele immer `false` zurückgibt.

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

Wenn das `target`-Argument dieser Methode kein Objekt (ein primitiver Wert) ist, wird ein {{jsxref("TypeError")}} ausgelöst. Bei {{jsxref("Object.isExtensible()")}} gibt ein nicht-Objekt `target` ohne Fehler false zurück.

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
