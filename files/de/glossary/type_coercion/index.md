---
title: Typumwandlung
slug: Glossary/Type_coercion
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Typumwandlung ist die automatische oder implizite Konvertierung von Werten von einem Datentyp in einen anderen (wie z.B. von Zeichenfolgen zu Zahlen). Die _[Typkonvertierung](/de/docs/Glossary/Type_conversion)_ ist der _Typumwandlung_ ähnlich, da sie beide Werte von einem Datentyp in einen anderen konvertieren, mit einem entscheidenden Unterschied – die _Typumwandlung_ ist implizit, während die _Typkonvertierung_ entweder implizit _oder_ explizit sein kann.

## Beispiele

```js
const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
```

Im obigen Beispiel hat JavaScript die `9` von einer Zahl in eine Zeichenfolge umgewandelt und dann die beiden Werte zusammengefügt, was zu einer Zeichenfolge von `59` führt. JavaScript hatte die Wahl zwischen einer Zeichenfolge oder einer Zahl und entschied sich für eine Zeichenfolge.

Der Compiler hätte die `5` in eine Zahl umwandeln und eine Summe von `14` zurückgeben können, hat es aber nicht. Um dieses Ergebnis zu erzielen, müssten Sie die `5` explizit in eine Zahl konvertieren, indem Sie die {{jsxref("Global_Objects/Number", "Number()")}} Methode verwenden:

```js
sum = Number(value1) + value2;
```

## Siehe auch

- [Typkonvertierung](https://en.wikipedia.org/wiki/Type_conversion) (Wikipedia)
- Verwandte Glossarbegriffe:
  - [Typ](/de/docs/Glossary/Type)
  - [Typkonvertierung](/de/docs/Glossary/Type_conversion)
