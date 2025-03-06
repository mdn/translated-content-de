---
title: 'TypeError: property "x" is non-configurable and can''t be deleted'
slug: Web/JavaScript/Reference/Errors/Cant_delete
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "property is non-configurable and can't be deleted" tritt auf,
wenn versucht wurde, eine Eigenschaft zu löschen, diese Eigenschaft jedoch [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties) ist.

## Meldung

```plain
TypeError: Cannot delete property 'x' of #<Object> (V8-based)
TypeError: property "x" is non-configurable and can't be deleted (Firefox)
TypeError: Unable to delete property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}} nur im Strict Mode.

## Was ist schiefgelaufen?

Es wurde versucht, eine Eigenschaft zu löschen, diese Eigenschaft ist jedoch [nicht konfigurierbar](/de/docs/Web/JavaScript/Guide/Data_structures#properties). Das
`configurable`-Attribut steuert, ob die Eigenschaft aus dem Objekt gelöscht werden kann und ob ihre Attribute (außer `writable`) geändert werden können.

Dieser Fehler tritt nur in [Strict Mode-Code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. In
nicht-striktem Code gibt die Operation `false` zurück.

## Beispiele

### Versuch, nicht konfigurierbare Eigenschaften zu löschen

Nicht konfigurierbare Eigenschaften sind nicht sehr häufig, aber sie können erstellt werden mit
{{jsxref("Object.defineProperty()")}} oder {{jsxref("Object.freeze()")}}.

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

Es gibt auch einige nicht konfigurierbare Eigenschaften, die in JavaScript eingebaut sind. Vielleicht
haben Sie versucht, eine mathematische Konstante zu löschen.

```js example-bad
"use strict";
delete Math.PI; // TypeError
```

## Siehe auch

- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
