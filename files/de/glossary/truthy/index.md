---
title: Truthy
slug: Glossary/Truthy
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Im {{Glossary("JavaScript", "JavaScript")}} ist ein **truthy** Wert ein Wert, der in einem {{Glossary("Boolean", "Boolean")}}-Kontext als `true` angesehen wird. Alle Werte sind truthy, es sei denn, sie sind als {{Glossary("Falsy", "falsy")}} definiert. Das heißt, alle Werte sind _truthy_ außer `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` und [`document.all`](/de/docs/Web/API/Document/all).

{{Glossary("JavaScript", "JavaScript")}} verwendet {{Glossary("Type_Coercion", "Typumwandlung")}} in booleschen Kontexten.

Beispiele für _truthy_ Werte in JavaScript (die in booleschen Kontexten zu `true` umgeformt werden und somit den `if`-Block ausführen):

```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

### Der logische UND-Operator, &&

Wenn der erste Operant truthy ist, gibt der [logische UND-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) den zweiten Operanden zurück:

```js
true && "dog"
// returns "dog"

[] && "dog"
// returns "dog"
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Falsy", "Falsy")}}
  - {{Glossary("Type_Coercion", "Typumwandlung")}}
  - {{Glossary("Boolean", "Boolean")}}
- [Boolean-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
