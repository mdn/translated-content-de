---
title: substring-after
slug: Web/XPath/Functions/substring-after
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die Funktion `substring-after` gibt einen String zurück, der der Rest eines gegebenen Strings nach einem gegebenen Teilstring ist.

## Syntax

```plain
substring-after( haystack, needle )
```

### Parameter

- `haystack`
  - : Der zu evaluierende String. Ein Teil dieses Strings wird zurückgegeben.
- `needle`
  - : Der zu suchende Teilstring. Alles nach dem ersten Auftreten von `needle` in `haystack` wird zurückgegeben.

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

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring-after)

## Gecko-Unterstützung

Unterstützt.
