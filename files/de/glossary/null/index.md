---
title: "Null"
slug: Glossary/Null
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

In der Informatik stellt ein **`null`**-Wert einen Verweis dar, der in der Regel absichtlich auf ein nicht existierendes oder ungültiges [Objekt](/de/docs/Glossary/object) oder eine Adresse verweist. Die Bedeutung eines null-Verweises variiert je nach Sprachimplementierung.

In [JavaScript](/de/docs/Glossary/JavaScript) wird `null` als einer der [primitiven Werte](/de/docs/Glossary/Primitive) gekennzeichnet, da sein Verhalten scheinbar primitiv ist. Wenn jedoch der [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwendet wird, gibt er `"object"` zurück.

```js
console.log(typeof null); // "object"
```

Dies wird als [ein Fehler](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) angesehen, der jedoch nicht behoben werden kann, da er zu viele Skripte brechen würde.

## Siehe auch

- [JavaScript-Datentypen](/de/docs/Web/JavaScript/Data_structures)
- Das globale JavaScript-Objekt: [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
- [Null-Zeiger](https://en.wikipedia.org/wiki/Null_pointer) auf Wikipedia
- Verwandte Glossarbegriffe:
  - [JavaScript](/de/docs/Glossary/JavaScript)
  - [string](/de/docs/Glossary/string)
  - [number](/de/docs/Glossary/number)
  - [bigint](/de/docs/Glossary/bigint)
  - [boolean](/de/docs/Glossary/boolean)
  - [undefined](/de/docs/Glossary/undefined)
  - [symbol](/de/docs/Glossary/symbol)
