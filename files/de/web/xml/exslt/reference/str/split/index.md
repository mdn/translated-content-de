---
title: str:split()
slug: Web/XML/EXSLT/Reference/str/split
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`str:split()` teilt einen String, indem ein Musterstring verwendet wird, um zu bestimmen, wo die Teilungen erfolgen sollen. Es gibt ein Node-Set zurück, das die resultierenden Strings enthält.

## Syntax

```plain
str:split(string, pattern)
```

### Parameter

- `string`
  - : Der String, der geteilt werden soll.
- `pattern`
  - : Das Muster, das angibt, wo der String geteilt wird.

### Rückgabewert

Ein Node-Set von `token`-Elementen, die jeweils ein Token aus dem `string` enthalten.

## Beispiel

```plain
str:split('book, phone, computer, chair', ', ')
```

Gibt ein Node-Set zurück wie:

```xml
<token>book</token>
<token>phone</token>
<token>computer</token>
<token>chair</token>
```

## Spezifikationen

[EXSLT - STR:SPLIT](https://exslt.github.io/str/functions/split/index.html)

## Siehe auch

- [`str:tokenize()`](/de/docs/Web/XML/EXSLT/str/tokenize)
