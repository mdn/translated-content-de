---
title: Truthy
slug: Glossary/Truthy
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

In [JavaScript](/de/docs/Glossary/JavaScript) wird ein **truthy** Wert als `true` angesehen, wenn er in einem [Boolean](/de/docs/Glossary/Boolean)-Kontext auftritt. Alle Werte sind truthy, es sei denn, sie sind als [falsy](/de/docs/Glossary/Falsy) definiert. Das bedeutet, alle Werte sind _truthy_ außer `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` und [`document.all`](/de/docs/Web/API/Document/all).

[JavaScript](/de/docs/Glossary/JavaScript) verwendet [Type Coercion](/de/docs/Glossary/Type_Coercion) in booleschen Kontexten.

Beispiele für _truthy_ Werte in JavaScript (die in booleschen Kontexten zu `true` umgewandelt werden und somit den `if` Block ausführen):

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

Wenn der erste Operand truthy ist, gibt der [logische UND-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) den zweiten Operand zurück:

```js
true && "dog"
// returns "dog"

[] && "dog"
// returns "dog"
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Falsy](/de/docs/Glossary/Falsy)
  - [Type Coercion](/de/docs/Glossary/Type_Coercion)
  - [Boolean](/de/docs/Glossary/Boolean)
- [Boolean Coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
