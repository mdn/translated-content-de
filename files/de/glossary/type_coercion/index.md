---
title: Typumwandlung
slug: Glossary/Type_coercion
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Typumwandlung ist die automatische oder implizite Konvertierung von Werten von einem Datentyp in einen anderen (z. B. von Strings zu Zahlen). _{{Glossary("Type conversion")}}_ ist der _Typumwandlung_ ähnlich, da beide Werte von einem Datentyp in einen anderen konvertieren, mit einem entscheidenden Unterschied – die _Typumwandlung_ ist implizit, während die _Typkonvertierung_ sowohl implizit _als auch_ explizit sein kann.

## Beispiele

```js
const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
```

Im obigen Beispiel hat JavaScript die `9` von einer Zahl in einen String umgewandelt und dann die beiden Werte zusammenkonkateniert, was zu einem String von `59` führt. JavaScript hatte die Wahl zwischen einem String oder einer Zahl und entschied sich für einen String.

Der Compiler hätte die `5` in eine Zahl umwandeln und eine Summe von `14` zurückgeben können, tat es aber nicht. Um dieses Ergebnis zu erhalten, müssten Sie die `5` explizit mit der Methode {{jsxref("Global_Objects/Number", "Number()")}} in eine Zahl konvertieren:

```js
sum = Number(value1) + value2;
```

## Siehe auch

- [Typkonvertierung](https://en.wikipedia.org/wiki/Type_conversion) (Wikipedia)
- Verwandte Glossarbegriffe:
  - {{Glossary("Type")}}
  - {{Glossary("Type conversion")}}
