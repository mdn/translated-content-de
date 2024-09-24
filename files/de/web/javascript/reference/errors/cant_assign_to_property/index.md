---
title: "TypeError: Kann Eigenschaft \"x\" auf \"y\" nicht zuweisen: kein Objekt"
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript Strict-Mode-Ausnahme "kann Eigenschaft nicht zuweisen" tritt auf, wenn versucht wird, eine Eigenschaft auf einem [primitiven](/de/docs/Glossary/Primitive) Wert wie einem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), einem [String](/de/docs/Glossary/String), einer [Zahl](/de/docs/Glossary/Number) oder einem [Boolean](/de/docs/Glossary/Boolean) zu erstellen. [Primitive](/de/docs/Glossary/Primitive) Werte können keine [Eigenschaft](/de/docs/Glossary/Property/JavaScript) halten.

## Nachricht

```plain
TypeError: Cannot create property 'x' on number '1' (V8-basiert)
TypeError: kann Eigenschaft "x" auf 1 nicht zuweisen: kein Objekt (Firefox)
TypeError: Versuch, einer schreibgeschützten Eigenschaft einen Wert zuzuweisen. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Im [Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, eine Eigenschaft auf einem [primitiven](/de/docs/Glossary/Primitive) Wert wie einem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), einem [String](/de/docs/Glossary/String), einer [Zahl](/de/docs/Glossary/Number) oder einem [Boolean](/de/docs/Glossary/Boolean) zu erstellen. [Primitive](/de/docs/Glossary/Primitive) Werte können keine [Eigenschaft](/de/docs/Glossary/Property/JavaScript) halten.

Das Problem könnte darin bestehen, dass ein unerwarteter Wert an einer unerwarteten Stelle auftritt oder dass eine Objektvariante eines {{jsxref("String")}} oder einer {{jsxref("Number")}} erwartet wird.

## Beispiele

### Ungültige Fälle

```js example-bad
"use strict";

const foo = "mein String";
// Die folgende Zeile bewirkt nichts, wenn nicht im Strict-Mode.
foo.bar = {}; // TypeError: kann Eigenschaft "bar" auf "mein String" nicht zuweisen: kein Objekt
```

### Behebung des Problems

Entweder beheben Sie den Code, um zu verhindern, dass der [primitive](/de/docs/Glossary/Primitive) an solchen Stellen verwendet wird, oder beheben Sie das Problem, indem Sie das Objektaequivalent {{jsxref("Object")}} erstellen.

```js example-good
"use strict";

const foo = new String("mein String");
foo.bar = {};
```

## Siehe auch

- [Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- [primitiv](/de/docs/Glossary/Primitive)
