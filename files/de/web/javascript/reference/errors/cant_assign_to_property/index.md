---
title: 'TypeError: kann Eigenschaft „x“ nicht zu "y" zuweisen: kein Objekt'
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme im strikten Modus "can't assign to property" tritt auf, wenn versucht wird, einer [Primitivwert](/de/docs/Glossary/Primitive) wie einem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), einem [String](/de/docs/Glossary/String), einer [Number](/de/docs/Glossary/Number) oder einem [Boolean](/de/docs/Glossary/Boolean) eine Eigenschaft zuzuweisen. [Primitivwerte](/de/docs/Glossary/Primitive) können keine [Eigenschaften](/de/docs/Glossary/Property/JavaScript) speichern.

## Meldung

```plain
TypeError: Cannot create property 'x' on number '1' (V8-based)
TypeError: can't assign to property "x" on 1: not an object (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, einer [Primitivwert](/de/docs/Glossary/Primitive) wie einem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), einem [String](/de/docs/Glossary/String), einer [Number](/de/docs/Glossary/Number) oder einem [Boolean](/de/docs/Glossary/Boolean) eine Eigenschaft zuzuweisen. [Primitivwerte](/de/docs/Glossary/Primitive) können keine [Eigenschaften](/de/docs/Glossary/Property/JavaScript) speichern.

Das Problem könnte sein, dass ein unerwarteter Wert an einer unerwarteten Stelle auftaucht oder dass ein Objekt-Äquivalent eines {{jsxref("String")}} oder einer {{jsxref("Number")}} erwartet wird.

## Beispiele

### Ungültige Fälle

```js example-bad
"use strict";

const foo = "my string";
// The following line does nothing if not in strict mode.
foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object
```

### Behebung des Problems

Beheben Sie entweder den Code, um zu verhindern, dass der [Primitivwert](/de/docs/Glossary/Primitive) an solchen Stellen verwendet wird, oder beheben Sie das Problem, indem Sie das Objekt-Äquivalent {{jsxref("Object")}} erstellen.

```js example-good
"use strict";

const foo = new String("my string");
foo.bar = {};
```

## Siehe auch

- [Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- [Primitivwert](/de/docs/Glossary/Primitive)
