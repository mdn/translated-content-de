---
title: substring-before
slug: Web/XML/XPath/Reference/Functions/substring-before
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `substring-before` gibt einen String zurück, der der Teil eines gegebenen Strings vor einem gegebenen Teilstring ist.

## Syntax

```plain
substring-before( haystack, needle )
```

### Parameter

- `haystack`
  - : Der zu bewertende String. Ein Teil dieses Strings wird zurückgegeben.
- `needle`
  - : Der zu suchende Teilstring. Alles vor dem ersten Vorkommen von `needle` in `haystack` wird zurückgegeben.

### Rückgabewert

Ein String.

### Beispiele

| XPath Beispiel                  | Ausgabe           |
| ------------------------------- | ----------------- |
| `substring-before('aa-bb','-')` | `aa`              |
| `substring-before('aa-bb','a')` | `(leerer String)` |
| `substring-before('aa-bb','b')` | `aa-`             |
| `substring-before('aa-bb','q')` | (leerer String)   |

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-substring-before)

## Gecko-Unterstützung

Unterstützt.
