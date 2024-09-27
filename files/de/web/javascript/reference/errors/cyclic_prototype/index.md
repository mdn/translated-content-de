---
title: "TypeError: can't set prototype: it would cause a prototype chain cycle"
slug: Web/JavaScript/Reference/Errors/Cyclic_prototype
l10n:
  sourceCommit: a7ca7b114d94060d1111cd25b431d7891143d349
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "TypeError: can't set prototype: it would cause a prototype chain cycle" tritt auf, wenn das Prototyp eines Objekts so gesetzt wird, dass die [Prototypkette](/de/docs/Learn/JavaScript/Objects/Object_prototypes#the_prototype_chain) zirkulär wird (`a` und `b` haben sich gegenseitig in ihren Prototypketten).

## Meldung

```plain
TypeError: Cyclic __proto__ value (V8-based)
TypeError: can't set prototype: it would cause a prototype chain cycle (Firefox)
TypeError: cyclic __proto__ value (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Eine Schleife, auch Zyklus genannt, wurde in eine Prototypkette eingeführt. Das bedeutet, dass beim Durchlaufen dieser Prototypkette immer wieder derselbe Punkt aufgerufen wird, anstatt schließlich `null` zu erreichen.

Dieser Fehler wird ausgelöst, wenn das Prototyp gesetzt wird. In einer Operation wie `Object.setPrototypeOf(a, b)`, falls `a` bereits in der Prototypkette von `b` existiert, wird dieser Fehler ausgelöst.

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

## Siehe auch

- [Objektprototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
