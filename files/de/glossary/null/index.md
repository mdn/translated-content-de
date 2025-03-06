---
title: "Null"
slug: Glossary/Null
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{GlossarySidebar}}

In der Informatik stellt ein **`null`**-Wert eine Referenz dar, die im Allgemeinen absichtlich auf ein nicht existierendes oder ungültiges {{Glossary("object", "Object")}} oder eine Adresse zeigt. Die Bedeutung einer null-Referenz variiert zwischen den Implementierungen der Programmiersprachen.

In {{Glossary("JavaScript", "JavaScript")}} wird `null` als einer der {{Glossary("Primitive", "primitive values")}} markiert, weil sein Verhalten scheinbar primitiv ist. Allerdings gibt der [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operator `"object"` zurück.

```js
console.log(typeof null); // "object"
```

Dies wird als [ein Fehler](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) betrachtet, der jedoch nicht behoben werden kann, da er zu viele Skripte brechen würde.

## Siehe auch

- [JavaScript-Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures)
- Das JavaScript-Globale Objekt: [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
- [Null-Pointer](https://de.wikipedia.org/wiki/Nullzeiger) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("JavaScript", "JavaScript")}}
  - {{Glossary("string", "string")}}
  - {{Glossary("number", "number")}}
  - {{Glossary("bigint", "bigint")}}
  - {{Glossary("boolean", "boolean")}}
  - {{Glossary("undefined", "undefined")}}
  - {{Glossary("symbol", "symbol")}}
