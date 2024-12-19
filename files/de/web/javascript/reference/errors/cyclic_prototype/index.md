---
title: "TypeError: kann Prototyp nicht setzen: würde einen Prototyp-Kettenzyklus verursachen"
slug: Web/JavaScript/Reference/Errors/Cyclic_prototype
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "TypeError: kann Prototyp nicht setzen: würde einen Prototyp-Kettenzyklus verursachen" tritt auf, wenn das Prototyp eines Objekts so gesetzt wird, dass die [Prototyp-Kette](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#the_prototype_chain) zirkulär wird (`a` und `b` haben jeweils den anderen in ihren Prototyp-Ketten).

## Nachricht

```plain
TypeError: Cyclic __proto__ value (V8-based)
TypeError: can't set prototype: it would cause a prototype chain cycle (Firefox)
TypeError: cyclic __proto__ value (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Ein Zyklus, auch Schleife genannt, wurde in eine Prototyp-Kette eingeführt. Das bedeutet, dass beim Durchlaufen dieser Prototyp-Kette derselbe Ort immer wieder aufgerufen würde, anstatt schließlich `null` zu erreichen.

Dieser Fehler wird beim Setzen des Prototyps ausgelöst. In einer Operation wie `Object.setPrototypeOf(a, b)` wird dieser Fehler ausgegeben, wenn `a` bereits in der Prototyp-Kette von `b` existiert.

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

- [Objekt-Prototypen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
