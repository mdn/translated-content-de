---
title: substring-before
slug: Web/XPath/Functions/substring-before
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `substring-before` gibt einen String zurück, der der Teil eines gegebenen Strings vor einem gegebenen Unterstring ist.

## Syntax

```plain
substring-before( haystack, needle )
```

### Parameter

- `haystack`
  - : Der zu evaluierende String. Ein Teil dieses Strings wird zurückgegeben.
- `needle`
  - : Der zu suchende Unterstring. Alles vor dem ersten Vorkommen von `needle` in `haystack` wird zurückgegeben.

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
