---
title: substring-after
slug: Web/XPath/Reference/Functions/substring-after
l10n:
  sourceCommit: bd6a440a0b33a3337540d1fff5aa98c048cf3f45
---

Die Funktion `substring-after` gibt eine Zeichenkette zurück, die der Rest einer gegebenen Zeichenkette nach einem gegebenen Teilstring ist.

## Syntax

```plain
substring-after( haystack, needle )
```

### Parameter

- `haystack`
  - : Die Zeichenkette, die ausgewertet werden soll. Ein Teil dieser Zeichenkette wird zurückgegeben.
- `needle`
  - : Der Teilstring, nach dem gesucht werden soll. Alles nach dem ersten Vorkommen von `needle` in `haystack` wird zurückgegeben.

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
