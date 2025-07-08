---
title: 'TypeError: Eigenschaft "x" ist nicht konfigurierbar und kann nicht gelöscht werden'
slug: Web/JavaScript/Reference/Errors/Cant_delete
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "Eigenschaft ist nicht konfigurierbar und kann nicht gelöscht werden" tritt auf, wenn versucht wurde, eine Eigenschaft zu löschen, die [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties) ist.

## Nachricht

```plain
TypeError: Cannot delete property 'x' of #<Object> (V8-based)
TypeError: property "x" is non-configurable and can't be deleted (Firefox)
TypeError: Unable to delete property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}} nur im Strict-Modus.

## Was ist schiefgelaufen?

Es wurde versucht, eine Eigenschaft zu löschen, die [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties) ist. Das
`configurable`-Attribut steuert, ob die Eigenschaft aus dem
Objekt gelöscht werden kann und ob ihre Attribute (außer `writable`) geändert werden können.

Dieser Fehler tritt nur in [Strict-Modus-Code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. In
nicht-striktem Code gibt die Operation `false` zurück.

## Beispiele

### Versuch, nicht konfigurierbare Eigenschaften zu löschen

Nicht konfigurierbare Eigenschaften sind nicht sehr häufig, können jedoch mit
{{jsxref("Object.defineProperty()")}} oder {{jsxref("Object.freeze()")}} erstellt werden.

```js example-bad
"use strict";
const obj = Object.freeze({ name: "Elsa", score: 157 });
delete obj.score; // TypeError
```

```js example-bad
"use strict";
const obj = {};
Object.defineProperty(obj, "foo", { value: 2, configurable: false });
delete obj.foo; // TypeError
```

```js example-bad
"use strict";
const frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop(); // TypeError
```

Es gibt auch einige nicht konfigurierbare Eigenschaften, die in JavaScript integriert sind. Möglicherweise haben Sie versucht, eine mathematische Konstante zu löschen.

```js example-bad
"use strict";
delete Math.PI; // TypeError
```

## Siehe auch

- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
