---
title: "TypeError: Eigenschaft \"x\" ist nicht konfigurierbar und kann nicht gelöscht werden"
slug: Web/JavaScript/Reference/Errors/Cant_delete
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "property is non-configurable and can't be deleted" tritt auf, wenn versucht wurde, eine Eigenschaft zu löschen, die [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties) ist.

## Meldung

```plain
TypeError: Cannot delete property 'x' of #<Object> (V8-based)
TypeError: property "x" is non-configurable and can't be deleted (Firefox)
TypeError: Unable to delete property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}} nur im Strict-Modus.

## Was ging schief?

Es wurde versucht, eine Eigenschaft zu löschen, die [nicht konfigurierbar](/de/docs/Web/JavaScript/Data_structures#properties) ist. Das
`configurable`-Attribut steuert, ob die Eigenschaft aus
dem Objekt gelöscht und ob ihre Attribute (außer `writable`) geändert werden können.

Dieser Fehler tritt nur im [Strict-Modus-Code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. Im
Nicht-Strict-Code gibt der Vorgang `false` zurück.

## Beispiele

### Versuch, nicht konfigurierbare Eigenschaften zu löschen

Nicht konfigurierbare Eigenschaften sind nicht sehr häufig, aber sie können mit
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

Es gibt auch einige eingebaute nicht konfigurierbare Eigenschaften in JavaScript. Vielleicht haben Sie versucht, eine mathematische Konstante zu löschen.

```js example-bad
"use strict";
delete Math.PI; // TypeError
```

## Siehe auch

- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
