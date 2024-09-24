---
title: Reflect.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`Reflect.getPrototypeOf()`** statische Methode ist wie {{jsxref("Object.getPrototypeOf()")}}. Sie gibt das Prototyp-Objekt des angegebenen Objekts zurück.

{{EmbedInteractiveExample("pages/js/reflect-getprototypeof.html")}}

## Syntax

```js-nolint
Reflect.getPrototypeOf(target)
```

### Parameter

- `target`
  - : Das Zielobjekt, dessen Prototyp erhalten werden soll.

### Rückgabewert

Der Prototyp des gegebenen Objekts, der ein Objekt oder `null` sein kann.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist.

## Beschreibung

`Reflect.getPrototypeOf()` bietet die reflektive Semantik zum Abrufen des Prototyps eines Objekts. Der einzige Unterschied zu {{jsxref("Object.getPrototypeOf()")}} besteht darin, wie Nicht-Objekt-Ziele behandelt werden. `Reflect.getPrototypeOf()` löst einen {{jsxref("TypeError")}} aus, wenn das Ziel kein Objekt ist, während `Object.getPrototypeOf()` es in ein Objekt umwandelt.

`Reflect.getPrototypeOf()` ruft die `[[GetPrototypeOf]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.getPrototypeOf()

```js
Reflect.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf(Object.prototype); // null
Reflect.getPrototypeOf(Object.create(null)); // null
```

### Unterschied zu Object.getPrototypeOf()

```js
// Gleiches Ergebnis für Objekte
Object.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf({}); // Object.prototype

// Beide werfen in ES5 für Nicht-Objekte
Object.getPrototypeOf("foo"); // Löst TypeError aus
Reflect.getPrototypeOf("foo"); // Löst TypeError aus

// In ES2015 wirft nur Reflect, Object wandelt Nicht-Objekte um
Object.getPrototypeOf("foo"); // String.prototype
Reflect.getPrototypeOf("foo"); // Löst TypeError aus

// Um das ES2015-Verhalten von Object nachzuahmen, müssen Sie umwandeln
Reflect.getPrototypeOf(Object("foo")); // String.prototype
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.getPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`handler.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf)
