---
title: "TypeError: can't set prototype: it would cause a prototype chain cycle"
slug: Web/JavaScript/Reference/Errors/Cyclic_prototype
l10n:
  sourceCommit: a7ca7b114d94060d1111cd25b431d7891143d349
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "TypeError: can't set prototype: it would cause a prototype chain cycle" tritt auf, wenn das Prototyp eines Objekts so eingestellt wird, dass die [Prototypenkette](/de/docs/Learn/JavaScript/Objects/Object_prototypes#the_prototype_chain) zyklisch wird (`a` und `b` haben sich gegenseitig in ihren Prototypketten).

## Meldung

```plain
TypeError: Cyclic __proto__ value (V8-based)
TypeError: can't set prototype: it would cause a prototype chain cycle (Firefox)
TypeError: cyclic __proto__ value (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

In einer Prototypenkette wurde ein Schleife, auch Zyklus genannt, eingeführt. Das bedeutet, dass beim Durchlaufen dieser Prototypenkette immer wieder derselbe Punkt erreicht würde, anstatt schließlich `null` zu erreichen.

Dieser Fehler wird beim Setzen des Prototyps ausgelöst. Bei einem Vorgang wie `Object.setPrototypeOf(a, b)`, wenn `a` bereits in der Prototypenkette von `b` existiert, wird dieser Fehler ausgelöst.

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

- [Objekt-Prototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
