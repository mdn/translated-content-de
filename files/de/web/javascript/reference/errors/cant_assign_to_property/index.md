---
title: "TypeError: kann Eigenschaft „x“ auf „y“ nicht zuweisen: kein Objekt"
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript Strict-Mode-Ausnahme "kann Eigenschaft nicht zuweisen" tritt auf, wenn versucht wird, eine Eigenschaft auf einem [Primitiv](/de/docs/Glossary/Primitive) wie einem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), einem [String](/de/docs/Glossary/String), einer [Nummer](/de/docs/Glossary/Number) oder einem [Boolean](/de/docs/Glossary/Boolean) zu erstellen. [Primitive](/de/docs/Glossary/Primitive) Werte können keine [Eigenschaften](/de/docs/Glossary/Property/JavaScript) enthalten.

## Meldung

```plain
TypeError: Cannot create property 'x' on number '1' (V8-based)
TypeError: can't assign to property "x" on 1: not an object (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, eine Eigenschaft auf einem [Primitiv](/de/docs/Glossary/Primitive) wie einem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), einem [String](/de/docs/Glossary/String), einer [Nummer](/de/docs/Glossary/Number) oder einem [Boolean](/de/docs/Glossary/Boolean) zu erstellen. [Primitive](/de/docs/Glossary/Primitive) Werte können keine [Eigenschaften](/de/docs/Glossary/Property/JavaScript) enthalten.

Das Problem könnte sein, dass ein unerwarteter Wert an unerwarteter Stelle eingesetzt wird oder dass eine Objektvariante eines {{jsxref("String")}} oder einer {{jsxref("Number")}} erwartet wird.

## Beispiele

### Ungültige Fälle

```js example-bad
"use strict";

const foo = "my string";
// The following line does nothing if not in strict mode.
foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object
```

### Behebung des Problems

Entweder den Code so korrigieren, dass das [Primitiv](/de/docs/Glossary/Primitive) nicht an solchen Stellen verwendet wird, oder das Problem durch Erstellen des Objekts-Äquivalents {{jsxref("Object")}} beheben.

```js example-good
"use strict";

const foo = new String("my string");
foo.bar = {};
```

## Siehe auch

- [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- [Primitiv](/de/docs/Glossary/Primitive)
