---
title: Typumwandlung
slug: Glossary/Type_coercion
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Typumwandlung ist die automatische oder implizite Umwandlung von Werten von einem Datentyp in einen anderen (zum Beispiel von Strings zu Zahlen). _{{Glossary("Type_conversion", "Typumwandlung")}}_ ähnelt der _Typumwandlung_, da beide Werte von einem Datentyp in einen anderen umwandeln, jedoch mit einem wesentlichen Unterschied — _Typumwandlung_ ist implizit, während _Typumwandlung_ sowohl implizit _als auch_ explizit sein kann.

## Beispiele

```js
const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
```

Im obigen Beispiel hat JavaScript die `9` von einer Zahl in einen String umgewandelt und dann die beiden Werte miteinander verkettet, was zu einem String von `59` führt. JavaScript hatte die Wahl zwischen einem String oder einer Zahl und entschied sich, einen String zu verwenden.

Der Compiler hätte die `5` in eine Zahl umwandeln können und eine Summe von `14` zurückgeben, tat es aber nicht. Um dieses Ergebnis zu erzielen, müssten Sie die `5` explizit mit der Methode {{jsxref("Global_Objects/Number", "Number()")}} in eine Zahl umwandeln:

```js
sum = Number(value1) + value2;
```

## Siehe auch

- [Typumwandlung](https://en.wikipedia.org/wiki/Type_conversion) (Wikipedia)
- Verwandte Glossarbegriffe:
  - {{Glossary("Type", "Typ")}}
  - {{Glossary("Type_conversion", "Typumwandlung")}}
