---
title: Reflect.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Reflect.setPrototypeOf()`** ist wie {{jsxref("Object.setPrototypeOf()")}}, gibt aber einen {{jsxref("Boolean")}} zurück. Sie setzt das Prototyp-Objekt (d.h. die interne Eigenschaft `[[Prototype]]`) eines angegebenen Objekts.

{{EmbedInteractiveExample("pages/js/reflect-setprototypeof.html")}}

## Syntax

```js-nolint
Reflect.setPrototypeOf(target, prototype)
```

### Parameter

- `target`
  - : Das Zielobjekt, dessen Prototyp gesetzt werden soll.
- `prototype`
  - : Der neue Prototyp des Objekts (ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)).

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob der Prototyp erfolgreich gesetzt wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt ist oder `prototype` weder ein Objekt noch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist.

## Beschreibung

`Reflect.setPrototypeOf()` bietet die reflektive Semantik, um den Prototyp eines Objekts zu setzen. Auf der sehr niedrigen Ebene gibt das Setzen des Prototyps einen Boolean zurück (wie es bei [dem Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf) der Fall ist). {{jsxref("Object.setPrototypeOf()")}} bietet nahezu die gleiche Semantik, wirft jedoch einen {{jsxref("TypeError")}}, wenn der Status `false` ist (die Operation war nicht erfolgreich), während `Reflect.setPrototypeOf()` direkt den Status zurückgibt.

`Reflect.setPrototypeOf()` ruft die interne Methode `[[SetPrototypeOf]]` des [Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `target` auf.

## Beispiele

### Verwendung von Reflect.setPrototypeOf()

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// Es kann den [[Prototype]] eines Objekts auf null ändern.
Reflect.setPrototypeOf({}, null); // true

// Gibt false zurück, wenn das Ziel nicht erweiterbar ist.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Gibt false zurück, wenn es einen Prototyp-Kreislauf verursacht.
const target = {};
const proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.setPrototypeOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`handler.setPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)
