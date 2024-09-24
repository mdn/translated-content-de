---
title: Wahrhaftig
slug: Glossary/Truthy
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

In {{Glossary("JavaScript")}} ist ein **wahrhaftiger** Wert ein Wert, der als `true` betrachtet wird, wenn er in einem {{Glossary("Boolean")}} Kontext vorkommt. Alle Werte sind wahrhaftig, es sei denn, sie sind als {{Glossary("Falsy", "falsy")}} definiert. Das heißt, alle Werte sind _wahrhaftig_ außer `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN` und {{domxref("document.all")}}.

{{Glossary("JavaScript")}} verwendet {{Glossary("Type_Coercion", "Typumwandlung")}} in Booleschen Kontexten.

Beispiele für _wahrhaftige_ Werte in JavaScript (die in booleschen Kontexten zu `true` umgewandelt werden und somit den `if` Block ausführen):

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

Wenn der erste Operand wahrhaftig ist, gibt der [logische UND-Operator](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) den zweiten Operand zurück:

```js
true && "dog"
// gibt "dog" zurück

[] && "dog"
// gibt "dog" zurück
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Falsy")}}
  - {{Glossary("Type_Coercion", "Typumwandlung")}}
  - {{Glossary("Boolean")}}
- [Boolesche Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
