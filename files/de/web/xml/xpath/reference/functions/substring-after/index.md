---
title: substring-after
slug: Web/XML/XPath/Reference/Functions/substring-after
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `substring-after` gibt eine Zeichenkette zurück, die der Rest einer gegebenen Zeichenkette nach einem gegebenen Teilstring ist.

## Syntax

```plain
substring-after( haystack, needle )
```

### Parameter

- `haystack`
  - : Die zu evaluierende Zeichenkette. Ein Teil dieser Zeichenkette wird zurückgegeben.
- `needle`
  - : Der zu suchende Teilstring. Alles nach dem ersten Vorkommen von `needle` in `haystack` wird zurückgegeben.

### Rückgabewert

Eine Zeichenkette.

### Beispiele

| XPath-Beispiel                 | Ausgabe              |
| ------------------------------ | -------------------- |
| `substring-after('aa-bb','-')` | `bb`                 |
| `substring-after('aa-bb','a')` | `a-bb`               |
| `substring-after('aa-bb','b')` | `b`                  |
| `substring-after('aa-bb','q')` | (leere Zeichenkette) |

## Spezifikationen

[XPath 1.0 4.2](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-substring-after)

## Gecko-Unterstützung

Unterstützt.
