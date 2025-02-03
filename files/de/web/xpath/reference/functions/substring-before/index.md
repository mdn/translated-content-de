---
title: substring-before
slug: Web/XPath/Reference/Functions/substring-before
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die Funktion `substring-before` gibt einen String zurück, der der Teil eines gegebenen Strings vor einem angegebenen Substring ist.

## Syntax

```plain
substring-before( haystack, needle )
```

### Parameter

- `haystack`
  - : Der zu bewertende String. Ein Teil dieses Strings wird zurückgegeben.
- `needle`
  - : Der zu suchende Substring. Alles vor dem ersten Vorkommen von `needle` in `haystack` wird zurückgegeben.

### Rückgabewert

Ein String.

### Beispiele

| XPath-Beispiel                  | Ausgabe           |
| ------------------------------- | ----------------- |
| `substring-before('aa-bb','-')` | `aa`              |
| `substring-before('aa-bb','a')` | `(leerer String)` |
| `substring-before('aa-bb','b')` | `aa-`             |
| `substring-before('aa-bb','q')` | (leerer String)   |

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring-before)

## Gecko-Unterstützung

Unterstützt.
