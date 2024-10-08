---
title: "TypeError: kann Eigenschaft „x“ auf „y“ nicht zuweisen: kein Objekt"
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript Strict-Mode-Ausnahme "kann Eigenschaft nicht zuweisen" tritt auf, wenn versucht wird, eine Eigenschaft auf einem {{Glossary("Primitive", "Primitiv")}} wie einem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), einem {{Glossary("String", "String")}}, einer {{Glossary("Number", "Nummer")}} oder einem {{Glossary("Boolean", "Boolean")}} zu erstellen. {{Glossary("Primitive", "Primitive")}} Werte können keine {{Glossary("Property/JavaScript", "Eigenschaften")}} enthalten.

## Meldung

```plain
TypeError: Cannot create property 'x' on number '1' (V8-based)
TypeError: can't assign to property "x" on 1: not an object (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, eine Eigenschaft auf einem {{Glossary("Primitive", "Primitiv")}} wie einem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), einem {{Glossary("String", "String")}}, einer {{Glossary("Number", "Nummer")}} oder einem {{Glossary("Boolean", "Boolean")}} zu erstellen. {{Glossary("Primitive", "Primitive")}} Werte können keine {{Glossary("Property/JavaScript", "Eigenschaften")}} enthalten.

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

Entweder den Code so korrigieren, dass das {{Glossary("Primitive", "Primitiv")}} nicht an solchen Stellen verwendet wird, oder das Problem durch Erstellen des Objekts-Äquivalents {{jsxref("Object")}} beheben.

```js example-good
"use strict";

const foo = new String("my string");
foo.bar = {};
```

## Siehe auch

- [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{Glossary("Primitive", "Primitiv")}}
