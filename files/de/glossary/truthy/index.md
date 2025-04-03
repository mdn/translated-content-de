---
title: Truthy
slug: Glossary/Truthy
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{GlossarySidebar}}

In {{Glossary("JavaScript", "JavaScript")}} ist ein **truthy**-Wert ein Wert, der als `true` betrachtet wird, wenn er in einem {{Glossary("Boolean", "Boolean")}}-Kontext vorkommt. Alle Werte sind truthy, es sei denn, sie sind als {{Glossary("Falsy", "falsy")}} definiert. Das heißt, alle Werte sind _truthy_ außer `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` und [`document.all`](/de/docs/Web/API/Document/all).

{{Glossary("JavaScript", "JavaScript")}} verwendet {{Glossary("Type_Coercion", "Typkonvertierung")}} in Boolean-Kontexten.

Beispiele für _truthy_-Werte in JavaScript (die in booleschen Kontexten in `true` konvertiert werden und somit den `if`-Block ausführen):

```js
if (true);
if ({});
if ([]);
if (42);
if ("0");
if ("false");
if (new Date());
if (-42);
if (12n);
if (3.14);
if (-3.14);
if (Infinity);
if (-Infinity);
```

### Der logische UND-Operator, &&

Wenn der erste Operand truthy ist, gibt der [logische UND-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) den zweiten Operanden zurück:

```js
true && "dog";
// returns "dog"

[] && "dog";
// returns "dog"
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Falsy", "Falsy")}}
  - {{Glossary("Type_Coercion", "Typkonvertierung")}}
  - {{Glossary("Boolean", "Boolean")}}
- [Boolean-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
