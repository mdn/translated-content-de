---
title: "TypeError: can't set prototype: it would cause a prototype chain cycle"
slug: Web/JavaScript/Reference/Errors/Cyclic_prototype
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "TypeError: can't set prototype: it would cause a prototype chain cycle" tritt auf, wenn das Prototyp eines Objekts so gesetzt wird, dass die [Prototypenkette](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#the_prototype_chain) zirkulär wird (`a` und `b` enthalten sich gegenseitig in ihren Prototypenketten).

## Nachricht

```plain
TypeError: Cyclic __proto__ value (V8-based)
TypeError: can't set prototype: it would cause a prototype chain cycle (Firefox)
TypeError: cyclic __proto__ value (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Ein Schaltkreis oder Kreislauf wurde in eine Prototypenkette eingeführt. Das bedeutet, dass beim Durchlaufen dieser Prototypenkette ständig derselbe Punkt wiederholt aufgerufen wird, anstatt schließlich `null` zu erreichen.

Dieser Fehler tritt beim Setzen des Prototyps auf. Bei einer Operation wie `Object.setPrototypeOf(a, b)`, wenn `a` bereits in der Prototypenkette von `b` existiert, wird dieser Fehler ausgelöst.

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

- [Objektprototypen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
