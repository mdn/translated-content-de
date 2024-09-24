---
title: "TypeError: kann Prototyp nicht festlegen: es würde einen zyklischen Prototyp-Chain-Zyklus verursachen"
slug: Web/JavaScript/Reference/Errors/Cyclic_prototype
l10n:
  sourceCommit: a7ca7b114d94060d1111cd25b431d7891143d349
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "TypeError: kann Prototyp nicht festlegen: es würde einen zyklischen Prototyp-Chain-Zyklus verursachen" tritt auf, wenn das Prototyp eines Objekts so gesetzt wird, dass die [Prototyp-Kette](/de/docs/Learn/JavaScript/Objects/Object_prototypes#the_prototype_chain) zirkulär wird (`a` und `b` haben sich gegenseitig in ihren Prototyp-Ketten).

## Nachricht

```plain
TypeError: Cyclic __proto__ value (V8-based)
TypeError: can't set prototype: it would cause a prototype chain cycle (Firefox)
TypeError: cyclic __proto__ value (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Ein Loop, auch Zyklus genannt, wurde in einer Prototyp-Kette eingeführt. Das bedeutet, dass beim Durchlaufen dieser Prototyp-Kette derselbe Ort immer und immer wieder erreicht würde, anstatt schließlich `null` zu erreichen.

Dieser Fehler wird beim Setzen des Prototyps ausgelöst. In einer Operation wie `Object.setPrototypeOf(a, b)`, wenn `a` bereits in der Prototyp-Kette von `b` existiert, wird dieser Fehler ausgelöst.

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
- [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
