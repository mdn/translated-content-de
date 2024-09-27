---
title: substring-after
slug: Web/XPath/Functions/substring-after
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `substring-after` gibt eine Zeichenkette zurück, die der Rest einer gegebenen Zeichenkette nach einer gegebenen Teilzeichenkette ist.

## Syntax

```plain
substring-after( haystack, needle )
```

### Parameter

- `haystack`
  - : Die zu bewertende Zeichenkette. Ein Teil dieser Zeichenkette wird zurückgegeben.
- `needle`
  - : Die zu suchende Teilzeichenkette. Alles nach dem ersten Auftreten von `needle` in `haystack` wird zurückgegeben.

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
