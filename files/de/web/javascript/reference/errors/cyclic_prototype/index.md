---
title: "TypeError: can't set prototype: it would cause a prototype chain cycle"
slug: Web/JavaScript/Reference/Errors/Cyclic_prototype
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "TypeError: can't set prototype: it would cause a prototype chain cycle" tritt auf, wenn das Prototyp eines Objekts so gesetzt wird, dass die [Prototypkette](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#the_prototype_chain) zirkulär wird (`a` und `b` haben gegenseitig in ihren Prototypketten).

## Nachricht

```plain
TypeError: Cyclic __proto__ value (V8-based)
TypeError: can't set prototype: it would cause a prototype chain cycle (Firefox)
TypeError: cyclic __proto__ value (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Eine Schleife, auch Zyklus genannt, wurde in eine Prototypkette eingeführt. Das bedeutet, dass beim Durchlaufen dieser Prototypkette immer wieder derselbe Punkt erreicht wird, anstatt schließlich `null` zu erreichen.

Dieser Fehler wird beim Setzen des Prototyps ausgelöst. In einer Operation wie `Object.setPrototypeOf(a, b)`, wenn `a` bereits in der Prototypkette von `b` existiert, wird dieser Fehler ausgelöst.

## Beispiele

```js example-bad
const a = {};
Object.setPrototypeOf(a, a);
// TypeError: can't set prototype: it would cause a prototype chain cycle
```

```js example-bad
const a = {};
const b = {};
const c = {};
Object.setPrototypeOf(a, b);
Object.setPrototypeOf(b, c);
Object.setPrototypeOf(c, a);
// TypeError: can't set prototype: it would cause a prototype chain cycle
```

## Weitere Informationen

- [Objektprototypen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
