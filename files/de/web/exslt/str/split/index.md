---
title: str:split()
slug: Web/EXSLT/str/split
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`str:split()` teilt einen Zeichenkette, indem ein Muster verwendet wird, um zu bestimmen, wo die Teilungen erfolgen sollen. Es wird eine Knotenmenge zurückgegeben, die die resultierenden Zeichenketten enthält.

## Syntax

```plain
str:split(string, pattern)
```

### Parameter

- `string`
  - : Die zu teilende Zeichenkette.
- `pattern`
  - : Das Muster, das angibt, wo die Zeichenkette geteilt werden soll.

### Rückgabewert

Eine Knotenmenge von `token`-Elementen, die jeweils ein Token aus der `string` enthalten.

## Beispiel

```plain
str:split('book, phone, computer, chair', ', ')
```

Gibt eine Knotenmenge zurück wie:

```xml
<token>book</token>
<token>phone</token>
<token>computer</token>
<token>chair</token>
```

## Spezifikationen

[EXSLT - STR:SPLIT](https://exslt.github.io/str/functions/split/index.html)

## Siehe auch

- [`str:tokenize()`](/de/docs/Web/EXSLT/str/tokenize)
