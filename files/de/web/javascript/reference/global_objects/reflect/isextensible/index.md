---
title: Reflect.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.isExtensible()`** ist ähnlich wie {{jsxref("Object.isExtensible()")}}. Sie bestimmt, ob ein Objekt erweiterbar ist (ob ihm neue Eigenschaften hinzugefügt werden können).

{{EmbedInteractiveExample("pages/js/reflect-isextensible.html", "taller")}}

## Syntax

```js-nolint
Reflect.isExtensible(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, bei dem geprüft werden soll, ob es erweiterbar ist.

### Rückgabewert

Ein {{jsxref("Boolean")}}, das angibt, ob das Ziel erweiterbar ist oder nicht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.isExtensible()` bietet die reflektive Semantik der Prüfung, ob ein Objekt erweiterbar ist. Der einzige Unterschied zu {{jsxref("Object.isExtensible()")}} besteht darin, wie nicht-objektartige Ziele behandelt werden. `Reflect.isExtensible()` wirft einen {{jsxref("TypeError")}}, wenn das Ziel kein Objekt ist, während `Object.isExtensible()` immer `false` für nicht-objektartige Ziele zurückgibt.

`Reflect.isExtensible()` ruft die `[[IsExtensible]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) des `target` auf.

## Beispiele

### Verwendung von Reflect.isExtensible()

Siehe auch {{jsxref("Object.isExtensible()")}}.

```js
// Neue Objekte sind erweiterbar.
const empty = {};
Reflect.isExtensible(empty); // true

// ...aber das kann geändert werden.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // false

// Versiegelte Objekte sind per Definition nicht erweiterbar.
const sealed = Object.seal({});
Reflect.isExtensible(sealed); // false

// Gefrorene Objekte sind ebenfalls per Definition nicht erweiterbar.
const frozen = Object.freeze({});
Reflect.isExtensible(frozen); // false
```

### Unterschied zu Object.isExtensible()

Wenn das `target`-Argument dieser Methode kein Objekt ist (ein primitiver Wert), wird ein {{jsxref("TypeError")}} ausgelöst. Mit {{jsxref("Object.isExtensible()")}} gibt ein nicht-objektartiges `target` false zurück, ohne Fehler zu erzeugen.

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
