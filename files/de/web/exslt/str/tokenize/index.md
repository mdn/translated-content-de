---
title: str:tokenize()
slug: Web/EXSLT/str/tokenize
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`str:tokenize()` teilt einen String unter Verwendung eines Satzes von Zeichen als Trennzeichen auf, die bestimmen, wo die Trennungen erfolgen sollen. Es wird ein Knoten-Set zurückgegeben, das die resultierenden Strings enthält.

## Syntax

```plain
str:tokenize(string, delimiters)
```

### Parameter

- `string`
  - : Der String, der tokenisiert werden soll.
- `delimiters`
  - : Jedes Zeichen in diesem String wird beim Tokenisieren als Worttrennzeichen verwendet.

### Rückgabewert

Ein Knoten-Set von `token`-Elementen, die jeweils ein Token aus dem `string` enthalten.

## Beispiel

```plain
str:tokenize('2007-09-14-03T11:40:23', '-T:')
```

Gibt ein Knoten-Set wie dieses zurück:

```xml
<token>2007</token>
<token>09</token>
<token>14</token>
<token>11</token>
<token>40</token>
<token>23</token>
```

## Spezifikationen

[EXSLT - STR:TOKENIZE](https://exslt.github.io/str/functions/tokenize/index.html)

## Siehe auch

- [`str:split()`](/de/docs/Web/EXSLT/str/split)
