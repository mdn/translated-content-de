---
title: 'TypeError: kann Eigenschaft "x" nicht auf "y" zuweisen: kein Objekt'
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Striktmodus-Ausnahme "kann Eigenschaft nicht zuweisen" tritt auf, wenn versucht wird, eine Eigenschaft auf einem {{Glossary("Primitive", "primitiven Wert")}} wie einem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), einem {{Glossary("String", "String")}}, einer {{Glossary("Number", "Zahl")}} oder einem {{Glossary("Boolean", "Boolean")}} zu erstellen. {{Glossary("Primitive", "Primitive Werte")}} können keine {{Glossary("Property/JavaScript", "Eigenschaften")}} halten.

## Nachricht

```plain
TypeError: Cannot create property 'x' on number '1' (V8-based)
TypeError: can't assign to property "x" on 1: not an object (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Im [Striktmodus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, eine Eigenschaft auf einem {{Glossary("Primitive", "primitiven Wert")}} wie einem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), einem {{Glossary("String", "String")}}, einer {{Glossary("Number", "Zahl")}} oder einem {{Glossary("Boolean", "Boolean")}} zu erstellen. {{Glossary("Primitive", "Primitive Werte")}} können keine {{Glossary("Property/JavaScript", "Eigenschaften")}} halten.

Das Problem könnte sein, dass ein unerwarteter Wert an einer unerwarteten Stelle verwendet wird oder dass eine Objektvariante eines {{jsxref("String")}} oder einer {{jsxref("Number")}} erwartet wird.

## Beispiele

### Ungültige Fälle

```js example-bad
"use strict";

const foo = "my string";
// The following line does nothing if not in strict mode.
foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object
```

### Behebung des Problems

Entweder beheben Sie den Code, um zu verhindern, dass der {{Glossary("Primitive", "primitive Wert")}} an solchen Stellen verwendet wird, oder beheben Sie das Problem, indem Sie das objektäquivalente {{jsxref("Object")}} erstellen.

```js example-good
"use strict";

const foo = new String("my string");
foo.bar = {};
```

## Siehe auch

- [Striktmodus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{Glossary("Primitive", "primitiver Wert")}}
