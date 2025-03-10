---
title: str:tokenize()
slug: Web/XML/EXSLT/Reference/str/tokenize
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

`str:tokenize()` teilt einen String mit einer Menge von Zeichen als Trennzeichen, die bestimmen, wo die Teilungen erfolgen sollen, und gibt eine Knotenmenge mit den resultierenden Strings zurück.

## Syntax

```plain
str:tokenize(string, delimiters)
```

### Parameter

- `string`
  - : Der String, der tokenisiert werden soll.
- `delimiters`
  - : Jedes Zeichen in diesem String wird beim Tokenisieren als Worttrenner verwendet.

### Rückgabewert

Eine Knotenmenge von `token`-Elementen, die jeweils ein Token aus dem `string` enthalten.

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

- [`str:split()`](/de/docs/Web/XML/EXSLT/Reference/str/split)
