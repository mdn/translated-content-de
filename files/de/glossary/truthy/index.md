---
title: Wahrhaftig
slug: Glossary/Truthy
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

In {{Glossary("JavaScript", "JavaScript")}} ist ein **wahrhaftiger** Wert ein Wert, der als `true` angesehen wird, wenn er in einem {{Glossary("Boolean", "Boolean")}}-Kontext verwendet wird. Alle Werte sind wahrhaftig, es sei denn, sie sind als {{Glossary("Falsy", "falsch")}} definiert. Das heißt, alle Werte sind _wahrhaftig_ außer `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` und [`document.all`](/de/docs/Web/API/Document/all).

{{Glossary("JavaScript", "JavaScript")}} verwendet {{Glossary("Type_Coercion", "Typumwandlung")}} in Boolean-Kontexten.

Beispiele für _wahrhaftige_ Werte in JavaScript (die in Boolean-Kontexten zu `true` umgewandelt werden und somit den `if`-Block ausführen):

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

Wenn der erste Operand wahrhaftig ist, gibt der [logische UND-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) den zweiten Operand zurück:

```js
true && "dog";
// returns "dog"

[] && "dog";
// returns "dog"
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Falsy", "Falsch")}}
  - {{Glossary("Type_Coercion", "Typumwandlung")}}
  - {{Glossary("Boolean", "Boolean")}}
- [Boolean-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
