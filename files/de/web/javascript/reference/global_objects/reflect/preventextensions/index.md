---
title: Reflect.preventExtensions()
short-title: preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.preventExtensions()`** ähnelt {{jsxref("Object.preventExtensions()")}}. Sie verhindert, dass einem Objekt jemals neue Eigenschaften hinzugefügt werden (d.h. sie verhindert zukünftige Erweiterungen des Objekts).

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
  - : Das Zielobjekt, dessen Erweiterung verhindert werden soll.

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der angibt, ob erfolgreich verhindert wurde, dass das Zielobjekt erweitert wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.preventExtensions()` stellt die reflektierende Semantik bereit, mit der die Erweiterung eines Objekts verhindert wird. Die Unterschiede zu {{jsxref("Object.preventExtensions()")}} sind:

- `Reflect.preventExtensions()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.preventExtensions()` Werte, die keine Objekte sind, stets unverändert zurückgibt.
- `Reflect.preventExtensions()` gibt einen {{jsxref("Boolean")}}-Wert zurück, der angibt, ob erfolgreich verhindert wurde, dass das Zielobjekt erweitert wird, während `Object.preventExtensions()` das Zielobjekt zurückgibt.

`Reflect.preventExtensions()` ruft die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[PreventExtensions]]` von `target` auf.

## Beispiele

### Reflect.preventExtensions() verwenden

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

Wenn das Argument `target` dieser Methode kein Objekt ist (sondern ein primitiver Wert), wird ein {{jsxref("TypeError")}} ausgelöst. Bei {{jsxref("Object.preventExtensions()")}} wird ein `target`, das kein Objekt ist, dagegen unverändert und ohne Fehler zurückgegeben.

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

- [Polyfill für `Reflect.preventExtensions` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.preventExtensions()")}}
- [`handler.preventExtensions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions)
