---
title: Reflect.isExtensible()
short-title: isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.isExtensible()`** ähnelt {{jsxref("Object.isExtensible()")}}. Sie ermittelt, ob ein Objekt erweiterbar ist (ob ihm neue Eigenschaften hinzugefügt werden können).

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
  - : Das Zielobjekt, für das geprüft werden soll, ob es erweiterbar ist.

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der angibt, ob das Zielobjekt erweiterbar ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.isExtensible()` bietet die reflektierende Semantik zur Prüfung, ob ein Objekt erweiterbar ist. Der einzige Unterschied zu {{jsxref("Object.isExtensible()")}} besteht darin, wie Nicht-Objekte als Zielwerte behandelt werden. `Reflect.isExtensible()` löst einen {{jsxref("TypeError")}} aus, wenn der Zielwert kein Objekt ist, während `Object.isExtensible()` für Nicht-Objekte immer `false` zurückgibt.

`Reflect.isExtensible()` ruft die [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[IsExtensible]]` von `target` auf.

## Beispiele

### Reflect.isExtensible() verwenden

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

Wenn das Argument `target` dieser Methode kein Objekt ist (sondern ein primitiver Wert), wird ein {{jsxref("TypeError")}} ausgelöst. Bei {{jsxref("Object.isExtensible()")}} gibt ein `target`, das kein Objekt ist, ohne Fehler `false` zurück.

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

- [Polyfill für `Reflect.isExtensible` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.isExtensible()")}}
- [`handler.isExtensible()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible)
