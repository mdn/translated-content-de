---
title: "Null"
slug: Glossary/Null
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

In der Informatik stellt ein **`null`**-Wert einen Verweis dar, der im Allgemeinen absichtlich auf ein nicht vorhandenes oder ungültiges {{glossary("object", "Objekt")}} oder eine Adresse zeigt. Die Bedeutung eines Null-Verweises variiert je nach Sprachimplementierung.

In {{Glossary("JavaScript")}} wird `null` als einer der {{Glossary("Primitive", "primitiven Werte")}} markiert, da sein Verhalten scheinbar primitiv ist. Wenn jedoch der [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwendet wird, gibt er `"object"` zurück.

```js
console.log(typeof null); // "object"
```

Dies wird als [ein Fehler](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) angesehen, der jedoch nicht behoben werden kann, da er zu viele Skripte zerstören würde.

## Siehe auch

- [JavaScript-Datentypen](/de/docs/Web/JavaScript/Data_structures)
- Das globale JavaScript-Objekt: [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
- [Null-Pointer](https://en.wikipedia.org/wiki/Null_pointer) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("undefined")}}
  - {{Glossary("symbol")}}
