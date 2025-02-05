---
title: str:tokenize()
slug: Web/XML/EXSLT/Reference/str/tokenize
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`str:tokenize()` teilt einen String mithilfe eines Satzes von Zeichen als Trennzeichen, die bestimmen, wo die Teilungen erfolgen sollen, und gibt eine Knotenmenge zurück, die die resultierenden Strings enthält.

## Syntax

```plain
str:tokenize(string, delimiters)
```

### Parameter

- `string`
  - : Der zu tokenisierende String.
- `delimiters`
  - : Jedes Zeichen in diesem String wird beim Tokenisieren als Worttrenner verwendet.

### Rückgabewert

Eine Knotenmenge von `token`-Elementen, von denen jedes ein Token aus dem `string` enthält.

## Beispiel

```plain
str:tokenize('2007-09-14-03T11:40:23', '-T:')
```

Gibt eine Knotenmenge wie diese zurück:

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

- [`str:split()`](/de/docs/Web/XML/EXSLT/str/split)
