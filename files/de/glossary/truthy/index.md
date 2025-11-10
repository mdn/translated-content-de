---
title: Truthy
slug: Glossary/Truthy
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In {{Glossary("JavaScript", "JavaScript")}} ist ein **truthy**-Wert ein Wert, der als `true` betrachtet wird, wenn er in einem {{Glossary("Boolean", "Boolean")}}-Kontext auftaucht. Alle Werte sind truthy, es sei denn, sie sind als {{Glossary("Falsy", "falsy")}} definiert. Das heißt, alle Werte sind _truthy_ außer `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` und [`document.all`](/de/docs/Web/API/Document/all).

{{Glossary("JavaScript", "JavaScript")}} verwendet {{Glossary("Type_Coercion", "Typumwandlung")}} in Boolean-Kontexten.

Beispiele für _truthy_-Werte in JavaScript (die in Boolean-Kontexten zu `true` konvertiert werden und somit den `if`-Block ausführen):

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

Wenn der erste Operand truthy ist, gibt der [logische UND-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) den zweiten Operand zurück:

```js
true && "dog";
// returns "dog"

[] && "dog";
// returns "dog"
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Falsy", "Falsy")}}
  - {{Glossary("Type_Coercion", "Typumwandlung")}}
  - {{Glossary("Boolean", "Boolean")}}
- [Boolean coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
