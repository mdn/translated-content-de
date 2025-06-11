---
title: substring-after
slug: Web/XML/XPath/Reference/Functions/substring-after
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `substring-after` gibt einen String zurück, der der Rest eines gegebenen Strings nach einem bestimmten Teilstring ist.

## Syntax

```plain
substring-after( haystack, needle )
```

### Parameter

- `haystack`
  - : Der zu evaluierende String. Ein Teil dieses Strings wird zurückgegeben.
- `needle`
  - : Der zu suchende Teilstring. Alles nach dem ersten Vorkommen von `needle` in `haystack` wird zurückgegeben.

### Rückgabewert

Ein String.

### Beispiele

| XPath-Beispiel                 | Ausgabe         |
| ------------------------------ | --------------- |
| `substring-after('aa-bb','-')` | `bb`            |
| `substring-after('aa-bb','a')` | `a-bb`          |
| `substring-after('aa-bb','b')` | `b`             |
| `substring-after('aa-bb','q')` | (leerer String) |

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-substring-after)

## Gecko-Unterstützung

Unterstützt.
