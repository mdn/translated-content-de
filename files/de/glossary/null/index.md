---
title: "Null"
slug: Glossary/Null
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der Informatik steht ein **`null`**-Wert für eine Referenz, die in der Regel absichtlich auf ein nicht existierendes oder ungültiges {{Glossary("object", "Objekt")}} oder eine Adresse verweist. Die Bedeutung einer null-Referenz variiert je nach Implementierung der Programmiersprache.

In {{Glossary("JavaScript", "JavaScript")}} wird `null` als einer der {{Glossary("Primitive", "primitiven Werte")}} angesehen, da sein Verhalten scheinbar primitiv ist. Wenn jedoch der [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwendet wird, gibt er `"object"` zurück.

```js
console.log(typeof null); // "object"
```

Dies wird als [ein Fehler](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) betrachtet, der jedoch nicht behoben werden kann, da er zu viele Skripte zerstören würde.

## Siehe auch

- [JavaScript-Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures)
- Das globale JavaScript-Objekt: [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
- [Null-Zeiger](https://en.wikipedia.org/wiki/Null_pointer) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("JavaScript", "JavaScript")}}
  - {{Glossary("string", "string")}}
  - {{Glossary("number", "number")}}
  - {{Glossary("bigint", "bigint")}}
  - {{Glossary("boolean", "boolean")}}
  - {{Glossary("undefined", "undefined")}}
  - {{Glossary("symbol", "symbol")}}
